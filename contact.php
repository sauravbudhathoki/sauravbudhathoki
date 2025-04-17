<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $to = "your@email.com";  // Replace with your email
    $subject = "New Message from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again.'); window.history.back();</script>";
    }
} else {
    echo "Invalid request.";
}
?>

