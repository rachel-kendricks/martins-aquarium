/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            image: "images/rainbow-trout.jpeg",
            breed: "Rainbow Trout",
            name: "Stacy",
            length: 14,
            harvested: "Yellowstone Lake",
            diet: "rainbows"
        }, {
            id: 2,
            image: "images/walleye.jpeg",
            breed: "Walleye",
            name: "Miles",
            length: 13.5,
            harvested: "Lake Michigan",
            diet: "bugs"
        }, {
            id: 3,
            image: "images/bowfin.jpeg",
            breed: "Bowfin",
            name: "Bertha",
            length: 15,
            harvested: "Lake Tahoe",
            diet: "radioactive waste"
        }, {
            id: 4,
            image: "images/koi.jpeg",
            breed: "Koi",
            name: "Ed",
            length: 10,
            harvested: "Lake Tahoe",
            diet: "fish food"
        }, 
        {
            id: 5,
            image: "images/bluegill.jpeg",
            breed: "bluegill",
            name: "Martha",
            length: 6,
            harvested: "Lake Michigan",
            diet: "worms"
        }, {
            id: 6,
            image: "images/pumpkinseed.jpeg",
            breed: "Pumpkinseed",
            name: "Pumpkin",
            length: 5,
            harvested: "Lake Michigan",
            diet: "bugs"
        }
    ],
    tankTipList: [
        {
            id: 1,
            title: "1. Change Water Regularly",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor maximus pellentesque. Sed nec libero eget ex placerat commodo. Aliquam bibendum vestibulum risus id congue. Nulla sagittis pretium nisi eu hendrerit. Donec nunc lectus, lobortis quis neque vel, dictum vulputate leo. Ut tristique finibus nulla ut hendrerit. Vivamus posuere aliquam nibh vel dignissim. Curabitur sed nisi ac sapien lacinia gravida et vitae mauris. Suspendisse a iaculis sem."
        }, {
            id: 2,
            title: "2. Change Filter Cartridge",
            body: "Cras efficitur et ante a volutpat. Donec pellentesque congue mauris, quis viverra magna mattis sed. Praesent tincidunt ligula dui, eu aliquet lacus rutrum sagittis. Etiam accumsan nulla et est vestibulum dictum. Suspendisse sit amet facilisis mi. Donec volutpat suscipit eros nec placerat. Nulla nec mi ac lectus viverra ultrices. Aliquam et diam hendrerit, accumsan tortor non, vestibulum augue. Aliquam vitae purus a leo rutrum lacinia in nec odio. Morbi dapibus mauris non enim tincidunt tincidunt. Quisque id velit non arcu porttitor commodo vel interdum augue. Maecenas consectetur urna imperdiet, ultrices tellus a, gravida lorem. Aliquam erat volutpat. Donec lacinia sit amet purus nec aliquet. Nulla cursus lacinia libero, in malesuada mauris consectetur quis."
        }, {
            id: 3,
            title: "3. Avoid Overfeeding",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor ex mauris, ac condimentum mauris ullamcorper vel. Sed imperdiet, orci eget sollicitudin posuere, arcu nisl dictum lorem, non pretium dui dui sed dui. Phasellus dignissim mauris nec lobortis tincidunt. Vivamus facilisis nibh ligula, ac aliquet velit mattis quis. In sagittis, lorem quis efficitur elementum, enim turpis scelerisque ipsum, eu laoreet turpis mauris in libero. Nunc volutpat et sapien posuere lobortis. Aliquam id diam rhoncus, consectetur mauris commodo, molestie elit. Vestibulum quis lectus odio. Fusce erat nunc, convallis et diam a, egestas consequat mauris. Fusce mattis rutrum sem, et tempor elit porta sed. Nam interdum sit amet eros non sagittis. Donec sed augue congue odio facilisis finibus."
        }
    ],
    harvestLocationsList: [
        {
            id: 1,
            image: "images/lake-michigan.jpeg",
            title: "Lake Michigan",
            body: "Phasellus dignissim mauris nec lobortis tincidunt. Vivamus facilisis nibh ligula, ac aliquet velit mattis quis. In sagittis, lorem quis efficitur elementum, enim turpis scelerisque ipsum, eu laoreet turpis mauris in libero. Nunc volutpat et sapien posuere lobortis. Aliquam id diam rhoncus, consectetur mauris commodo, molestie elit. Vestibulum quis lectus odio. Fusce erat nunc, convallis et diam a, egestas consequat mauris. Fusce mattis rutrum sem, et tempor elit porta sed."
        }, {
            id: 2,
            image: "images/lake-tahoe.jpeg",
            title: "Lake Tahoe",
            body: "Nam dui ligula, tempus vitae mauris a, feugiat elementum ipsum. Integer porttitor erat neque, vel molestie lectus commodo eget. Integer ut nulla fringilla, vulputate lorem porta, faucibus massa. Pellentesque laoreet eget mauris eget hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus fermentum quam, ac facilisis nulla fringilla in. Fusce urna massa, aliquam nec urna eget, tempor vulputate lectus. Nam quis sem tortor."
        }, {
            id: 3,
            image: "images/yellowstone-lake.jpeg",
            title: "Yellowstone Lake",
            body: "Curabitur luctus magna nec ante tincidunt laoreet. Suspendisse ultrices porttitor ligula, eget aliquet nunc condimentum eleifend. Phasellus vel semper lorem, a rhoncus ipsum. Cras eros nisi, imperdiet eget mi eu, lobortis laoreet risus. Donec suscipit dui eros. Sed tempor nibh nec turpis vehicula imperdiet. Quisque dictum pretium ligula, eu dignissim sem vehicula et. Quisque sagittis ullamcorper quam, id convallis metus sodales eget. Nullam rhoncus scelerisque blandit."
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTankTipList = () => {
    return database.tankTipList.map(tankTipList => ({...tankTipList}))
}

export const getHarvestLocations = () => {
    return database.harvestLocationsList.map(harvestLocationsList => ({...harvestLocationsList}))
}