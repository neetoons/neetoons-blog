---
title: Tags
description: sample
sidebar_position: 9
---
# Cómo Usar Tags en Pawn

## Tipos de Datos

Para empezar a entender los tags en Pawn, debemos conocer un concepto básico: la programación consiste en hacer operaciones con datos (con números, con textos, y condicionales). Pero no todos los datos son iguales: puedes sumar dos números, pero no un número y un texto. Esto introduce el concepto de **tipado** en la programación: **diferenciar los tipos de datos** para saber qué operaciones podemos y no podemos realizar con ellos.

Pawn, si bien aparenta tener tipos de datos (como enteros, decimales, booleanos, textos y estructuras), **técnicamente no los tiene**. La razón es que, al ser un lenguaje diseñado para ser pequeño, limitado y simple, **todo se reduce a celdas** de memoria.

-----

## Tags

Sabiendo esto, Pawn te proporciona una manera de otorgar cierto tipado al lenguaje; es ahí donde entran los **tags** (etiquetas). Un tag es un **prefijo** que se coloca antes de la declaración de las variables y que permite indicar al compilador que debe tratar dicha variable de manera especial en determinadas circunstancias.

Los tags que hemos usado en tutoriales anteriores son los siguientes:

```cpp
Float:  // Para números decimales (números de punto flotante o reales)
bool:   // Datos booleanos (true o false)
new DB:handle // Tag personalizado
```

Ten en cuenta que `handle` en este ejemplo es el nombre de la variable y `DB` es el tag que se le asigna. Pawn permite tags personalizados, lo que te permite asignarles cualquier nombre.

Otro tag que quizás conozcas, proveniente de la librería `a_mysql`, es:

```cpp
new MySQL:handle;
```

En Pawn, `bool` y `Float` son **tags predefinidos** (para usar `Float` debes incluir una librería que implemente el uso de números racionales o de punto flotante; en SA-MP ya viene en la librería `a_samp` o, alternativamente, en el *include* `float.inc`).

Llevándolo a la práctica, los tags nos ayudan a asegurar que una variable siempre sea usada bajo determinadas circunstancias. Veámoslo en código:

Un tag es un **prefijo** que va siempre al principio de la declaración de una variable. Una vez declarada, no hace falta colocarla de nuevo:

```cpp
new Float:MiVariable;
MiVariable = 1.000;
```

Ahora, si intentamos asignarle a la variable otro tipo de dato, obtendremos una advertencia (*warning*):

```cpp
MiVariable = true;
//warning 213: tag mismatch
```

Por lo tanto, debemos **respetar** los tags de las variables.

-----

## Tags Débiles y Tags Fuertes

Si prestaste atención, notaste que entre los tags mostrados hay uno en particular (`bool`) que tiene la primera letra en minúscula. Lo importante es saber que existen dos tipos de tags:

1.  **Tags Fuertes:** Comienzan con una letra mayúscula (p. ej., `Float:`, `DB:`).
2.  **Tags Débiles:** Comienzan con una letra minúscula (p. ej., `bool:`).

En la mayoría de los casos, funcionan de manera similar. Sin embargo, el **cambio implícito** de la etiqueta (asignar un valor con un tag diferente o sin tag) generará una advertencia:

  * Esto casi nunca sucede con tags débiles.
  * Sucede **siempre** con tags fuertes.

Esta advertencia te indicará que es probable que los datos se estén usando incorrectamente.

Un ejemplo muy sencillo es el siguiente:

```cpp
new
    Fuerte:VariableFuerte,
    debil:VariableDebil,
    VariableVacia;

VariableVacia = VariableFuerte; // Warning (Asignar fuerte a vacía)
VariableVacia = VariableDebil;  // No warning (Asignar débil a vacía)

// Sin embargo, no funciona al revés:
VariableDebil = VariableVacia; // Warning (Asignar vacía a débil)
```

-----

## Funciones con Tags

A las funciones también se les puede asignar tags, así como hacer que devuelvan datos con esos tags. Para hacerlo, simplemente coloca el tag antes del nombre de la función:

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

Las funciones con tags deben estar **declaradas** antes de ser llamadas o invocadas. Si no lo hacemos, aparecerá esta advertencia:

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

Como se puede ver, si queremos guardar el resultado en una variable, debemos crearla con el tag `Float` (ya que el resultado viene con ese tag al ser un dato decimal). En resumen, los tags permiten al compilador verificar que se asignen valores compatibles a las variables, lo que ayuda a **evitar errores de tipo de dato** durante la compilación y la ejecución. Rara vez tendrás que crear funciones como estas, pero sí tendrás que usarlas.

-----

## Ejemplo con `a_samp`

