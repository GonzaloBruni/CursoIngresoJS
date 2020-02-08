/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var Persona;
	var Mensaje;

	
	Persona=prompt("Por Favor Ingrese Su Nombre" , 'Nombre'); //La Variable "Persona" ahora contiene el DATO que se le Pidio por PROMPT	
															  //Dentro de PROMPT primero se coloca la pregunta entre comillas dobles literales, y con una ( , ) se coloca a continuacion el ejemplo en el cuadro de texto a rellenar.	

	//alert(Persona); //La alerta arrojara la informacion que se almaceno en "Persona"
    //Ambas ALERT funcionan 
	alert('Bienvenido ' + Persona); //Usaremos el "+" para CONCATENAR (Conecta una variable, un ID o un Literal)
	


		





	
}

