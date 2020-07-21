let mydata = JSON.parse(data);

console.log(mydata[0])
newDiv = document.createElement("div");

function addElement(i)
{
  // create elemement and add bus data inside
 
  newDiv = document.createElement("div");
  newDiv.classList.add('test')
  newDiv.innerHTML = mydata[0].zakret[i];;

  // add the newly created element and it's content into the DOM
  my_div = document.getElementById("org_div1");
  
  document.body.insertBefore(newDiv, my_div);


 
}
for(let i = 0; i <= 18; i++){
    
    
    addElement(i)
    console.log(mydata[0].zakret[i])
    headingDiv = document.createElement('div')
    headingDiv.innerHTML = 'Rudna Wielka Zakręt'
    test_div = document.getElementById("org_div2");
    document.body.insertBefore(headingDiv, test_div)
}
