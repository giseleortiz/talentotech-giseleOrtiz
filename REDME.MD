👩‍💻 Autora
Desarrollado por Gisele Ortiz

🔗 www.linkedin.com/in/giseleortiz

## 🚀 Descripción General

Este proyecto consiste en el desarrollo de una API REST que permite gestionar productos de un catálogo mediante operaciones CRUD. La aplicación incluye autenticación basada en tokens JWT y utiliza Firestore de Firebase como base de datos en la nube.

Forma parte del proyecto final obligatorio de **TechLab**, en el que demostramos la capacidad de construir una arquitectura escalable, segura y profesional.

🌐 Tecnologías Utilizadas

Node.js
Express
Firebase (Firestore)
JWT
ESModules
dotenv

# 🧪 Proyecto Final - API REST de Productos con Firebase

## 🚀 Descripción General

Este proyecto consiste en el desarrollo de una API REST que permite gestionar productos de un catálogo mediante operaciones CRUD. La aplicación incluye autenticación basada en tokens JWT y utiliza Firestore de Firebase como base de datos en la nube.

Forma parte del proyecto final obligatorio de **TechLab**, en el que demostramos la capacidad de construir una arquitectura escalable, segura y profesional.

---

## 📋 Requisitos del Proyecto

### ✅ Requerimiento 1: Configuración Inicial

- Crear el directorio del proyecto con archivo `index.js` como punto de entrada.
- Inicializar proyecto con `npm init -y`.
- Añadir `"type": "module"` en `package.json` para utilizar ESModules.
- Configurar script `start` en `package.json`:
  json
  "scripts": {
  "start": "node index.js"
  }

✅ Requerimiento 2: Instalación de Dependencias

- npm install express cors body-parser dotenv firebase jsonwebtoken

✅ Requerimiento 3: Configuración del Servidor

Configurar el servidor web con Express en index.js.
Usar CORS para habilitar peticiones cross-origin.
Configurar body-parser para procesar JSON.
Crear un middleware global para rutas no encontradas (404).
Crear un archivo .env para gestionar variables de entorno.

✅ Requerimiento 4: Rutas

📦 Productos (products.routes.js)
GET /api/products → Lista todos los productos.
GET /api/products/:id → Obtiene un producto por ID.
POST /api/products/create → Crea un nuevo producto.
DELETE /api/products/:id → Elimina un producto por ID.

🔐 Autenticación (auth.routes.js)
POST /auth/login → Recibe credenciales de usuario, devuelve un token si son válidas.

✅ Requerimiento 5: Controladores y Servicios

Implementar una capa de controladores para manejar las rutas.
Implementar una capa de servicios para manejar la lógica de negocio.

✅ Requerimiento 6: Acceso a los Datos

Crear una capa de modelos.
Crear un proyecto en Firebase y configurar Firestore.
Crear una colección de productos con un documento inicial.
Conectar Firebase al proyecto y definir los métodos para interactuar con la DB.
Conectar servicios con los modelos para realizar operaciones.

✅ Requerimiento 7: Autenticación con JWT

Configurar JWT en el proyecto.
Crear un middleware para proteger rutas privadas.
Validar credenciales de usuario en el controlador de login.
Retornar un token Bearer al autenticar correctamente.
