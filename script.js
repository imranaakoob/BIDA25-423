document.addEventListener("DOMContentLoaded", function () {
 
  /* ================================
     1. CONTACT FORM VALIDATION
  ================================== */
  // Targeting only forms inside the .grid layout, specific to contact page structure
  const contactForm = document.querySelector(".grid form");
 
  // Select the specific status output ID for the contact form
  const contactMsgStatus = document.getElementById("form-msg-status");
 
   if (contactForm && contactMsgStatus) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
 
      // Select elements using specific unique IDs
      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      // Target the renamed contact textarea
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
  // Exposed globally as required by the onkeyup attribute on the input
  window.filterProducts = function () {
    const input = document.getElementById("search")?.value.toLowerCase();
    // Only search cards inside the main product grid on the products page
    const grid = document.querySelector(".grid");
    if (!grid) return;
    const cards = grid.getElementsByClassName("card");
 
    if (!input) {
       // Reset visibility if input is empty
       for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
       }
       return;
    }
 
    for (let i = 0; i < cards.length; i++) {
      // Get only text content within the card, ignoring HTML
      let text = cards[i].innerText.toLowerCase();
 
      if (text.includes(input)) {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
     }
   };
 
 
  /* ================================
     3. CHECKOUT FORM HANDLING
  ================================== */
  const checkoutForm = document.getElementById("checkoutForm");
  // Select the specific status output ID for the checkout form
  const checkoutMsgStatus = document.getElementById("checkout-message-status");
 
   if (checkoutForm && checkoutMsgStatus) {
    checkoutForm.addEventListener("submit", function (e) {
      e.preventDefault();
 
      if (checkoutMsgStatus) {
        checkoutMsgStatus.style.color = "#c8a2c8"; // The brand lavender hover color
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
      // Enhanced JS effects applied on top of the CSS basics
      card.style.transform = "translateY(-5px)";
      card.style.transition = "0.3s ease";
      card.style.boxShadow = "0 10px 25px rgba(200,162,200,0.25)";
    });
 
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0px)";
      card.style.boxShadow = "0 6px 18px rgba(0,0,0,0.05)"; // Revert to base CSS style
    });
   });
 
 
  /* ================================
     5. SMOOTH LINK FEEL (UX POLISH)
  ================================== */
  const links = document.querySelectorAll("a");
 
  links.forEach(link => {
    link.addEventListener("click", () => {
      // Simple UX touch before navigating
      document.body.style.opacity = "0.95";
      setTimeout(() => {
        document.body.style.opacity = "1";
      }, 150);
    });
   });
 /* ================================
     6. IMAGE CONSISTENCY CHECK
  ================================== */
  const allImages = document.querySelectorAll("img");

  allImages.forEach(img => {
    // Ensure images are fully opaque and visible once loaded
    img.style.opacity = "0";
    img.style.transition = "opacity 0.5s ease-in-out";

    img.addEventListener("load", () => {
      img.style.opacity = "1";
    });

    // Fallback: If an image is broken, don't let it ruin the layout
    img.addEventListener("error", function() {
      this.style.display = "none"; 
    });
  });
});
