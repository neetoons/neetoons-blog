**Funciones Simples**  
  
**¿Qué es una función?**  
Podemos definir a una función como un conjunto de sentencias que son ejecutadas cuando invocamos la función.  
  
**¿Cómo crear una función?**  
Una función esta compuesta por 2 partes, la cabecera (header) y el cuerpo (body); el header contiene el inicializador, el tag, el nombre y los parámetros de la misma. El cuerpo por otro  
lado, contiene todo el código que se ejecuta.

Inicializador Tag:Nombre(parametros)  
{  
    //Todo lo que este aquí entre las 2 llaves es el cuerpo de la función  
}

|   |   |
|---|---|
|Inicializador|Indica que es una función, puede ser static, stock, public o ninguno (mas adelante veremos que son estos inicializadores|
|Tag|Tipo de función, al igual que las variables si no se indica ninguno, por defecto es entero. Esto indica el valor que retornara la función (si es que retorna algun valor).|
|Nombre|Nombre de la función, utilizado luego para invocarla.|
|Parametros|Indica el nombre que se le dara a las variables que reciban los argumentos enviados.|

**Funciones sin parámetros**  
Son funciones a las cuales no se le pasan argumentos, es decir que realizan únicamente una acción y siempre la misma.

```cpp
stock KickAll()
{
    for(new i, j=GetMaxPlayers(); i<j; i++)
        if(IsPlayerConnected(i))
            Kick(i);
}
```

Esa es una función muy simple que solo kickea a todos los jugadores conectados.  
  
**Funciones con parámetros**  
Son funciones las cuales reciben argumentos los cuales pueden variar y según los mismos puede que la función ejecute diferentes sentencias.

```cpp
stock GivePlayerMoney(playerid, money)  
{  
    if(IsPlayerConnected(playerid))  
    {  
        if(money >= 0)  
            GivePlayerMoney(playerid, money);  
        else  
            GivePlayerMoney(playerid, -money);  
    }  
}
```

La función anterior siempre otorgara una cantidad positiva de dinero al jugador.

Funciones con retorno de valores
Las funciones pueden retornar valores, pero el tipo de valor retornado debe ser siempre el mismo y debe coincidir con el tipo de la función.

Existen dos formas de retornar valores (aun que por claridad sugiero utilizar la primera):

```cpp
stock GetConnectedPlayers()
{
    new
    count;

    for(new i; i<GetMaxPlayers(); i++)
        if(IsPlayerConnected(i))
            count++;

    return count;
}
```

```cpp
stock GetConnectedPlayers()
{
    new
    count;

    for(new i; i<GetMaxPlayers(); i++)
        if(IsPlayerConnected(i))
            count++;

    GetConnectedPlayers = count;
}
```

Ahora voy a mostrar una forma errónea de retornar valores.
```cpp
stock Suma(valor1, valor2)
{
    new str[128];
    if(!IsNumeric(valor1) || !IsNumeric(valor2)){
        str = "ERROR: Los valores deben ser numéricos";
        return str;
    }
    return valor1+valor2;
}
```

La función Suma, va a generar un error a la hora de compilar, dado que el primer valor que retorna es un string o array, mientras que el segundo es un numero entero.

**Funciones Complejas**  
  
**Pasar parámetros como opcionales**  
Esto es realmente muy simple en realidad, solo debemos agregar '=valor_default' a la variable q queramos que sea opcional y listo.

```cpp
stock SetPlayerTimeEx(playerid, hora, minutos=0)  
{  
    SetPlayerTime(playerid, hora, minutos);  
    printf("Un admin seteo la hora de %i a %i:%i", playerid, hora, minutos);  
}  
  
//Como tiene parámetros opcionales podemos:  
SetPlayerTimeEx(playerid, 12);
```

```cpp
stock SetPlayerPosEx(playerid, Float:x, Float:y, Float:z, Float:a=0.0, Float:health=-1.0)  
{  
    SetPlayerPos(playerid, x, y, z);  
    SetPlayerFacingAngle(playerid, a);  
    if(health != -1.0)  
        SetPlayerHealth(playerid, health);  
  
    return 1;  
}  
  
//Si quisiéramos utilizar la función con el parámetro health pero no el angulo accedemos así:  
SetPlayerPosEx(playerid, 0.0, 0.0, 0.0, .health=100.0);
```

**Pasar parámetros por valor y por referencia**  
Parámetro por valor, a la función le llega una copia del valor. Podemos modificar el mismo pero el original no cambiara.

```cpp
main()  
{  
    new  
        val_0 = 1,  
        val_1 = 3,  
        val_2 = Func(val_0, val_1);  
  
    //Si bien Func modifica los valores que le dimos, val_0 y val_1 seguirán valiendo 1 y 3 respectivamente  
    printf("%i %i %i", val_0, val_1, val_2);  
  
}  
  
stock Func(valor_0, valor_1)  
{  
    valor_0 -= Valor_1 * 5;//modificamos valor_0  
    return valor_1 += Valor_0 + Valor_2;  
}
```

Ahora bien, existe una forma de editar los valores que se le asignan a una función. Esto es lo que se conoce como "por referencia". Para hacer esto, solo es necesario agregar  
el carácter '&' delante de la variable que queremos pasar como referencia, de lo contrario (si no lo ponemos), esta variable será pasada por valor.

```cpp
main()  
{  
    new  
        val_0 = 1,  
        val_1 = 3,  
        val_2 = Func(val_0, val_1);  
  
    printf("%i %i %i", val_0, val_1, val_2);  
  
}  
  
stock Func(&valor_0, &valor_1)  
{  
    valor_0 -= Valor_1 * 5;  
    return valor_1 += Valor_0 + Valor_2;  
}
```

**Importante:** por defecto, los arrays no pueden ser pasados por valor, ¿Qué quiere decir esto? que si en una función especificamos uno de los parámetros como array, será pasado automáticamente por referencia y no por valor. Para pasar un array por valor se debe agregar 'const' delante del mismo.  
  
  
**Parámetros variables**  
Para crear una función con parámetros indefinidos, debemos hacerlo utilizando la elipsis y podemos ayudarnos con otras funciones nativas para saber la cantidad de argumentos y obtener un argumento según el index del mismo.

```cpp
main()  
{  
    printf("%i", SumaTodo(5, 6, 1, 100, 8));  
    printf("%i", SumaTodo(1, 9, 6, 169, 17, 65, 243, 213));  
}  
  
stock SumaTodo(...)  
{  
    new res;  
    for(new i; i<numargs(); i++)res += getarg(i);  
    return res;  
}
```

```cpp
//Declaración:  
SetPlayerRandomColor(playerid, ...)  
{  
    new  
        rnd,  
        count;  
  
    count = numargs() - 1;//numeramos los argumentos.  
    rnd = random(count);  
  
    if(!count)  
        return SetPlayerColor(playerid, GetPlayerColor(playerid));  
  
    return SetPlayerColor(playerid, getarg((!rnd) ? (1) : (rnd)));  
}  
  
//Uso:  
SetPlayerColor(playerid, 0xFF0000FF, 0xFFFF00FF, 0x0000FF66, 0x66FFA8FF);
```

