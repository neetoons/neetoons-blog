---
title: Inicializadores
description: sample
sidebar_position: 7
---
### 1. `stock` (Función)

El inicializador `stock` se usa para funciones que son **invocadas dentro de tu propio *script***.

- **Propósito:** Le dice al compilador que la función solo debe compilarse **si es llamada** en algún lugar del código. Si la función `stock` no se usa, se elimina del código compilado final, lo que ayuda a optimizar el tamaño del *script*.
- **Visibilidad:** Interna. Puede ser llamada por cualquier otra función (`stock`, `public`, `static`) dentro del mismo archivo.
 - **Ejemplo:**
    ```cpp
    stock CalcularDistancia(Float:x1, Float:y1) // Solo se compila si la llamas en otra parte.
    {
        // ...código de cálculo...
    }
    ```

### 2\. `public` (Función)

El inicializador `public` expone la función para que pueda ser llamada por el **entorno externo** (el servidor o *filterscripts*).

  - **Propósito:** Es fundamentalmente usado para **Callbacks** (funciones que el servidor llama cuando ocurre un evento, como `OnPlayerConnect`) y para crear funciones que otros *scripts* puedan invocar usando `CallRemoteFunction`.
- **Visibilidad:** Global/Externa.
- **Ejemplo:**
    ```cpp
    public OnPlayerText(playerid, text[]) // Callback estándar: el servidor la llama.
    {
        // ...
    }
    ```

-----

### 3\. `static` (Función y Variable)

El inicializador `static` se centra en la **visibilidad restringida** y la **persistencia** de los datos.

| Tipo                | Descripción                                                                                                                                                                                                                                                         |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Función static**  | La función es visible y solo puede ser llamada **dentro del archivo donde fue declarada**. Esto evita conflictos de nombres con funciones en otros archivos y mantiene la funcionalidad privada.                                                                    |
| **Variable static** | La variable **persiste** durante toda la vida del programa y **retiene su valor** entre llamadas a la función. A diferencia de las variables locales normales, que se recrean cada vez que se llama a la función, una variable `static` se inicializa solo una vez. |
| **Ejemplo**         | `static Contador(num) { static vecesLlamada = 0; vecesLlamada++; return num * vecesLlamada; }  ` La variable `vecesLlamada` solo existe dentro de `Contador`, pero su valor no se restablece.                                                                       |

---
### 4\. `const` (Variable y Parámetro)

`const` como tal no es un inicializador sino más bien un modificador de un inicializador (por ejemplo cambiar el comportamiento de `new`) garantiza que el valor de una variable o parámetro **no pueda ser modificado** después de su inicialización.

  * **Propósito (Seguridad):** Se utiliza para proteger variables de cambios accidentales. El compilador generará un error si intentas reasignar un valor a una variable `const`.
  * **Parámetros de Array:** En PAWN, los arrays se pasan a las funciones **por referencia** por defecto (permitiendo cambios). Usar `const` en un parámetro de array asegura que la función **solo pueda leer** el array, manteniendo la integridad de los datos originales.
  * **Ejemplo:**
    ```cpp
    new const MAX_VIDA = 100; // Constante de vida máxima
    // MAX_VIDA = 200; // ERROR de compilación

    stock ImprimirTexto(playerid, const texto[]) // 'texto' no puede modificarse dentro de esta función.
    {
        printf("%s", texto);
    }
    ```

-----

## `new` ( variables)

Ya vimos las declaraciones de variables con anteriormente con **`new`**, es la palabra clave fundamental para la declaración de variables y establece su alcance:
  * **Propósito:** Declara una **nueva variable local** dentro de una función o bloque de código.
  * **Tiempo de Vida:** La variable se crea al entrar en el bloque de código y **se destruye** (se pierde su valor) al salir de ese bloque. Es la forma más común de declarar variables temporales.
  * **Ejemplo:**
    ```cpp
    main()
    {
        new i = 0; // Se crea 'i'
        // ...
    } // 'i' se destruye aquí
    ```
 ---

  ## Enum 

Un enum define una lista de elementos a los cuales se les asigna un numero.

## ¿Cómo se utiliza?

La forma de utilización es la siguiente:
```cpp
enum nombre
{
    elemento_1,
    elemento_2,
    elemento_3,
    ...
    elemento_n
};
```
Nota: El ultimo elemento no lleva una , al final.

Usos comunes
Tal vez el uso mas común que le dan a los enums es para almacenar datos de jugadores u otros.
```cpp
enum PlayerData
{
    bool:Registrado,
    bool:Logueado,
    Dinero,
    Float:Vida,
    Nombre[MAX_PLAYER_NAME]
};

new PlayerInfo[MAX_PLAYERS][PlayerData];

public OnPlayerConnect(playerid)
{
    PlayerInfo[playerid][Registrado] = false;

    return 1;
}
```
Algo más...
Hasta aquí todo bien, pero quedarse solo con ese uso de enums es algo pobre. Los enums realmente son como una tabla, cada palabra del enum en realidad tiene un valor constante.

```cpp
const e_VAL1 = 0;
const e_VAL2 = 1;
const e_VAL3 = 2;

new Array[3];

main()
{
    Array[e_VAL1] = 10;
    Array[e_VAL2] = 15;
    Array[e_VAL3] = 120;
}
```

