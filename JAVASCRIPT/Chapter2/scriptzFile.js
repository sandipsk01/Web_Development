function arrayDemo(){
    // Array is homogeneous collection of elements is common practice but it can heterogeneous also
    // Indexing statrs from 0
    var firstArray=[1,2,3,4];
    var secondArray=['a','b','c'];

    console.log(firstArray[0]);
    console.log(secondArray[1]);
}

// Filter Method
function filterLogic(item){
    return item%2==0
}

function arrayFilter(){
    var array=[1,2,3,4,5,6];
    var filtered=array.filter(filterLogic);
    console.log(filtered)
}
// Map Method
function mapLogic(item){
    return item*2
}
function arrayMap(){
    var array=[1,2,3,4,5,6];
    var mapped=array.map(mapLogic);
    console.log(mapped)
}

// Slice Method
function sliceMethod(){
    var array=[1,2,3,4,5,6];
    var sliced=array.slice(0,3);
    var negativeSliced=array.slice(-3,-1);
    console.log(sliced)
    console.log(negativeSliced)
}

// Splice Method
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

function spliceMethod(){
    var array=[1,2,3,4];

    // At position 2, add 2 elements:
    array.splice(2,0,4,5);
    console.log(array)

    // At position 2, remove 2 items:
    array.splice(2,2);
    console.log(array)
}

// Sort Method
function sortMethod(){
    array=[1,3,2,10,5,7,100];

    //Without using comparing function
    sorted=array.sort();
    console.log(sorted)

    //By using comparing function
    originalSorted=array.sort(function(x,y){ return x-y });
    console.log(originalSorted)
}

