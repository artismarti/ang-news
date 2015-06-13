'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://blinding-fire-7432.firebaseio.com/posts/:id.json');
});