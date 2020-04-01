<?php
    if($_POST['app-form'] && ($_POST['app-form']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['app-form']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['app-form']['phone'])), 0, 1000);
    $name =  substr(htmlspecialchars(trim($_POST['app-form']['name'])), 0, 1000);
    $mail =  substr(htmlspecialchars(trim($_POST['app-form']['email'])), 0, 1000);
    $promo =  substr(htmlspecialchars(trim($_POST['app-form']['promo'])), 0, 1000);
    $to = 'spartaru74@gmail.com, 5stars_events@mail.ru, stars5events@yandex.ru, korolmurloc@yandex.ru';
    $msg = "<p>Сообщение из блока: ".$loc."</p><br><p>Имя: ".$name." </p><br><p>Телефон: ".$tel."</p><br><p>Електронная почта: ".$mail."</p><p>Мой промо-код: ".$promo."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <5stars_promo>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    exit;
} ?>
