const express = require('express'); 

const app = express(); 

const PORT = 3000;


app.get ('/greetings/:username',(req, res)=> {
    const username = req.params.username;
    res.send(`Hello there,${username}!`);
});

app.LISTEN (PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});