let express=require('express')
let mongoose=require('mongoose')
let app=express();
let cors=require('cors');
let hostname='127.0.0.1';
let port =5010;
app.use(express.json());
app.use(cors())
let FarmerModel =require('./Models/Farmer')
mongoose.connect('mongodb://localhost:27017/Farmer');


app.post('/login',(req,res)=>
{
            FarmerModel.create(req.body)
            .then(milk=>res.json(milk))
            .catch(err =>res.json(err));

            console.log(req.body);

})
app.post('/signin',(req,res)=>
{
    let {email,password}=req.body;
    FarmerModel.findOne({email:email})
    .then(user=>{
        if(user)
        {
            if(user.password===password)
            {
                res.json("success");
            }
            else
            {
                res.json("incorrect password");
            }
        }
        else
        {
            res.json("no record found");
        }
    })
})
app.listen(port,hostname,()=>
{
    console.log(`Server http://${hostname}:${port}`)
})