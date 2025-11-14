const express = require('express'); 

const app = express(); 

const PORT = 3000;


app.get ('/greetings/:username',(req, res)=> {
    const username = req.params.username;
    res.send(`Hello there,${username}!`);
});

app.get('/roll/:dice', (req, res) => {
    const num = parseInt(req.params.dice);

    if (isNaN (num)){
        return res.send('You must specify a number.');
    }
    const randomRoll = Math.floor(Math.random() * (num + 1));
    res.send(`You rolled a ${randomRoll}.`)
}); 

const collectibles = [
    {name: 'shiny ball', price: 5.95 },
    {name: 'autographed picture of a dog', price: 10},
    {name: 'vintage 1970s yogurt Sold AS-IS', price: 0.99}
]; 

app.get('/collectibles/index',(req,res)=> {
    const index = parseInt(req.params.index);
    if (isNaN(index)|| !collectibles[index]){
        return res.send('This item is not yet in stock. Check back soon!');
    }
    const item = collectibles[index];
    res.send(`So, you want the ${item.name}? For ${item.price},it can be yours `)
});

const shoes = [  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }

];

app.get('/shoes',(req, res)=> {
    let filteredShoes = shoes;
    const minPrice = parseFloat(req.query['min-price']);
    const maxPrice = parseFloat(req.query['max-price']);
  const type = req.query.type;

  if (!isNaN(minPrice)){
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
  } 

  if (!isNaN(maxPrice)) {
    filteredShoes = filteredShoes.filter(shoe.price <= maxPrice);
  }
  if (type) {
    filteredShoes =  filteredShoes.filter(shoe => shoe.type === type);
  }
res.send(filteredShoes);
});



app.listen (PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
}); 

