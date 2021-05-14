const isCapricorn = function (dmyDate) {
  let dateElements = dmyDate.split("/");
  let d = parseInt(dateElements[0]);
  let m = parseInt(dateElements[1]);
  if (m == 12 && d > 21) return true;
  if (m == 1 && d < 21) return true;
  return false;
};

const selectPeopleOneByOne = function (array) {
  let filterFunc = function (item) {
    return (
      item.gender == "female" &&
      item.age >= 30 &&
      isCapricorn(item.birthday.dmy)
    );
  };

  return array.filter(filterFunc);
};

const selectPeopleCascade = function (array) {
  return array
    .filter((item) => item.gender == "female")
    .filter((item) => item.age >= 30)
    .map((item) => {
      item.capricorn = isCapricorn(item.birthday.dmy);
      return item;
    });
};

console.log("selectPeopleOneByOne", selectPeopleOneByOne(randomPersonData));

console.log("selectPeopleCascade", selectPeopleCascade(randomPersonData));

// const people = randomPersonData
//   .filter((person) => person.gender === "female")
//   .filter((person) => person.age >= 30);
// console.log(people);

// const starSign = function (person) {
//   const birthdays = people.map((person) => person.birthday.dmy);
//   const splitDatesString = birthdays.map((item) => item.split("/"));
//   console.log(splitDatesString);
//   const maand = splitDatesString.map((i) => parseInt(i[1]), 10);
//   console.log(maand);
//   const dag = splitDatesString.map((i) => parseInt(i[0]), 10);
//   console.log(dag);
//   if (maand === 01 && dag < 20) {
//     people.poop = Object.assign({ poop: "CAP" });
//   }
// //   return ...?
// };

// // hoe kan ik voor elk persoon in het object een poop toevoegen?
// people.poop = Object.assign({ poop: "CAP" });

// const result20 = people.forEach(starSign);

// console.log(result20);
