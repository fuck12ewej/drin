#!/bin/bash

# deploy.sh - Деплой файлов и старт сервера

# Проверка прав root
if [ "$(id -u)" -ne 0 ]; then
  echo "Пожалуйста, запустите этот скрипт с правами root (sudo)"
  exit 1
fi

# Путь к текущей директории (откуда запускаем скрипт)
CURRENT_DIR=$(pwd)

echo ">>> Копирование файлов..."

# Копируем Frontend (sam-drin)
if [ -d "$CURRENT_DIR/sam-drin" ]; then
    echo "Копирование Frontend..."
    cp -r "$CURRENT_DIR/sam-drin/"* /var/www/amlzapex/html/
else
    echo "ОШИБКА: Папка sam-drin не найдена в $CURRENT_DIR"
    exit 1
fi

# Копируем Backend (html)
if [ -d "$CURRENT_DIR/html" ]; then
    echo "Копирование Backend..."
    cp -r "$CURRENT_DIR/html/"* /var/www/amlzapex/backend/
else
    echo "ОШИБКА: Папка html не найдена в $CURRENT_DIR"
    exit 1
fi

echo ">>> Настройка прав доступа для Backend..."
chown -R www-data:www-data /var/www/amlzapex
chmod -R 777 /var/www/amlzapex/backend/logs 2>/dev/null || mkdir -p /var/www/amlzapex/backend/logs && chmod 777 /var/www/amlzapex/backend/logs
chmod -R 777 /var/www/amlzapex/backend/api/users 2>/dev/null
chmod 666 /var/www/amlzapex/backend/config_client.json 2>/dev/null
chmod 666 /var/www/amlzapex/backend/bot_config/user_state.json 2>/dev/null

echo ">>> Настройка Nginx..."

# Определяем версию PHP для сокета
PHP_VERSION=$(php -r 'echo PHP_MAJOR_VERSION.".".PHP_MINOR_VERSION;')
PHP_SOCK="/var/run/php/php$PHP_VERSION-fpm.sock"

echo "Обнаружена версия PHP: $PHP_VERSION, сокет: $PHP_SOCK"

# Создаем конфиг Nginx
cat > /etc/nginx/sites-available/amlzapex <<EOF
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    root /var/www/amlzapex/html;
    index index.html;

    # Frontend
    location / {
        try_files \$uri \$uri/ \$uri.html =404;
    }

    # Backend API
    location ~ \.php$ {
        root /var/www/amlzapex/backend;
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:$PHP_SOCK;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
    location ~ \.json$ {
        deny all;
    }
}
EOF

echo ">>> Остановка всех веб-сервисов и очистка портов..."
# Останавливаем всё, что может мешать
systemctl stop nginx 2>/dev/null
systemctl stop apache2 2>/dev/null
systemctl disable apache2 2>/dev/null
systemctl stop php$PHP_VERSION-fpm 2>/dev/null

# Убиваем процессы на портах 80 и 443
fuser -k 80/tcp 2>/dev/null
fuser -k 443/tcp 2>/dev/null

# Полная очистка включенных сайтов Nginx для исключения конфликтов
rm -f /etc/nginx/sites-enabled/*

# Активируем наш сайт
ln -sf /etc/nginx/sites-available/amlzapex /etc/nginx/sites-enabled/

echo ">>> Запуск сервисов..."
nginx -t && systemctl start nginx
systemctl start php$PHP_VERSION-fpm

# Проверка статуса
if systemctl is-active --quiet nginx; then
    echo "Nginx успешно запущен."
else
    echo "ОШИБКА: Nginx не смог запуститься. Проверьте 'systemctl status nginx'"
fi

echo ">>> Готово!"
echo "Сайт должен быть доступен по IP адресу сервера."
echo "Не забудьте установить Webhook для Telegram бота (см. инструкцию)."
