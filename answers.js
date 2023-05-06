////////////////////////////////
// Easy Going
////////////////////////////////

/*for (i = 1; i <= 20; i ++){
    console.log(i)
}*/

////////////////////////////////
// Get Even
////////////////////////////////

/*for (let i = 0; i <= 200; i += 2) {
   console.log(i)
}*/

////////////////////////////////
// Fizz Buzz
////////////////////////////////

/*for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log("FizzBuzz")}

    else if (i % 3 === 0){
    console.log("Fizz")
}
    else if (i % 5 === 0){
    console.log("Buzz")
    }
else {
    console.log(i)
}
}*/

////////////////////////////////
// Wild Wild Life
////////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee.splice(2, 2, 5001) 
// wolfy.splice(3,3,"Gatham City")
// dart.push("Hawkins")
// wolfy.splice(wolfy.indexOf("Wolfy"), 1, "Gameboy")

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// for (let upperName of ninjaTurtles) {
//     console.log(upperName.toUpperCase());
// }

///////////////////////////////
// Methods, Revisited
////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

    //console.log(favMovies.indexOf('Titanic')) // 8
    //favMovies.sort();
    //favMovies.pop();
    //favMovies.push("Guardians of the Galaxy")
    //favMovies.reverse()
    //favMovies.unshift() // stayed the same because we didn't specify an elemented to be added to the beginning of the array
    //favMovies.splice(3, 1, "Avatar")
    // let middleIndex = Math.floor((0 + favMovies.length -1) / 2);
    // console.log(favMovies[middleIndex]) // Harry Potter
    // console.log(favMovies.indexOf('Harry Potter')) // 9
    // const favMoviesTwo = favMovies.slice(9,18);
    // console.log(favMoviesTwo) 

    ////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggburt
whereIsWaldo.splice(0,0,"Eggbert");
console.log(whereIsWaldo)

////////////////////////////////
//  Excited Kitten
////////////////////////////////

// let catPhrases = ["...human...why you taking pictures of me?...",
// "...the catnip made me do it...",
// "...why does the red dot always get away..."]

// for (let i = 0; i < 20; i++) {
//     let random = Math.floor(Math.random() * (2-0))
//     if ( i % 2 === 0) {
//         console.log(catPhrases[random])
//     } else {
//         console.log(`${i} Love me, pet me! HSSSSSS!`)
//     }
// }

////////////////////////////////
//  Find the Median
////////////////////////////////

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// nums.sort((a , b) => a - b)
// let median;
// if(nums.length % 2 != 0) {
//     let middleIndex = Math.floor(nums.length/2)
//     median = nums[middleIndex]
// } 
// console.log(median)
