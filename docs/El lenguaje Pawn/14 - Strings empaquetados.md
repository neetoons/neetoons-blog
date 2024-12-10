**¿Qué son los strings empaquetados?**  
Los strings empaquetados (packed strings en ingles) son cadenas de texto que guardan 1 carácter por byte; los strings normales guardan un carácter por cell (4 ytes), por lo que utilizando strings empaquetados, guardamos bastante espacio.  
  
**La trampa**  
El problema que tienen los strings empaquetados es que como tenemos 1/4 del tamaño original para guardar los datos, cada carácter solo puede estar en la tabla ASCII original, o lo que es lo mismo  
el valor almacenado no puede salir del rango 0-255. Cualquier valor que este fuera de dicho rango solo saltara y caerá dentro del mismo.

```
El valor 300 salta y se convierte en 44; esto se debe a que 300 es mayor a 255 entonces el por la forma de almacenar utilizada en los strings empaquetados se pierde información. Una forma simple de calcular el valor
que se guardara (cuando el valor supera el numero 255) es: valor - 256.
```
**Nota:** Los strings empaquetados utilizan la codificación Little Endian para almacenar los datos.  
  
**¿Cómo se utilizan?**  
A diferencia de los strings/arrays normales, cuando se definen luego de ingresar el tamaño se agrega la palabra "char".  
  
Asignación:
```cpp
new  
    StringNormal[5],        //Este es un string de 5 cells o 20 bytes  
    StringPacked[5 char];   //Este es un string de 2 cells u 8 bytes  
  
main()  
{  
    StringNormal = "hola";  
    StringPacked = !"hola";//Para indicar que el contenido debe ser empaquetado, colocamos el '!' delante del string.  
  
    StringNormal[0] = 'H';  
    StringPacked{0} = 'H';//Notese que utilizamos llaves para acceder y no corchetes.  
}
```

  
Si se están preguntando porque el string empaquetado no es de 5 bytes, esto es porque se redondea al múltiplo de 4 SUPERIOR mas cercano (1 es 4, 3 es 4, 4 es 8 y asi).  
  
A continuación veremos la lectura de datos, la cual dado que nativamente SA-MP no tiene mucho soporte para estos arrays, se vuelve algo tedioso.
```cpp
new StringPacked[5 char];  
  
main()  
{  
    new  
        tmp[128];  
  
    strpack(StringPacked, "Hola");  
    strunpack(tmp, StringPacked);  
  
    format(tmp, 128, "%s, bienvenidos al servidor", tmp);  
    SendClientMessage(playerid, -1, tmp);  
}
```

**Nota:**Actualmente existe una librería (creada por Emmet_) la cual permite utilizar format directamente con strings empaquetados: [link](http://forum.sa-mp.com/showthread.php?t=481257).  
  
**¿Cuándo deben usarse strings empaquetados?**

- Strings utilizados no muy frecuentemente en el script.
- Strings muy grandes con valores de la tabla ASCII
- Para reducir la memoria utilizada
- Siempre que se use un array para almacenar números y estos sean chicos (valores de 0 a 255)
