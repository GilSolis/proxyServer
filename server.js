const cors = require('cors');
const axios = require('axios');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/fetch', async (req, res)=>{
  const {searchURL, method} = req.body;
  try{
    const data = await axios[method](searchURL);
    console.log(data)
    res.json(data);
  }catch(err){
      console.log(err)
    res.json(err);
  }
})
//comment
app.listen(process.env.PORT || 5000)