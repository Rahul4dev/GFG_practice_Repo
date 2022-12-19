// Here we learn about Arrays and its properties and behaviour on different operations and processess. We also talk about its complexity also wrt the ops operated on Arrays.

// We know Array is an index based ordered value container, which have certain properties mainly to traverse its elements and access the array as a whole.

// If we want to give an array as an output, we can simply console.log its name, or just return it, or use different methods to show it on window with different commands. 
// suppose we have an array named 'arr' having 5 no.s as element arranged and sorted in ascending order, we can console it like... in JS..

let arr = [1,2,3,4,5]
console.log(array);

// We do basic operations on Arrays like, linear search, sort, CRUD ops, Rotations, traverse nested arrays different ops have different complexity wrt no. of element introduced and no. of operations required to get the desired result.

// For e.g, in given array write a function to search an element l in arr[] and return its index,

arr = [1,2,5,3,4,3,3,44,5,4,,66,55,43,65,33,23]; // return the index of the element = 66

const find = function (arr, x) {
  let index = 0; // a helping variable to access the array
  index = arr.indexOf(x);
  return index;
}
 
console.log(find(arr,3));  // will return 3 since we are saving only one index of 3 in the variable. 
------------
// IF we want to store all the indices where value contains as 3. then we have to traverse the array to get all indices. for that ..

const findAll = function (arr, x) {
  let indices = [];  // empty array to store the indices, we can use object also, but array is fine.
  let i = 0;  // helping variable as a pointer to traverse on array to get all the indices. Here we can use loop to traverse the array, while or for loop. We can also use array method to get all the indices named find() , indexOf() or findIndex().
  
  // here we use while loop ..
  while (i<arr.length){
    indices.push(arr.indexOf(x));
  }
  console.log(indices);  
}

----------- 
  // if we want to show all the value with its index, we can use find() method, which uses callback function in order to get the result. 
  array.find((value,index)) => {
  console.log("we got ", value, " with index " , value);
});

--------------

// IF we want to get only first and last index of sorted array where number repeats. e.g, 

let array = [1,2,5,3,4,3,3,44,5,4,55,43,65,33,23];
// first we want to sort in ascending order., we can use sort() method which also require a callback function 
// array.sort((a,b) => a-b);  // => is arrow function, a short hand of writing function, parameters and argument with proper syntax.

// now we will find 3's first index and last index. full function will go as ...

const indices = function (arr, x ) {
  let first, last;
       let indices = [];
       let index = arr.indexOf(x);
       arr.sort((a,b) => a-b); // [1, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 23, 33, 43, 44, 55, 65]
       while(index !== -1){
           indices.push(index);
           index = arr.indexOf(x,index +1);
           //console.log(indices);
       }
    first = indices[0];
    last = indices[indices.length -1];
    console.log(first, last);
}
.---------------------------..




