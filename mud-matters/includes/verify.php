<?php
	session_start();

	if (!$_SESSION['loggedin']) {
		$return = substr($_SERVER['REQUEST_URI'], strlen('/glaze-gallery/'));
		if ($return == '' || $return == 'login') {
			header('Location: /glaze-gallery/login');
		}
		else {
			header('Location: /glaze-gallery/login?return='.$return);
		}
	}
?>