<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true); 
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom('info@fls.guru', 'Фрилансер по жизни'); 
//Кому отправить 
$mail->addAddress('dymaeliseev@gmail.com');
//Тема письма
$mail->Subject = 'Привет! Это "Фрилансер по жизни"';

// // Рука
// $hand = "Правая";
// if($_POST['hand '] == "left"){
// Shand = "Левая";
// }

//Тело письма
$body = '<h1>Встречайте супер письмо!</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
    }
    // if(trim(!empty($_POST['hand']))){ $body. = '<pxstrong>PyKa:</strong> ' ,$hand. '</p>';
    // }
    if(trim(!empty($_POST['color']))){
        $body.='<p><strong>Цвет:</strong> '.$_POST['eolor'].'</p>';
    }
    if(trim(!empty($_POST['size']))){
        $body.='<p><strong>Размер:</strong> '.$_POST['size'].'</p>';
 }

 $mail->Body = $body;

//Отправляем 
if (!$mail->send()) { 
    $message = 'Ошибка';
} else {
$message = 'Данные отправлены!';
}
$message = ['message' => $message];

header('Content-type: application/json'); 
echo json_encode($response);

?>