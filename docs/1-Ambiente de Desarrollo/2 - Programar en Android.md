---
title: Programar en Android
description: sample
sidebar_position: 2
---
Desarrolla, edita y compila scripts Pawn directamente en tu dispositivo Android utilizando la potente combinación de Termux y Acode, que es esencial para el desarrollo de servidores de [San Andreas Multiplayer (SA-MP)](https://www.sa-mp.mp/).

![view](https://raw.githubusercontent.com/neetoons/pawn-android-toolchain/main/view.gif)

-----

# Guía de Configuración

## Requisito de Instalación: F-Droid

Para la mejor experiencia y para asegurarte de tener las versiones más actualizadas de las herramientas requeridas, recomendamos encarecidamente utilizar [F-Droid](https://f-droid.org/F-Droid.apk).

Recomendación: Instala primero el cliente [F-Droid](https://f-droid.org/F-Droid.apk), y luego instala Termux y Acode directamente desde la tienda F-Droid.

## Aplicaciones Requeridas

  * [Termux](https://f-droid.org/en/packages/com.termux/): Este es el emulador de terminal que proporciona un potente entorno Linux en tu dispositivo. Aloja el [compilador Pawn](https://github.com/openmultiplayer/compiler) y el servidor necesario para la comunicación.
  * [Acode](https://f-droid.org/en/packages/com.foxdebug.acode/): Este es el editor de código principal que utilizarás para escribir y gestionar tus proyectos.
  * [AcodeX - Terminal](https://acode.app/plugin/bajrangcoder.acodex): Plugin de Acode que permite la conexión al servidor de Termux, permitiéndote ejecutar comandos de compilación directamente desde tu editor.

> ⚠️ Nota de Permisos
> Durante el proceso de configuración, si alguna aplicación (especialmente Termux o Acode) solicita permisos de acceso a archivos de tu almacenamiento (por ejemplo, `/sdcard`), por favor, concédelos. Esto es necesario para que el compilador lea los archivos de tu proyecto y para que Acode escriba la salida compilada.

## 1\. Configuración de Termux

Primero, abre la aplicación Termux y ejecuta los siguientes comandos (opcional, pero muy recomendado):

```bash
pkg update
pkg upgrade
```

A continuación, ejecuta el siguiente comando para comenzar la instalación del compilador utilizando el script proporcionado:

```sh
curl -sL https://raw.githubusercontent.com/neetoons/pawn-android-toolchain/refs/heads/main/environment.sh | bash
```

  * Si se te pide que concedas permisos de acceso a archivos, por favor, hazlo.
  * Si se te presentan preguntas de **Y/N**, ingresa `Y` o simplemente presiona **Enter**.
  * Una vez que la instalación esté completa, ejecuta el comando `axs`. Este comando inicia un servidor, permitiendo que la aplicación **Acode** se conecte al entorno Termux.
  * Este comando mostrará una dirección IP privada y un número de puerto que utilizarás en Acode para establecer la conexión.

## 2\. Integración con Acode

Acode servirá como tu editor principal y tu interfaz de terminal.

  * En la aplicación Acode, ve a la sección de **Plugins** e instala el plugin [**AcodeX - Terminal**](https://acode.app/plugin/bajrangcoder.acodex).
  * Para usar **AcodeX**, presiona `Ctrl+K` o busca `"Open Terminal"` en la paleta de comandos (que se puede abrir presionando `Ctrl+Shift+P`).
  * Ingresa el número de puerto mostrado por el comando `axs` en Termux, y la sesión de terminal debería iniciarse.
  * Para ingresar al entorno especializado para la compilación (a menudo un contenedor/shell de Alpine Linux), ejecuta el siguiente comando en la terminal de AcodeX:

<!-- end list -->

```sh
startalpine
```

## 3\. Compilación de tu Proyecto

Una vez que estés en la terminal de AcodeX ejecutando el entorno Alpine, debes navegar a los archivos de tu proyecto.

Para localizar tu proyecto en la terminal, utiliza los siguientes comandos:

```sh
cd /sdcard
# Esto mostrará las carpetas principales de tu dispositivo
ls
# Navega a la carpeta que contiene tu gamemode
cd Documents/samp-super-roleplay
```

Una vez dentro del directorio de tu proyecto, puedes ejecutar el compilador.

```sh
pawncc main.pwn
```

> `main.pwn` es un nombre de ejemplo, debes reemplazarlo con el nombre de tu gamemode/script.

Puedes volver a ejecutar el comando rápidamente presionando la **Flecha Arriba** en la terminal de AcodeX.

> El comando `pawncc` buscará la carpeta `include` en el directorio `qawno`. Si quieres que la busque en el directorio `pawno`, usa `pawncc-old`.

-----

## Resumen del Flujo de Trabajo

Siempre que quieras trabajar en tu proyecto y compilar, seguirás estos pasos:

1.  Abre **Termux** y ejecuta `axs`.
2.  Abre **Acode**.
3.  Abre la **Terminal AcodeX** (puede que se conecte automáticamente).
4.  Ejecuta `startalpine`.
5.  Navega a la carpeta de tu proyecto usando `cd` en los directorios de `/sdcard`.

-----

## Alternativa a Acode (Neovim)

Puedes usar Neovim como tu editor directamente dentro de la terminal de Termux, eliminando la necesidad de Acode. Esto puede ser más rápido y fácil de usar, siempre y cuando estés familiarizado con la herramienta.

-----

## ¿Por qué se utiliza Alpine Linux?

El uso de Alpine Linux se debe a que el [Compilador Pawn](https://github.com/openmultiplayer/compiler) no funciona correctamente (implícitamente en otros sistemas), este es un problema que posiblemente se resuelva en el futuro. Además, es más fácil/conveniente instalar otros programas.