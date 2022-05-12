# CRUDL React - Api REST .NET 5.0
SPA con React que consume una Api REST .NET 5.0

## 📌 Stack

- Framework .NET 5.0
- Entity Framework Core 5.0
- Arquitectura en Capas
- React 17
- Hooks: useState, useEffect
- React Bootstrap
- Axios

Extras:
- xUnit Test
- Swagger 

## 🔨 Instalación

### 1- Requerimientos mínimos:
Visual Studio 2019

Framework .NET 5.0

Node.js 14.17 (como mínimo)


### 2- Paquetes NPM
En caso de demora al obtener los paquetes NPM desde Visual Studio

Abrir la terminal en .\VECFleet\ClientApp

Ejecutar:

npm install

### 3- Base de Datos

En Visual Studio abrir la instancia de base de datos y ejecutar el script que se encuentra en:

.\VECFleet.DB\VECFleetDB.sql


La cadena de conexión se encuentra en: .\VECFleet\appsettings.json

"ConnectionStrings": {
	"DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=VECFleetDB;Trusted_Connection=True;MultipleActiveResultSets=true"
}

## 🌟 Autor

**Nicolás Domínguez** - [@Nikod111](https://github.com/Nikod111)
