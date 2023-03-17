    var modal = document.getElementById("myModal");

    var btns = document.getElementsByClassName("tablinks");
    
    var tabcontents = document.getElementsByClassName("tabcontent");
    
    function openTab(evt, tabName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active"); 
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active"); 
        tablinks[i].style.borderBottom = "none";
      }
      document.getElementById(tabName).classList.add("active"); 
      evt.currentTarget.classList.add("active"); 
      evt.currentTarget.style.borderBottom = "2px solid black";
    }
    
  
    function showModal() {
      modal.style.display = "block"; 
      openTab(event, 'login'); 
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    