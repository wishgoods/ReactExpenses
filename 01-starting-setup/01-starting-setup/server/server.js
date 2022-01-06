const express = require("express");
const cors = require('cors');
const fs =require('fs');
var bodyParser = require('body-parser');

// App
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/getAllExpenses", (req, res) => {
  let rawdata = fs.readFileSync('data/expenses.json');
  let expenses = JSON.parse(rawdata);
  res.status(200).send({data: expenses});
});
app.post("/addNewExpense", (req, res) => {
  let rawdata = fs.readFileSync('data/expenses.json');
  let expenses = JSON.parse(rawdata);
  let size = expenses.length;
  if(size==0)
  {
    expenses.push(req.body);
    expenses[size]['id'] = "1";
  }
  else
  {
    let max_id = 0
    expenses.forEach(element => {
      if(Number(element['id'])>=max_id)
      {
        max_id = Number(element['id'])+1
      }
    });
    
    expenses.push(req.body);
    expenses[size]['id'] = max_id;
  }
   
 
  expenses = JSON.stringify(expenses);
  fs.writeFileSync('data/expenses.json', expenses);
  res.status(200).send({data: req.body});
})

app.put("/addToCard", (req, res) => {
  let rawdata = fs.readFileSync('data/cards.json');
  let cards = JSON.parse(rawdata);
  let new_cards = []

  cards['cards'].forEach(element => {

    if(element['id']==req.body['id'])
    {
      element['text'].push(req.body['text'])
    }
    new_cards.push(element);
  });
  new_cards = JSON.stringify({"cards":new_cards});
  fs.writeFileSync('data/cards.json', new_cards);
  res.status(200).send({data: req.body});
})


app.put("/removeCard", (req, res) => {
  let rawdata = fs.readFileSync('data/cards.json');
  let cards = JSON.parse(rawdata);
  let new_cards = []
  
  cards['cards'].forEach(element => {
    
    //console.log(element['date']+";"+req.body['date'])
    
    if(element['id']!=req.body['id'])
    {
      new_cards.push(element);
    }
    else
    {
      console.log(element)
    }
  });
  new_cards = JSON.stringify({"cards":new_cards});
  fs.writeFileSync('data/cards.json', new_cards);
  res.status(200).send({data: req.body});
})

app.post("/moveCard", (req, res) => {
  let rawdata = fs.readFileSync('data/cards.json');
  let cards = JSON.parse(rawdata)
  let index =req.body['index']
  let temp_card ;

  if(req.body['direction']=='left')
  {
    temp_card =cards['cards'][index-1]
    cards['cards'][index-1] = cards['cards'][index]
  }
  else{
    temp_card =cards['cards'][index+1]
    cards['cards'][index+1] = cards['cards'][index]
  }
  cards['cards'][index] =temp_card

  cards = JSON.stringify(cards);
  fs.writeFileSync('data/cards.json', cards);
  res.status(200).send({data: req.body});
})



app.listen(5000);

















