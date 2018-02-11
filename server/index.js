require('dotenv').config();
const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , massive = require('massive')

const app = express();
app.use(bodyParser.json());
app.use(cors())


massive(process.env.CONNECTION_STRING).then((db)=>{
    app.set('db', db);
    app.listen(process.env.SERVER_PORT, ()=>{
        console.log(`listening on ${process.env.SERVER_PORT}`)
    })
})

//endpoints
app.get('/api/allproducts', (req,res)=>{
    app.get('db').get_products().then(data => {
        res.send(data);
    })
})

app.get('/api/getcart', (req,res)=>{
    app.get('db').get_cart().then(data => {
        res.send(data);
    })
})

app.post('/api/addcart/', (req,res)=>{
    app.get('db').add_cart(req.body.name , req.body.id).then(data=>{
        res.send(data)
    })
})

app.put('/api/change', (req,res)=>{
    console.log(req.body.stuff, req.body.id)
    app.get('db').change_quantity(req.body.id, req.body.stuff).then(data =>{
        res.send(data)
    })
})

app.delete('/api/remove/:id', (req, res) => {
    app.get('db').delete_thing(req.params.id).then(data => {
        res.send(data);
    })
})

app.delete('/api/removeall', (req, res) => {
    app.get('db').delete_all().then(data => {
        res.send(data);
    })
})