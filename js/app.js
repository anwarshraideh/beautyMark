
console.log('class 04');

var productKind= prompt(" what do you want foundation , powder , lipsteck : ");
var productName = prompt(" what is the product name ");
var numOfpiece = prompt("what is the number of piece");
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
    alert("this degree is available");

 }
 else
 {

    console.log('this degree is sold out ');
    document.write("<h4>this degree is sold out </h4>");
    alert("this degree is sold out");

 }

var text;
var isExisting = confirm("Press this confirm button!");
if (isExisting == true) {
    text = "the product existing";
} else {
    text = "the product not existing";
}


while(productKind !=="foundation" && productKind !=="powder" && productKind !== "lipsteck")
{
    productKind= prompt(" what do you want foundation , powder , lipsteck : ");

}

var itemOrder ='';
if (productKind == "foundation")
{
    itemOrder ='<img src="images/f.jpg"/>';
}
else if (productKind == "powder")
{
    itemOrder ='<img src="images/p.png"/>';
}
else if (productKind == "lipsteck")
{
    itemOrder ='<img src="images/l.jpg"/>';

}

var result ='';
for ( var i= 0; i < numOfpiece ; i++) {

    result = result + itemOrder;
    
}
document.write(result);




