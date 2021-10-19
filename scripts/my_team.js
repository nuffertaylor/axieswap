var activeAxies = 
[
  {id:1, img:"https://theycb.files.wordpress.com/2020/11/3a15f-05ten9f4x0jgx9dsg.png", rate:"15"},
  {id:2, img:"https://theycb.files.wordpress.com/2020/12/december-surprise.png", rate:"19"}
]
var axieData = 
[
  {id:1, currentUser: "phillybuster" ,totalEarned:78, recentEarned:14, approxAxieValue:.1},
  {id:1, currentUser: "marlowe" ,totalEarned:232, recentEarned:17, approxAxieValue:.092}
];

var totalEarnings = 0;
var recentEarnings = 0;
var percentEarnings = 0;

function calcEarnings()
{
  totalEarnings = 0;
  recentEarnings = 0;
  percentEarnings = 0;

  activeAxies.forEach(a => {
    percentEarnings += parseInt(a.rate);
  });
  axieData.forEach(d => {
    //we'll increment earnings here to simulate growth
    d.totalEarned += Math.random() / 1000;
    d.recentEarned += Math.random() / 1000;
    //calculate the total
    totalEarnings += d.totalEarned;
    recentEarnings += d.recentEarned;
  });
  //apply our calculations to the page
  document.getElementById("total").innerHTML = totalEarnings.toFixed(5) + " SLP";
  document.getElementById("recent").innerHTML = recentEarnings.toFixed(5) + " SLP";
  document.getElementById("percent").innerHTML = percentEarnings + "%";

}

function populate()
{
  let container = document.getElementById("active-axies");
  container.innerHTML = "";
  for(let i=0; i<activeAxies.length; i++)
  {
    //first append the axie
    let individual = document.createElement("div");
    individual.classList.add("individual-axie");
    container.appendChild(individual);
    let image = document.createElement("img");
    image.setAttribute( "onclick", "javascript: replaceAxie(" + activeAxies[i].id +");" );

    let replaceOverlay = document.createElement("div");
    replaceOverlay.classList.add("overlay");
    replaceOverlay.innerHTML = "Replace";
    individual.appendChild(replaceOverlay);

    image.classList.add("axie-img");
    image.src = activeAxies[i].img;
    individual.appendChild(image);
    let rate = document.createElement("div");
    rate.classList.add("axie-rate");
    rate.innerHTML = activeAxies[i].rate + "%";
    individual.appendChild(rate);

    //then append the axie's stats, but hide it. we'll reveal onclick
    let stats = document.createElement("div");
    stats.classList.add("individual-axie");
    container.appendChild(stats);
    let line0 = document.createElement("div");
    line0.classList.add("text-line");
    stats.appendChild(line0);
    let span0 = document.createElement("span");
    span0.innerHTML = "Currently being used by: " + axieData[i].currentUser;
    line0.appendChild(span0);
    let line1 = document.createElement("div");
    line1.classList.add("text-line");
    stats.appendChild(line1);
    let span1 = document.createElement("span");
    span1.innerHTML = "Total Earnings: " + axieData[i].totalEarned.toFixed(5) + " SLP";
    line1.appendChild(span1);
    let line2 = document.createElement("div");
    line2.classList.add("text-line");
    stats.appendChild(line2);
    let span2 = document.createElement("span");
    span2.innerHTML = "Recent Earnings: " + axieData[i].recentEarned.toFixed(5) + " SLP";
    line2.appendChild(span2);
    let line3 = document.createElement("div");
    line3.classList.add("text-line");
    stats.appendChild(line3);
    let span3 = document.createElement("span");
    span3.innerHTML = "Approximate Value: " + axieData[i].approxAxieValue + "ETH";
    line3.appendChild(span3);
  }
}

var timer = null;

function init()
{
  clearInterval(timer);
  timer = setInterval(() => {
    calcEarnings();
    populate();
  }, 1000);
}

function replaceAxie(axieID)
{
    if(confirm("Are you sure you want to replace this Axie?"))
    {
            //push confirmation of transaction to wallet
            //we'll simulate this by waiting 5 seconds before removing the axies
        setTimeout(() => {
            let axieIndex = findAxieIndexById(activeAxies, axieID);
            if(axieIndex !== false)
            {
                activeAxies.splice(axieIndex, 1);
            }
            populate();
            console.log("Replacing Axie");
            alert("Successfully replaced your Axie!");
                  }, 2000);
              }

}

function findAxieIndexById(arr, id)
{
  for(let i = 0; i < arr.length; i++)
      if(arr[i].id == id)
        return i;
  return false;
}

function claimRecentEarnings()
{
  let value = recentEarnings;
  if(confirm("Are you sure you want to claim " + value.toFixed(2) + " SLP?"))
  {
    //make a deep copy of the data
    let dataCopy = JSON.parse(JSON.stringify(axieData));
    setTimeout(() => {  
      //clear recent earnings of all axies
      for(let i=0; i<axieData.length; i++)
        axieData[i].recentEarned -= dataCopy[i].recentEarned;
      //notify user of success
      alert("successfully transferred " + value.toFixed(2) + " SLP");
      init();
      }, 5000);
  }
}