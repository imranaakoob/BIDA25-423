document.addEventListener("DOMContentLoaded", function () {
 
  /* ================================
     1. CONTACT FORM VALIDATION
  ================================== */
  const contactForm = document.querySelector(".grid form");
  const contactMsgStatus = document.getElementById("form-msg-status");
 
   if (contactForm && contactMsgStatus) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const message = document.getElementById("contact_message")?.value.trim();
 
      if (!name || !email || !message) {
        contactMsgStatus.style.color = "red";
        contactMsgStatus.textContent = "Please complete all fields.";
        return;
      }
 
      if (!/\S+@\S+\.\S+/.test(email)) {
        contactMsgStatus.style.color = "red";
        contactMsgStatus.textContent = "Please enter a valid email.";
        return;
      }
 
      contactMsgStatus.style.color = "green";
      contactMsgStatus.textContent = "Message sent successfully ✨ We will respond within 24–48 hours.";
      contactForm.reset();
    });
   }
 
 
  /* ================================
     2. PRODUCT SEARCH FILTER
  ================================== */
  window.filterProducts = function () {
    const input = document.getElementById("search")?.value.toLowerCase();
    const grid = document.querySelector(".grid");
    if (!grid) return;
    const cards = grid.getElementsByClassName("card");
 
    if (!input) {
       for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
       }
       return;
    }
 
    for (let i = 0; i < cards.length; i++) {
      let text = cards[i].innerText.toLowerCase();
      if (text.includes(input)) {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
      
      // ADDITION: Force image size during search filtering
      const img = cards[i].querySelector("img");
      if (img) {
        img.style.height = "250px";
        img.style.width = "100%";
        img.style.objectFit = "contain";
      }
     }
   };
 
 
  /* ================================
     3. CHECKOUT FORM HANDLING
  ================================== */
  const checkoutForm = document.getElementById("checkoutForm");
  const checkoutMsgStatus = document.getElementById("checkout-message-status");
 
   if (checkoutForm && checkoutMsgStatus) {
    checkoutForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (checkoutMsgStatus) {
        checkoutMsgStatus.style.color = "#c8a2c8";
        checkoutMsgStatus.textContent = "Processing your Radiara order...";
      }
 
      setTimeout(() => {
        if (checkoutMsgStatus) {
          checkoutMsgStatus.style.color = "green";
          checkoutMsgStatus.textContent = "Order placed successfully ✨ Welcome to Radiara glow ritual.";
        }
        checkoutForm.reset();
      }, 2000);
    });
   }
 
 
  /* ================================
     4. GLOBAL HOVER EFFECT ENHANCER
  ================================== */
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.transition = "0.3s ease";
      card.style.boxShadow = "0 10px 25px rgba(200,162,200,0.25)";
    });
 
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0px)";
      card.style.boxShadow = "0 6px 18px rgba(0,0,0,0.05)";
    });
   });
 
 
  /* ================================
     5. SMOOTH LINK FEEL (UX POLISH)
  ================================== */
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      document.body.style.opacity = "0.95";
      setTimeout(() => {
        document.body.style.opacity = "1";
      }, 150);
    });
   });

  /* ================================
     6. ADDITION: GLOBAL IMAGE FIX
  ================================== */
  document.querySelectorAll(".card img").forEach(img => {
    img.style.height = "250px";
    img.style.width = "100%";
    img.style.objectFit = "contain";
    img.style.display = "block";
  });
 
});
document.addEventListener("DOMContentLoaded", function () {
 
  /* ... [KEEP ALL PREVIOUS SECTIONS 1-6 EXACTLY THE SAME] ... */

  /* ================================
     7. INTERACTIVE CHECKOUT CALCULATOR
  ================================== */
  const qtyInputs = document.querySelectorAll('.qty-input');
  const subtotalElement = document.getElementById('summary-subtotal');
  const totalElement = document.getElementById('summary-total');

  function updateTotals() {
    let subtotal = 0;
    
    qtyInputs.forEach(input => {
      const price = parseFloat(input.getAttribute('data-price'));
      const quantity = parseInt(input.value) || 0;
      subtotal += price * quantity;
    });

    if (subtotalElement && totalElement) {
      subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
      totalElement.textContent = `$${subtotal.toFixed(2)}`;
    }
  }

  // Listen for quantity changes
  qtyInputs.forEach(input => {
    input.addEventListener('input', updateTotals);
  });

  // Run once on load to set initial prices
  updateTotals();
});
