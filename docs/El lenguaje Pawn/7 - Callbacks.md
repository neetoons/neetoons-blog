**Callbacks**  
  
Si bien puede ser algo confuso y complicado para comenzar, es algo que se utiliza todo el tiempo y es básico para scriptear en este lenguaje.  
  
**¿Qué es un callback?**  
Un callback es una función la cual es pasada como argumento a otra función para ejecutar (o no) una o mas sentencias. Esto permite la re-utilización de código y ejecutar una o mas acciones para  
diferentes elementos que son el mismo objeto entre otras cosas. Dicho de otra forma, podría decirse que son como 'eventos' (aun que en realidad no lo son) y de esta forma, cuando pasa 'X' llamamos  
al callback OnX.  
  
**¿Para que sirve un callback?**  
Un callback sirve para ejecutar una o mas sentencias en un determinado momento (cuando dicho callback es llamado); el código ejecutado puede utilizar los argumentos del callback, los cuales representan  
en cierta forma un tipo de objeto, pero no necesariamente el mismo (ej: OnPlayerConnect se llama cuando un jugador se conecta, pero los ids en cada llamado pueden no ser los mismos).  
  
**¿Cómo utilizo un callback?**  
Para utilizar una callback, simplemente basta colocar el codigo el cual queremos que se ejecute en cada llamado de la misma dentro de su **definición**.  
  
**¿Por qué 'forward' y qué es?**  
La palabra forward indica al compilador que estamos definiendo una nueva función/callback. El porque es simple, pawn exige que primero se declare y luego se utilice.  
  
**¿Puedo crear mis propios callbacks?**  
Si, para esto se requiere declarar el callback y luego realizar una llamada al mismo en el momento que nosotros queramos.

```cpp
forward OnPlayerCallPlayer(playerid, calledid);//Aquí declaramos nuestro callback

//Definición de nuestro callback y sentencias que ejecutara el mismo
public OnPlayerCallPlayer(playerid, calledid)
{
    SendClientMessage(calledid, -1, "Te están llamando!");
    return 1;
}

//En algún momento dentro de una función o callback realizamos la llamada a nuestro callback con los argumentos que este recibirá
CallLocalFunction("OnPlayerCallPlayer", "ii", playerid, calledid);
```