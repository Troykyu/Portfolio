document.addEventListener('DOMContentLoaded', function() {
  var menuButtons = document.querySelectorAll('.menu-btn');
  var bioSections = document.querySelectorAll('.bio-section');

  
  function showBioSection(sectionId) {
    bioSections.forEach(function(section) {
      section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
  }

  menuButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var sectionId = this.getAttribute('id').replace('btn-', '');
      showBioSection(sectionId);
    });
  });

  showBioSection('about');
});
/*
function initMap() {
  // Initialize your map here
}

function loadMapScript() {
  const script = document.createElement('script');
  script.src = `https://www.google.com/maps/d/viewer?key=YOUR_API_KEY&callback=initMap`;
  script.defer = true;
  script.async = true;
  document.body.appendChild(script);
}

window.addEventListener('load', loadMapScript);
*/