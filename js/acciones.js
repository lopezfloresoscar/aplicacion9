// JavaScript Document
$document.ready(function(e){
var watchID=null;
document.addEventListener("deviceready",Dispositivo_Listo,false);
function Dispositivo_Listo(){
	comienza();
}
function comienza(){
	var opciones={frequency:2000};
	watchID=navigator.accelerometer.watchAcceleration(correcto,Error.opciones);
	navigator.geolocation.getCurrentPosition(Localiza,ErrorLocalizacion);
}
function Detente(){
	if(watchID){
		navigator.accelerometer.clearWatch(watchID);
		watchID=null;
	}
}
function correcto(acceleration){
	var element=document.getElementById('acelerometro');
	element.innerHTML='Aceleracion en X:' + accelaration.x + '<br/>'+
	'Aceleracion en Y:' + acceleration.y + '<br/>'+
	'Aceleracion en Z:' + acceleration.y + '<br/>'+
	'intervalo:' + acceleration.timestamp + '<br/>';
}
function Error(){
	alert('ERROR!');
}
function Localiza(posicion){
	var element=document.getElementById('geolocalizacion');
	element.innerHTML='Latitude:' + posicion.coords.latitude +'<br/>'+
	'Longitud:'	+posicion.coords.longitude +'<br/>'+
	'Altitud:'	+posicion.coords.altitude +'<br/>'+
	'Precision:'	+posicion.coords.accuracy +'<br/>'+
	'Precision de Altitud:'	+posicion.coords.altitudeAccuracy +'<br/>'+
	'Direccion:'	+posicion.coords.heading +'<br/>'+
	'Velocidad:'	+posicion.coords.speed  +'<br/>'+
	'Intervalo:'	+posicion.timestamp +'<br/>';
}
function ErrorLocalizacion(error){
	alert('codigo: ' + error.code + '\n' +'mensaje: ' + error.message + '\n');
}
})
