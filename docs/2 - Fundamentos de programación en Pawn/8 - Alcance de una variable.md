---
title: Alcance de una variable
description: sample
sidebar_position: 8
---
## Alcance de las Variables (Scopes)

Existen tres niveles principales de alcance en PAWN, cada uno con un tiempo de vida y visibilidad distintos:

### 1. Alcance Global (Global Scope) 🌍

Una variable global es aquella que se declara **fuera de cualquier función**.

  * **Declaración:** Se realiza al inicio del *script*, antes de la primera función.
  * **Visibilidad:** La variable es accesible y puede ser modificada desde **cualquier parte del *script*** (dentro de cualquier función o bloque de código).
  * **Tiempo de Vida:** Persiste durante **toda la ejecución** del programa. Su valor se mantiene desde el inicio hasta el final.

```cpp
// Alcance Global
new MaxJugadores = 50; // Variable global

stock MiFuncion()
{
    // Accede a la variable global
    printf("Limite: %i", MaxJugadores);
}
```

-----

### 2. Alcance Local (Local Scope)

Una variable local es aquella que se declara **dentro de una función o dentro de un bloque de código** (como un bucle `for` o una sentencia `if`).

  * **Declaración:** Se utiliza la palabra clave `new` dentro de un par de llaves (`{...}`).
  * **Visibilidad:** La variable solo puede ser accedida **dentro de ese bloque de código** donde fue definida. No es visible fuera de él.
  * **Tiempo de Vida:** Se crea cuando la ejecución entra en el bloque y se **destruye** (su valor se pierde) inmediatamente al salir de ese bloque.
  

```cpp
stock Sumar(valor1, valor2)
{
    // Alcance Local: 'resultado' solo existe dentro de Sumar
    new resultado = valor1 + valor2;
    return resultado;
} // 'resultado' se destruye aquí

main()
{
    // Esto causaría un error: 'resultado' no es visible aquí
    printf("%i", resultado);
}
```

-----

### 3\. Alcance Estático (Static Scope) 🕰️

Cuando se usa el inicializador `static` en una variable dentro de una función, se combina el acceso local con la persistencia global.

  * **Declaración:** Se utiliza la palabra clave `static` dentro de una función.
  * **Visibilidad:** **Estrictamente local**. Solo es visible dentro de la función donde fue declarada.
  * **Tiempo de Vida:** **Persiste** durante toda la ejecución del programa (como una global), pero su valor se mantiene oculto y no se restablece entre llamadas a la función.

| Característica | Local Normal (`new`) | Estático (`static`) |
| :--- | :--- | :--- |
| **Visibilidad** | Solo dentro de la función. | Solo dentro de la función. |
| **Persistencia** | Se crea y se destruye en cada llamada. | **Mantiene su valor** entre llamadas. |

**Ejemplo:**

```cpp
stock Contador()
{
    // 'vecesLlamada' se inicializa a 0 solo la primera vez.
    static vecesLlamada = 0;
    vecesLlamada++;
    printf("Llamada numero: %i", vecesLlamada);
}

// 1. Llamada a Contador() -> Imprime "Llamada numero: 1"
// 2. Llamada a Contador() -> Imprime "Llamada numero: 2"
```