El código anterior utilizando enums seria el siguiente:
```cpp
enum e_VAL
{
    e_VAL1,
    e_VAL2,
    e_VAL3
};

new Array[3];

main()
{
    Array[e_VAL1] = 10;
    Array[e_VAL2] = 15;
    Array[e_VAL3] = 120;
}
```

  
Los dos códigos son análogos y compilaran perfectamente. De esta forma demostramos que los enums son valores constantes, estos valores son dados por el compilador  
automáticamente y comienzan en el 0. Ahora bien, podemos también ser nosotros quienes coloquemos estos valores.

```cpp
enum e_TEST  
{  
    e_UNO = 5,  
    e_DOS,  
    e_TRES,  
    e_CUATRO  
};
```

En el ejemplo anterior, la cuenta comenzara en el numero 5, de esta forma e_DOS es el 6, e_TRES el 4 y así sucesivamente. Pero también podemos asignar nosotros los valores que queramos  
y no únicamente el inicial.
```cpp
enum e_TEST  
{  
    e_UNO,//0 pues por defecto la cuenta comienza en 0  
    e_DOS,//1 pues el valor se auto-incrementa en 1  
    e_TRES = 15,//15 pues asignamos el valor 15  
    e_CUATRO,//16 pues el valor se auto-incrementa en 1  
    e_CINCO = 60,//60 pues asignamos el valor 60  
    e_SEIS[5],//Ahora acá hay una diferencia, esto es un bloque de 5 constantes, entonces e_SEIS tiene los valores del 61 hasta el 65  
    e_SIETE//Obtendrá el valor siguiente, es decir 66  
};  
  
main()  
{  
    printf("Size: %d", _:e_TEST);//Printeara en la consola "Size: 67" pues el tamaño de nuestro enum es 67  
}
```

Ahora bien, tal vez estén pensando que debería haber printeado "Size: 66", pero esto es incorrecto ya que no hablamos del valor máximo, si no de la cantidad de slots que tiene, y estos  
son 0-66, entonces hay 67 slots.  
  
Veamos otro ejemplo:

```cpp
enum e_TEST  
{  
    e_UNO,  
    e_DOS = 15,  
    e_TRES[5],  
    e_CUATRO  
};  
  
new  
    Test[e_TEST];  
  
main()  
{  
    Test[e_UNO] = 15;  
    Test[e_DOS] = 150;  
    Test[e_TRES] = "Hola";  
    Test[e_CUATRO] = 5;  
    Test[e_TEST:21] = 99;  
  
    printf("%d %d %s %d", Test[e_UNO], Test[e_DOS], Test[e_TRES], Test[e_CUATRO]);//Printeara en consola "15 150 Hola 99"  
}
```

Si esperaban que el código anterior printeara en el ultimo número el 5 se equivocaron, pues la ultima asignación sobre-escribe dicho valor.  
  
Ahora bien, porque tuve que colocar e_TEST:21 y no simplemente 21? Esto se debe a que los enums tambien son tags.

```cpp
enum E_TEST  
{  
    E_UNO,  
    E_DOS,  
    E_TRES  
};  
  
new  
    E_TEST:Var,  
    Var2;  
  
main()  
{  
    Var = E_TRES;  
    Var2 = E_TRES;//Nos dará una advertencia ya que Var2 es de tipo int y no E_TEST  
  
    printf("Var: %d %d", _:Var, Var2);  
  
    return 1;  
}
```

**Nota:**El tag **_:** se utiliza para remover cualquier tag de la variable/array/etc temporalmente y cambiar el mismo a int.  
  
  
Los enums también pueden ser anónimos, es decir no necesariamente tienen que tener un nombre.

```cpp
enum  
{  
    E_UNO,  
    E_DOS,  
    E_TRES  
};
```

Una particularidad es que existen enums de tag fuerte y débil.
```cpp
enum E_TEST_1 //Tag fuerte pues comienza con E mayúscula  
{  
    E_UNO,  
    E_DOS,  
    E_TRES  
};  
  
enum e_TEST_2 //Tag débil pues comienza con e minúscula  
{  
    e_CUATRO,  
    e_CINCO,  
    e_SEIS  
};  
  
main()  
{  
    new  
        Var;  
  
    Var = E_TEST_1:E_UNO;//Dará una advertencia  
    Var = e_TEST_2:e_CUATRO;//No da advertencia  
  
    #pragma unused Var  
}
```

### operador elipsis ``...``

Se lo conoce como el operador elipsis y uno de los usos que tiene es la inicialización de arrays, este operador utiliza los valores anteriores para asignar los valores sucesivos al array hasta completarlo.  
  
Veamos algunos ejemplos análogos para comprender mejor su funcionamiento:

```cpp
new Array[15] = {5, ...};  
new Array[15] = {5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5};
```

```cpp
new Array[10] = {0, 1, ...};  
new Array[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
```

```cpp
new Array[6] = {1, 5, ...};  
new Array[6] = {1, 5, 10, 15, 20, 25};
```

```cpp
new Array[10] = {1, 5, 8, ...};  
new Array[10] = {1, 5, 8, 11, 14, 17, 20, 23, 26, 29};
```
Como podemos observar, es una forma muy rápida de inicializar arrays sin tener que completar todos los valores. Si con los ejemplos no lo vieron, lo explicare:  
El operador elipsis lo que hace es en caso de solo haber un número, entonces completa con el mismo hasta el final o bien si hay mas de 1 numero restar los últimos 2 entre si y a partir del ultimo obtener el siguiente sumando dicha diferencia.

```cpp
new Array[5] = {a, b, ...};
new Array[5] = {a, b, b+1*(b-a), b+2*(b-a), b+3*(b-a)};
```
