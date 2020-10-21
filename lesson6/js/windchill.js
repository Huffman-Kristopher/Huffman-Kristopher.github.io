
function Output() {
	
	var high = parseFloat(document.getElementById('high').value);
	var speed = parseFloat(document.getElementById('speed').value);
	var chillfactor = windChill(high, speed);
	document.getElementById('windChill').innerHTML = chillfactor ;
}

function windChill(high, speed){
	
	var factor = ( 35.74 + 0.6215 * high - 35.75 * Math.pow(speed,0.16) + 0.4275 * high * Math.pow(speed,0.16) );
	return factor;
}
