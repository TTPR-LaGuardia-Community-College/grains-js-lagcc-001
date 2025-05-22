'use strict';

function total() {
	let total = 0;
	for(let i = 1; i <= 64; ++i) {
		total += square(i);
	}
	return total;
};

function square(num) {
	return 2**(num-1);
};

module.exports = { square, total };