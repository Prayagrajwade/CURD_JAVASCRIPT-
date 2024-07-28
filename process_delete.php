<?php
include 'db.php';

$customer_id = $_POST['customer_id'];

$sql = "DELETE FROM Customer WHERE customer_id='$customer_id'";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array("statusCode"=>200));
} else {
    echo json_encode(array("statusCode"=>201));
}
?>
