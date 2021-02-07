
console.log('class 04');

var productName = prompt(" what is the product name ");
var degree=  prompt(" what is the degree of the product "); 
//var isExisting =prompt(" it is the product  existing ");

var isExisting=true;

console.log ('Product Name :' + productName + ', ' + 'Degree : ' + degree +' , ' + 'Product is Existing : ' + isExisting  );


/*if (isExisting ==false)
{

console.log ('the product not existing');

} else(isExisting ==true)
 {

 console.log ('the product existing');

 } */

 if (degree >=15 && degree <= 25 )
 {
  
    console.log('product is Existing  ');

 }
 else
 {

    console.log('product is sold out ');


 }

var text;
var isExisting = confirm("Press this confirm button!");
if (isExisting == true) {
    text = "the product existing";
} else {
    text = "the product not existing";
}
 document.write('Product Name :' + productName + ', ' + 'Degree : ' + degree +' , ' + 'Product is Existing : ' + isExisting  );



