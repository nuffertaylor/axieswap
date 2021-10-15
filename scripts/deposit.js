//TODO: depositaxie button
var axiesAvailable = 
[
  {id:1, img:"https://theycb.files.wordpress.com/2020/11/3a15f-05ten9f4x0jgx9dsg.png", rate:"15"},
  {id:2, img:"https://theycb.files.wordpress.com/2020/12/december-surprise.png", rate:"15"}
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
    rate.contentEditable = "true";
    rate.innerHTML = axie.rate + "%";
    rate.addEventListener("input", function() {
      let r = rate.innerHTML;
      r = r.replace(/\D/g,''); //remove nonnumeric chars
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
function populateDepositContainer()
{
  populateContainer("depositContainer", axiesToDeposit);
}
function populateContainers()
{
  populateAvailableContainer();
  populateDepositContainer();
}

function findAxieIndexById(arr, id)
{
  for(let i = 0; i < arr.length; i++)
      if(arr[i].id == id)
        return i;
  return false;
}

function switchAxie(id)
{
  let axieIndex = findAxieIndexById(axiesAvailable, id);
  if(axieIndex !== false)
  {
    axiesToDeposit.push(axiesAvailable[axieIndex]);
    axiesAvailable.splice(axieIndex, 1);
  }
  else //then check axiesToDeposit
  {
    axieIndex = findAxieIndexById(axiesToDeposit, id);
    axiesAvailable.push(axiesToDeposit[axieIndex]);
    axiesToDeposit.splice(axieIndex, 1);
  }
  populateContainers();
}

function updateAxieRate(axieID, rate)
{
  let axieIndex = findAxieIndexById(axiesAvailable, axieID);
  if(axieIndex !== false)
  {
    axiesAvailable[axieIndex].rate = rate;
  }
  else
  {
      axieIndex = findAxieIndexById(axiesToDeposit, axieID);
      axiesToDeposit[axieIndex].rate = rate;
  }
}

function depositAxies()
{
  //verify there are axies to deposit
  //send message to verify user wishes to deposit
  //push confirmation of transaction to wallet
  //remove axies
}