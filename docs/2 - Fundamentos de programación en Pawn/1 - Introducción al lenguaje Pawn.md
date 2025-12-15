---
title: " Introducción al lenguaje Pawn"
description: sample
sidebar_position: 1
---
El lenguaje **PAWN** es un lenguaje de *scripting* simple, tipado débilmente y similar en sintaxis al lenguaje **C**. Su uso más popular y conocido es como el lenguaje oficial de *scripting* para **SA-MP (San Andreas Multiplayer)**, la modificación multijugador del juego *Grand Theft Auto: San Andreas*.

- **Sintaxis familiar:** Si ya conoces lenguajes como C, C++ o C\#, la sintaxis de PAWN te resultará muy familiar, haciendo la curva de aprendizaje inicial bastante suave.
- **Diseño ligero:** Está diseñado para ser rápido y consumir pocos recursos, lo cual es ideal para entornos multijugador donde el rendimiento es clave.
- **Interacción con el Servidor:** PAWN se ejecuta en el servidor (el host) y utiliza una serie de **funciones nativas** proporcionadas por el *framework* de SA-MP para interactuar con el juego y los jugadores (por ejemplo, crear vehículos, enviar mensajes, mover jugadores, etc.).

### Estructura Básica de un *Script* en PAWN

Un *script* de SA-MP en PAWN se basa principalmente en el concepto de **Callbacks** (llamadas de retorno). El servidor de SA-MP invoca automáticamente estas funciones cuando ocurre un evento específico.