function formatearFecha(){
	var fecha = new Date();
	var dd = fecha.getDate();
	var mm = fecha.getMonth()+1;
	var yyyy = fecha.getFullYear();
	var hh = fecha.getHours();
	var min = fecha.getMinutes();
	
	if(dd<10){dd = '0'+dd}
	if(mm<10){mm = '0'+mm}
	if(hh<10){hh = '0'+hh}
	if(min<10){min = '0'+min}
	
	
	
	var fecha = dd+"/"+mm+"/"+yyyy+" - "+hh+":"+min+" hs.";
	return fecha;
}