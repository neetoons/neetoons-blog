¿Entonces en las variables solo podemos almacenar números enteros? Por el momento diremos que no, para poder almacenar otros datos como por ejemplo números decimales, utilizaremos 'Tags'.

**¿Qué es un tag y cuáles existen?**  
Un tag es un pedacito de código, que informa al compilador el tipo de dato que se almacenara en esa variable.


# Como usar tags en Pawn

##  Tipos de Datos
Para empezar a entender los tags en Pawn tenemos que saber un concepto básico ya que la programación consiste en hacer operaciones con datos: operaciones con números, operaciones con textos y condicionales. Pero no todos datos no son todos iguales porque puedes sumar dos números pero no un número y un texto. Esto introduce el concepto de tipado en la programación. Es decir, diferenciar los tipos de datos para saber qué operaciones podemos y no podemos hacer con ellos. 

Pawn si bien parece que tiene tipos de datos, ya sea enteros, decimales, booleanos, textos y estructuras de datos, técnicamente no tiene tipos de datos, la cuestión es que Pawn al no tener tipos de datos, todo se resume en celdas ya que es un lenguaje hecho para ser pequeño, limitado y simple. 

## Tags
Ahora sabiendo esto, Pawn te da una forma de darle cierto tipado al lenguaje, es ahi donde entran los tags (etiquetas en español), en donde anteriores tutoriales los hemos usado, un tag es un prefijo que va antes de las variables que permite indicar al compilador que trate la variable de manera especial en determinadas circunstancias. Los tags que hemos usado en los pasados vídeos han sido los siguientes:

```cpp
Float:   // Para números decimales
bool:   // datos booleanos (true o false)
new DB:handle // tag personalizado
```

Ten en cuenta que handle en este ejemplo es el nombre de la variable y DB es el tag que a esta se le coloca, pawn al permitir tags personalizados te permite asignarle cualquier nombre al tag.

Otro tag que quizás conozcas que viene de la libreria de a_mysql:

```cpp
new MySQL:handle;
```

En pawn, bool y Float son tags predefinidos (para usar Float debes usar una librería que implemente el uso de números racionales "Float", en samp ya viene en la librería a_samp y sino en el include float.inc). Yendonos a la practica entendemos que los tags nos ayudan a asegurar que una variable siempre sea usada de determinadas circunstancias, por ejemplo. veamoslo en el codigo.

Lo primero, un tag es una prefijo, es un prefijo porque va siempre al principio de una variable, una vez declara en una variable no hace falta colocarla de nuevo:

```cpp
new Float:MiVariable;
MiVariable = 1.000;
```

Ahora si intentamos cambiar la variable a otro tipo de dato nos va a dar una advertencia:

```cpp
MiVariable = true;
//warning 213: tag mismatch
```

Por lo que debemos respetar los tags de las variables.
## Tags débiles y tags fuertes

Si estuviste atento o atenta notaste que entre estos tags hay uno en particular que tiene la primera letra en minúscula, bool, este en particular lo dejamos comúnmente siempre así, lo importante es saber que hay dos tipos de tags: tags fuertes (que comienzan con una letra mayúscula) y tags débiles (que comienzan con una letra minúscula). 

En la mayoría del tiempo son iguales. El compilador no recibirá una advertencia, la mayoría de las veces no sucede con tags débiles y si todo el tiempo con tags fuertes, cambiar implícitamente la etiqueta generará una advertencia que le indicará que es probable que los datos se estén usando incorrectamente. 

Un ejemplo muy sencillo es el siguiente:

```cpp
new
	Fuerte:VariableFuerte,
	debil:VariableDebil,
	VariableVacia;
VariableVacia = VariableFuerte; // Warning
VariableVacia = VariableDebil; // No warning
// Sin embargo no funciona al revés:
VariableDebil = VariableVacia; // Warning
```

## Funciones con tags

A las funciones también se le puede colocar tags como también hacer que devuelvan datos con esos tags. Para hacerlo es muy simple, simplemente coloca el tag antes del nombre de la función, por ejemplo:

```cpp
Float:CalcularAreaCirculo(Float:radio)
 {
  // Constante pi
  new Float:PI = 3.1415926535;   

  // Cálculo del área
  new Float:area = PI * radio * radio;
  
  // Devolver el área
  return area;
}
```


