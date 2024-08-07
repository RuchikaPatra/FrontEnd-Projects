import a from '../Images/a.jfif'
import b from '../Images/b.jpg'
import c from '../Images/c.jpg'
import d from '../Images/d.jpg'

export const dummyRestaurants = [
    {
        name: 'The BunCrafters',
        address: 'Saheed Nagar, BBSR',
        imgURL: a,
        menu: [{ name: 'Rolls', price: 60, quantity: 2 },
        { name: 'Pizza', price: 120, quantity: 3 },
        { name: 'Burger', price: 40, quantity: 1 },]
    },
    {
        name: 'GlobaBites',
        address: 'Jaydev Vihar, BBSR',
        imgURL: b,
        menu: [{ name: 'Burger', price: 120, quantity: 3 },
        { name: 'Sushi', price: 200, quantity: 5 },
        { name: 'Pasta', price: 180, quantity: 2 },]
    },
    {
        name: 'Taco Joy',
        address: 'Bapuji Nagar, BBSR',
        imgURL: c,
        menu: [{ name: 'Tacos', price: 300, quantity: 4 },
        { name: 'Burritos', price: 150, quantity: 2 },
        { name: 'Enchiladas', price: 250, quantity: 3 },]
    },
    {
        name: 'Sushi Snap',
        address: 'Rajmahal, BBSR',
        imgURL: d,
        menu: [{ name: 'Sashimi', price: 350, quantity: 5 },
        { name: 'Udon', price: 200, quantity: 1 },
        { name: 'Miso Soup', price: 250, quantity: 1 },],
    },
];