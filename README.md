# Emoji Search

Este proyecto es una aplicación de busqueda de emojis utilizando la api gratuita de API NINJA

## Cómo levantar el proyecto

1. Clona el repositorio en tu máquina local usando `git clone <url_del_repositorio>`.

2. Navega hasta el directorio del proyecto usando `cd <nombre_del_directorio>`.

3. Instala las dependencias del proyecto usando `npm install`.

4. Entra em `https://api-ninjas.com/` y registrate para conseguir un API_KEY gratuito

5. Mete el API_KEY el valor en el fichero [.env.dev](./env.dev)

6. Inicia el servidor de desarrollo usando `npm run dev`. La aplicación debería estar disponible en `http://localhost:5173`.

## Revisión de hooks

1. u.seState para setear datos a utilizar en nuestro componente

2. useEffect para suscribirnos a dependencias y ejecutar código

3. useCallBack para memorizar el resultado de una función y evitar renderizados

4. useMemo para memorizar el cálculo de una variable y evitar renderizados

5. useRef para referenciar un elemento de nuestro código y hacer accciones de forma imperativa

6. customHook

## Ejercicio

1. Crear un componente para cuando no hay elementos (renderizado condicional) => Si hay elementos listado de iconos, si no, componente de no hay resultados.

2. Una vez conseguido el punto uno, introducir un componente de loading, primero hacer uno sencillo propio, y luego reaprovechar el del ejercicio 1.
