<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>getfeed recruitment task</title>
	<link rel="stylesheet" href="style.css">
	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="script.js"></script>

	<!--[if IE]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

</head>


<body>
<div class="page_wrapper" style="opacity: 1;">

	<div class="controls_wrapper">
		<form method="get">
			<input type="text" placeholder="search for image tag" name="search_tag" class="search_tag"
			       value="<?php echo(!empty($_GET['search_tag']) ? $_GET['search_tag'] : 'fractal tree'); ?>">
			<input type="submit">
		</form>
	</div>

	<div class="controls_wrapper">

		<div class="slideshow_wrapper">
			<input name="slideshow" id="slideshow" class="slideshow_checkbox" type="checkbox" checked="checked"/>
			<label for="slideshow">slideshow enabled</label>
		</div>

	</div>


	<div id="preloaderGif">
	</div>
	<div id="slider-wrapper">
		<div class="fadein">

		</div>
		<div id="nav">
			<div id="button-prev">
				<img src="images/prev.png" alt=""/>
			</div>
			<div id="button-next">
				<img src="images/next.png" alt=""/>
			</div>
		</div>
	</div>

</div>
</body>
</html>