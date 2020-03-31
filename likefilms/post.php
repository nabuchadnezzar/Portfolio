<?php
    if($_POST['callback'] && ($_POST['callback']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['callback']['location'])), 0, 1000);
    $name =  substr(htmlspecialchars(trim($_POST['callback']['name'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['callback']['tel'])), 0, 30);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = $loc."<p>Меня зовут ".$name." </p><p>Мой номер телефона: ".$tel."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@like_films.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    exit;
} ?>

} ?>

<?php
    if($_POST['purchase'] && ($_POST['purchase']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['purchase']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['purchase']['tel'])), 0, 30);
    $name =  substr(htmlspecialchars(trim($_POST['purchase']['name'])), 0, 1000);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = "<p>Здравствуйте, я хотел бы заказать ".$loc."</p><p>Меня зовут ".$name." </p><p>Мой номер телефона: ".$tel."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@like_films.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    exit;
} ?>

<?php
    if($_POST['question-form'] && ($_POST['question-form']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['question-form']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['question-form']['tel'])), 0, 30);
    $name =  substr(htmlspecialchars(trim($_POST['question-form']['name'])), 0, 1000);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = "<p>Здравствуйте, у меня ".$loc."</p><p>Меня зовут ".$name." </p><p>Мой номер телефона: ".$tel."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@like_films.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    exit;
} ?>
