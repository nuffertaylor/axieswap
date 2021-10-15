//TODO: Allow the percentage to be changed and saved on change.

var axiesAvailable = 
[
  {id:1, img:"https://theycb.files.wordpress.com/2020/11/3a15f-05ten9f4x0jgx9dsg.png", rate:"15"},
  {id:2, img:"https://theycb.files.wordpress.com/2020/12/december-surprise.png", rate:"15"}
]
var axiesToDeposit = []

function populateAvailableContainer()
{
  let availableContainer = document.getElementById("availableContainer");
  availableContainer.innerHTML = "";
  axiesAvailable.forEach(axie => {
    let individual = document.createElement("div");
    individual.classList.add("individual-axie");
    individual.setAttribute( "onclick", "javascript: switchAxie(" + axie.id +");" );
    availableContainer.appendChild(individual);
    let image = document.createElement("img");
    image.classList.add("axie-img");
    image.src = axie.img;
    individual.appendChild(image);
    let rate = document.createElement("div");
    rate.classList.add("axie-rate");
    rate.innerHTML = axie.rate + "%";
    individual.appendChild(rate);
  });
}
function populateDepositContainer()
{
  let depositContainer = document.getElementById("depositContainer");
  depositContainer.innerHTML = "";
  axiesToDeposit.forEach(axie => {
    let individual = document.createElement("div");
    individual.classList.add("individual-axie");
    individual.setAttribute( "onclick", "javascript: switchAxie(" + axie.id +");" );
    depositContainer.appendChild(individual);
    let image = document.createElement("img");
    image.classList.add("axie-img");
    image.src = axie.img;
    individual.appendChild(image);
    let rate = document.createElement("div");
    rate.classList.add("axie-rate");
    rate.innerHTML = axie.rate + "%";
    individual.appendChild(rate);
  });
}
function populateContainers()
{
  populateAvailableContainer();
  populateDepositContainer();
}

function switchAxie(id)
{
  let found = false;
  for(let i = 0; i < axiesAvailable.length; i++)
  {
      if(axiesAvailable[i].id == id)
      {
        found = true;
        axiesToDeposit.push(axiesAvailable[i]);
        axiesAvailable.splice(i, 1);
        break;
      }
  }
  if(!found)
  {
    for(let i = 0; i < axiesToDeposit.length; i++)
    {
        if(axiesToDeposit[i].id == id)
        {
          axiesAvailable.push(axiesToDeposit[i]);
          axiesToDeposit.splice(i, 1);
        }
    }
  }
  populateContainers();
}

function depositAxies()
{
  //verify there are axies to deposit
  //send message to verify user wishes to deposit
  //push confirmation of transaction to wallet
  //remove axies
  //display message if transaction succeeded or failed
}