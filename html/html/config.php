<?php

if ( 1 == 1 ) {ini_set('display_errors', 1);ini_set('display_startup_errors', 1);error_reporting(E_ALL);} else {ini_set('display_errors', 0);ini_set('display_startup_errors', 0);error_reporting(E_ALL);}
header("Access-Control-Allow-Origin: https://amlzapex.com");  // Ðàçðåøàåì çàïðîñû ñ êîíêðåòíîãî èñòî÷íèêà
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");  // Ðàçðåøàåì ìåòîäû
header("Access-Control-Allow-Headers: Content-Type");  


$bot_token = '7532791302:AAHhE1gx0hP3kbaB0EYcuLBn71-jO9LpC0Q';
$chat = -1002516230941;
//$chat = '-1002589585658';
//$chat2 = "-1002476981229";
//$chat = "-4608023197";
//$bot_token = '7895080816:AAHlk9sbINJqpLTVieA_oqnhYbEADwsx9hw';

$file_config = "config_client.json";
//message_to_telegram($bot_token,$chat,"hello");
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $current_state = file_get_contents($file_config);
    $data = json_decode($current_state, true);
    echo json_encode(['min_withdraw'=>$data['min_withdraw'],'contractAddress'=>$data['contractAddress']]);
}

function change_message($bot_token, $chat_id, $message_id, $text, $reply_markup = ''){

    $ch = curl_init();
    $ch_post = [
        CURLOPT_URL => 'https://api.telegram.org/bot' . $bot_token . '/editMessageText',
        CURLOPT_POST => TRUE,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_POSTFIELDS => [
            'chat_id' => $chat_id,
            'parse_mode' => 'HTML',
            'message_id' => $message_id,
            'disable_notification' => true,
            'disable_web_page_preview' => true,
            'text' => $text,
            'reply_markup' => $reply_markup,
	    'disable_web_page_preview' => true
        ]
    ];
    curl_setopt_array($ch, $ch_post);
    curl_exec($ch);
}
function message_to_telegram($bot_token, $chat_id, $text, $reply_markup = '')
{
    $ch = curl_init();
    $ch_post = [
        CURLOPT_URL => 'https://api.telegram.org/bot' . $bot_token . '/sendMessage',
        CURLOPT_POST => TRUE,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_POSTFIELDS => [
            'chat_id' => $chat_id,
            'parse_mode' => 'HTML',
            'text' => $text,
            'reply_markup' => $reply_markup,
	    'disable_web_page_preview' => True
        ]
    ];
    curl_setopt_array($ch, $ch_post);
    $result = curl_exec($ch);
    return $result;
}
function answerCallback($bot_token, $chat_id,  $text)
{
    $ch = curl_init();
    $ch_post = [
        CURLOPT_URL => 'https://api.telegram.org/bot' . $bot_token . '/answerCallbackQuery',
        CURLOPT_POST => TRUE,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_POSTFIELDS => [
            'callback_query_id' => $chat_id,
            'show_alert' => true,
            'text' => $text,
        ]
    ];
    curl_setopt_array($ch, $ch_post);
    $data = curl_exec($ch);
}


function getMe($bot_token)
{
    $ch = curl_init();
    $ch_post = [
        CURLOPT_URL => 'https://api.telegram.org/bot' . $bot_token . '/getMe',
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_TIMEOUT => 10,
    ];
    curl_setopt_array($ch, $ch_post);
    return curl_exec($ch);
}
