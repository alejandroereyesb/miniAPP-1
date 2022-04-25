# miniAPP

MiniAPP Express con Pug de formulario de producto (nombre, precio, descripción) + input para subir imágen a Firebase Cloud Storage y guardar en un documento de Mongo datos y URL de la imagen.

# Link a la app lanzada en Heroku

https://product-miniapp.herokuapp.com/

# Configuración para inicializar en localhost
Instala las dependencias
```
npm i
```
Rellena el archivo `.env.example` con tus datos y cámbiale el nombre a `.env`
```
STORAGE_BUCKET=

MONGO_URI=
```
Deberás generar claves privadas en tu proyecto de Firebase. Una vez las tengas, rellena el archivo `service-account-example.json` y cámbiale el nombre a `service-account.json`
```
{
  "type": 
  "project_id": 
  "private_key_id":
  "private_key":
  "client_email": 
  "client_id": 
  "auth_uri": 
  "token_uri": 
  "auth_provider_x509_cert_url": 
  "client_x509_cert_url": 
}
```
Inicializa el proyecto
```
npm start 
```