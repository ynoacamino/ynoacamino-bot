# ➕ ynoacamino-bot 🚀

ynoacamino-bot es un bot de Discord creado con NestJS para automatizar tareas, responder comandos y programar mensajes, integrado con la API de Discord mediante Discord.js. Utiliza Prisma para la gestión de bases de datos, Docker para contenerización y GitHub Actions para CI/CD, ofreciendo una solución escalable y eficiente.

## 🚀 Descripción

Este repositorio contiene el código fuente del bot de Discord **ynoacamino-bot**. Desarrollado utilizando el framework NestJS, este bot ofrece funcionalidades como:

  * **Respuesta a comandos:** El bot puede responder a una variedad de comandos, como saludar, proporcionar información o realizar acciones específicas en Discord.
  * **Enrutamiento y envio programado de mensajes:** El bot puede enviar mensajes a canales específicos de Discord basados en ciertas condiciones o eventos.
  * **Integración con la API de Discord:** Utiliza la biblioteca Discord.js para interactuar con la API de Discord y enviar mensajes, reaccionar a eventos y realizar otras acciones en servidores de Discord.
  * **Automatización de flujos de trabajo:** Utiliza GitHub Actions para automatizar la contenerización a diferentes arquitecturas y la implementación de la aplicación en un servidor de producción.

## 🌐 Demo

Puedes probar la version en desplegada en mi servidor [aquí](https://bot.ynoacamino.site/).

## 📚 Recursos que se utilizaron
  * **NestJS:** Framework de Node.js para construir aplicaciones de servidor escalables y eficientes.
  * **TypeScript:** Lenguaje de tipado estático que mejora la fiabilidad y mantenibilidad del código.
  * **Prisma:** ORM para Node.js que facilita la interacción con bases de datos.
  * **Discord.js:** Biblioteca para interactuar con la API de Discord.
  * **GiyHub Actions:** Automatización de flujos de trabajo y CI/CD.
  * **Docker:** Contenedores para empaquetar y distribuir aplicaciones.

## Estructura del Proyecto
![Index Page](https://ynoa-uploader.ynoacamino.site/uploads/1738042976_Untitled-2024-11-30-1525%20%281%29.png)

```
ynoacamino-bot/
├── src/
│   ├── app.module.ts
│   ├── discordjs/
│   ├── prisma/
│   ├── replier/
│   ├── sender/
│   └── ...
├── prisma/schema.prisma
├── package.json
├── tsconfig.json
└── ...
```

  * **src:** Contiene el código fuente principal de la aplicación.
  * **prisma:** Contiene la configuración de Prisma para la base de datos.
  * **package.json:** Especifica las dependencias y scripts del proyecto.
  * **tsconfig.json:** Configura el compilador de TypeScript.

## ⚙️ Configuración 

  * **Token de Discord:** Crea un archivo `.env` y agrega tu token de bot de Discord:
    ```
    DISCORD_TOKEN=tu_token_aqui
    ```
  * **Otras configuraciones:** Consulta la documentación de NestJS y Prisma para obtener más información sobre cómo configurar otras opciones.

## 🛠️ Instrucciones de Uso

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/ynoacamino/ynoacamino-bot.git
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Inicializa la base de datos:
    ```bash
    npx prisma migrate dev
    ```
4.  Ejecuta el bot:
    ```bash
    npm run start
    ```

## 🤖 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias de mejora, no dudes en abrir un problema o enviar una solicitud de extracción.