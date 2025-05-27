'use strict';

const { square, total } = require("../lib/grains");

describe("Grains", function () {

  it("square 1", function () {
    expect(square(1)).toEqual(BigInt(1));
  });

  it("square 2", function () {
    expect(square(2)).toEqual(BigInt(2));
  });

  it("square 3", function () {
    expect(square(3)).toEqual(BigInt(4));
  });

  it("square 4", function () {
    expect(square(4)).toEqual(BigInt(8));
  });

  it("square 16", function () {
    expect(square(16)).toEqual(BigInt(32768));
  });

  it("square 32", function () {
    expect(square(32)).toEqual(BigInt("2147483648"));
  });

  it("square 64", function () {
    expect(square(64)).toEqual(BigInt("9223372036854775808"));
  });

  it("total", function () {
    expect(total()).toEqual(BigInt("18446744073709551615"));
  });

});
