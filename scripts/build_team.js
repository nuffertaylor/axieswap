var axiesAvailable = 
[
  {id:1, img:"../../images/3a15f-05ten9f4x0jgx9dsg.png", rate:"20"},
  {id:2, img:"../../images/axie-full-transparent (1).png", rate:"15"},
  {id:3, img:"../../images/axie-full-transparent.png", rate:"14"},
  {id:4, img:"../../images/axie-infinity-token-angel.png", rate:"15"}
]
var axiesToDeposit = []

function populateContainer(containerID, arr)
{
  let container = document.getElementById(containerID);
  container.innerHTML = "";
  arr.forEach(axie => {
    let individual = document.createElement("div");
    individual.classList.add("individual-axie");
    container.appendChild(individual);
    let image = document.createElement("img");
    image.setAttribute( "onclick", "javascript: switchAxie(" + axie.id +");" );
    image.classList.add("axie-img");
    image.src = axie.img;
    individual.appendChild(image);
    let rate = document.createElement("div");
    rate.classList.add("axie-rate");
    rate.innerHTML = axie.rate + "%";
    rate.contentEditable = "true";
    rate.addEventListener("input", function() {
      let r = rate.innerHTML;
      r = r.replace(/\D/g,''); //remove nonnumeric chars
      if(parseInt(r) > 100) r = "100"; //don't allow them to go over 100%
      rate.innerHTML = r + "%"; //this only allows them to add numbers, and only before the %
      updateAxieRate(axie.id, r);
    });
    individual.appendChild(rate);
  });
}

function populateAvailableContainer()
{
  populateContainer("availableContainer", axiesAvailable);
}