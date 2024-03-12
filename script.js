$(document).ready(function() { 
    $("#tiktok").wrap(`<a href="https://www.tiktok.com/en/" target="_blank"></a>`);
    $("#utube").wrap(`<a href="https://www.youtube.com/" target="_blank"></a>`);
    $("#me").wrap(`<a href="https://ninzgradecalculator.netlify.app/" target="_blank"></a>`);
  });


  function highlight(element) {
    let navItems = document.querySelectorAll('.nav-item'); // Get all nav items
    
    // Remove 'active' class from all nav items
    navItems.forEach(function(item) {
      item.classList.remove('active');
    });
    
    // Add 'active' class to the clicked nav item
    element.parentNode.classList.add('active');
  }
  