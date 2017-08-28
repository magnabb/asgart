<?php
include __DIR__. '/PHPMailer/PHPMailerAutoload.php';

$method = $_SERVER['REQUEST_METHOD'];
$data = null;

if ( $method === 'POST' ) {
    $data = $_POST;
} else if ( $method === 'GET' ) {
    $data = $_GET;
}
if($data == null) die;

$adminEmail = 'oleksandr.bazylevych@gmail.com';
$adminName = 'Alex';

$mail = new PHPMailer;
$mail->SMTPDebug = 0;                               // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mailtrap.io';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ea22e837aa48f0';                 // SMTP username
$mail->Password = 'c5293de333fafe';                           // SMTP password
//$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 2525;                                    // TCP port to connect to
$mail->CharSet = 'UTF-8';

$mail->setFrom($data['email'], $data['name']);
$mail->addAddress($adminEmail, $adminName);
$mail->addReplyTo($data['email']);

$mail->isHTML(true);

$mail->Subject = 'Feedback from asgart.eu';
$mail->Body    = $data['message'] . ' <br><br><a href="tel: '.$data['phone'].'">'.$data['phone'].'</a>';
$mail->AltBody = $data['message'] .' Phone number: '. $data['phone'];

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
