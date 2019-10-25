
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
<<<<<<< Updated upstream

  $(document).ready(function() {

    $('#searchTrigger').click(function() {
      $('#searchBar').slideToggle();
      $('#searchInput').focus();
    });

    $('#searchTrigger').keypress(function(event) {
      if(event.keyCode === 13) {
        $('#searchBar').slideToggle();
        $('#searchInput').focus();
      }
    });

  });
=======
  
>>>>>>> Stashed changes
