<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $quote = $_POST['quote'];
    
    $to = 'vutivinrimbani@gmail.com';
    $subject = 'Quote Request';
    $message = "Name: $name\n\nEmail: $email\n\nAddress: $address\n\nQuote Specifications: $quote";
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your quote request. We will contact you shortly.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>