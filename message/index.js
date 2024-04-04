document.addEventListener("DOMContentLoaded", function() {
  var closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", function() {
    window.open('','_self','');
    window.close();
  });
});
