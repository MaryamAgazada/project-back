const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const port = 3000
const app=express()
app.use(express.json())
app.use(cors())
const userSchema = new mongoose.Schema({
    name: String,
    age:Number
  });
const User = mongoose.model('User', userSchema);

app.get('/user/',async function(req, res) {
   const getData=await User.find()
  res.send(getData)
})
app.post('/user',async function(req, res) {
   const obj=req.body
   const postedData= new User(obj)
   await postedData.save()
   res.send(postedData)
 })
 app.delete('/user/:id',async function(req, res) {
   let {id}=req.params
   const deletedData=await User.findByIdAndDelete(id)
   res.send(deletedData)
  })
  app.put('/user/:id',async function(req, res) {
    const obj=req.body
    const putData=User.findByIdAndUpdate(obj,id)
    res.send(putData)
      })
      
mongoose.connect('mongodb+srv://meryem:meryem@cluster0.lbuxvjt.mongodb.net/')
.then(() => console.log('Connected!'))
.catch((err)=>console.log("err"))