
//Funcion Dibujo de lineas
function dibujando(color,xIN,yIN,xFI,yFI)
{
	imagen.beginPath();
	imagen.strokeStyle=color;
	imagen.moveTo(xIN,yIN);
	imagen.lineTo(xFI,yFI);
	imagen.stroke();
	imagen.closePath();
}

//Funcion de dibujo por click

function dibujoPorClick()
{
		var numeroLineas=parseInt(texto.value);
		var anchoCanvas=marco.width;

		var color=" #2e4053";
		var yInicial1,xFinal1,xInicial2,yFinal2;
		var xInicial3,yFinal3,yInicial4,xFinal4;
		var espacio=anchoCanvas/numeroLineas;
		var linea=0;

		do
		{
			yInicial4=yInicial1=linea*espacio;
			xInicial2=xFinal1=espacio*(linea+1);
			yFinal3=yFinal2=300-(linea*espacio);
			xFinal4=xInicial3=290-(linea*espacio);
			dibujando(color,0,yInicial1,xFinal1,300);
			dibujando(color,xInicial2,0,0,yFinal2);
			dibujando(color,xInicial3,0,300,yFinal3);
			dibujando(color,300,yInicial4,xFinal4,300);
			linea++;
		}
		while(linea<numeroLineas);
		
		dibujando(color,1,1,1,299);
		dibujando(color,1,1,299,1);
		dibujando(color,299,1,299,299);
		dibujando(color,1,299,299,299);
}

// Marco de html
var marco=document.getElementById("dibujo");
var imagen=marco.getContext("2d");

//Campo de texto de html
var texto=document.getElementById("textoLineas");


//Boton de html
var boton=document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);



/*
for (var linea = 0; linea < 30;)
{
	yInicial4=yInicial1=linea*espacio;
	xInicial2=xFinal1=espacio*(linea+1);
	yFinal3=yFinal2=300-(linea*espacio);
	xFinal4=xInicial3=290-(linea*espacio);
	dibujando(color,0,yInicial1,xFinal1,300);
	dibujando(color,xInicial2,0,0,yFinal2);
	dibujando(color,xInicial3,0,300,yFinal3);
	dibujando(color,300,yInicial4,xFinal4,300);
	linea++;
}
*/
