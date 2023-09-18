document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burger-icon");
  const navBar = document.querySelector('.navbar');

  // Function to toggle the menu state
  function toggleMenu() {
      navBar.classList.toggle("open-nav");

      document.querySelector("body").classList.toggle("overflow-hidden");
  }

  burgerIcon.addEventListener("click", toggleMenu);
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
// Form validation and submit code
const submitForm = document.getElementById("submitForm");
const mail = document.getElementById("mail");
const user = document.getElementById("user");
const card = document.getElementById("card");
const commentInput = document.getElementById("text");
const submitButton = document.getElementById("submitButton");
const thankYouMessage = document.getElementById("thankYouMessage");
const closeThankYou = document.getElementById("closeThankYou");
const emailValidationMessage = document.getElementById("emailValidationMessage");

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);

}
function displayEmailValidationMessage() {
  if (!isValidEmail(mail.value)) {
    emailValidationMessage.style.display = "block";
  } else {
    emailValidationMessage.style.display = "none";
  }
}
mail.addEventListener("input", displayEmailValidationMessage);
function fieldsValidate(value, key) {
  if (value.trim() === '') {
    document.getElementById(key).classList.add('invalid-input');
    return false;
  } else {
    document.getElementById(key).classList.remove('invalid-input');
    return true;
  }
}

submitForm.addEventListener('submit', (SubmitEvent) => {
  SubmitEvent.preventDefault();
  const formData = new FormData(SubmitEvent.target);
  const formDataObj = {};
  let isValidate = true;

  formData.forEach((value, key) => {
    formDataObj[key] = value;
    if (!fieldsValidate(value, key)) {
      isValidate = false;
    }
  });

  if (isValidate && isValidEmail(mail.value)) {
    console.log(formDataObj);
    // Add code to submit the form here

    submitButton.innerHTML = '<img src="../img/loader.gif" class="loader" alt="Loading...">';
        setTimeout(() => {


        submitButton.innerHTML = 'Submit';
        modal.style.display = "none";
        thankYouMessage.style.display = "flex";
        closeThankYou.addEventListener("click", () => {
          thankYouMessage.style.display = "none";
        });
      }, 1000)
        // // Show "thank you" message in the modal
        modalText.innerHTML = '<strong>Thank you for your submission!</strong>';
        // Clear the form
        mail.value = "";
        user.value = "";
        card.value = "";
        commentInput.value = "";


  } else {
    console.log('invalid fields');
    displayEmailValidationMessage(true);
  }
});



thankYouMessage.style.display = "none";


// function validateFields() {
//   const emailValue = mail.value;
//   const nameValue = user.value;
//   const cardValue = card.value;
//   const commentValue = commentInput.value;

//   const isValidEmailFlag = isValidEmail(emailValue);
//   const isNotEmptyFields =
//     emailValue.trim() !== "" &&
//     nameValue.trim() !== "" &&
//     cardValue.trim() !== "" &&
//     commentValue.trim() !== "";

//   mail.classList.toggle('red-border', !isValidEmailFlag);
//   emailValidationMessage.classList.toggle('valid-message', isValidEmailFlag);

//   user.classList.toggle('red-border', !isNotEmptyFields);
//   card.classList.toggle('red-border', cardValue.trim() === "");
//   commentInput.classList.toggle('red-border', commentValue.trim() === "");

//   submitButton.disabled = !(isValidEmailFlag && isNotEmptyFields);
// }

// mail.addEventListener("input", validateFields);
// user.addEventListener("input", validateFields);
// card.addEventListener("input", validateFields);
// commentInput.addEventListener("input", validateFields);

// Rest of your code...

