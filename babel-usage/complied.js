'use strict';

var ids = ['id1', 'id2'];
var message = ids.map(function (value, index) {
  return 'ID of ' + index + ' element is ' + value;
});
console.log(message);
