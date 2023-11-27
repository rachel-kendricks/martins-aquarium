// Import the function that returns a copy of the fish array
import { getFish } from '../database.js'

let fishes = getFish()


//fish with length as multiple of 3
export const mostHolyFish = () => {
    const holyFish = []
   

    for (const fish of fishes ) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
            fishes.splice(fishes.indexOf(fish), 1)
        }
    }

    return holyFish
}

const firstHolyFish = mostHolyFish()


//fish with length as multiple of 5
export const soldierFish = () => {
    const soldierFish = []
    // const fishes = getFish()

    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            soldierFish.push(fish)
        }
    }
    return soldierFish
}

const secondSoldierFish = soldierFish()


//all other fish (not multiple of 3 or 5)
export const nonHolyFish = () => {
    const regularFish = []
    const fishes = getFish()

    for (const fish of fishes) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0 ) {
            regularFish.push(fish)
        }
    }
    return regularFish
}

const lastNonHolyFish = nonHolyFish()


//combine into one array of objects
export const reorderedFishList = () => {
    const reorderedList = firstHolyFish.concat(secondSoldierFish, lastNonHolyFish)
       return reorderedList;
    }
    
//put info into the html text
export const FishList = () => {
    // Invoke the function that you imported from the database module
    // const fishes = getFish()
    const finalFishList = reorderedFishList()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish-list">'

    // Create HTML representations of each fish here
    for (const fish of finalFishList) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-list-item">
            <div><img  class="fish-img image--card" src="${fish.image}" /></div>
            <div class="fish__name"><b>Name:</b> ${fish.name}</div>
            <div class="fish__breed"><b>Breed:</b> ${fish.breed}</div>
            <div class="fish__length"><b>Length (in):</b> ${fish.length}</div>
            <div class="fish__harvested"><b>Harvest Location:</b> ${fish.harvested}</div>
            <div class="fish__diet"><b>Diet:</b> ${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}
