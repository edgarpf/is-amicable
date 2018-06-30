# is-amicable [![Build Status](https://travis-ci.org/edgarpf/is-amicable.svg?branch=master)](https://travis-ci.org/edgarpf/is-amicable) [![codecov](https://codecov.io/gh/edgarpf/is-amicable/branch/master/graph/badge.svg)](https://codecov.io/gh/edgarpf/is-amicable) ![Maintainability](https://api.codeclimate.com/v1/badges/f091f170893532611a50/maintainability)(https://codeclimate.com/github/edgarpf/is-amicable/maintainabilit
Simple function to know if a number is amicable

## Installation
```js
npm i -S is-amicable
```

## Usage
```js
var isAmicable = require('is-amicable');

console.log(isAmicable(220)); // true
console.log(isAmicable(284)); // true
console.log(isAmicable(300)); // false
console.log(isAmicable(1184)); // true
