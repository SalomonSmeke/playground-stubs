//Author: Salomon Smeke <salomon@ssmeke.io>
//Filename: app.js

//Define base paths
requirejs.config({
  baseUrl: 'assets/scripts/lib',
  paths: {
    app: '../app',
    ext: '../ext',
    jquery: 'jquery-min',
    lodash: 'lodash.core'
  }
});

//Load application logic
requirejs(['../app/main']);
