# Proyecto 04
*Autor:* Gabriel Alexander Maldonado Rodriguez
Proyecto desarrolado con:
- node.js: v16.17.1
- npm: 8.19.2
- Express: 4.18.2
- sequelize: 6.28.0
- sequelize-auto: 0.8.8
- firebase-admin: 11.4.1
- Angular Material: 15.1.0
- Bootstrap: 5.2.3

# Instrucciones #
1. En todas la carpetas de proyecto corra "npm install" para descargar las librerias requeridas para cada proyecto 
3. Compruebe que su conexion de internet sea estable
2. Sigua las instruciones para levantar los servidores para los siguientes proyectos:


**Api_enterprise**
1. Cree una base de datos llamada enterprise en MySQL corriendo dentro de este archivo [enterprise.sql](/archivos_instalacion/enterprise.sql)
2. Asigne el usuario y contraseña corepondiente en su conexion de base de datos para campos password y username de development en [config.json](/api_enterprise/config/config.json) Nota: Cambie el puerto de ser nesesario para su conexion
3. Asignar puerto 4501 con "set PORT=4501" en la carpeta [api_enterprise](/api_enterprise) en consola
4. Levantar el servidor  "npm run devstart" en la carpeta [api_enterprise](/api_enterprise) en consola

**Api_sales**
1. Mediante su navegador compruebe que la base de datos siga activa revisando el url https://basedatos-api-sales-default-rtdb.firebaseio.com/log_sales.json  
2. Asignar puerto 4502 con "set PORT=4502" en la carpeta [api_sales](/api_sales) en consola
3. Levantar el servidor  "npm run devstart" en la carpeta [api_sales](/api_sales) en consola


**Api_total**
1. Asignar puerto 4503 con "set PORT=4503" en la carpeta [api_total](/api_total) en consola
2. Levantar el servidor  "npm run devstart" en la carpeta [api_enterprise](/api_total)  en consola

**AppWeb Ventas**
1. Levantar el servidor de cliente con  "ng serve" en la carpeta [adminVentas](/appWeb_Ventas/adminVentas) en consola

