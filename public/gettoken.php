

<?php
extract($_POST);
if(isset($action) && $action == 'gettoken'){
if(empty($email) || empty($password) || empty($type)){
    $return = array('msg' => 'Lỗi');
    $msg = $return['msg'];
}else{
$params = array(
    "ancms" => time(),
	"api_key" => addslashes($type) == 'android' ? "882a8490361da98702bf97a021ddc14d" : ($type == 'iphone'?"3e7c78e35a76a9299309885393b02d97":'2b45dfb3b4e943f11d63395f07bb3b62'),
	"credentials_type" => "password",
	"email" => addslashes($email),
	"format" => "json",
	"generate_machine_id" => "1",
	"generate_session_cookies" => "1",
	"locale" => isset($locale) ? trim($locale) : 'vi_VN',
	"method" => "auth.login",
	"password" => addslashes($password),
	"return_ssl_resources" => "0",
	"v" => "1.0"
);                                                                                                                                                             
$sig = array();
	foreach($params as $key => $value){
		array_push($sig,"$key=$value");
	}
$type == 'android'?($sig[]='62f8ce9f74b12f84c123cc23437a4a32'):($type == 'iphone'?($sig[]='c1e620fa708a1d5696fb991c1bde5662'):($sig[]='1dfdc21535dbc7f4c4a65635d8654195'));
$params['sig'] = md5(implode('',$sig));
$url = sprintf('https://api.facebook.com/restserver.php?%s', http_build_query($params));

echo $url;
}
}
?>

