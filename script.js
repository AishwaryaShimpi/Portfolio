function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg', // Change this to 'canvas' if you prefer
    loop: true,
    autoplay: true,
    path: './Lottie/girlwithcomputer.json' // Path to your Lottie animation JSON file
  });

