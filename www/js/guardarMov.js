function guardarMov(tipoMov, importe){
				
	fecha = formatearFecha();
	
	var mov = sessionStorage.getItem('mov') || "[]";
	mov = JSON.parse(mov);
	mov.push([fecha,tipoMov,importe,caja]);
	sessionStorage.setItem('mov',JSON.stringify(mov));
	sessionStorage.getItem('mov');
}