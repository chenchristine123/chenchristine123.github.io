window.onload = function() {
    if (localStorage.getItem("itemCount") === null){
        document.getElementById("itemCount").innerHTML = 0
    } else {
        document.getElementById("itemCount").innerHTML = localStorage.itemCount
    }
}

function addtocart() {
    console.log("hello");
    
    var size = document.getElementById("size").value; 
    console.log(size);
    
    var color = document.getElementById("color").value; 
    console.log(color);
    
    var quantity = parseInt(document.getElementById("quantity").value)
    console.log(quantity);
   
    var itemCount = parseInt(document.getElementById("itemCount").textContent)
    
    document.getElementById("itemCount").innerHTML = itemCount + quantity;
    localStorage.itemCount = itemCount + quantity
        
}
