//TODO: withdrawaxie button
var axiesAvailable = 
[
  {id:1, img:"https://theycb.files.wordpress.com/2020/11/3a15f-05ten9f4x0jgx9dsg.png", rate:"15"},
  {id:2, img:"https://theycb.files.wordpress.com/2020/12/december-surprise.png", rate:"15"}
]
var axiesToWithdraw = []

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
    individual.appendChild(rate);
  });
}

function populateAvailableContainer()
{
  populateContainer("availableContainer", axiesAvailable);
}
function populateWithdrawContainer()
{
  populateContainer("withdrawContainer", axiesToWithdraw);
}
function populateContainers()
{
  populateAvailableContainer();
  populateWithdrawContainer();
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
    axiesToWithdraw.push(axiesAvailable[axieIndex]);
    axiesAvailable.splice(axieIndex, 1);
  }
  else //then check axiesToWithdraw
  {
    axieIndex = findAxieIndexById(axiesToWithdraw, id);
    axiesAvailable.push(axiesToWithdraw[axieIndex]);
    axiesToWithdraw.splice(axieIndex, 1);
  }
  populateContainers();
}

function withdrawAxies()
{
  //verify there are axies to withdraw
  if(axiesToWithdraw.length == 0)
  {
    alert("You must select Axies before you can withdraw them!");
    return;
  }
  let axieStr = " axie";
  if(axiesToWithdraw.length > 1) axieStr = axieStr + "s";
  //send message to verify user wishes to withdraw
  if(confirm("Are you sure you want to withdraw " + axiesToWithdraw.length + axieStr + "?"))
  {
    //push confirmation of transaction to wallet
    //we'll simulate this by waiting 5 seconds before removing the axies
    setTimeout(() => {  
      //remove axies
      axiesToWithdraw = [];
      populateContainers();
      //notify user of success
      alert("successfully withdrawn your" + axieStr);
      }, 5000);
  }
}