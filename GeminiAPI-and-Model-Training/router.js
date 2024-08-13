const {Router} = require('express')
const run = require('./geminiAPI')
const router =  Router()

router.post('/prompt',async (req,res)=>{
    try {
        const {prompt} = req.body;
        const response = await run(prompt)
        res.json(response)
    } catch (error) {
        console.log(error);
        
    }
})

module.exports = router
