**¿Qué es el alcance de una variable/array?**  
El alcance (scope en ingles) de una variable/array hace referencia al área/entorno dentro de la cual se puede utilizar la misma.  
Estos entornos se encuentran definidas por las llaves.

**Local**  
Solo puede ser utilizada dentro del entorno en el cual es declarada(ej.: Callbacks, funciones, if, etc.). Para declarar una variable/array de este tipo, la declaración debe ser realizada dentro del entorno en el que se desea usar la variable/array.



```cpp
public OnPlayerConnect(playerid)
{
    new
        str[32+MAX_PLAYER_NAME],
        name[MAX_PLAYER_NAME];//declaración de los arrays locales

    GetPlayerName(playerid, name, MAX_PLAYER_NAME);
    format(str, sizeof(str), ">>%s(%i) ha ingresado en el servidor", name, playerid);
    SendClientMessageToAll(0xFFFF00FF, str);

    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    GetPlayerName(playerid, name, MAX_PLAYER_NAME);
    format(str, sizeof(str), ">>%s(%i) ha dejado el servidor", name, playerid);
    SendClientMessageToAll(0xFFFF00FF, str);

    return 1;
}
```

**Local declarations**

`A local declaration appears inside a compound statement. A local variable can only be accessed from within the compound statement, and from nested compound statements. A declaration in the first expression of a for loop instruction is also a local declaration.`

**Global declarations**

`A global declaration appears outside a function and a global variable is accessible to any function. Global data objects can only be initialized with constant expressions.`