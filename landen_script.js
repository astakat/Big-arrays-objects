// alle landen:
const landen = randomPersonData.map((person) => person.region);
// console.log(landen);
// alleen unieke landen:
const unique = [...new Set(landen)];
// console.log(unique);
const sortedRegions = unique.sort();
// unieke landen in een lijst door op de knop te drukken:

const listMaker = function () {
  const parent = document.getElementById("landen_lijst");
  // console.log(parent);
  const appendList = function (region) {
    const regionsList = document.createElement("li");
    regionsList.innerText = `${region}`;
    parent.appendChild(regionsList);
    // console.log(regionsList);
  };
  sortedRegions.forEach((item) => appendList(item));
};

const button2 = document.querySelector("button[id='landen']");
button2.addEventListener("click", listMaker);
// console.log(button2);

// nog een reset button maken en ook zorgen dat de start van de pagina leeg is.

// meeste mensen in welk land?

// `countFunc` is een functie die in de foreach wordt meegegeven. Elk item wordt daarin meegegeven. Voor elk item wordt in het zogenaamde `countObj` gezocht of de key daarvan daarin aanwezig is. Zo ja, wordt het item in countObj door de ++ notatie met 1 verhoogd. Anders, met gebruik van de or pipe '||' wordt de waarde op 1 gezet. Daarna wordt het countObj teruggegeven.
let countObj = {};
let countFunc = (keys) => {
  countObj[keys] = ++countObj[keys] || 1;
  return countObj;
};
landen.forEach(countFunc);

countObj = Object.entries(countObj);

// hoe maak je een object met genaamde keys en values:
countObj = countObj.map((land) => ({
  land: land[0],
  inwoners: land[1],
}));

countObj.sort(function (a, b) {
  return b.inwoners - a.inwoners;
});

// console.log(countObj);

// een betere functie schrijven voor deze, zodat ik hem meerdere keren kan gebruiken.
const listMaker2 = function () {
  const parent = document.getElementById("max_landen");
  console.log(parent);
  const appendList = function (land, getal) {
    const landenList = document.createElement("li");
    // even kijken naar de innerText, want dat mag eigenlijk niet.
    landenList.innerText = `${land.inwoners}, ${land.land}`;
    parent.appendChild(landenList);
    console.log(landenList);
  };
  countObj.forEach((item) => appendList(item));
};

const button3 = document.querySelector("button[id='hoeveel']");
button3.addEventListener("click", listMaker2);
// console.log(button3);
