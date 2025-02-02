<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Asegúrate de tener PHPMailer instalado vía Composer

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $message = $data['message'] ?? '';

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com'; // Servidor SMTP de Hostinger
        $mail->SMTPAuth   = true;
        $mail->Username   = 'contacto@vivisanfrancisco.com'; // Tu dirección de correo en Hostinger
        $mail->Password   = 'v^zk^qh@3L'; // Tu contraseña
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        //Recipients
        $mail->setFrom('contacto@vivisanfrancisco.com', 'Formulario de Contacto');
        $mail->addAddress('contacto@vivisanfrancisco.com', 'Vivi San Francisco');
        $mail->addReplyTo($email, $name);

        //Content
        $mail->isHTML(true);
        $mail->Subject = "Nuevo mensaje de contacto desde el sitio web";
        $mail->Body    = "
            <h1>Nuevo mensaje de contacto</h1>
            <p><strong>Nombre:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Teléfono:</strong> {$phone}</p>
            <p><strong>Mensaje:</strong> {$message}</p>
        ";

        $mail->send();
        http_response_code(200);
        echo json_encode(["message" => "Mensaje enviado con éxito"]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["message" => "Error al enviar el mensaje: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Método no permitido"]);
}
?>