// Click event for imageElements
let previousClickedBlock = null;
let imageElements = document.querySelectorAll('.catalog-four__two-img');
for (let i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener('click', function () {
    if (previousClickedBlock) {
      previousClickedBlock.style.backgroundColor = 'transparent';
    }
    let image = this.querySelector('.watch-pic');
    let title = this.querySelector('.watch-articul').textContent;
    let price = this.querySelector('.watch-price').textContent;
    let block = this.querySelector('.block');
    block.style.backgroundColor = "rgb(89 99 98 / 11%)";
    previousClickedBlock = block;

    modalImage.src = image.src;
    modalText.innerHTML = '<strong>' + title + '</strong><br>' + '<span>' + price + '</span>';
  });
}


  // Click event for submitButton
  // submitButton.addEventListener("click", function () {
  //   const email = mail.value;
  //   const name = user.value;
  //   const cardValue = card.value;
  //   const comment = commentInput.value;

  //   if (isValidEmail(email) && email.trim() !== "" && name.trim() !== "" && cardValue.trim() !== "" && comment.trim() !== "") {
  //     submitButton.innerHTML = '<img src="../img/loader.gif" class="loader" alt="Loading...">';
  //     setTimeout(() => {
  //     let image = document.querySelector('.catalog-four__two-img img');
  //     console.log(['name: ' + name + ', email: ' + email + ', card: ' + cardValue + ', comment: ' + comment + ', image src: ' + image.src]);
  //     submitButton.innerHTML = 'Submit';
  //     modal.style.display = "none";
  //     thankYouMessage.style.display = "flex";
  //     closeThankYou.addEventListener("click", () => {
  //       thankYouMessage.style.display = "none";
  //     });
  //   }, 1000)
  //     // // Show "thank you" message in the modal
  //     modalText.innerHTML = '<strong>Thank you for your submission!</strong>';
  //     // Clear the form
  //     mail.value = "";
  //     user.value = "";
  //     card.value = "";
  //     commentInput.value = "";
  //     // Disable the submit button
  //     submitButton.disabled = true;
  //   } else {
  //     // Handle the case where the submit button is clicked but the form is not valid
  //     // alert("Please fill out all required fields correctly.");
  //     const email = mail.value;
  //     const name = user.value;
  //     const cardValue = card.value;
  //     const comment = commentInput.value;
  //     mail.style.borderColor = email === "" ? "red" : "initial";
  //     user.style.borderColor = name === "" ? "red" : "initial";
  //     card.style.borderColor = cardValue === "" ? "red" : "initial";
  //     commentInput.style.borderColor = comment === "" ? "red" : "initial";
  //     submitButton.disabled = true;
  //   }
  // });
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
    accordionItems.forEach((item, index) => {
        const header = item.querySelector(".accordion-header"); // Define the header variable
        const content = item.querySelector(".accordion-content");
        const icon = item.querySelector(".icon");

        // Initialize the first block as open, and the others as closed
        if (index === 0) {
            content.classList.add('open-accordion');
            content.classList.remove('close-accordion');
            icon.src = "../img/minus.svg"; // Show minus icon
        } else {
          content.classList.add('close-accordion');
          content.classList.remove('open-accordion');
            icon.src = "../img/cross.svg"; // Show cross icon
        }

        header.addEventListener("click", () => {
            accordionItems.forEach((otherItem, otherIndex) => {
                const otherContent = otherItem.querySelector(".accordion-content");
                const otherIcon = otherItem.querySelector(".icon");

                if (otherIndex === index) {
                    // Toggle the clicked block
                    if (otherContent.classList.contains('open-accordion')) {
                        otherContent.classList.remove('open-accordion');
                        otherContent.classList.add('close-accordion');
                        otherIcon.src = "../img/cross.svg"; // Show cross icon
                    } else {
                        otherContent.classList.remove('close-accordion');
                        otherContent.classList.add('open-accordion');
                        otherIcon.src = "../img/minus.svg"; // Show minus icon
                    }
                } else {
                    // Close other blocks
                    otherContent.classList.remove('open-accordion');
                    otherContent.classList.add('close-accordion');
                    otherIcon.src = "../img/cross.svg"; // Show cross icon for others
                }
            });
        });
    });
});


const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const currentIndex = document.getElementById('currentIndex');
let currentSlide = 1;

function showSlide(index) {
  slides.forEach((slide, i) => {
    // slide.style.display = i === index ? 'block' : 'none';
  const  indexSlide = i === index ;
    slide.classList.toggle('show', indexSlide);
  });

currentIndex.textContent= `${index+1}`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide(currentSlide);



/// slick slider
// $(document).ready(function(){
//   $('.slider').slick({
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: true, // Отображать точки для навигации
//   });
// });