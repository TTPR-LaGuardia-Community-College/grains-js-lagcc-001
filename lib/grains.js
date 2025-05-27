'use strict';

function total(){
	// Add total rice count from riddle...
    const result = (1- Math.pow(2,64))/-1
    return result;
};

function square(num){
	// write code here...

    return Math.pow(2,num - 1);

};
//
// module.exports = total;
// module.exports = square;
module.exports = { square, total };