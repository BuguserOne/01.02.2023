/* JS Vertiefung CodeFlow Übung lev1_1: Array sort() */

let languages = ["JavaScript", "Python", "Java", "Ruby", "PHP", "C++", "CSS", "C#", "Go", "C", "TypeScript", "Swift"]
let sorted = languages.sort()
console.log(sorted)

/* Lev1_3_js-vertiefung_array-sort_number-sort() */

let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70]
numArray1.sort((a, b) => a - b)
console.log(numArray1)

/* Lev1_12_js-vertiefung_arrays_slice() */

let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
]
let copyImg1 = array.slice(7, 15)
console.log(copyImg1)
let copyImg2 = array.slice(6, 12)
console.log(copyImg2)

/* Lev1_11_js-vertiefung_arrays_splice() */

let arrayOne = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ]

arrayOne.splice(0, 0, "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg")
console.log(arrayOne)

arrayOne.splice(4, 0, "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg", "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg", "imageTeilnehmer019supercode.jpg")
console.log(arrayOne)

arrayOne.splice(0, 0, "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg", "imageTeilnehmer002supercode.jpg", "imageTeilnehmer003supercode.jpg", "imageTeilnehmer004supercode.jpg", "imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg")
arrayOne.splice(10, 0, "imageTeilnehmer011supercode.jpg", "imageTeilnehmer012supercode.jpg", "imageTeilnehmer013supercode.jpg")
console.log(arrayOne)

/* Lev1_5_js-vertiefung_array-iteration_forEach() */

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const addHundred = checkNumber.map(num => {
    if (num % 3 === 0) {
    return num + 100
    } else {
    return num
    }
})

console.log(addHundred)

/* Lev1_3_js-vertiefung_array-iteration_map()_sort() */

let arrayTwo = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
]

let twoTimes = arrayTwo.map(num => num + num)
console.log(twoTimes)

/* Lev1_2_js-vertiefung_array-iteration_map() */

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

let upperDrinks = getraenke.map(word => word.toUpperCase())
console.log(upperDrinks);

/* Lev1_1_js-vertiefung_array-iteration_forEach() */

let getraenkeOne = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

let assortedDrink = getraenke.sort()
const outputOne = document.querySelector("#output")
let list = "<ul>";
assortedDrink.forEach(function(element) {
    console.log(element);
    list += "<li>" + element + "</li>";
});

outputOne.innerHTML = list;