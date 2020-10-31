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
    var index = localStorage.cart.length
    console.log(index)
    if (index == 0) {
        localStorage.setItem("cart", JSON.stringify([[size, color, quantity]]))
    } else {
        var cartArray = JSON.parse(localStorage.getItem("cart"))
        cartArray.push([size, color, quantity])
    }
    localStorage.cart = [[size, color, quantity]]
    console.log(localStorage.cart)
    
    var addedItem = 
        '<div class="cartBox" id="cartItem' 
    + index + 
        `" >
            <div class="cartBox1 itemImage">
                <img class="itemBox1" src="images/dog1.png" alt="dog harness">
                <div class="itemBox2">
                    <h5><ul>
                        <li>Dog harness</li>
                        <br>
                        <li>Size: `
    + size + 
        `</li>
                        <br>
                        <li>Color: `
    + color + `</li>
                        
                    </ul></h5>
                </div>
            </div>
            <h5 class="cartBox2">$`
    + 30 + `</h5>
            <h5 class="cartBox3">`
    + quantity + `</h5>
            <h5 class="cartBox4">
                $`
    + (30 * quantity)+
                `<button id="removeButton" onclick="removeItem('cartItem`
    + index + `')">remove</button>
            </h5>
        </div>
    `
    document.getElementById("cart").innerHTML += addedItem;
}

function removeItem(itemID) {
    console.log(itemID);
}
