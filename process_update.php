<?php
include 'db.php';

$customer_id = $_POST['customer_id'];
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$salary = $_POST['salary'];
$job_role = $_POST['job_role'];

$sql = "UPDATE Customer SET name='$name', email='$email', address='$address', salary='$salary', job_role='$job_role' WHERE customer_id='$customer_id'";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array("statusCode"=>200));
} else {
    echo json_encode(array("statusCode"=>201));
}
?>
