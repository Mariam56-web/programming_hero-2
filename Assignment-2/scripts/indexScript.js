const foodItem = [
    {
      src: "./images/Maxican.png",
      foodId: "Mexican Taco",
      price: "12.05",
      foodReview: "5.00",
    },
    {
      src: "./images/ChickenL.png",
      foodId: "Chicken Lasanga",
      price: "20.00",
      foodReview: "4.9",
    },
    {
      src: "./images/Saladeurf.png",
      foodId: "Salade Urf",
      price: "33.99",
      foodReview: "3.9",
    },
    {
      src: "./images/Supersalad.png",
      foodId: "Super Salade",
      price: "49.99",
      foodReview: "4.9",
    },
    {
      src: "./images/salmon.png",
      foodId: "Salmon Lasanga",
      price: "79.99",
      foodReview: "5.0",
    },
    {
      src: "./images/Americano.png",
      foodId: "Americano Taco",
      price: "6.05",
      foodReview: "5.00",
    },
  ];
  
  const seeMoreBtn = document.getElementById("seemore-btn");
  const seelessBtn = document.getElementById("seeless-btn");
  const productBox = document.getElementById("product-box");
  
  function loadMoreFood() {
    for (let i in foodItem) {
      const foodNewCard = document.createElement("div");
      foodNewCard.className = "food-card loaded-card";
      foodNewCard.innerHTML = `
              <div class="foodImg-box">
                <img src="${foodItem[i].src}" id="foodImg" alt="">
              </div>
              <div class="food-description">
                <div class="food-name">
                  <h4 id="food-id">${foodItem[i].foodId}</h4>
                  <div class="food-review">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                    <p id="foodRating">${foodItem[i].foodReview}</p>                  
                  </div>
                </div>
                <div class="food-cart">
                  <button id="addto-cart">Add to Cart</button>
                  <p id="foodPrice">$${foodItem[i].price}</p>
                </div>
              </div>
          `;
      productBox.appendChild(foodNewCard);
    }
    addtoCartButtons();
    seeMoreBtn.style.display = "none";
    seelessBtn.style.display = "flex";
  }
  function removeLoadFood() {
    const loadedFoods = document.querySelectorAll(".loaded-card");
    for (let item of loadedFoods) {
      item.remove();
    }
    seeMoreBtn.style.display = "flex";
    seelessBtn.style.display = "none";
  }
  seelessBtn.addEventListener("click", removeLoadFood);
  seeMoreBtn.addEventListener("click", loadMoreFood);
  
  
  
  // addToCart function
  function addtoCartButtons() {
    const addToCartButtons = document.querySelectorAll("#addto-cart");
    
    addToCartButtons.forEach((eachButton) => {
        eachButton.addEventListener("click", (event) => {
            const foodCard = event.target.closest(".food-card");
            const foodImg = foodCard.querySelector("#foodImg").src;
            const foodName = foodCard.querySelector("#food-id").innerHTML;
            const foodRating = foodCard.querySelector("#foodRating").innerHTML;
            const foodPrice = foodCard.querySelector("#foodPrice").innerHTML;
  
            const foodItem = {
                foodImg,
                foodName,
                foodRating,
                foodPrice
            };
  
            // Get existing items from local storage
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
            // see if the food in the cart
            const existingItem = cartItems.find(item => item.foodName === foodName);
            if (existingItem) {
                alert("Item already added to Cart!");
            } else {
                cartItems.push(foodItem);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                alert(foodName + " is added to cart.");
            }
        });
    });
  }
  // Initialize add to cart functionality
  document.addEventListener('DOMContentLoaded', addtoCartButtons);
  
  //subscription email functions
  const emailSubBtn = document.getElementById("subscribe-btn");
  
  function showMessage() {
    const emailId = document.querySelector("#subscribe-email");
    if (emailId.value === "") {
      alert("Type your Email, please.");
    } else {
      const subsBox = document.querySelector(".subscribe-box");
      console.log(emailId.value);
      const messageP = document.createElement("P");
      messageP.className = "subscribed";
      messageP.innerHTML = `Your ${emailId.value} subscribed successfully.`;
      subsBox.appendChild(messageP);
      emailId.value = "";
    }
  }
  emailSubBtn.addEventListener("click", showMessage);
  
    