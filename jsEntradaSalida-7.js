/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero	
	var SegundoNumero
	var ResultadoDeLaSuma; //ejemplo de algo mal hecho

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primernumero);
	
	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	
	ResultadoDeLaSuma=primerNumero-segundoNumero;
	
	console.log(ResultadoDeLaSuma);
	
}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

