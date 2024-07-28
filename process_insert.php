<?php
include 'db.php';

$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$salary = $_POST['salary'];
$job_role = $_POST['job_role'];

$sql = "INSERT INTO Customer (name, email, address, salary, job_role) 
        VALUES ('$name', '$email', '$address', '$salary', '$job_role')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array("statusCode" => 200));
} else {
    echo json_encode(array("statusCode" => 500, "message" => $conn->error));
}

$conn->close();
?>
