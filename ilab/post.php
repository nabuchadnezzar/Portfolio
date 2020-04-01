<?php
    if($_POST['powerbank-form'] && ($_POST['powerbank-form']['company'] == '')) {
    $check = substr(htmlspecialchars(trim($_POST['powerbank-form']['check'])), 0, 1000);
    $loc = substr(htmlspecialchars(trim($_POST['powerbank-form']['location'])), 0, 1000);
    $email = substr(htmlspecialchars(trim($_POST['powerbank-form']['email'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['powerbank-form']['phone'])), 0, 1000);
    $to = 'Ilab.gallery@yandex.ru';
    $msg = "<p>Сообщение пришло из формы в: ".$loc."</p><p>Почта: ".$email."</p><p>Контактный телефон: ".$tel." </p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <ilab@ilab.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    header("Location:thanks-powerbank.html");
    exit;
}?>
<?php
    if($_POST['mobserv-form'] && ($_POST['mobserv-form']['company'] == '')) {
    $check = substr(htmlspecialchars(trim($_POST['mobserv-form']['check'])), 0, 1000);
    $loc =  substr(htmlspecialchars(trim($_POST['mobserv-form']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['mobserv-form']['phone'])), 0, 1000);
    $to = 'Ilab.gallery@yandex.ru';
    $msg = "<p>Сообщение пришло из формы в: ".$loc."</p><p>Контактный телефон: ".$tel." </p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <ilab@ilab.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    header("Location:thanks-service.html");
    exit;
}?>
<?php
    if($_POST['team-form'] && ($_POST['team-form']['company'] == '')) {
    $check = substr(htmlspecialchars(trim($_POST['team-form']['check'])), 0, 1000);
    $loc = substr(htmlspecialchars(trim($_POST['team-form']['location'])), 0, 1000);
    $name = substr(htmlspecialchars(trim($_POST['team-form']['name'])), 0, 1000);
    $tel = substr(htmlspecialchars(trim($_POST['team-form']['phone'])), 0, 1000);
    $mess =  substr(htmlspecialchars(trim($_POST['team-form']['message'])), 0, 1000);
    $to = 'Ilab.gallery@yandex.ru';
    $msg = "<p>Сообщение пришло из формы в: ".$loc."</p><p>Имя: ".$name."</p><p>Контактный телефон ".$tel." </p><p> Сообщение: ".$mess." </p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <ilab@ilab.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    header("Location:thanks-team.html");
    exit;
}?>
<?php
    if($_POST['partnership-form'] && ($_POST['partnership-form']['company'] == '')) {
    $check = substr(htmlspecialchars(trim($_POST['partnership-form']['check'])), 0, 1000);
    $loc = substr(htmlspecialchars(trim($_POST['partnership-form']['location'])), 0, 1000);
    $name = substr(htmlspecialchars(trim($_POST['partnership-form']['name'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['partnership-form']['phone'])), 0, 1000);
    $to = 'Ilab.gallery@yandex.ru';
    $msg = "<p>Сообщение пришло из формы в: ".$loc."</p><p>Имя: ".$name." </p><p>Контактный телефон: ".$tel." </p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <ilab@ilab.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    header("Location:http://justclick.ru/");
    exit;
}?>
