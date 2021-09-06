# Client render React

[![Dependency Status](https://david-dm.org/cloverfield-tools/universal-react-boilerplate.svg)](https://david-dm.org/cloverfield-tools/universal-react-boilerplate)
[![devDependency Status](https://david-dm.org/cloverfield-tools/universal-react-boilerplate/dev-status.svg)](https://david-dm.org/cloverfield-tools/universal-react-boilerplate#info=devDependencies)
[![Travis-CI](https://travis-ci.org/cloverfield-tools/universal-react-boilerplate.svg?branch=master)](https://travis-ci.org/cloverfield-tools/universal-react-boilerplate)

# Requirements 

## Home Page:
*  Lista de Films
*  Cada film debe tener la siguiente información: Nombre,  Número de episodio , Director
*  Personajes: Enlace que me permita ir a la página de personajes del film
*  Adicional: Al hacer click sobre el nombre del film se debe mostrar el textos con que inicia el film -opening_crawl-. (Las animaciones serán de nuestro agrado) https://media.giphy.com/media/2UCCiILkXaLbDbrjll/giphy.gif
 
## Página de Personajes
* Lista de Personajes
* Limitar 10 personajes por página
* Cada Personaje en la lista debe mostrar las siguientes características: Nombre, Color de Ojos, Género, Lista de Films,asociados al Personaje (Nombres), Considere que cada nombre del film asociado al personaje puede mostrar el Texto con que inicia el film (Mismo comportamiento a como está el requerimiento anterior)
* Se espera los siguientes Filtros: Color de Ojos, Género, Film

## ES6 updates

Rewritten from the ground up for ES6 + React with Babel and webpack.

## Getting Started

```
npm install
npm run dist
npm run start
```

Now the app should be running at http://localhost:8000/

## Considerations
Need to be a Single Page Application
Need to be PWA


## Scripts

The `package.json` file comes with the following scripts that you may find useful:

* `npm start` runs a client-only production
* `npm run start-dev` run develop mode
* `npm run watch` runs a dev console that reports lint and unit test errors on save

To run a script, open the terminal, navigate to the boilerplate directory, and type:

```
npm run <name of script>
```