<?php



/* получаем значения полей из формы */

$name = $_POST['name'];
$phone = $_POST['phone'];
// $email = $_POST['email'];

/* Функция для создания запроса не сервер Telegram */

function parser($url)
{
  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  $result = curl_exec($curl);
  if ($result == false) {
    echo " Ошибка отправки запроса: " . curl_error($curl);
    return false;
  } else {
    return true;
  }
}



function orderSendTelegram($message)
{
  /* Токен который выдается при регистрации бота */
  $token = '6911322752:AAHvqD7kk7oyRfpB3rBXYVVA_aU355mzmaU';
  /* Идентификатор группы */
  $chat_id = '6143121876';
  /* Делаем запрос и отправляем сообщение */
  parser("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}");
}


/* Собираем сообщение */
$textMessage1 = "<b>Пришла заявка</b>\n";
$textMessage2 = "<b>Имя: </b>" . $name . "\n";
$textMessage3 = "<b>Телефон:  </b>" . $phone . "\n";
/* $message .= " Email:" .$email; */
$WindowTextMessage = $textMessage1 . $textMessage2 . $textMessage3;
$WindowTextMessage = urlencode($WindowTextMessage);


orderSendTelegram($WindowTextMessage);
