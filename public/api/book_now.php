<?php

    include 'credentials.php';
    header('Content-Type: application/json');

	$json = file_get_contents('php://input');
	$data = json_decode($json);
	

	//Check if Nick and E-mail are given
/*	if(
		isset($data->First_name) &&
		isset($data->First_name) &&
		isset($data->First_name) &&
        isset($data->Last_name) &&
        isset($data->E_mail) &&
        isset($data->Phone_number) &&
        isset($data->Van_size) &&
        isset($data->Helpers) &&
        isset($data->Hours) &&
        isset($data->Moving_from) &&
        isset($data->from_Address_line_1) &&
        isset($data->from_City) &&
        isset($data->from_Postal_code) &&
        isset($data->Moving_to) &&
        isset($data->to_Address_line_1) &&
        isset($data->to_City) &&
        isset($data->to_Postal_code) &&
        isset($data->payement) &&
        isset($data->Additional) &&
        isset($data->selectedDateString)
	){

	} else {
	 	echo '{status: 500, error: "no nick or email"}';
	 	http_response_code(500);
	 	return;
	}
*/

    $response = array();

	require("PHPMailer/PHPMailer.php");
	require("PHPMailer/SMTP.php");
	require("PHPMailer/Exception.php");

	$mail = new PHPMailer\PHPMailer\PHPMailer();

	$mail->IsSMTP();
	$mail->CharSet="UTF-8";
	$mail->Host = $servername; /* Zależne od hostingu poczty*/
	//$mail->SMTPDebug = 1; /* Show SMTP output in the response */
	$mail->Port = $port ; /* Zależne od hostingu poczty, czasem 587 */
	$mail->SMTPSecure = 'ssl'; /* Jeżeli ma być aktywne szyfrowanie SSL */
	$mail->SMTPAuth = true;
	$mail->IsHTML(true);
	$mail->Username = $email; /* login do skrzynki email często adres*/
	$mail->Password = $password; /* Hasło do poczty */
	$mail->setFrom($email, 'Hedgehog Removals Website'); /* adres e-mail i nazwa nadawcy */
	$mail->AddReplyTo($data->E_mail, $data->First_name);
	$mail->AddAddress($emailTo); /* adres lub adresy odbiorców */
	$mail->Subject = "Book Now"; /* Tytuł wiadomości */
	$mail->Body = "Book Now Form: <br> <br> 
	<table>
	  <thead>
	  <tbody>
		<tr>
		  <td>First name</td>
		  <td>". $data->First_name . "</td>
		</tr>
		<tr>
		  <td>Last name</td>
		   <td>". $data->Last_name . "</td>
		</tr>
		<tr>
		  <td>E-mail</td>
		  <td>". $data->E_mail . "</td>
		</tr>
		<tr>
		  <td>Phone number</td>
		  <td>". $data->Phone_number . "</td>
		</tr>
		<tr>
		  <td>----</td>
		</tr>
		<tr>
		  <td>Moving date</td>
		  <td>". $data->selectedDate . "</td>
		</tr>		<tr>
		  <td>Van size</td>
		  <td>". $data->Van_size . "</td>
		</tr>		<tr>
		  <td>Helpers</td>
		  <td>". $data->Helpers . "</td>
		</tr>		<tr>
		  <td>Hours</td>
		  <td>". $data->Hours . "</td>
		</tr>
		<tr>
		  <td>----</td>
		</tr>
		<tr>
		  <td>Moving from</td>
		  <td>". $data->Moving_from . "</td>
		</tr>		<tr>
		  <td>Address line 1</td>
		  <td>". $data->from_Address_line_1 . "</td>
		</tr>		<tr>
		  <td>Address line 2 (optional)</td>
		  <td>". $data->from_Address_line_2 . "</td>
		</tr>
		<tr>
		  <td>City</td>
		  <td>". $data->from_City . "</td>
		</tr>
				<tr>
		  <td>Postal code</td>
		  <td>". $data->from_Postal_code . "</td>
		</tr>
		<tr>
		  <td>----</td>
		</tr>
		<tr>
		  <td>Moving to</td>
		  <td>". $data->Moving_to . "</td>
		</tr>
				<tr>
		  <td>Address line 1</td>
		  <td>". $data->to_Address_line_1 . "</td>
		</tr>
				<tr>
		  <td>Address line 2 (optional)</td>
		  <td>". $data->to_Address_line_2 . "</td>
		</tr>
				<tr>
		  <td>City</td>
		  <td>". $data->to_City . "</td>
		</tr>
				<tr>
		  <td>Postal code</td>
		  <td>". $data->to_Postal_code . "</td>
		</tr>
				<tr>
		  <td>----</td>
		</tr>
				<tr>
		  <td>How do you like to pay?</td>
		  <td>". $data->payement . "</td>
		</tr>

				<tr>
		  <td>Additional information about your move (optional)</td>
		  <td>". $data->Additional . "</td>
		</tr>	
	  </tbody>
	</table>
	";

	if(!$mail->Send()) {
		echo "Error"; //. $mail->ErrorInfo;
	} else {
		echo "Sent";
	}


  //  echo json_encode($response);
	//$stmt->close();
	//$conn->close();

?>