---
languages: javascript
tags: math
---
# README by Sinem Kilicdere Moschos

This project implements a classic grains-on-a-chessboard problem using JavaScript. The main goal was to calculate how many grains of wheat are on a given square, where the number doubles on each subsequent square, starting with one grain on the first. It also includes a function to calculate the total number of grains across all 64 squares. Precision was important for this task, so BigInt was used to handle very large numbers. The project uses Jasmine for testing, and all tests have passed successfully, confirming the accuracy of the implementation.

# Grains

## Instructions

Write a program that calculates the number of grains of wheat on a chessboard given that the number on each square doubles.

There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board. Two grains on the next. Four on the third, and so on.

There are 64 squares on a chessboard.

Write a program that shows
- how many grains were on each square, and
- the total number of grains

To run the specs follow these commands:
- first install the required node modules to run the tests
````npm install````
- to run in the command line run
````npm test -- spec/grains.spec.js````
### or, via the custom script in package.json
````npm run answer````
