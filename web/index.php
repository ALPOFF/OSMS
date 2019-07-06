<?php

// Make all the classes in the vendor directory available to our app.
require_once __DIR__.'/../vendor/autoload.php';

// Instantiate the Silex applicatioin.
$app = new Silex\Application();

// Enable debuggin mode for developer friendly error messages.
$app['debug'] = true;

// Create route for the root of the site and return 'hello world'.
$app->get('/', function () use ($app) {
    return '';
});

// Route for more kittens.
$app->get('/more-kittens', function () use ($app) {
    return 'We will add the kittens later';
});
 
// Route to about page.


// Actually run our app.
$app->run();
