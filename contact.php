<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message']

    $email_from = 'portfolio site';
    $email_subject = 'new message from portfolio site';
    $email_body = "Name: $name.\n".
                  "email: $email.\n".
                  "message: $message.\n";

    $to = "sazwerling@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers = "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("location: index.html");
?>