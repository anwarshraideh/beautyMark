
console.log('class 04');

var productName = prompt(" what is the product name ");
var degree=  prompt(" what is the degree of the product "); 
var isExisting =prompt(" it is the product  existing ");



console.log ('Product Name :' + productName + ', ' + 'Degree : ' + degree +' , ' + 'Product is Existing : ' + isExisting  );

document.write('<p>Product Name :' + productName + ', ' + 'Degree : ' + degree +' , ' + 'Product is Existing : ' + isExisting +'. </p> ' );


/*if (isExisting == false)
{

console.log ('the product not existing');
document.write("<h1>the product not existing</h1>");


} else {

 console.log ('the product existing');
 document.write("<h1>the product existing</h1>");


 } */

 if (degree >=15 && degree <= 25 )
 {
  
    console.log('this degree is available ');
    document.write("<h3>this degree is available</h3>");

 }
 else
 {

    console.log('this degree is sold out ');
    document.write("<h4>this degree is sold out </h4>");



 }

/* var text;
var isExisting = confirm("Press this confirm button!");
if (isExisting == true) {
    text = "the product existing";
} else {
    text = "the product not existing";
}
*/



