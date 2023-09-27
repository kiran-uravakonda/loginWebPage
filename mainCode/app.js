var express=require('express')
var mongoose=require('mongoose')
var app=express()
var path=require('path')
var templatepath=path.join(__dirname,'./views')

app.set("view engine",'hbs')
app.set("views",templatepath)
var collection=require('./mongodb')

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/login',(req,res)=>{
   res.render('login')
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.post('/signup',(req,res)=>{
    var data=
    {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
    }

    collection.insertMany([data])
    res.send("hello world")

})



app.post('/login',async (req,res)=>{
   
    var check=await collection.findOne({email:req.body.email})
    console.log(req.body.password)
    console.log(check.password)
    if(check.password===req.body.password)
    {
        res.send('home')
    }
    else
    {
        res.send("wrong details found")
    }

})


mongoose.connect('mongodb://localhost:27017/',);
app.listen(3000,()=>{
    console.log("server running on 3000 port")
})