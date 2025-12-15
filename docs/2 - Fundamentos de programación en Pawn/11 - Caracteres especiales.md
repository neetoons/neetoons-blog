---
title: Caracteres especiales
description: sample
sidebar_position: 11
---
## 1. Secuencias de Escape (Caracteres Especiales)

Las secuencias de escape son combinaciones de caracteres que comienzan con una **barra invertida** (`\`) y que, cuando se usan dentro de una cadena de texto (string), no representan su literal, sino una acción o un carácter especial invisible.

Se utilizan principalmente para formatear la salida en la consola o en el chat.

| Secuencia | Nombre | Acción/Uso |
| :--- | :--- | :--- |
| `\n` | **Nueva Línea** | Mueve el cursor al comienzo de la siguiente línea (salto de línea o **Enter**). |
| `\t` | **Tabulación** | Inserta un espacio de tabulación horizontal (un salto grande). |
| `\\` | **Barra Invertida** | Inserta el carácter literal de barra invertida (`\`). |
| `\"` | **Comillas Dobles** | Inserta el carácter literal de comillas dobles (`"`). |
| `\'` | **Comillas Simples** | Inserta el carácter literal de comillas simples (`'`). |
| `\0` | **Carácter Nulo** | Termina la cadena de caracteres (fundamental en los strings). |

**Ejemplo de Uso:**

```cpp
printf("Linea 1\nLinea 2\t(Tabulado)");
// Salida:
// Linea 1
//    Linea 2 (Tabulado)
```