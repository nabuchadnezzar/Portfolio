<?php
    if($_POST['consult-form'] && ($_POST['consult-form']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['consult-form']['location'])), 0, 1000);
    $name =  substr(htmlspecialchars(trim($_POST['consult-form']['name'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['consult-form']['tel'])), 0, 30);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = "<p>Заявка из блока: ".$loc."</p><p>Меня зовут ".$name." </p><p>Мой номер телефона: ".$tel."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@business-consulting.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    exit;
} ?>

<?php
    if($_POST['modal-form'] && ($_POST['modal-form']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['modal-form']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['modal-form']['tel'])), 0, 30);
    $email =  substr(htmlspecialchars(trim($_POST['modal-form']['email'])), 0, 1000);
    $name =  substr(htmlspecialchars(trim($_POST['modal-form']['name'])), 0, 1000);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = "<p>Заявка из блока: ".$loc."</p><p>Меня зовут ".$name." </p><p>Мой номер телефона: ".$tel."</p><p>Моя электронная почта: ".$email."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@business-consulting.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    exit;
} ?>
<?php
    if($_POST['modal-form-link'] && ($_POST['modal-form-link']['company'] == '')) {
    $loc = substr(htmlspecialchars(trim($_POST['modal-form-link']['location'])), 0, 1000);
    $tel =  substr(htmlspecialchars(trim($_POST['modal-form-link']['tel'])), 0, 30);
    $to = 'nabuchadnezzar13@gmail.com';
    $msg = "<p>Заявка из блока: ".$loc." </p><p>Мой номер телефона: ".$tel."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@business-consulting.ru>\r\n";
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
    $msg = "<p>Заявка из блока: ".$loc."</p><p>Меня зовут ".$name." </p><p>Мой номер телефона: ".$tel."</p>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $headers .= "From: <page@business-consulting.ru>\r\n";
    $subject =  '=?UTF-8?B?'. base64_encode($loc).'?=';
    mail($to, $subject, $msg, $headers);
    exit;
} ?>
