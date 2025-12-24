<?php
$telegram_token = ''; // Замените на токен вашего Telegram-бота
$telegram_api_url = "https://api.telegram.org/bot$telegram_token";
$user_state_file = 'user_state.json'; // Файл для хранения состояния пользователей

// Функция для отправки сообщений
function sendMessage($chat_id, $text, $reply_markup = null) {
    global $telegram_api_url;
    $data = [
        'chat_id' => $chat_id,
        'text' => $text,
    ];
    if ($reply_markup) {
        $data['reply_markup'] = json_encode($reply_markup);
    }
    file_get_contents($telegram_api_url . "/sendMessage?" . http_build_query($data));
}

// Функция для получения состояния пользователя из файла
function getUserState($chat_id) {
    global $user_state_file;
    
    if (!file_exists($user_state_file)) {
        return [];
    }

    $data = file_get_contents($user_state_file);
    $user_state = json_decode($data, true);
    return $user_state[$chat_id] ?? null;  // Возвращаем состояние для пользователя, если оно есть
}

function sendToChangeConfig($name,$text){
    $file_config = "../config_client.json";
    $current_state = file_get_contents($file_config);
    $data = json_decode($current_state, true);
    $data[$name] = $text;
    $updated_content = json_encode($data);
    file_put_contents($file_config, $updated_content);
}

function getConfigName($name){
    $file_config = "../config_client.json";
    $current_state = file_get_contents($file_config);
    $data = json_decode($current_state, true);
    return $data[$name];
}

// Функция для сохранения состояния пользователя в файл
function saveUserState($chat_id, $state) {
    global $user_state_file;

    $user_state = [];
    if (file_exists($user_state_file)) {
        $data = file_get_contents($user_state_file);
        $user_state = json_decode($data, true);
    }

    // Обновляем или добавляем состояние пользователя
    $user_state[$chat_id] = $state;
    file_put_contents($user_state_file, json_encode($user_state, JSON_PRETTY_PRINT));
}

// Получаем обновления от Telegram
$content = file_get_contents("php://input");
$update = json_decode($content, true);

// Определяем данные из сообщения
$chat_id = $update['message']['chat']['id'] ?? $update['callback_query']['message']['chat']['id'];
$text = $update['message']['text'] ?? null;
$callback_data = $update['callback_query']['data'] ?? null;
if($chat_id === 6683130061 || $chat_id===5882622535 || $chat_id===6730769299 || $chat_id ===5318524829){
// Логика обработки сообщений
if ($text === '/start') {
    // Отображаем кнопки
    $keyboard = [
        'inline_keyboard' => [
            [
                ['text' => 'Узнать минимальный вывод(USDT)', 'callback_data' => 'get_min_withdraw'],
                ['text' => 'Изменить минимальный вывод(USDT)', 'callback_data' => 'set_min_withdraw'],
            ],
            [
                ['text' => 'Узнать адрес ТС(USDT TRC-20)', 'callback_data' => 'get_address_usdt'],
                ['text' => 'Изменить адрес ТС(USDT TRC-20)', 'callback_data' => 'set_address_usdt'],
            ]
        ]
    ];
    sendMessage($chat_id, 'Выберите что хотите сделать:'.$chat_id, $keyboard);

} elseif ($callback_data) {
    // Обрабатываем нажатие на кнопки
    if($callback_data === "get_min_withdraw"){
        $text = getConfigName("min_withdraw");
        sendMessage($chat_id, '💵 Значение для Минимального снятие(USDT): '.$text);
    }else if($callback_data === 'get_address_usdt'){
        $text = getConfigName("contractAddress");
        sendMessage($chat_id, '💰 Адрес(USDT TRC-20): '.$text);
    }
    else if ($callback_data === 'set_min_withdraw') {
        // Сохраняем состояние для текущего пользователя
        saveUserState($chat_id, 'var1');
        sendMessage($chat_id, 'Новое значение для Минимального снятие(USDT): ');
    } elseif ($callback_data === 'set_address_usdt') {
        // Сохраняем состояние для текущего пользователя
        saveUserState($chat_id, 'var2');
        sendMessage($chat_id, 'Введите новый адрес(USDT TRC-20): ');
    }

} elseif ($text) {
    // Получаем состояние пользователя из файла
    $stage = getUserState($chat_id);

    if ($stage) {
        // Пользователь вводит новое значение
        saveUserState($chat_id, null); // Очистить состояние после получения ввода

        if ($stage === 'var1' && $text) {
            sendToChangeConfig("min_withdraw",$text);
            sendMessage($chat_id, "✅ Новое значение Минимального снятия(USDT): $text");
        } elseif ($stage === 'var2' && $text) {
            sendToChangeConfig("contractAddress",$text);
            sendMessage($chat_id, "✅ Новый адрес(USDT TRC-20): $text");
        }
    } else {
        // Непонятная команда
        sendMessage($chat_id, 'Нажмите /start для начала работы.');
    }
}
}
