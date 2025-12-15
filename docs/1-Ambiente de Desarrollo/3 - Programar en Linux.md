---
title: Programar en Linux
description: sample
sidebar_position: 3
---
Requisitos:
- Una copia de GTA San Andreas para PC - V1.0 [NOT V1.01, V2.0, V3.0], puedes usar [Lutris](https://lutris.net/) para instalar y gestionar el juego.
- tener instalado el client de SA:MP, puedes usar Lutris también.
- Compilador Pawn

## Instalación del compilador Pawn

Usa tu gestor de paquetes para instalar las dependencias requeridas, por ejemplo en Ubuntu seria asi:

```bash
sudo apt install gcc gcc-multilib make cmake git
```

Luego con `git` haz una copia del código del compilador:

```bash
git clone https://github.com/pawn-lang/compiler
cd ~/compiler/source
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release -DCMAKE_C_FLAGS=-m32 
make
```

Esto generará el `pawncc`y el `libpawnc.so` que deberás instalar en el sistema

```bash
mv pawncc  /usr/bin
mv libpawnc.so /usr/lib
```

Si tienes problemas para compilar a 32bits puedes ignorar el parametro `-DCMAKE_C_FLAGS=-32` pero no se compilará el `pawnruns` (no es escencial para trabajar con SA:MP) pero si es importante que uses `-DCMAKE_BUILD_TYPE=Release` porque sino el compilador no logrará compilar ciertos códigos debido a estar en modo debug.

## Configuración del editor

- Visual Studio Code




