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
        document.querySelector('a[onclick="openTab(event, \'register\')"]').classList.remove("active");
        document.querySelector('a[onclick="openTab(event, \'register\')"]').style.borderBottom = "none";
    };
    document.querySelector('button[data-tab="' + tabName + '"]').classList.add("active");
    document.querySelector('button[data-tab="' + tabName + '"]').style.borderBottom = "4px solid #E4002B";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    evt.currentTarget.style.borderBottom = "4px solid #E4002B";
}

function showModal() {
    modal.style.display = "block";
    openTab(event, 'login');
    document.getElementsByClassName("tablinks")[0].classList.add("active");
    document.getElementsByClassName("tablinks")[0].style.borderBottom = "4px solid #E4002B";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}