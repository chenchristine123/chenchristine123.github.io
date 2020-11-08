


function addtowishlist() {
    
    var size = document.getElementById("size").value; 
    
    var color = document.getElementById("color").value; 
    
    
  
    var wishlistArray;
    if (localStorage.getItem("wishlist")  == "null" || localStorage.getItem("wishlist")  == null){
        wishlistArray = [size+","+color]
    } else {
        wishlistArray = JSON.parse(localStorage.getItem("wishlist"))
        if (!wishlistArray.includes(size+","+color)){
            wishlistArray.push(size+","+color)
        }
        
    }
    
    localStorage.setItem("wishlist", JSON.stringify(wishlistArray))
    updateItemCount()
    
}



function updateWishlist(){
    if (localStorage.wishlist == null || localStorage.wishlist == "null"){
        return
    }
    var index = localStorage.wishlist.length;
    if (index > 0) {
        document.getElementById("wishlist").innerHTML = "";
        var wishlistArray = JSON.parse(localStorage.getItem("wishlist"))
        for (i = 0; i < wishlistArray.length; i++){
            var info = wishlistArray[i].split(",")
            var size = info[0];
            var color = info[1];
            var item = itemHTML(i, size, color);
            document.getElementById("wishlist").innerHTML += item;
        }
    } 
}

function itemHTML(index, size, color){
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
            <h5 class="cartBox3">
            </h5>
            <h5 class="cartBox4">
                <button id="removeButton" onclick="removeWishlistItem('cartItem`
    + index + `')">remove</button>
            </h5>
        </div>
    `
    
    return addedItem;
}

function removeWishlistItem(itemID) {
    var index = parseInt(itemID.substring(8))
    var wishlistArray = JSON.parse(localStorage.getItem("wishlist"))
    wishlistArray.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlistArray))
    updateWishlist()
}
