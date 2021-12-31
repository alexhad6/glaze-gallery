<?php
	session_start();

	$hash = '$2y$10$0t.ATDhLqSOXm3iLMzF4/uTr6.egLVcww0SV6lubRi34HOA0QK/na';
	$return = (isset($_GET['return']) ? htmlspecialchars($_GET['return']) : '.');

	if ($_SESSION['loggedin']) {
		header('Location: '.$return);
	}
	else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		$password = htmlspecialchars($_POST['password']);
		if (password_verify($password, $hash)) {
			$_SESSION['loggedin'] = true;
			header('Location: '.$return);
		}
		else {
			$incorrect = true;
		}
	}
	else {
		$incorrect = false;
	}
?>
<!DOCTYPE html>
<html>
<head lang="en">
	<?php require 'includes/head.php' ?>
	<script src="js/settings.js"></script>
	<title>Login</title>
	<link href="css/login.css" rel="stylesheet">
</head>
<body>
	<?php include 'includes/header.php' ?>
	<div id="grey">
		<div id="instructions">
			<p>Login below. If you do not have the password, please contact info@mudmatters.com.</p>
		</div>
	</div>
	<form method="post">
		<div id="password">
			<label for="password">Password:</label>
			<input type="password" name="password">
		</div>
		<?php
			if ($incorrect) {
				echo '<p>Incorrect password</p>';
			}
		?>
		<input type="submit" value="Log In">
	</form>
</body>
</html>