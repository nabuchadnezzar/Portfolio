<?php
    if($_POST['callback'] && ($_POST['callback']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['callback']['location'])), 0, 1000);
    $name =  substr(htmlspecialchars(trim($_POST['callback']['name'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['callback']['tel'])), 0, 30);
    $to = 'info@gc-rs.ru';
    $msg = "<p>Я хочу ".$loc."</p><p>Меня зовут ".$name." </p><p>Мой номер телефона: ".$tel."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@gc-rs.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    exit;
} ?>

<?php
    if($_POST['pricelist'] && ($_POST['pricelist']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['pricelist']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['pricelist']['tel'])), 0, 30);
    $email =  substr(htmlspecialchars(trim($_POST['pricelist']['email'])), 0, 1000);
    $name =  substr(htmlspecialchars(trim($_POST['pricelist']['name'])), 0, 1000);
    $to = 'info@gc-rs.ru';
    $msg = "<p>Здравствуйте, я хотел бы ".$loc."</p><p>Меня зовут ".$name." </p><p>Мой номер телефона: ".$tel."</p><p>Моя электронная почта: ".$email."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@gc-rs.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    exit;
} ?>

<?php
    if($_POST['purchase'] && ($_POST['purchase']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['purchase']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['purchase']['tel'])), 0, 30);
    $email =  substr(htmlspecialchars(trim($_POST['purchase']['email'])), 0, 1000);
    $name =  substr(htmlspecialchars(trim($_POST['purchase']['name'])), 0, 1000);
    $to = 'info@gc-rs.ru';
    $msg = "<p>Здравствуйте, я хотел бы купить ".$loc."</p><p>Меня зовут ".$name." </p><p>Мой номер телефона: ".$tel."</p><p>Моя электронная почта: ".$email."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@gc-rs.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    exit;
} ?>
