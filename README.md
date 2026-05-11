# motor-logico-prolog
## PI_03. Programacion asincrona, programación logica y funcional, hecho por: Irad Francisco Canche Galvan


# Motor de Inferencia Lógica como Servicio

Este proyecto consiste en un servidor web desarrollado en **Node.js** que expone un motor de inferencia lógica basado en **Prolog**. Permite realizar consultas lógicas sobre una base de conocimiento declarativa a través de una API REST.

## 🛠️ Tecnologías utilizadas
* **Lenguaje:** JavaScript (Node.js)
* **Motor Lógico:** Tau Prolog
* **Framework Web:** Express
* **Paradigmas:** Lógico, Funcional y Asíncrono.

## 🛠️ Instalación y ejecución local

Sigue estos pasos para correr el proyecto en tu computadora:

1. **Clonar o descargar** este repositorio.
2. Abrir una terminal en la carpeta del proyecto.
3. Instalar las dependencias necesarias ejecutando:
  npm install
4. Iniciar el servidor con el comando:
node server.js
El servidor estará activo en: http://localhost:3000

## 📑 Instrucciones de uso
Para realizar una consulta, debes enviar una petición POST al endpoint /query con un cuerpo en formato JSON.

Ejemplo de consulta (vía Thunder Client / Postman):
URL: http://localhost:3000/query

Método: POST

Cuerpo (JSON):

JSON
{
  "query": "penalizacion_aplicable(juan)."
}
Respuesta esperada:
JSON
{
  "resultado": "true",
  "mensaje": "Inferencia realizada con éxito"
}

## 📂 Archivos del proyecto
server.js: Servidor Express y configuración del motor Tau Prolog.

base.pl: Base de conocimiento con hechos y reglas lógicas.

Reporte_Motor_Inferencia.pdf: Documentación detallada del proyecto.
