'use strict';

function total(){
	// Add total rice count from riddle... 
	return (2 ** 64) - 1;
};

function square(num){
	// write code here...
	return 2 ** (num - 1);

};

module.exports = { square, total }; 
