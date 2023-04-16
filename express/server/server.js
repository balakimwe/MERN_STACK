/*
    M = MongoDB
    E = Express
    R = React
    N = Nodejs
*/
//import express and store express in a variable
const express = require("express")

//initialize the express application and store it in a variable called 'app'
const app = express()

//intialize the port to 8000
const port = 8000

//allow the application to parse json data (form information)
//allow the application to accept form information
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//hardcoded data for the api (for now, until we get a database)
const menuItems = [
  { name: "Calamari", price: 12.0 },
  { name: "Maine Lobster Roll", price: 15.0 },
  { name: "Lasagna", price: 20 },
  { name: "Pizza", price: 10 },
  { name: "A5 Japanese Wagyu", price: 99 },
];

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

//Get All
app.get("/api/menu", (req, res) => {
    res.json({
        count: menuItems.length,
        results: menuItems

    })
})

//Get One
app.get("/api/menu/:idx", (req, res) => {
    res.json({results: menuItems[req.params.idx]})
})

//Create One
app.post("/api/menu", (req, res) => {
    console.log(req.body)
    menuItems.push(req.body)
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})

//Update One
app.put("/api/menu/:idx", (req, res) =>{
    menuItems[req.params.idx] = req.body;
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})

//Dellete One
app.delete("/api/menu/:idx", (req, res) => {
  menuItems.splice(req.params.idx, 1);
  res.json({
    count: menuItems.length,
    results: menuItems,
  });
});


app.listen(port,() => console.log(`Welcome to the Death Star! You are on bridge port: ${port}`))