import { getHarvestLocations } from "../database.js";

const harvestLocations = getHarvestLocations()

//put info into the html text
export const fishHarvestLocationsList = () => {

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="harvesting-areas">'

    // Create HTML representations of each fish here
    for (const location of harvestLocations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="area">
        <img src="${location.image}" class="harvest-img">
        <h4>${location.title}</h4>
        <p>${location.body}</p>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}