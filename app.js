import _ from 'lodash';

var names = ['piet', 'jan', 'karel', 'jaap'];
_.map(names, function (name) {
	console.log('name: ', name);
});
