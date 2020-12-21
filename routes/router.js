const express = require('express')
const router = express.Router()


router.post('/info',(req,res)=>{
    if(req.body.name.length < 6 || String(req.body.name).match(/\s/)){
        return res.send(`error username most have more than 6 letters and not contain whitespaces`)
    }
    let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!req.body.email.match(re)){
        return res.send(`error email format is incorrect`)
    }

    return res.status(200).render('info.ejs',{
        name: req.body.name,
        email: req.body.email,
    })


})

router.get('/',(req,res)=>{
    res.status(200).render('index.ejs')
})

module.exports = router