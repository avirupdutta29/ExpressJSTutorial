const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express()
const path = require('path');
const port = 3000

// const avirupMiddleWare = (request, response, next)=>{
//     console.log(request);
// }

app.use(express.static(path.join(__dirname, "public")));
//app.use(avirupMiddleWare);


app.get('/hello/:name', (req, res) => {
  res.send('Hello World! '+ req.params.name);
})

app.get('/about', (req, res) => {
    // res.send('Hi Avirup Dutta!')
    res.sendFile(path.join(__dirname, 'index.html'));
    res.status(200);
    res.json({"Avirup Dutta": 29})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})