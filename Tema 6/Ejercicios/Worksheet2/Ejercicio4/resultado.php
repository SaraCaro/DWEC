<?php

$usuario = array("pedro",'luis','alvaro');
if(isset($_GET['username'])){
    $nombre = $_GET['username'];
    if(in_array($nombre,$usuario)){
        echo "El usuario existe";
    }else{
        echo "El usuario no existe";
    }
}

?>