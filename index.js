'use strict';

let request = require('superagent');

const API_ADRESSE = 'http://api-adresse.data.gouv.fr/search';

/**
 * Get coordinates from body response
 * @param  {Object} body
 * @return {String}
 */
let coordinates = function coordinates (body, score) {
  let features = body.features || [];

  if (features.length === 0) {
    return null;
  }

  //Check first the score
  //and get coordinates if high score
  const {properties, geometry} = features[0];
  const latlong = geometry.coordinates;

  if (properties.score < score) {
    return null;
  }

  return {
    'latitude': latlong[1],
    'longitude': latlong[0]
  };
};

/**
 * Get the coordinates from French address
 *
 * @param  {String} query
 * @param  {Number} score
 * @param  {Function} callback
 */
module.exports = function adresse (...args) {
  const callback = args.pop();
  const [query, score = 0.5] = args;

  request
  .get(API_ADRESSE)
  .query({'q': query})
  .query({'limit': 1})
  .end((err, res) => {
    callback && callback(err, coordinates(res && res.body || {}, score));
  });
};
