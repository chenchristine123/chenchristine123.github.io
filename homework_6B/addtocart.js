window.onload = function() {
    updateItemCount()
    //localStorage.cart = null

    if (document.getElementById("cart") != null){
        updateCart();
    }
    if (document.getElementById("wishlist") != null){
        updateWishlist();
    }
}


function addtocart() {
    
    var size = document.getElementById("size").value; 
    
    var color = document.getElementById("color").value; 
    
    var quantity = parseInt(document.getElementById("quantity").value)
  
    var cartArray;
    if (localStorage.getItem("cart")  == "null"){
        cartArray = [size+","+color+","+quantity]
    } else {
        cartArray = JSON.parse(localStorage.getItem("cart"))
        cartArray.push(size+","+color+","+quantity)
    }
    
    localStorage.setItem("cart", JSON.stringify(cartArray))
    updateItemCount()
    
}

function updateItemCount(){
    if (localStorage.getItem("cart")  != "null"){
        var cartArray = JSON.parse(localStorage.getItem("cart"))
        var itemCount = 0
        for (i = 0; i < cartArray.length; i++){
                var info = cartArray[i].split(",")
                var quantity = info[2];
            
                itemCount += parseInt(quantity);
            }

        localStorage.itemCount = itemCount;
        document.getElementById("itemCount").innerHTML = itemCount;
    }
}

function updateSubtotal(){
    if (localStorage.getItem("subtotal")  != "null"){
        var cartArray = JSON.parse(localStorage.getItem("cart"))
        var subtotal = 0
        for (i = 0; i < cartArray.length; i++){
                var info = cartArray[i].split(",")
                var quantity = info[2];
            
                subtotal += parseInt(quantity)*30;
            }
        document.getElementById("subtotal").innerHTML = '$' + subtotal;
    }
}

function updateCart(){
    var index = localStorage.cart.length;
    if (index > 0) {
        document.getElementById("cart").innerHTML = "";
        var cartArray = JSON.parse(localStorage.getItem("cart"))
        for (i = 0; i < cartArray.length; i++){
            var info = cartArray[i].split(",")
            var size = info[0];
            var color = info[1];
            var quantity = info[2];
            var item = itemHTML(i, size, color, quantity);
            document.getElementById("cart").innerHTML += item;
        }
        updateSubtotal()
    } else{
        return
    }
}

function itemHTML(index, size, color, quantity){
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
    
    return addedItem;
}

function removeItem(itemID) {
    var index = parseInt(itemID.substring(8))
    var cartArray = JSON.parse(localStorage.getItem("cart"))
    cartArray.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartArray))
    updateCart()
    updateItemCount()
}

