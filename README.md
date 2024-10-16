# Web View Sanitas Centro de experiencia

Este es un web view solicitado para la empresa Sanitas. El objetivo de este proyecto es que un usuario pueda entrar para obtener informacion con respecto al tipo de servicio que requiere, ya sean autorizaciones, novedades de afiliacion, incapacidades y licencias o información en general.

Es un formulario que además de verificar al usuario, y que sea un afiliado a la eps de Sanitas, lo redigirá al usuario a una video llamada con un asesor, que le ayudará a gestionar sobretodo el tema de incapacidades.

## Tecnologías utilizadas

- **Framework:** ReactJs
- **Versión:** 18.18.0
- **Herramientas desarrollo:** NodeJs - npm
- **Versión node:** 18.18.0
- **Versión npm:** 10.7.0

## Arquitectura

Atomic design. Componentes organizados de las necesidades más pequeñas a las más grandes.

## Estructura frontend

Web View con modales incluidos

## Estructura de navegación

El proyecto se compone de la siguiente estructura de carpetas:

![image](https://github.com/user-attachments/assets/c9a4369c-2b95-42ea-8353-c54c6a21f130)

- **node_modules** Contiene todos los elementos y paquetes necesarios para el correcto funcionamiento de la aplicación. Se genera al ejecutar por primera vez el comando `npm install`

- **public** Contiene los elementos estáticos que queramos almacenar en la app.

- **src** Contiene todos los elementos y componentes del desarrollo

- **.gitignore** Es el archivo que indica los archivos y carpetas que deben ignorarse para ser subidos al repositorio remoto.

- **.nvmrc** Este archivo permite que el desarrollador utilice una versión de node compatible con el proyecto utilizando el manejador de node nvm

- **.prettierrc** Este archivo es para configuración de formateador utilizando prettier en visual studio code. Es opcional.

- **.eslint.config.js** Este archivo es el que permite hacer el resaltado de errores en el código. Es opcional

- **index.html** Es el punto de acceso público de la aplicación. No se debe mover ni borrar.

- **package.json** Es el archivo clave para poder instalar las dependencias del proyecto cuando se quiera correr en local o se quieran hacer ajustes en desarrollo

- **vite.config.js** Tiene la configuración necesaria de Vite para correr el proyecto de manera correcta. Necesario para temas de modificaciones en el desarrollo.

### Carpeta src

La estructura de la carpeta src es la siguiente

![Screenshot 2024-10-15 183313](https://github.com/user-attachments/assets/44cd08a4-7b01-454a-a7af-c897a2f8068b)



- **main.jsx** es el punto de entrada de la aplicación, especialmente para poder correrla en una máquina local.
- **App.jsx** carga el componente page de EpsSanitas junto al provider del contexto.
- **index.css** contiene los estilos generales de la página.
- **context** contiene el archivo con todo el contexto de la aplicación. El archivo index.jsx dentro de la carpeta context contiene toda la lógica de la aplicación junto con la creación de los estados de la misma.
- **assets** Carpeta que contiene las imágenes, íconos y contenido multimedia que se ve dentro de la landing page
- **atoms** Carpeta que contiene los elementos más pequeños de la página: botones, imágenes, links, entre otros.
- **molecules** Carpeta que contiene la agrupación de atoms para formar bloques visuales más grandes como por ejemplo modales, headers, entre otros.
- **pages** Carpeta que contiene el archivo que agrupa las moléculas para crear el web view completo.
- **Styles** Carpeta que contiene todos los estilos de todos los componentes de esta apliacion, ya sean atomos, moleculas o paginas.

## Cómo correr el proyecto

En primer lugar debe asegurarse de tener las dependencias mencionadas al inicio de este archivo en la sección "Tecnologías utilizadas". Adicionalmente se recomienda el uso del manejador de node nvm para tener una versión de node compatible con el proyecto.

#### Paso 1: Clonar el proyecto

El link del repositorio es el siguiente: [https://github.com/devteamsoundcari/sanitas-centro-experiencia
](https://github.com/devteamsoundcari/sanitas-centro-experiencia)
¡Atención! Este es un repo privado. Debe tener acceso aprobado por parte de un administrador además de haber sido agregado como colaborador al repositorio.

```
git clone git@github.com:devteamsoundcari/sanitas-AOL.git
```

Si hace uso de llaves ssh con github, se recomienda el uso de las mismas en el repo.

#### Paso 2: Instalar dependendencias

Como se mencionó antes se recomienda el uso de nvm para tener la versión adecuada de node y npm para el proyecto. Primero, estando dentro de la carpeta del proyecto, en una terminal ejecute

```
nvm use
```

Esto tomará el archivo .nvmrc y descargará e instalará la versión de node adecuada para este proyecto.

A continuación debe instalar todos los paquetes del package.json. Esto se hace con

```
npm i
```

Si todo sale bien y tiene la versión de node adecuada, tendrá una respuesta similar a esta

![image](https://github.com/user-attachments/assets/8c621438-cedc-4334-9b84-835de89f8b80)


Finalmente sólo tendría que correr el comando `npm run dev` para iniciar el proyecto y en la url `http://localhost:5173` podrá visualizar el proyecto con algo como esto

![image](https://github.com/user-attachments/assets/311adb5c-8bec-44c8-a290-d42c713bee9c)

