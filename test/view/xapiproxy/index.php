<?php

	require_once __DIR__."/PhpProxy.php";

	$proxy=new PhpProxy();
	$proxy->setRemoteSite("http://staging.tunapanda.org/learninglocker/public/data/xAPI/");
	$proxy->dispatch();