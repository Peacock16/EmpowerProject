redirectToNewPage = () => {
    window.location.href = "privacy_robots.html";
}

redirectToWhy = () => {
    window.location.href = "reasons.html";
}

redirectToCheck = () => {
    window.location.href = "check.html";
}

stayTuned = () => {
    alert("Please stay tuned! I promise it's worth the time!")
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        calculateLossPercentage();
    });
});

calculateLossPercentage = () => {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const numChecked = checkedCheckboxes.length;
    const totalItems = 9;
    const percentage = (numChecked / totalItems) * 100;

    // Display the percentage as an h1 tag
    const percentageDisplay = document.getElementById('percentageDisplay');
    percentageDisplay.textContent = `Chances that your privacy is at risk is: ${percentage.toFixed(2)}%`;

    const whyButton = document.getElementById('whyButton');
    whyButton.style.display = percentage > 0 ? 'block' : 'none';
}

const clickableDivs = document.querySelectorAll('.box');
clickableDivs.forEach(div => {
    div.addEventListener('click', () => {
        // Change the background color of the clicked div to green
        div.style.backgroundColor = 'green';
    });
});

const clickableDiv = document.querySelectorAll('.box1');
clickableDiv.forEach(div => {
    div.addEventListener('click', () => {
        // Change the background color of the clicked div to green
        div.style.backgroundColor = 'red';
    });
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}