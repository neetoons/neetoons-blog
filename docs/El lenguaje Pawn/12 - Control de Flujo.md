Sentencias, Expresiones y estructuras (condicionales y no condicionales)

### ¿Qué es una sentencia?
Es la unidad mas pequeña de código que puede ser ejecutada, es decir, cada linea de código es una sentencia.

### ¿Qué es una expresión?
Una expresión es una combinación de constantes, variables/arrays, funciones, y/o operadores, que son evaluadas según los parámetros indicados (si no entienden, no se preocupen pues al ver los ejemplos sera intuitivo).

### ¿Cuáles son las expresiones que existen y cómo se utilizan?
Existen infinitas expresiones, pues son una combinación de constantes, variables/arrays, funciones, y/o operadores. Para evaluar estas expresiones, existen 16 estructuras condicionales las cuales veremos a lo largo de ese tutorial.

### ``if``
Es una de las estructuras más importantes y simples, se utiliza para comparar, y según el resultado de la comparación, se realiza o no una determinada acción.

``Ejemplo:``
```cpp
public OnPlayerConnect(playerid)
{
    new
        rnd = random(2);

    if(rnd == 0)
        SendClientMessage(playerid, 0x00FF00FF, "Bienvenido al servidor");//Este código solo se ejecutara si la variable 'rnd' es igual a 0

    return 1;
}
```

``Ejemplo 2``
```cpp
public OnPlayerConnect(playerid)
{
    new
        rnd = random(2);

    if(rnd == 0)
    {
        //Este codigo (siguientes 2 lineas) solo se ejecutara si la variable 'rnd' es igual a 0
        SendClientMessage(playerid, 0xFF0000FF, "Fuera de mi servidor");
        Kick(playerid);
    }

    return 1;
}
```

**Nota:** Cuando el código a ejecutar, si la comparación es verdadera, es 1 sola sentencia (ejemplo 1), no es necesario usar llaves; de lo contrario se deben colocar los mismos (ejemplo 2).

### ``else``
Es al igual que 'if' una de las estructuras más importantes, y también una de las más utilizadas. Su uso va con la estructura vista anteriormente (sin excepción) y ejecuta una acción únicamente cuando la expresión en el if es falsa.
```cpp
Estado(playerid)
{
    if(IsPlayerConnected(playerid) == 1)
    {
        //Este codigo solo se ejecutara si la función 'IsPlayerConnected' retorna el valor 1 (el jugador cuyo id es el valor de la variable 'playerid' esta conectado).
        printf("El jugador %i está conectado", playerid);
    }
    else
    {
        //Este codigo solo se ejecutara si la función 'IsPlayerConnected' retorna el valor 0 (el jugador cuyo id es el valor de la variable 'playerid' esta desconectado).
        printf("El jugador %i esta desconectado", playerid);
    }
}
```

### ``else if``
Es una combinación de las 2 estructuras vistas anteriormente.
```cpp
Dinero(playerid)
{
    new
        money = GetPlayerMoney(playerid);

    if(money >= 10000)
        printf("El jugador %i tiene $10.000 o mas!", playerid);
    else if(0 <= money < 10000)
        printf("El jugador %i tiene entre $0 y $10.000", playerid);
    else
        printf("El jugador %i tiene menos de $0", playerid);
}
//Nota: "else if(0 <= money < 10000)" es equivalente a "else if(0 <= money && money < 10000)"
```

## ``Operador Ternario``
Es muy similar a if, else. Si A="true" retorna B, de lo contrario retorna C
```cpp
printf("Admin: %s", (Sinfo[Admin]) ? ("ON") : ("OFF"));
```
### ``for``
Es una forma de definir un loop(bucle) que consiste en tres pasos. El 1º consiste en la iniciación, el 2º es la comparación y el 3º es la renovación (cada paso se separa por ';').
```cpp
for(new i; i<100; i++)  
{  
    printf("Número: %d", i);  
}
```

### ``while``
Es otra forma de crear un loop muy similar a la anterior.
```cpp
new  
    i;  
  
while(i < 100)  
{  
    printf("Número: %d", i);  
    i++;//Dado que solo hay una comparación, debemos ser nosotros quienes modifiquemos el valor del contador  
}
```

### ``break``
Se utiliza para terminar con un bucle
```cpp
for(new i; i<10; i++){  
    if(i==5)  
        continue;  
  
    printf("%i", i);  
}
```
### ``continue``
```cpp
for(new i; i<10; i++){  
    if(i==5)  
        continue;  
  
    printf("%i", i);  
}
```

### ``return``
Se utiliza para retornar un valor de una función/callback, o bien para salir/interrumpir la ejecución misma (no se ejecutara el código que este luego de esta estructura).
```cpp
IsValidPlayer(playerid)  
{  
    if(playerid == INVALID_PLAYER_ID || !IsPlayerConnected(playerid))  
        return false;  
    return true;  
}
```
### ``assert``
```cpp
public OnFilterScriptInit()
{
    new
        num = random(100);

    assert(num > 50);
    printf("%i", num);

    return 1;
}

//Equivalencia utilizando un if
public OnFilterScriptInit()
{
    new
        num = random(100);

    if(num < 50)
        return;
    printf("%i", num);

    return 1;
}
```


### ``Switch``
Estas expresiones, van siempre juntas y se utilizan para realizar comparaciones en las cuales se quiere que según el valor, se realice una acción. Puede ser reemplazada por if, else if, else if, else, pero usando if sería más lenta y menos efectiva.

```cpp
switch(variable)  
{  
    case 0:  
        print("0");  
    case 1:  
        print("1");  
    case 2:  
    {  
        print("2");  
    }  
    case 3, 4:  
        print("3 o 4");  
    case 5 .. 10:  
        print("5 a 10");  
    default:  
        print("El valor de 'variable' es mayor a 10 o menor a 0");  
}
```
**Importante:** cuando luego de la expresión "case" sigue una sola línea, o un if(sin else/else if) la expresión puede ir libre de brakets, de lo contrario es necesario colocarlos.

## `default`

default handles switch statement results which aren't handled explicitly by case statements. See the case example for an example.