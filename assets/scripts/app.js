//Author: Salomon Smeke <salomon@ssmeke.io>
//Filename: app.js

//Define base paths
requirejs.config({
  baseUrl: 'assets/scripts/lib',
  paths: {
    jquery: 'jquery-min',
    lodash: 'lodash.core'
  }
});

//Load application
requirejs(['../app/main']);
