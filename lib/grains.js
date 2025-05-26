'use strict';

function total(){
	// Add total rice count from riddle... 
	return (BigInt(2) ** BigInt(64)) - BigInt(1);

};

function square(num){
	return BigInt(2) ** BigInt(num - 1);
	// write code here...

};

module.exports = {
  square,
  total
};