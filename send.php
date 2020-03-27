<?php
if ( $_SERVER[ "REQUEST_METHOD" ] == "POST")
{

    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $getIp = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $getIp = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $getIp = $_SERVER['REMOTE_ADDR'];
    }



    //  Указать почту получателя

    $addressat = array(
      "info1.internetmagazin@gmail.com",
      "test@gmail.com",
    );





  $email_to = implode(',', $addressat);

  $name = stripslashes(htmlspecialchars($_POST['name']));
  $phone = stripslashes(htmlspecialchars($_POST['phone']));
  $time = date("d.m.Y в H:i");
  $ipadres = $_SERVER['REMOTE_ADDR'];
  $host = $_SERVER["HTTP_HOST"];
  $subject = "Заказ с сайта ".$host;
  $tovar = "VALGUSTEEN";
  $success_url = 'success.html';

  $long_link = $_SERVER["HTTP_REFERER"];
  $split_link = parse_url($long_link);
  $link = trim($split_link['host']); // $split_link['host'].$split_link['path'] == voron.store/maski2/
  $output = "<a href='$long_link'>$link</a>";
  // $ip = gethostbyname($link);
  $ip = $getIp;

  $message =
  "Заполнено: ".$time."\r\n".
  "Товар: ".$tovar."\r\n".
  ( strlen( $name ) > 0 ? "Имя: ".$name." \r\n" : "" ) .
  ( strlen( $phone ) > 0 ? "Телефон: ".$phone." \r\n" : "" ) .
  ( strlen( $email ) > 0 ? "E-mail: ".$email." \r\n" : "" ) .
  ( strlen( $comment ) > 0 ? "Комментарий: ".$comment." \r\n" : "" ) .
  "Ссылка: ".$long_link."\r\n" .
  "IP: ".$ip."\r\n" .

  "\r\nИсточник: ".$utm_source."\r\n" .
  "Средство: ".$utm_medium."\r\n" .
  "Название: ".$utm_campaign."\r\n" .
  "Содержание: ".$utm_content."\r\n" .
  "Ключевое слово: ".$utm_term."\r\n"
  ;
  $verify = mail($email_to,$subject,$message,"Content-type:text/plain;charset=utf-8\r\n");


  if ($verify) {
    header('Location: '.$success_url);
    echo '<h1 style="color:green;">Поздравляем! Ваш заказ принят!</h1>';
    exit;
  }
  else
  {
    echo '<h1 style="color:red;">Произошла ошибка!</h1>';
  }
}

?>
