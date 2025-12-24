<?php
if ($_GET['user']) {
    $file_path = "users/" . $_COOKIE['user'] . ".json";
    if (file_exists($file_path)) {
        $file_content = file_get_contents($file_path);
        $answer = json_decode($file_content);
        $ban = $answer->{'ban'};
        $status = $answer->{'status'};
        $message = $answer->{'message'};
        $response_data = array(
            'session_id' => $_COOKIE['user'],
            'message' => "",
            'ban' => $ban,
            'status' => $status,
            'lastUpdate' => time(),
            'attempsTp' => 0,
        );
        echo json_encode($response_data);
    }else{
        $response_data = array(
            'session_id' => $_COOKIE['user'],
            'message' => "",
            'ban' => false,
            'status' => 'wait',
            'lastUpdate' => time(),
            'attempsTp' => 0,
        );
        echo json_encode($response_data);
    }
    header('Content-Type: application/json');
}
?>