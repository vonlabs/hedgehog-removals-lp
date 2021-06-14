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
	$mail->AddReplyTo($data->Email_address, $data->Your_name);
	$mail->AddAddress($emailTo); /* adres lub adresy odbiorców */
	$mail->Subject = "Get your quote"; /* Tytuł wiadomości */
	$mail->Body = "Get your quote Form: <br> <br> 
	<table>
	  <thead>
	  <tbody>
		<tr>
			<td><strong>Your current address<strong/></td>
		</tr>
		<tr>
		  <td>Address line 1</td>
		  <td>". $data->from_Address_line_1 . "</td>
		</tr>
		<tr>
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
			<td>Current property type</td>
			<td>". $data->from_property_type . "</td>
		</tr>
		<tr>
			<td>Number of bedrooms</td>
			<td>". $data->from_Number_of_bedrooms . "</td>
		</tr>
			<tr>
			<td>Floor level</td>
			<td>". $data->from_Floor_level . "</td>
		</tr>
		<tr>
		  <td>----</td>
		</tr>
		<tr>
			<td><strong>Where are you moving to?<strong/></td>
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
			<td>Current property type</td>
			<td>". $data->to_property_type . "</td>
		</tr>
		<tr>
			<td>Number of bedrooms</td>
			<td>". $data->to_Number_of_bedrooms . "</td>
		</tr>
			<tr>
			<td>Floor level</td>
			<td>". $data->to_Floor_level . "</td>
		</tr>
		<tr>
		  <td>----</td>
		</tr>
		<tr>
			<td><strong>Your moving details<strong/></td>
		</tr>
		<tr>
		  <td>Moving date</td>
		  <td>". $data->selectedDate . "</td>
		</tr>
		<tr>
		  <td>Additional moving services required (optional)</td>
		  <td>". $data->payement . "</td>
		</tr>		<tr>
		  <td>Additional information about your move (optional)</td>
		  <td>". $data->Additional . "</td>
		</tr>
		<tr>
		  <td>----</td>
		</tr>
		<tr>
			<td><strong>Your contact details<strong/></td>
		</tr>
		<tr>
		  <td>Your name</td>
		  <td>". $data->Your_name . "</td>
		</tr>
		<tr>
		  <td>Email address</td>
		  <td>". $data->Email_address . "</td>
		</tr>
				<tr>
		  <td>Contact number</td>
		  <td>". $data->Contact_number . "</td>
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