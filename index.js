const express = require('express')
const app = express()
const PORT = 8000


app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({message:'Go to /login to login'})
})

app.post('/login',(req,res)=>{
    const {email,password} = req.body
    if(!email){
        return res.status(400).json({message:'Email cannot be empty'})
    }

    if(!password){
       return res.status(400).json({message:'Password cannot be empty'})
    }
const user = {
    email,
    password
}
    return res.status(200).json({message:'Login Successfull',user})
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})