<?php
    if($_POST['header-form'] && ($_POST['header-form']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['header-form']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['header-form']['tel'])), 0, 30);
    $mail =  substr(htmlspecialchars(trim($_POST['header-form']['email'])), 0, 1000);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = "<p>Здравствуйте, мне хотелось бы ".$loc."</p><p>Мой номер телефона ".$tel." </p><p>Моя электронная почта ".$mail."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@butterfly.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    header("Location: thanks.html");
    exit;
} ?>

<?php
    if($_POST['form-calc'] && ($_POST['form-calc']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['form-calc']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['form-calc']['tel'])), 0, 30);
    $mail =  substr(htmlspecialchars(trim($_POST['form-calc']['email'])), 0, 1000);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = "<p>Здравствуйте, мне хотелось бы ".$loc."</p><p>Мой номер телефона ".$tel." </p><p>Моя электронная почта ".$mail."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@butterfly.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    header("Location: thanks.html");
    exit;
} ?>

<?php
    if($_POST['question-form'] && ($_POST['question-form']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['question-form']['location'])), 0, 1000);
    $question =  substr(htmlspecialchars(trim($_POST['question-form']['message'])), 0, 1000);
    $mail =  substr(htmlspecialchars(trim($_POST['question-form']['email'])), 0, 1000);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = "<p>Здравствуйте, мне хотелось бы ".$loc."</p><p>Меня интересуют такие вопросы: ".$question." </p><p>Моя электронная почта ".$mail."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@butterfly.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    header("Location: thanks.html");
    exit;
} ?>

<?php
    if($_POST['single-form'] && ($_POST['single-form']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['single-form']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['single-form']['tel'])), 0, 30);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = "<p>Здравствуйте, мне хотелось бы ".$loc." </p><p>Мой номер телефона ".$tel."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@butterfly.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    header("Location: thanks.html");
    exit;
} ?>

<?php
    if($_POST['double-form'] && ($_POST['double-form']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['double-form']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['double-form']['tel'])), 0, 30);
    $mail =  substr(htmlspecialchars(trim($_POST['double-form']['email'])), 0, 1000);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = "<p>Здравствуйте, мне хотелось бы ".$loc."</p><p>Мой номер телефона ".$tel." </p><p>Моя электронная почта ".$mail."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@butterfly.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    header("Location: thanks.html");
    exit;
} ?>

<?php
    if($_POST['multiple-form'] && ($_POST['multiple-form']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['multiple-form']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['multiple-form']['tel'])), 0, 30);
    $mail =  substr(htmlspecialchars(trim($_POST['multiple-form']['email'])), 0, 1000);
    $town =  substr(htmlspecialchars(trim($_POST['multiple-form']['town'])), 0, 1000);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = "<p>Здравствуйте, мне хотелось бы ".$loc."</p><p>Мой номер телефона ".$tel." </p><p>Моя электронная почта ".$mail."</p><p>Мой город: ".$town."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@butterfly.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    header("Location: thanks.html");
    exit;
} ?>
