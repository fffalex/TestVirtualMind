// Given the following array of elements:

const newItems = [
  {
    network: 'facebook',
    text: 'post number 1',
  },
  {
    network: 'twitter',
    text: 'some twitter text',
  },
  {
    network: 'gplus',
    text: 'some gplus stuff',
  },
  {
    network: 'facebook',
    text: 'post number 2',
  },
];

const NetworkEnums = {
    facebook: 'Facebook',
    gplus: 'Google +',
    twitter: 'Twitter',
}


// Write a function with this signature:

// (arrayOfItems, aNetwork) => newArray

function foo(arrayOfItems, aNetwork) {
  return arrayOfItems.filter(item => item.network === aNetwork).map((item) => {
  	return {
    	displayName: NetworkEnums[item.network],
        text: item.text
    }
  })
}

// That, given an array and a network, transforms the given array into the following structure:

// example:
// foo(newItems, 'facebook')

// outputs:
// finalsItems = [
//   {
//     displayName: 'Facebook'
//     text: 'post number 1'
//   },
//   {
//     displayName: 'Facebook',
//     text: 'post number 2'
//   },
// ]

// foo(newItems, 'gplus')

// outputs:
// finalsItems = [
//   {
//     displayName: 'Google +',
//     text: 'some gplus stuff'
//   }
// ]

// You will need to define your own way to consistently transform `network` into `displayNames`

console.log(foo(newItems, 'facebook'));
console.log(foo(newItems, 'gplus'))