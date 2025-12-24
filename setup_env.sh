#!/bin/bash

# setup_env.sh - Установка зависимостей и настройка окружения

# Проверка прав root
if [ "$(id -u)" -ne 0 ]; then
  echo "Пожалуйста, запустите этот скрипт с правами root (sudo)"
  exit 1
fi

echo ">>> Обновление пакетов..."
apt update && apt upgrade -y

echo ">>> Установка Nginx, PHP и Certbot..."
# Устанавливаем Nginx, PHP и Certbot для SSL
apt install nginx php-fpm php-curl php-json unzip certbot python3-certbot-nginx -y

echo ">>> Создание директорий проекта..."
mkdir -p /var/www/amlzapex/html
mkdir -p /var/www/amlzapex/backend

echo ">>> Настройка прав доступа..."
# Назначаем владельца
chown -R www-data:www-data /var/www/amlzapex

# Права на запись для логов и данных (будут созданы при деплое, но подготовим права)
# Мы дадим права на всю папку backend, чтобы скрипт мог создавать файлы
chmod -R 755 /var/www/amlzapex/backend

echo ">>> Настройка авто-проброса вебхука (подготовка)..."
# Мы добавим команду в систему, чтобы можно было легко обновить вебхук позже
cat > /usr/local/bin/set-webhook <<EOF
#!/bin/bash
if [ -f "/var/www/amlzapex/backend/config.php" ]; then
    TOKEN=\$(grep -oP "\\\$bot_token = '\K[^']+" /var/www/amlzapex/backend/config.php)
    DOMAIN=\$(grep -oP "Access-Control-Allow-Origin: https://\K[^\\\"]+" /var/www/amlzapex/backend/config.php)
    echo "Установка вебхука для \$DOMAIN..."
    curl -s "https://api.telegram.org/bot\$TOKEN/setWebhook?url=https://\$DOMAIN/bot.php"
else
    echo "Ошибка: Проект еще не задеплоен или конфиг не найден."
fi
EOF
chmod +x /usr/local/bin/set-webhook

echo ">>> Установка завершена!"
echo "Теперь запустите 'deploy.sh' для копирования файлов и настройки Nginx."
