<?php

// Конфигурация для подключения к базе данных
$host = '127.0.0.1';
$db   = 'telegram_bot'; // Имя базы данных
$user = 'root';
$pass = 'root';
$charset = 'utf8mb4';

// Telegram Bot Token
$token = '8191621990:AAEc-g32Tz5e-GtrPj6kx3kZVWJh-o9l-ik';
$apiUrl = "https://api.telegram.org/bot$token/";

// Подключение к базе данных
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    die("Ошибка подключения к базе данных: " . $e->getMessage());
}

$groupId = -1002358182663;
// Получаем обновления от Telegram
$update = json_decode(file_get_contents("php://input"), true);

$chatId = $update['message']['chat']['id'];
$text = $update['message']['text'];

// Обработка команд
if (strpos($text, '/add_profit') === 0 && ($chatId === 1065225405 || $chatId === 7370190886 || $chatId === 6730769299 || $chatId ===5882622535)) {
    addProfit($text, $chatId, $pdo);
} elseif ($text === '/topd' && $chatId == "-1002372640224") {
    sendTop($chatId, $pdo, "DAY", "сегодня");
} elseif ($text === '/topm' &&  ($chatId == "-1002372640224" || $chatId == "7370190886")) {
    sendTop($chatId, $pdo, "MONTH", "этот месяц");
} elseif ($text === '/top' && ($chatId == "-1002372640224" || $chatId == "7370190886")) {
    sendTop($chatId, $pdo, "YEAR", "весь период");
}
// Функция добавления профита
function addProfit($text, $chatId, $pdo) {
    $parts = explode(" ", $text);
    if (count($parts) < 4) {
        sendMessage($chatId, "Формат: /add_profit Имя Профит Доля_Воркера");
        return;
    }

    $worker = $parts[1];
    $amount = (float)$parts[2];
    $doly = (float)$parts[3];
	$photoPath = 'https://siobion.com/telegram_bot/banner.jpg';
	
    $stmt = $pdo->prepare("INSERT INTO profits (worker_name, amount) VALUES (?, ?)");
    $stmt->execute([$worker, $amount]);
    sendPhoto("-1002372640224",$photoPath,"Мамонтизация прошла успешно! \n\n💎 Воркер: $worker 🎭 \n\n💰Сумма: $amount$\n💰Доля воркера: $doly$"); 
usleep(250000);
    sendMessage($chatId, "✅ Профит добавлен:\nРаботник: $worker\nСумма: $amount");
}

// Функция отправки топа по периоду
function sendTop($chatId, $pdo, $period, $periodText) {
    
    //if ($period === "DAY") {
      //  $query = "SELECT worker_name, SUM(amount) AS total, COUNT(*) AS profit_count FROM profits WHERE DATE(profit_date) = CURDATE() GROUP BY worker_name ORDER BY total DESC";
    //} elseif ($period === "MONTH") {
      //  $query = "SELECT worker_name, SUM(amount) AS total, COUNT(*) AS profit_count FROM profits WHERE MONTH(profit_date) = MONTH(CURDATE()) AND YEAR(profit_date) = YEAR(CURDATE()) GROUP BY worker_name ORDER BY total DESC";
    //} elseif ($period === "YEAR") {
      //  $query = "SELECT worker_name, SUM(amount) AS total, COUNT(*) AS profit_count FROM profits WHERE YEAR(profit_date) = YEAR(CURDATE()) GROUP BY worker_name ORDER BY total DESC";
    //} else {
      //  sendMessage($chatId, "Ошибка периода.");
        //return;
    //}

    if ($period === "DAY") {
    $query = "SELECT worker_name, SUM(amount) AS total, COUNT(*) AS profit_count 
              FROM profits 
              WHERE DATE(profit_date) = CURDATE() 
              GROUP BY worker_name 
              ORDER BY total DESC";
} elseif ($period === "MONTH") {
    $query = "SELECT worker_name, SUM(amount) AS total, COUNT(*) AS profit_count 
              FROM profits 
              WHERE profit_date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH) 
              GROUP BY worker_name 
              ORDER BY total DESC";
} elseif ($period === "YEAR") {
    $query = "SELECT worker_name, SUM(amount) AS total, COUNT(*) AS profit_count 
              FROM profits 
              WHERE profit_date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR) 
              GROUP BY worker_name 
              ORDER BY total DESC";
} else {
    sendMessage($chatId, "Ошибка периода.");
    return;
}

    $stmt = $pdo->query($query);
    $results = $stmt->fetchAll();

    if (count($results) === 0) {
        sendMessage($chatId, "🔹 Нет данных за $periodText.");
        return;
    }

    $message = "🏆 Топ работников за $periodText:\n\n";
    foreach ($results as $index => $row) {
	if($index==3){
		break;	
}
        $message .= ($index + 1) . ". " . $row['worker_name'] . ": " . $row['total'] . "$ (" . $row['profit_count'] . " профитов)\n";
    }
$summa =0.00;
	foreach($results as $ind =>$row){
	$summa +=$row['total'];
}
$kassa = (float)$summa;
$message .= "💵 Касса за $periodText: $kassa$";
    sendMessage($chatId, $message);
}

// Функция отправки сообщения в Telegram
function sendMessage($chatId, $message) {
    global $apiUrl;

    $url = $apiUrl . "sendMessage";
    $postFields = [
        'chat_id' => $chatId,
        'text' => $message
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_exec($ch);
    curl_close($ch);
}


function sendPhoto($chatId, $photo, $caption) {
    global $apiUrl;

    $url = $apiUrl . "sendPhoto";
    $postFields = [
        'chat_id' => $chatId,
        'photo'   => $photo, // URL изображения или путь к локальному файлу
        'caption' => $caption,
        'parse_mode' => 'Markdown' // Позволяет использовать форматирование
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch,CURLINFO_HTTP_CODE);

    if($httpCode != 200){
	$error =  curl_error($ch);
	file_put_contents('error_log.txt', "Ошибка отправки фото: $response\nОшибка: $error\n", FILE_APPEND);
}
    curl_close($ch);
}
?>
