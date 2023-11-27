// Import the function that returns a copy of the tankTipList array
import { getTankTipList } from '../database.js'

let tankTips = getTankTipList()

//put info into the html text
export const TankTipList = () => {
    // Invoke the function that you imported from the database module
    // const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tank-tip-list">'

    // Create HTML representations of each fish here
    for (const tip of tankTips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tank-tip">
            <div><h3>${tip.title}</h3></div>
            <div>${tip.body}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}
