<?php
    if($_POST['form'] && ($_POST['form']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['form']['location'])), 0, 1000);
    $name =  substr(htmlspecialchars(trim($_POST['form']['name'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['form']['tel'])), 0, 30);
    $to = 'rieltn@yandex.ru';
    $msg = "<p>Здравствуйте, я хочу ".$loc."</p><p>Меня зовут ".$name." </p><p>Мой номер телефона: ".$tel."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@rielt-n.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    exit;
} ?>
