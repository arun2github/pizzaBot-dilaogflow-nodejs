const express = require('express');
const app = express()
const dfff = require('dialogflow-fulfillment')
const {google} = require('googleapis')

const port = 4000;

app.post('/webhook',()=>{
    console.log('welcome from webhook side');;

    if (req.body.result.action === 'user_details') {

        return res.json({
            speech: 'Fetch iuser details',
            displayText: 'Fetch user details',
            followupEvent: {
                "data" : {
                    "pizzatype" : req.body.result.parameter['pizzatype'],
                    "size" : req.body.result.parameter['size'],
                    "username" : req.body.result.parameter['username'],
                    "address" : req.body.result.parameter['address'],
                    "mobile" : req.body.result.parameter['mobile'],
                    "email" : req.body.result.parameter['email']
                    
                },
                "name" : "user_deatils"
            }
        })

        
    }
})
 

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})