var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productslist = productsContainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()
    for(count=0;count<productslist.length;count=count+1)
        {
            var productname = productlist[count].querySelector("p").textContent

            if(productname.toUpperCase().indexof(enteredvalue) < 0)
            {
                productslist[count].style.display="none"
            }
            else{
                productslist[count].style.display="block"
            }
        } 
})