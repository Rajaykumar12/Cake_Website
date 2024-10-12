let result1 = 0;
let result2 = 0;
let result3 = 0;
let result4 = 0;
let plates1 = 0;
let plates2 = 0;
let plates3 = 0;
let plates4 = 0;
let total = 0;
let cart = [];
        function increament1(){
            result1 = result1 + 450;
            plates1 = plates1 + 1;
            document.getElementById('result1').innerHTML = result1;
            document.getElementById('plates1').innerHTML = "For " + plates1 + " servings"
        }
        function decreament1(){
            result1 = result1 - 450;
            plates1 = plates1 - 1;
            document.getElementById('result1').innerHTML = result1;
            document.getElementById('plates1').innerHTML = "For " + plates1 + " servings"
        }
        function increament2(){
            result2 = result2 + 400;
            plates2 = plates2 + 1;
            document.getElementById('result2').innerHTML = result2;
            document.getElementById('plates2').innerHTML = "For " + plates2 + " servings"
        }
        function decreament2(){
            result2 = result2 - 400;
            plates2 = plates2 - 1;
            document.getElementById('result2').innerHTML = result2;
            document.getElementById('plates2').innerHTML = "For " + plates2 + " servings"
        }
        function increament3(){
            result3 = result3 + 300;
            plates3 = plates3 + 1;
            document.getElementById('result3').innerHTML = result3;
            document.getElementById('plates3').innerHTML = "For " + plates3 + " servings"
        }
        function decreament3(){
            result3 = result3 - 300;
            plates3 = plates3 - 1;
            document.getElementById('result3').innerHTML = result3;
            document.getElementById('plates3').innerHTML = "For " + plates3 + " servings"
        }
        function increament4(){
            result4 = result4 + 285;
            plates4 = plates4 + 1;
            document.getElementById('result4').innerHTML = result4;
            document.getElementById('plates4').innerHTML = "For " + plates4 + " servings"
        }
        function decreament4(){
            result4 = result4 - 285;
            plates4 = plates4 - 1;
            document.getElementById('result4').innerHTML = result4;
            document.getElementById('plates4').innerHTML = "For " + plates4 + " servings"
        }
        function addToCart(itemName, itemPrice) {
            cart.push({name: itemName, price: itemPrice});
            total += itemPrice;

            displayCart();
        }

        function displayCart() {
            const cartItems = document.getElementById('cart-items');
            const totalElement = document.getElementById('total');

            cartItems.innerHTML = ''; 

            cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - ${item.price}`;
                cartItems.appendChild(li);
            });

            totalElement.textContent = total.toFixed(2);
        }