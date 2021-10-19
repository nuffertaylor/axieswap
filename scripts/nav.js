/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function myFunction(the_id) {
    document.getElementById(the_id).classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    var managers = document.getElementById("managers");
    if (managers.classList.contains('show')) {
        managers.classList.remove('show');
      }
    }
  }