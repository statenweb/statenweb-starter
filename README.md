StatenWeb Starter
===

This project uses webpack to transpile/build out SCSS and JS. 

SCSS
---

The JS entry point is ./src/js/app.js it is transpiled from ES6 to JS that can run in today's browser using Babel. Please keep your JS as modular as possible.
- this document should do the following: 
    - include your SCSS starting point(s)
    - reference any application level JS
    - include any JS modules using ES6 import statements

The SCSS entry point is in ./src/scss/main/scss and has the following files -- please keep your SCSS as modular as possible:
- _app.scss - add any app level styles here
- _variables.scss - add any app level variables here
- _imports.scss - add any external SCSS libraries here (e.g. bootstrap)
- _mixins.scss - add any mixins you are using in your peject
- partials/components/ this directory is where you store your component level styles
- partials/base/ this directory is where you store any base level, e.g. for use on a HTML document that is going to be used as part of a template

To get started:
---

- make sure you have node or npm installed
- run npm install
- to build the project, you have 3 options
    - npm run build:local:watch    - this sets up build out your SCSS/JS in development mode (sourcemaps, etc). It remains running and watches any JS/SCSS files in their respective ./src/ directory
    - npm run build:local   - this sets up build out your SCSS/JS in development mode (sourcemaps, etc) and does not watch files
    - npm run build - this sets up build out your SCSS/JS in production mode (fully compact, without sourcemaps, etc)

- run a local webserver and point it to the root directory, e.g. from the root of this project `php -S localhost:8000` and then visit http://localhost:8000 in your browser
    

