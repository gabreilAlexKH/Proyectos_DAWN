# Proyecto 04



# Instrucciones #
Api_enterprise
1. Cree una base de datos llamada enterprise en MySql corriendo dentro de este el sql [enterprise.sql](/archivos_instalacion/enterprise.sql)
2. Asigne el usuario y contraseña corepondiente en su conexion de base de datos para campos password y username de development en [config.json](/api_enterprise/config/config.json) Nota: Cambie el puerto de ser nesesario para su conexion
3. Asignar puerto 4501 con "set PORT=4501" en la carpeta [api_enterprise](/api_enterprise)
4. Levantar el servidor  "npm run devstart" en la carpeta [api_enterprise](/api_enterprise)

Api_sales
1. Mediante su navegador compruebe que la base de datos siga activa revisando el url https://basedatos-api-sales-default-rtdb.firebaseio.com/log_sales.json  
2. Asignar puerto 4502 con "set PORT=4502" en la carpeta [api_sales](/api_sales)
3. Levantar el servidor  "npm run devstart" en la carpeta [api_sales](/api_sales)


Api_total
1. Asignar puerto 4503 con "set PORT=4503" en la carpeta [api_total](/api_total)
2. Levantar el servidor  "npm run devstart" en la carpeta [api_enterprise](/api_total) 

