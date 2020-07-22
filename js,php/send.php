<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail =$mail = new PHPMailer();
$mail->isSMTP();
$mail->Host   = 'smtp.gmail.com';
$mail->SMTPAuth   = true;
$mail->Username   = 'login';
$mail->Password   = 'password';
$mail->SMTPSecure = 'ssl';
$mail->Port   = 465;

$mail->setFrom('login@gmai.com', 'Иван Иванов');
$mail->addAddress('test@.com', 'Вася Петров');

$mail->Subject = 'Тест';
$mail->msgHTML("<html><body>
                <h1>Один из заголовков</h1>
                <p>Содержание вашего письма</p>
                </html></body>");

if ($mail->send()) {
    echo 'Письмо отправлено!';
} else {
    echo 'Ошибка: ' . $mail->ErrorInfo;
}
