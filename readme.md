# jsSort v0.0.5

jsSort is a generic sort method that can sort an array of objects by multiple properties. 

## Overview

The public API for jsSort boils down to a single method named _sortByMultiple_. This method takes two parameters, 
each of which are arrays. 

- __sequence__: Array to sort. Must be an array of objects.
- __keys__: Array of strings that represent the property names to sort by. If an entry in this array contains a 
  "." it will assume that this indicates a subproperty. jsSort will navigate down the object graph to find the
  property. In this version jsSort assumes all properties will be defined, not null objects. 
  
jsSort can sort by date, number and string values. The sort order of each property can be set by appending either 
"[ASC]", or "[DESC]" to the begining of the property string. If no sort order is specified then it will default to 
ascending sort.

## Usage

First include the script in the page using a script tag or using import using commonJS/AMD (requireJS).

```HTML
	<script type="text/javascript" src="jssort.js"></script>
```

```JavaScript
  var original = [
  	{ id: 1,  type: 'deposit',   amount: 1230.45, transactionDate: new Date('1/1/2010') },
    { id: 3,  type: 'withdrawl', amount: 20.00,   transactionDate: new Date('1/1/2011') },
    { id: 2,  type: 'withdrawl', amount: 40.00,   transactionDate: new Date('1/1/2011') },
    { id: 4,  type: 'withdrawl', amount: 12.63,   transactionDate: new Date('1/1/2011') },
    { id: 5,  type: 'deposit',   amount: 400.00,  transactionDate: new Date('1/1/2011') },
    { id: 6,  type: 'withdrawl', amount: 82.21,   transactionDate: new Date('1/1/2011') },
    { id: 7,  type: 'withdrawl', amount: 6.48,    transactionDate: new Date('1/1/2011') },
    { id: 8,  type: 'withdrawl', amount: 9.00,    transactionDate: new Date('1/1/2011') },
    { id: 9,  type: 'withdrawl', amount: 1.25,    transactionDate: new Date('1/1/2011') },
    { id: 10, type: 'check',     amount: 523.00,  transactionDate: new Date('1/1/2013') }
  ];
  
  var sorted = jsSort.sortByMultiple(original, ['transactionDate', 'type', '[DESC]amount']);
  
  // sorted will be [
  //  { id: 1,  type: 'deposit',   amount:1230.45, transactionDate: '2010-01-01' },
  //  { id: 5,  type: 'deposit',   amount:400.00,  transactionDate: '2011-01-01' },
  //  { id: 6,  type: 'withdrawl', amount:82.21,   transactionDate: '2011-01-01' },
  //  { id: 2,  type: 'withdrawl', amount:40.00,   transactionDate: '2011-01-01' },
  //  { id: 3,  type: 'withdrawl', amount:20.00,   transactionDate: '2011-01-01' },
  //  { id: 4,  type: 'withdrawl', amount:12.63,   transactionDate: '2011-01-01' },
  //  { id: 8,  type: 'withdrawl', amount:9.00,    transactionDate: '2011-01-01' },
  //  { id: 7,  type: 'withdrawl', amount:6.48,    transactionDate: '2011-01-01' },
  //  { id: 9,  type: 'withdrawl', amount:1.25,    transactionDate: '2011-01-01' }, 
  //  { id: 10, type: 'check',     amount:523.00,  transactionDate: '2013-01-01' }
  //];

```

## Dependencies
- UnderscoreJS (or lodash)
  The dependency on underscore may be removed in a future release. 
  
## Contributing
Contributions are welcome but please follow these guidelines.
1. Set your editor to insert spaces instead of tabs.
2. Make sure you match the line endings.
3. Please don't introduce new external dependencies.
4. If you've added a new feature please add a sample to demonstrate the feature.

## Road Map
I would like to add the following, but I don't have a true timeline for these yet.
- Grunt/Gulp script to build minified version for an official build.
- Samples using jsSort in NodeJS/CommonJS, AMD via RequireJS.
- Samples demonstrating dotted property navigation.
- Remove dependency on Underscore/Lodash
