const express = require('express')
const controllerRouter = express.Router()
const Tweets = require('../models/tweets')
//Getting all
controllerRouter.get('/',async (req,res)=>{
 try{
        const tweets= await Tweets.find({})
        res.json(tweets)
 }catch (error){
     res.status(500).json({message:error.message})
 }
})
//Get One

controllerRouter.get('/:id',(req,res)=>{
       res.send(req.params.id)
  })
//Create One
controllerRouter.post('/',async(req,res)=>{
    const tweet = new Tweets({
        id:req.body.id,
        user_name:req.body.user_name
    })
    try{
            const newTweet = await tweet.save();
            res.status(200).json(newTweet)
    }catch(error){
        res.status(400).json({message:error.message})
    }
})
//Update One
controllerRouter.put('/',(req,res)=>{

})
//Delte One

module.exports = controllerRouter
