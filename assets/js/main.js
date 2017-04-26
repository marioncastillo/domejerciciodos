function mensaje(){
			var msje = document.getElementsByClassName('mensaje');
			if(msje.length == 1){
				alert("Es muy poco");
			}
			else if(msje.length > 2 && msje.length < 4){
				alert("No está mal");
			} else{
				alert("Son muchos!");
			}
		};
		mensaje();