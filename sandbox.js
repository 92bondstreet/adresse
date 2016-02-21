/*eslint-disable no-console*/
'use strict';

let adresse = require('./');

adresse('11 Rue des Fossés Louis VIII Rouen', (err, coordinates) => {
  if (err) {
    console.log(err);
  }

  console.log(coordinates);
});

adresse('11 Rue du bled à Tizi-Guefres', 0.2, (err, coordinates) => {
  if (err) {
    console.log(err);
  }

  console.log(coordinates);
});

adresse('fdgsdfgdfgdf', (err, coordinates) => {
  if (err) {
    console.log(err);
  }

  console.log(coordinates);
});
