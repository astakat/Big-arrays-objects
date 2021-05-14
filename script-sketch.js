// STEENBOKVROUWEN:
// array met objecten, alleen vrouwen:
const female = randomPersonData.filter((person) => person.gender === "female");
console.log(female);
// array met objecten, alleen vrouwen boven de 30:
const agePlus = female.filter((person) => person.age >= 30);
console.log(agePlus);
// array met strings, hoe kom ik bij de geboortedatum:
const capricorn = agePlus.map((person) => person.birthday.dmy);
console.log(capricorn);
// array met arrays, opsplitsen van een string naar losse nummer strings.
const splitDatesString = capricorn.map((item) => item.split("/"));
console.log(splitDatesString);
// array van integers met alle geboordte maanden
const maand = splitDatesString.map((i) => parseInt(i[1]), 10);
console.log(maand);
// array van integers met alle geboordte dagen
const dag = splitDatesString.map((i) => parseInt(i[0]), 10);
console.log(dag);

function checkDate() {
  let resultCaps = [];
  if (maand === 12 && dag > 21) {
    console.log("nummer 1 doet het");
  } else if (splitMonth === 01 && splitDay > 01 && splitDay < 20) {
    console.log("nummer 2 ook");
  } else {
    console.log("geen!");
  }
  console.log(resultCaps);
  return resultCaps;
}
checkDate();

let result = ["1", "2", "3", "4"].map((i) => parseInt(i));
console.log(result);

// resultCaps.push((person) => person.name);

// meeste mensen in welk land?
console.log(landen);

let countObj = {};

let countFunc = (keys) => {
  countObj[keys] = ++countObj[keys] || 1;
  return countObj;
};

landen.forEach(countFunc);

console.log(countObj);

let landenArray = [];

let landenKeys = Object.keys(countObj);

landenKeys.forEach()

// Steenbokvrouwen:
const people = randomPersonData
  .filter((person) => person.gender === "female")
  .filter((person) => person.age >= 30);
console.log(people);

const judgeCap = function (maand, dag) {
  let capArr = [];
  if (maand === 12 && dag > 21) {
    capArr.push(person);
  } else if (maand === 01 && dag < 20) {
    capArr.push(person);
  } else {
    console.log("no Cap");
  }
  console.log(capArr);
};

const starSign = function (person) {
  const birthdays = people.map((person) => person.birthday.dmy);
  const splitDatesString = birthdays.map((item) => item.split("/"));
  console.log(splitDatesString);
  const maand = splitDatesString.map((i) => parseInt(i[1]), 10);
  console.log(maand);
  const dag = splitDatesString.map((i) => parseInt(i[0]), 10);
  console.log(dag);
  const results = judgeCap(maand, dag);
  console.log(results);
  return results;
};

starSign(people);

people.forEach((element) => {
  // check if the birth date is right with judgeCap function
  // but before I can do that I need to make each birthdate readable for the function.
});

// Steenbokvrouwen:

const selectionPeople = (person) => {
    person.forEach((person) => {
      if (person.gender === "female" && person.age >= 30) {
        isCapricorn(person);
      }
    });
  };
  
  const isCapricorn = function (person) {
    let capArray = [];
    const maand = parseInt((person) => person.birthday.dmy.split("/")[1]);
    const dag = parseInt((person) => person.birthday.dmy.split("/")[0]);
    console.log("dag", dag);
    console.log("maand", maand);
    person.forEach(() => {
      if ((maand === 12 && dag > 21) || (maand === 01 && dag < 20)) {
        console.log(person);
      }
    });
  };
  isCapricorn(randomPersonData[0]);

  
  // selectionPeople(randomPersonData);
  
  // console.log("wat zijn de object values", Object.values(randomPersonData));
  