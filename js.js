document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");
  const burgerIcon = document.querySelector(".burger-icon");
  const closeIcon = document.querySelector(".close-icon");
  const navBar = document.querySelector('.navbar');
  let menuOpen = false;

  // Function to toggle the menu state
  function toggleMenu() {
    menuOpen = !menuOpen;

    if (menuOpen) {
      navbarMenu.classList.add("open");
      navbarMenu.style.display = "block";
      burgerIcon.style.display = "none";
      closeIcon.style.display = "block";
      navBar.style.background = "#1E2827";
      navBar.style.position ="fixed";
      navBar.style.width ="100%";
      navBar.style.height ="100%";
      navBar.style.zIndex = "2";
    } else {
      navbarMenu.classList.remove("open");
      navbarMenu.style.display = "none";
      burgerIcon.style.display = "block";
      closeIcon.style.display = "none";
      navBar.style.background = "transparent";
      navBar.style.position ="inherit";

    }
  }

  // Add click event listeners to both burgerIcon and closeIcon
  burgerIcon.addEventListener("click", toggleMenu);
  closeIcon.addEventListener("click", toggleMenu);
});
document.addEventListener("DOMContentLoaded", function () {
  // Modal code (unchanged)
  const modal = document.getElementById("myModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalImage = document.getElementById("modalImage");
  const modalText = document.getElementById("modalText");

  modal.style.display = "none";

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Form validation and submit code
  const emailInput = document.getElementById("emailInput");
  const nameInput = document.getElementById("nameInput");
  const cardInput = document.getElementById("creditCard");
  const commentInput = document.getElementById("text");
  const submitButton = document.getElementById("submitButton");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const closeThankYou = document.getElementById("closeThankYou");
  thankYouMessage.style.display = "none";
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  function validateFields() {
    const email = emailInput.value;
    const name = nameInput.value;
    const card = cardInput.value;
    const comment = commentInput.value;

    const isValidEmailFlag = isValidEmail(email);
    const isNotEmptyFields =
      email.trim() !== "" &&
      name.trim() !== "" &&
      card.trim() !== "" &&
      comment.trim() !== "";

    if (isValidEmailFlag && isNotEmptyFields) {
      emailInput.style.borderColor = "initial";
      nameInput.style.borderColor = "initial";
      cardInput.style.borderColor = "initial";
      commentInput.style.borderColor = "initial";
      submitButton.disabled = false;
    } else {
      emailInput.style.borderColor = isValidEmailFlag || email !== "" ? "initial" : "red";
      nameInput.style.borderColor = name === "" ? "red" : "initial";
      cardInput.style.borderColor = card === "" ? "red" : "initial";
      commentInput.style.borderColor = comment === "" ? "red" : "initial";
      submitButton.disabled = true;
    }
  }

  emailInput.addEventListener("input", validateFields);
  nameInput.addEventListener("input", validateFields);
  cardInput.addEventListener("input", validateFields);
  commentInput.addEventListener("input", validateFields);

  // Click event for imageElements
  let previousClickedBlock = null;
  let imageElements = document.querySelectorAll('.catalog-four__two-img');
  for (let i = 0; i < imageElements.length; i++) {
    imageElements[i].addEventListener('click', function () {
      if (previousClickedBlock) {
        previousClickedBlock.style.backgroundColor = 'transparent';
      }
      let image = this.querySelector('img');
      let title = this.querySelector('p').textContent;
      let price = this.querySelector('span').textContent;
      let block = this.querySelector('.block');
      // block.style.border= "1px solid #1E2827" ;
      block.style.backgroundColor= "rgb(89 99 98 / 11%)" ;
      previousClickedBlock = block;

      modalImage.src = image.src;
      modalText.innerHTML = '<strong>' + title + '</strong><br>' + '<span>' + price + '</span>';
    });
  }

  // Click event for submitButton
  submitButton.addEventListener("click", function () {
    const email = emailInput.value;
    const name = nameInput.value;
    const card = cardInput.value;
    const comment = commentInput.value;

    if (isValidEmail(email) && email.trim() !== "" && name.trim() !== "" && card.trim() !== "" && comment.trim() !== "") {
      submitButton.innerHTML = '<img src="../img/loader.gif" class="loader" alt="Loading...">';
      setTimeout(() => {
      let image = document.querySelector('.catalog-four__two-img img');
      console.log(['name: ' + name + ', email: ' + email + ', card: ' + card + ', comment: ' + comment + ', image src: ' + image.src]);
      submitButton.innerHTML = 'Submit';
      modal.style.display = "none";
      thankYouMessage.style.display = "flex";
      closeThankYou.addEventListener("click", () => {
        thankYouMessage.style.display = "none";
      });
    }, 1000)
      // // Show "thank you" message in the modal
      // modalText.innerHTML = '<strong>Thank you for your submission!</strong>';
      // Clear the form
      emailInput.value = "";
      nameInput.value = "";
      cardInput.value = "";
      commentInput.value = "";
      // Disable the submit button
      submitButton.disabled = true;
    } else {
      // Handle the case where the submit button is clicked but the form is not valid
      // alert("Please fill out all required fields correctly.");
      const email = emailInput.value;
      const name = nameInput.value;
      const card = cardInput.value;
      const comment = commentInput.value;
      emailInput.style.borderColor = email === "" ? "red" : "initial";
      nameInput.style.borderColor = name === "" ? "red" : "initial";
      cardInput.style.borderColor = card === "" ? "red" : "initial";
      commentInput.style.borderColor = comment === "" ? "red" : "initial";
      submitButton.disabled = true;
    }
  });
});

// slider
// const slider = document.querySelector(".slider");
// const prevButton = document.querySelector(".prev-button");
// const nextButton = document.querySelector(".next-button");

// let slideIndex = 0;

// function showSlide(index) {
//   const slides = document.querySelectorAll(".slider img");
//   if (index < 0) {
//     slideIndex = slides.length - 1;
//   } else if (index >= slides.length) {
//     slideIndex = 0;
//   }
//   slider.style.transform = `translateX(-${slideIndex * 100}%)`;
// }

// function changeSlide(direction) {
//   slideIndex += direction;
//   showSlide(slideIndex);
// }

// prevButton.addEventListener("click", () => changeSlide(-1));
// nextButton.addEventListener("click", () => changeSlide(1));

// // Automatically advance the slider every 3 seconds
// setInterval(() => {
//   changeSlide(1);
// }, 3000);

// // Initial slide
// showSlide(slideIndex);



// accordion
const accordionItems = document.querySelectorAll(".accordion-item");
document.addEventListener("DOMContentLoaded", function () {
    accordionItems.forEach((item, index) => { // Add an index parameter
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");
        const icon = item.querySelector(".icon");

        // Initialize the first block as open, and the others as closed
        if (index === 0) {
            content.style.display = "block";
            icon.src = "../img/minus.svg"; // Show minus icon
        } else {
            content.style.display = "none";
            icon.src = "../img/cross.svg"; // Show cross icon
        }

        header.addEventListener("click", () => {
            accordionItems.forEach((otherItem, otherIndex) => {
                const otherContent = otherItem.querySelector(".accordion-content");
                const otherIcon = otherItem.querySelector(".icon");

                if (otherIndex === index) {
                    // Toggle the clicked block
                    if (content.style.display === "block") {
                        content.style.display = "none";
                        icon.src = "../img/cross.svg"; // Show cross icon
                    } else {
                        content.style.display = "block";
                        icon.src = "../img/minus.svg"; // Show minus icon
                    }
                } else {
                    // Close other blocks
                    otherContent.style.display = "none";
                    otherIcon.src = "../img/cross.svg"; // Show cross icon for others
                }
            });
        });
    });
});
