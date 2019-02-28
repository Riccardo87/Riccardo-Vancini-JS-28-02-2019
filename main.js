// funzione Read More JS
function readMore() {
  var dots = document.getElementById("puntini");
  var moreT = document.getElementById("altro");
  var btnT = document.getElementById("bottone");

  if
    (dots.style.display === "none") {
    dots.style.display = "inline";
    btnT.innerHTML = "Read more";
    moreT.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnT.innerHTML = "Read less";
    moreT.style.display = "inline";
  }
}

// FETCH



fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(result => {
    console.log(result)

    for (let i of result.data) {

      let div = document.createElement("div")
      div.classList.add("jumbotron")

      let divId = document.createTextNode("ID: " + i.id + ';')
      div.appendChild(divId)

      document.getElementById("fetchFalse").appendChild(div)

      let divFname = document.createTextNode(" Firstnome: " + i.first_name + ';')
      div.appendChild(divFname)

      let divSname = document.createTextNode(" Lastname: " + i.last_name + '; ')
      div.appendChild(divSname)

      let elem = document.createElement("img")
      elem.setAttribute("src", i.avatar)
      
      div.appendChild(elem)
    }
  }
  );

// VAR PER ORA

var ora = new Date();
document.getElementById("ora").innerHTML = "Prima prova per qualifica del " + ora.getDate() + "/" + (ora.getMonth() + 1) + "/" + ora.getFullYear();