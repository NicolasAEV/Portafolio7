## Table of Contents
1. [De que trata el proyecto]
2. [que tecnologias se usaron?]
3. [Dependencias]
4. [github y deploy pages]


### De que trata el proyecto
***
Modulo 8 IMPLEMENTACION DE API BACKEND NODE EXPRESS

Este proyecto del módulo 7 "Acceso a datos en aplicaciones Node" utiliza una combinación de herramientas y tecnologías, como Sequelize, pg, Express, Express-handlebars, Postgres y Tailwind CDN, para crear una página web de comercio electrónico. La aplicación permite realizar operaciones CRUD en el inventario, ver ventas y visualizar y comprar productos. Con estas funcionalidades, este proyecto es una demostración sólida de cómo se pueden utilizar estas tecnologías para crear aplicaciones web escalables y robustas en Node.js.

## que tecnologias se usaron?
***
 lista de la tecnologia utilizada
* [tailwind CDN ](https://tailwindcss.com/docs/installation/play-cdn): last version
* [Express ](https://expressjs.com): last version
* [Handlebars ](https://handlebarsjs.com): last version
* [postgres ](https://www.postgresql.org): last version



## Dependencias
Cors
Express
Express-Handlebars
Nodemon
sequelize 
pg
pg-hstore
***
```
$ git clone https://example.com
$ cd ../path/to/the/file
$ se dejara un archivo sql el cual contendra datos pre definidos
$ con el presente archivo backup-basedatos.sql deberas añadirlo a una base de datos postgres 
$ debes agregar tu acceso a localhost (host , port , user , password, nombre de bd) ./src/db/db.js
$ en caso de no querer agregar este archivo ir al archivo index y cambiar el siguiente codigo a true
$ linea 23 : force:true , alter:true
$ de manera que la base de datos al estar conectada se generara automaticamente 
$ en este caso deberas agregar un usuario cliente y categoria manualmente en la bd
$ npm i : inicializar proyecto
$ npm run dev : correr proyecto
```
## github
***
para acceder al modulo de inventario http://localhost:port/loginadmin
perfil github https://github.com/NicolasAEV/Portafolio6
link deploit https://portafolio7-production.up.railway.app


