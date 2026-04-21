document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((card,i)=>{
    card.style.opacity=0;
    setTimeout(()=>{
      card.style.opacity=1;
    }, i*200);
  });
});

function filterProducts(){
  let input=document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".card").forEach(card=>{
    card.style.display=card.innerText.toLowerCase().includes(input) ? "block":"none";
  });
}

let cartCount=0;
function addToCart(){
  cartCount++;
  document.getElementById("cart-count").innerText=cartCount;
}

function validateForm(){
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let msg=document.getElementById("message").value;

  if(!name||!email||!msg){
    document.getElementById("form-msg").innerText="Fill all fields";
    return false;
  }

  document.getElementById("form-msg").innerText="Message sent ✨";
  return false;
}
document.getElementById("checkoutForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const cardNumber = document.getElementById("cardNumber").value;

  let message = document.getElementById("message");

  // Basic validation
  if (name === "" || email === "" || cardNumber.length < 16) {
    message.style.color = "red";
    message.textContent = "Please complete all fields correctly.";
    return;
  }

  message.style.color = "lightgreen";
  message.textContent = "Order placed successfully! Thank you for shopping with Radiara ✨";

  // Reset form
  this.reset();
});
