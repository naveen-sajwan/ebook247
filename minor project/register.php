<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>E-BOOK</title>
	<link rel="stylesheet" type="text/css" href="css/stylesheet.css">
	<link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png">
  <link rel="manifest" href="favicon_io/site.webmanifest">
  <!-- MDB -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.js"></script>
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"/>
    <!-- Google Fonts -->
   <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
   rel="stylesheet"/>
   <!-- MDB -->
   <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.css"rel="stylesheet"/>
   <script src="main.js" defer></script>
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script defer>
        (function() 
        {
            emailjs.init("cMyYRvWqhJvzWHXET");
        })();
    </script>
</head>
<body>

	    <form method="post" action="" name="signup-form">
			<div class="form-element">
			<label>Username</label>
			<input type="text" name="username" pattern="[a-zA-Z0-9]+" required />
			</div>
			<div class="form-element">
			<label>Email</label>
			<input type="email" name="email" required />
			</div>
			<div class="form-element">
			<label>Password</label>
			<input type="password" name="password" required />
			</div>
			<button type="submit" name="register" value="register">Register</button>
	    </form>

</body>
</html>