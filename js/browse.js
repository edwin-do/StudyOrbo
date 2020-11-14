function searchUp() {
    var input, filter, cards, cardContainer, span, title, i;
    input = document.getElementById("inputText");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body span.h4");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function myFunction(elem) {
    // Get the snackbar DIV
    document.getElementById("course").textContent = elem.id;
    document.getElementById(elem.id).disabled = true;
    document.getElementById('P' + elem.id).style.backgroundColor = "lightgray";
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }