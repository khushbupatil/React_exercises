const data =[
    {
        id:"1",
        title: "Tiramisu",
        description:"The best Tiramisu in town",
        price:"$5.00",
    },
    {
        id:"2",
        title: "Cheese Cake",
        description:"The best Cake in town",
        price:"$4.00",
    },
    {
        id:"3",
        title: "Chocolate",
        description:"The best Chocolate in town",
        price:"$2.00",
    },
];

const desserts = data.map(a => {
    return {
    content: `${a.title} - ${a.description}`,
    price: a.price
    }
})

console.log(desserts);