Las funciones con tags deben estar declaradas antes de donde se llaman/invocan, si no lo hacemos no saldrá esta advertencia:

```
warning 208: function with tag result used before definition, forcing reparse
```


Implementación de las funciones con tag:

```cpp
main()
{
  new Float:result = CalcularAreaCirculo(5.0);
  printf("%f", result);
  return 0;
}
```
Resultado:
```
78.539817
```

Como verás, si queremos guardar en una variable el resultado debemos crearla con el tag Float ya que el resultado viene con esa tag porque es un dato decimal. Entonces entendemos que los tags permiten al compilador verificar que se asignen valores compatibles a las variables y evitar errores de tipo de dato durante el tiempo de compilación y ejecución. Rara vez tendrás que crear funciones como estas pero si usarlas.

## Ejemplo con a_samp

Vamos a ver un ejemplo con la libreria de a_samp de SA:MP, específicamente con la creación de los TextDraws que son una forma de mostrar texto y figuras en la pantalla, a_samp nos da esta función llamada **CreatePlayerTextDraw** que como verás si sabes ingles es una funcion para crearlas, como podemos ver tiene la palabra native, esto lo puedes ignorar ya que es una palabra clave para definir funciones que se comuniquen con la aplicación, en este caso samp-server.exe, esta función tiene como tag PlayerText, es decir, devuelve datos de tipo PlayerText:

```cpp
native PlayerText:CreatePlayerTextDraw(playerid, Float:x, Float:y, text[]);
```

En la implementación la veremos asi:

```cpp
// Esta variable la usamos para guardar la id del textdraw
// Como CreatePlayerTextDraw solo se puede usar con el tag PlayerText entonces creamos una variable con dicho tag:
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
	// Primero, creamos el textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Bienvenido");
 
	//Y lo mostramos
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
	return 0;
}
```

Si vemos como esta declarada **PlayerTextDrawShow** que es una función para mostrar los textdraws veremos que para usarla tenemos que pasar por argumento una variable con un tag **PlayerText**:

```cpp
native PlayerTextDrawShow(playerid, PlayerText:text);
```

Es de esta que podemos entender como usar las funciones que requieren variables con tags específicos, si lo piensas bien no es complicado sin embargo es un poco molesto pero estas molestias nos ahorran molestias en producción cuando nuestro programa este corriendo.

## Variables sin Tags

Ahora quizás te preguntes, que ocurre con las variables que no tienen tag, bueno estas implícitamente se crean siendo un tipo de dato numérico con el valor de 0, es por eso que no hace falta asignarle 0 cuando queremos hacer un ciclo for:

```cpp
for(new i; i < 10; i++)
{
	printf("%d", i);
}
```

Como verás no hace falta asignarle ``new i = 0;``porque es redundante, sin embargo, es a gusto de cada quién ya que algunos dicen que es mejor ser más explicito. Como anteriormente describí, las variables vacías sin tag darán warning si les intentas asignar una variable con tag fuerte pero no darán warning si le asignas una variable débil, por otro lado, una variable débil no le puedes asignar una variable vacía. Gracias a los tags no te tendrás que preocupar por bugs en producción ya que las librerías suelen usar en su mayoría o sino todas tags fuertes así que tendrás warnings si los usas incorrectamente, es por eso que no debes dejar ningún warning en la compilación.

## Printf

La función printf que está hecha para imprimir textos en la consola y otras similares como format tienen algo en particular y es que en su uso solo acepta ciertos tags en las variables y lo podemos ver en sus declaraciones cuando vemos ``{Float,_}``:

```cpp
native printf(const format[], {Float,_}:...);
native format(output[], len, const format[], {Float,_}:...);
```

En caso de no pasarles una variable común como Float, un número o un texto nos dará un warning:

```cpp
#include <a_samp>
main(){
	new DB:DatabaseID;
	printf("%d", DatabaseID);
}
//warning 213: tag mismatch: expected tags "Float", or none ("_"); but found "DB"
```

Para evitar este warning al querer imprimir un dato que tiene un tag personalizado debemos forzarlo colocándole un ``_`` como tag: 

```cpp
#include <a_samp>
main(){
	new DB:DatabaseID;
	printf("%d", _:DatabaseID);
}
```

Hay mucho sobre los tags pero esto es lo más importante y común que verás programando con Pawn.

