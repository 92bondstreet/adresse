# adresse

> Get coordinates from api http://api-adresse.data.gouv.fr/

## ... Work in progress ...

## API

https://adresse.data.gouv.fr/api/

## Usage

### harmony

```sh
node --harmony --harmony-destructuring sandbox.js
```

### require

```js
let adresse = require('adresse');
let query = '12 allée du trait d\'union 77127 lieusaint'

adresse(query, (err, coordinates) => {
  console.log(coordinates);
});
//{ latitude: '48.620248', longitude: '2.54129' }
```

### score

Value between 0 and 1 indicating the relevance of results

```js
let adresse = require('adresse');
let query = 'rue de gaulle neuilly'
let score = '0.4'

adresse(query, 0.4, (err, coordinates) => {
  console.log(coordinates);
});
//{ 'latitude': '47.279327', 'longitude': '5.105518', 'score': '0.4397558922558922' }
```

The default value is `0.5`.

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