Veamos un ejemplo con la librería `a_samp` de SA:MP, específicamente con la creación de **TextDraws**, que son una forma de mostrar texto y figuras en la pantalla. La librería `a_samp` proporciona la función `CreatePlayerTextDraw`.

Esta función tiene la palabra clave `native` (la cual puedes ignorar, ya que solo sirve para definir funciones que se comunican con la aplicación, en este caso `samp-server.exe`). Esta función tiene como tag de retorno `PlayerText`, es decir, devuelve un dato de tipo `PlayerText`:

```cpp
native PlayerText:CreatePlayerTextDraw(playerid, Float:x, Float:y, text[]);
```

En la implementación lo veríamos así:

```cpp
// Esta variable se usa para guardar el ID del textdraw.
// Como CreatePlayerTextDraw solo puede usarse con el tag PlayerText,
// creamos una variable con dicho tag:
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Primero, creamos el textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Bienvenido");

    // Y lo mostramos
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 0;
}
```

Si revisamos cómo está declarada `PlayerTextDrawShow` (función para mostrar los *textdraws*), veremos que, para usarla, debemos pasar como argumento una variable con un tag **`PlayerText`**:

```cpp
native PlayerTextDrawShow(playerid, PlayerText:text);
```

De esta forma, podemos entender cómo usar las funciones que requieren variables con tags específicos. Si lo piensas bien no es complicado, aunque a veces pueda resultar un poco engorroso. Sin embargo, estas "molestias" nos ahorran problemas en producción cuando nuestro programa esté en funcionamiento.

-----

## Uso de `enums` como tags

Los `enums` pueden ser usados como tags:

```cpp
enum E_WEEK_DAYS {
    E_DAY_LUNES,
    E_DAY_MARTES,
    E_DAY_MIERCOLES,
    E_DAY_JUEVES,
    E_DAY_VIERNES,
    E_DAY_SABADO,
    E_DAY_DOMINGO
}


stock E_STATUS:getday(E_WEEK_DAYS: day)
{
	switch(day)
	{
		case E_DAY_LUNES: printf("feliz lunes")
	}
	return status;
}

main() {
    GetDayMessage(E_DAY_LUNES);
    return 0;
}
```

si colocamos algo distinto a `E_STATUS_WARNING` o `E_STATUS_ERROR` el compilador no advertirá

```cpp
main() {
	imprimirStatus(0, 123);
	return 0;
}
```

```
warning 213: tag mismatch: expected tag "E_STATUS", but found none ("_")
```

-----

## Variables sin Tags (Untagged)

Ahora quizás te preguntes qué ocurre con las variables que no tienen tag. Bueno, estas implícitamente se crean como un **tipo de dato numérico con el valor de 0**. Es por eso que no hace falta asignarles `0` cuando queremos hacer un ciclo `for`:

```cpp
for(new i; i < 10; i++)
{
    printf("%d", i);
}
```

Como verás, no hace falta asignar `new i = 0;` porque es redundante. No obstante, esto queda a gusto de cada programador, ya que algunos prefieren ser más explícitos.

Como se describió anteriormente:

  * Las variables sin tag (**vacías**) generarán **warning** si intentas asignarles una variable con **tag fuerte**.
  * **No** generarán *warning* si les asignas una variable con **tag débil**.
  * Una variable **débil** **no** puede recibir una asignación de una variable **vacía** (*warning*).

Gracias a que las librerías suelen usar mayoritariamente (si no todas) **tags fuertes**, obtendrás advertencias si los usas incorrectamente. Por ello, **no debes dejar ningún warning en la compilación**.

-----

## La función `printf` 

La función `printf`, hecha para imprimir textos en la consola, y otras similares como `format`, tienen una particularidad: en su uso solo aceptan ciertos tags en las variables. Esto se indica en sus declaraciones con `{Float,_}`:

```cpp
native printf(const format[], {Float,_}:...);
native format(output[], len, const format[], {Float,_}:...);
```

En caso de no pasarles una variable compatible, como `Float`, un número o un texto, nos dará un *warning*:

```cpp
#include <a_samp>
main(){
    new DB:DatabaseID;
    printf("%d", DatabaseID);
}
//warning 213: tag mismatch: expected tags "Float", or none ("_"); but found "DB"
```

Para evitar este *warning* al querer imprimir un dato que tiene un tag personalizado, debemos **forzar el tipado** colocándole el tag **`_`** (el tag **vacío** o *untagged*):

```cpp
#include <a_samp>
main(){
    new DB:DatabaseID;
    printf("%d", _:DatabaseID);
}
```

Hay mucho más sobre los tags, pero esto es lo más importante y común que verás programando con Pawn.



