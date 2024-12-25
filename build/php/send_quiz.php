<?php

use PHPMailer\PHPMailer\PHPMailer;

$RadioButtonImg = $_POST["quise-radiobutton-img"];
foreach ($RadioButtonImg as $item) echo "$item<br >";
$RadioButton2 = $_POST["quise-radiobutton-2"];
foreach ($RadioButton2 as $item) echo "$item<br >";
$RadioButton3 = $_POST["quise-radiobutton-3"];
foreach ($RadioButton3 as $item) echo "$item<br >";

$name = $_POST('name');
$phone = $_POST('phone');


if (isset($_POST["quise-radiobutton-img"])) {
  $RadioButtonImg = $_POST["quise-radiobutton-img"];
  echo $RadioButtonImg;
};
if (isset($_POST["quise-radiobutton-2"])) {
  $RadioButton2 = $_POST["quise-radiobutton-2"];
  echo $RadioButton2;
};
if (isset($_POST["quise-radiobutton-3"])) {
  $RadioButton3 = $_POST["quise-radiobutton-img"];
  echo $RadioButton3;
};
if (isset($_POST["quis-input-4"])) {
  $AreaQuiz = $_POST["quis-input-4"];
  echo $AreaQuiz;
};

if (isset($_POST["selecting"])) {
  $selecting = $_POST["selecting"];
  echo $selecting;
}

require '/PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer;
$mail->$isSMTP;
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = 'leonid.spb2015@yandex.ru';
$mail->Password = 'Voshogdenie2015';
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';
$mail->CharSet = 'UTF-8';



$KindOfFurniture = "Тип мебели: . $RadioButtonImg<br>";
$SizeOfFurniture = " Параметры мебели: . $RadioButton2 <br>";
$ManerialFurniture = "Материалы мебели: . $RadioButton3 <br>";
$Client = "Имя: . $name<br>";
$PhoneClient = "Телефон: . $phone";
