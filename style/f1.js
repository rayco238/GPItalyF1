	var i=0;
	function carrera()
	{
	//hace los cáculos de las posciones de llegada de los coches, luego se compara con el numero de salida de cada piloto para asignarselo
	/// Posiciones de salida 1=alo 2=web 3=ham 4=kim
	primero = parseInt( (Math.random()*4)+1);
	//alert(primero);
	do
	{
	segundo = parseInt( (Math.random()*4)+1);
	}while(segundo==primero)
	
	do
	{
	tercero = parseInt( (Math.random()*4)+1);
	}while(tercero==primero || tercero==segundo)
	
	do
	{
	cuarto = parseInt( (Math.random()*4)+1);
	}while(cuarto==primero || cuarto==segundo || cuarto==tercero)
	
	}
	function semaforo()
	{
			//muestra semaforo y cuando se apagan las luces (a los 7 seg) pasa a salida()
			//document.getElementById("semaforo").style.visibility="visible";
			document.getElementById("sem").src="img/semaforo.gif";
			setTimeout('salida()',7000);
	}
	
		function salida()
		{
			carrera()
			
			setTimeout('cuadros()',31000);
			
			accidente=0;
			//genera un numero aleatorio y si es igual a 2 hay un accidente (hay 50% de posibilidades de que haya uno)
			accidentealeatorio = parseInt( (Math.random()*2)+1);
			if(accidentealeatorio==2)
			{
			accidente=1;
			// si hay un accidente siempre es de el que va en última posición
			accaleatorio = cuarto;
			//sale bandera amarilla para avisar del peligro de un accidente a los 10seg que es cuando se produce 
			//sale bandera verde cuando el coche accidentado ha llegado a boxes y ya no hay peligro
			setTimeout('document.getElementById("bandera1").src="img/amarilla.png"',10000);
			setTimeout('document.getElementById("bandera1").src="img/verde.png"',25000);
			}
			// no hace falta despues de haber puesto invisible el boton document.getElementById("start").disabled='disabled';
			//oculta boton de salida, apaga semaforo saca bandera verde y sonido de coches corriendo
			document.getElementById("sem").src="img/nada.png";
			document.getElementById("sal").style.visibility="hidden";
			document.getElementById("bandera1").src="img/verde.png";
			document.getElementById("sonido").src="sound/carrera.mp3";
			
			if(primero==1)
			{
				alonso.className='alonso1';
				vict="1.Fernando Alonso (Ferrari)";
			}
			else
			if(primero==2)
			{
				webber.className='webber1';
				vict="1.Mark Webber (Red Bull)";
			}
			else
			if(primero==3)
			{
				hamilton.className='hamilton1';
				vict="1.Lewis Hamilton (Mclaren-Mercedes)";
			}
			else
			{
				kimi.className='kimi1';
				vict="1.Kimi Raikkonen (Lotus-Renault)";
			}
				
				
			if(segundo==1)
			{
				alonso.className='alonso2';
				pos2="2.Fernando Alonso (Ferrari)";
			}
			else
			if(segundo==2)
			{
				webber.className='webber2';
				pos2="2.Mark Webber (Red Bull)";
			}
			else
			if(segundo==3)
			{
				hamilton.className='hamilton2';
				pos2="2.Lewis Hamilton (Mclaren-Mercedes)";
			}
			else
			{
				kimi.className='kimi2';
				pos2="2.Kimi Raikkonen (Lotus-Renault)";
			}
				
				
			if(tercero==1)
			{
				alonso.className='alonso3';
				pos3="3.Fernando Alonso (Ferrari)";
			}
			else
			if(tercero==2)
			{
				webber.className='webber3';
				pos3="3.Mark Webber (Red Bull)";
			}
			else
			if(tercero==3)
			{
				hamilton.className='hamilton3';
				pos3="3.Lewis Hamilton (Mclaren-Mercedes)";
			}
			else
			{
				kimi.className='kimi3';
				pos3="3.Kimi Raikkonen (Lotus-Renault)";	
			}
				
				
				
			if(cuarto==1 && accidente==0)
			{
				alonso.className='alonso4';
				pos4="4.Fernando Alonso (Ferrari)";
			}
			else
			if(cuarto==2 && accidente==0)
			{
				webber.className='webber4';
				pos4="4.Mark Webber (Red Bull)";
			}
			else
			if(cuarto==3 && accidente==0)
			{
				hamilton.className='hamilton4';
				pos4="4.Lewis Hamilton (Mclaren-Mercedes)";
			}
			else
			if(cuarto==4 && accidente==0)
			{
				kimi.className='kimi4';
				pos4="4.Kimi Raikkonen (Lotus-Renault)";	
			}
			
			//acidente
			//al principio corre como si fuera cuarto pero al temrinar la primera vuelta(10seg) tiene avería y va más lento (15seg) para en boxes
			if(accaleatorio==1 && accidente==1)
			{
				alonso.className='alonso4';
				setTimeout('alonso.className="accidente"',10000);
				pos4="4.Fernando Alonso (Ferrari)";
			}
			else
			if(accaleatorio==2 && accidente==1)
			{
				webber.className='webber4';
				setTimeout('webber.className="accidente"',10000);
				pos4="4.Mark Webber (Red Bull)";
			}
			else
			if(accaleatorio==3 && accidente==1)
			{
				hamilton.className='hamilton4';
				setTimeout('hamilton.className="accidente"',10000);
				pos4="4.Lewis Hamilton (Mclaren-Mercedes)";
			}
			else
			if(accaleatorio==4 && accidente==1)
			{
				kimi.className='kimi4';
				setTimeout('kimi.className="accidente"',10000);
				pos4="4.Kimi Raikkonen (Lotus-Renault)";	
			}
			
			
		}
		
		function cuadros()
		{
			//muestra bandera a cuadros y escribe la clasificación 
		document.getElementById("bandera1").src="img/bandera.gif";
		pri.className='uno';
		seg.className='dos';
		ter.className='tres';
		cua.className='cuatro';
		document.getElementById("pri").innerHTML = vict;
		document.getElementById("seg").innerHTML = pos2;
		document.getElementById("ter").innerHTML = pos3;
		document.getElementById("cua").innerHTML = pos4;
		document.getElementById("newrace").style.visibility="visible";
		
		//dependiendo del piloto que gane suena una celebración propia a él
			if(primero==1)
			{
				document.getElementById("sonido").src="sound/winalo.mp3";
			}
			else
			if(primero==2)
			{
				document.getElementById("sonido").src="sound/winweb.mp3";
			}
			else
			if(primero==3)
			{
				document.getElementById("sonido").src="sound/winham.mp3";
			}
			else
			{
				document.getElementById("sonido").src="sound/winkim.mp3";
			}
		
		}
		
				
		
