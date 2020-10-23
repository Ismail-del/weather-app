const express = require("express");
const path = require("path");
const hbs = require("hbs");
const forcast = require("./Utils/forcast")

const port = process.env.PORT || 3000
const app = express();
app.set('view engine', 'hbs')

const direction = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname,'../template/partials')



app.set('views', viewsPath)
app.set('partials',partialsPath)
// app.set('views', direction)
app.use(express.static(direction))
hbs.registerPartials(partialsPath)
// const Direction = path.join()
// app.get('/about',(req, res) => {
//     res.sendFile(path.join(__dirname,'../public/about.html'))
// })

// app.get('/help',(req, res) => {
//     res.sendFile(path.join(__dirname,'../public/help.html'))
// })
app.get('', (req, res) => {
    res.render('index',{
        name:"index",
        title:"INDEX"
    })  
})
app.get('/about', (req, res) => {
    res.render('about', {
        name:"about",
        title:"ABOUT"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        name:'help',
        title:"HELP",        
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address){
        res.send("You have an error")
    }
   forcast(req.query.address,(error,data) => {
       if (error){
           res.send({error})
       }
        res.send({
            forcast:"It is snowing",
            isLocation:"Khouribga",
            address:{name:data, error:error}
        })
    })
    
    


    // res.render('weather',{
    //     name:"weather",
    //     title:"WEATHE",
        
    // })
})
app.get('/help/*', (req , res) => {
    res.render('404page', {
        error1:"this article note found"
    })
})
app.get('/product', (req, res) => {
    console.log(req.query.adresse)
    if (!req.query.adresse){
        res.send({
            product:"you have an error"
        })
    }
    res.send({
        product:[]
    })
})

app.get('*',(req ,res) => {
    res.render('404page', {
        name:"404 error",
        title:"Ismail Saghraoui",
        error2:"404 page"
    })
})
app.listen(port,() => {
    console.log("server works in port "+port)
})
