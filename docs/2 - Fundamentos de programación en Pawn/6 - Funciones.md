---
title: Funciones
description: sample
sidebar_position: 6
---
Una **función** es un bloque de código reusable que realiza una tarea específica. Piensa en ella como una "máquina" que puede recibir datos (entradas), procesarlos, y potencialmente devolver un resultado (salida).

-----

### I. Anatomía y Creación de una Función

Toda función se compone de dos partes principales: la **Cabecera (Header)** y el **Cuerpo (Body)**.

#### 1\. Estructura General

```cpp
Inicializador Tag:Nombre(Parámetros)
{
    // CÓDIGO (Sentencias que se ejecutan)
}
```

| Parte              | Descripción                                                                                                                                                              |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Inicializador**  | Define el alcance de la función: `static`, `stock`, `public`, o ninguno. *(Veremos estos en detalle más adelante).*                                                      |
| **Tag (Etiqueta)** | Indica el **tipo de valor que la función retornará** (si retorna algo). Si se omite, por defecto es un entero (`int`) pero en ese no caso no se coloca ninguna etiqueta. |
| **Nombre**         | Identificador único utilizado para **invocar** la función.                                                                                                               |
| **Parámetros**     | Una lista separada por comas de variables que recibirán los valores (**argumentos**) enviados a la función.                                                              |
| **Cuerpo**         | El bloque de código encerrado entre llaves (`{ }`) que contiene las instrucciones a ejecutar.                                                                            |

-----

### II. Tipos de Funciones por Interacción

#### 1\. Funciones sin Parámetros

Son funciones que **no necesitan ninguna entrada de datos** para ejecutarse. Siempre realizan la misma acción.

**Ejemplo:**

```cpp
stock KickAll()
{
    // La función itera y expulsa a todos los jugadores conectados.
    for (new i, j = GetMaxPlayers(); i < j; i++)
        if (IsPlayerConnected(i))
            Kick(i);
}
```

#### 2\. Funciones con Parámetros

Son funciones que **reciben uno o más valores (argumentos)**. Esto les permite ser flexibles y realizar acciones diferentes basándose en los datos proporcionados.

**Ejemplo:**

```cpp
stock GivePlayerMoney(playerid, money)
{
    // El 'playerid' y la cantidad 'money' son las entradas variables.
    if (IsPlayerConnected(playerid))
    {
        // ... Lógica para asegurar que la cantidad sea positiva y dársela al jugador.
    }
}
```

#### 3\. Funciones con Retorno de Valores

Una función puede devolver un único resultado al punto donde fue invocada. El **tipo de dato retornado** debe coincidir con el **Tag** que definiste en la cabecera.

**Formas de Retorno (Solo una es recomendada):**

| Método         | Sintaxis                       | Recomendación                                                   |
| :------------- | :----------------------------- | :-------------------------------------------------------------- |
| **return**     | `return count;`                | **Recomendado**. Es el estándar en la mayoría de los lenguajes. |
| **Asignación** | `GetConnectedPlayers = count;` | Alternativa válida en PAWN, pero menos clara.                   |

**Ejemplo:**

```cpp
stock GetConnectedPlayers()
{
    new count;

    for (new i; i < GetMaxPlayers(); i++)
        if (IsPlayerConnected(i))
            count++;

    // Retorna un entero (el número total de jugadores conectados)
    return count;
}
```

**⚠️ Error Común: Retornar Tipos Incompatibles**
Una función **siempre debe retornar el mismo tipo de dato** por todas sus rutas de ejecución (o bien, no retornar nada).

```cpp
stock Suma(valor1, valor2)
{
    // ...
    // ERROR: La función retorna un array/string ("ERROR...") en un caso,
    // y un número entero (valor1+valor2) en otro. Esto causará un error de compilación.
    return str;
    // ...
    return valor1 + valor2;
}
```

-----

### III. Conceptos Avanzados de Parámetros

#### 1\. Parámetros Opcionales (Argumentos por Defecto)

Puedes hacer que los parámetros sean opcionales asignándoles un **valor por defecto** al declararlos. Si el usuario no proporciona un argumento para ese parámetro, se usará el valor por defecto.

```cpp
stock SetPlayerTimeEx(playerid, hora, minutos = 0)
// 'minutos' es opcional, si no se envía, su valor será 0.
{
    SetPlayerTime(playerid, hora, minutos);
}

// Uso:
SetPlayerTimeEx(playerid, 12); // Se ejecuta como SetPlayerTime(playerid, 12, 0);
```

Para enviar un valor a un parámetro opcional mientras se omite uno anterior, puedes usar la sintaxis de **argumento por nombre** (`.nombre=valor`):

```cpp
stock SetPlayerPosEx(playerid, Float:x, Float:y, Float:z, Float:a = 0.0, Float:health = -1.0)
{ /* ... */ }

// Uso: Asigna 'health' pero omite el parámetro 'a' (ángulo), que toma su valor por defecto (0.0).
SetPlayerPosEx(playerid, 0.0, 0.0, 0.0, .health = 100.0);
```

#### 2\. Paso por Valor vs. Paso por Referencia

Esto define si los cambios hechos a un parámetro dentro de la función afectan a la variable original fuera de ella.

| Tipo de Paso | Descripción | Sintaxis |
| :--- | :--- | :--- |
| **Por Valor (Copia)** | La función recibe una **copia** del valor. Cualquier modificación dentro de la función **no afecta** a la variable original. **(Es el comportamiento por defecto)**. | `stock Func(valor_0, valor_1)` |
| **Por Referencia** | La función recibe una **referencia** a la variable original. Las modificaciones dentro de la función **sí afectan** a la variable original. | `stock Func(&valor_0, &valor_1)` |

**Clave:** El símbolo **ampersand (`&`)** en el parámetro indica **paso por referencia**.

| Regla Especial para Arrays |
| :--- |
| Por defecto, los **arrays siempre se pasan por referencia**. Si quieres que la función *no* pueda modificar el array original, debes usar la palabra clave **`const`** antes del parámetro. |

#### 3\. Parámetros Variables (Elipsis `...`)

Puedes crear funciones que acepten un número **indefinido o variable** de argumentos utilizando la **elipsis (`...`)** como último parámetro.

```cpp
// Declaración:
stock SumaTodo(...) // Acepta cualquier cantidad de argumentos
{
    new res;
    // Debemos usar funciones nativas como 'numargs()' y 'getarg()' para acceder a ellos.
    for (new i; i < numargs(); i++)
        res += getarg(i);
    return res;
}

// Uso:
printf("%i", SumaTodo(5, 6, 1, 100, 8)); // Suma 5 argumentos
```

-----

¿Sobre qué sección te gustaría profundizar ahora? Podemos ver los **Inicializadores** (`static`, `stock`, `public`) o las **Funciones Nativas** de PAWN.