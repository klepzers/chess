<?php
// Headers 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/Functions.php';

// DB connection
$database = new Database();
$db = $database->connect();

// Object
$post = new Data($db);

// Get raw posted data
$data = file_get_contents("php://input");

$post->positions = $data;

// Insert positions into database
if($post->savePositionsToDatabase()){
  echo json_encode(
    array('message' => 'Positions inserted')
  );
} else {
  echo json_decode(
    array('message' => 'Positions not inserted')
  );
}

/* Have to implement this later

$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));

switch ($method) {
  case 'PUT':
    // Do something with put
    break;
  case 'POST':
    break;
  case 'GET':
    
    break;
  default: 
    break;
}
*/
