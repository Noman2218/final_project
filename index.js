// Get the button
var mybutton = document.getElementById("goTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// Flag to determine scrolling behavior
var isSlowScroll = true;

// When the user clicks on the button, scroll to the top of the document smoothly
function goToTop() {
  const scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  );

  if (scrollTop > 0) {
    if (isSlowScroll && scrollTop < 200) { // Threshold for slow scrolling
      window.scrollTo(0, scrollTop - scrollTop / 8); // Slowly scroll upwards
    } else {
      isSlowScroll = false; // Set flag to false for free scrolling
      window.scrollTo(0, 0); // Scroll freely to the top
    }
    window.requestAnimationFrame(goToTop);
  } else {
    isSlowScroll = true; // Reset flag for the next scroll
  }
}

  