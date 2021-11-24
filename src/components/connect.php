<?php
$con=new mysqli('localhost','root','','laundry');

if($con){
    echo "Connection successful"
} else {
    die(mysqli_error($con));
}

?>