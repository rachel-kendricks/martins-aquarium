import { getFish } from './database.js'
import { FishList, mostHolyFish, soldierFish, nonHolyFish } from './fish/fish-list.js'
import { TankTipList } from './tips/tank-tip-list.js'
import { fishHarvestLocationsList } from './locations/locations-list.js'

const allFish = getFish()

//check work (fish list)
console.log("This is all the fish:")
for (const fish of allFish) {
    console.log(fish)
}

console.log("This is the first list (multiples of 3):")
const firstHolyFish = mostHolyFish(allFish)

for (const fish of firstHolyFish) {
    console.log(fish)
}

console.log("This is the second list (multiples of 5):")
const secondSoldierFish = soldierFish(allFish)

for (const fish of secondSoldierFish) {
    console.log(fish)
}

console.log("This is the last list (everything else):")
const lastNonHolyFish = nonHolyFish(allFish)

for (const fish of lastNonHolyFish) {
    console.log(fish)
}


//insert html text into webpage(fish list)
const parentHTMLElement = document.querySelector(".fish-list")


parentHTMLElement.innerHTML = FishList()

//insert html text into webpage(tank tip list)

const parentHTMLElementTank = document.querySelector(".tank-tip-list")

parentHTMLElementTank.innerHTML = TankTipList()

//insert html text into webpage(harvest locations list)

const parentHTMLElementHarvest = document.querySelector(".harvesting-areas")

parentHTMLElementHarvest.innerHTML = fishHarvestLocationsList()