document.addEventListener("DOMContentLoaded", function(event) {
console.log ("hi")

var mobileMenuButton = document.querySelector('.mobile-menu-button')
  
// get my nav with querySelector
var navigation = document.querySelector('.main-nav')


// add click listener
mobileMenuButton.addEventListener('click', function () {
  
  // play with css classes
  
  mobileMenuButton.classList.toggle('active')
  navigation.classList.toggle('visible')
  
})

})