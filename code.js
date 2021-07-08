
var images=["Family.jpg","Dad.jpg","Mom.jpg","Grandparents.jpg","Uncle And Aunty.jpg","Siblings.jpg"];

var names=[" My Family","Dad","Mom","Grandparents","Uncle and Aunty","Siblings"];
var i=0;
function update()
{
  i++;
  var f=5
  if(i>f){
    i=0;
  }
  var a=images[i];
  var b=names[i];
  document.getElementById("family").src=a;
  document.getElementById("name").innerHTML=b;
}