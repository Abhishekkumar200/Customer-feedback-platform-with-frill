const express = require('express');
const cors = require('cors')


const app = express();
app.use(cors());


const port = 8000;

app.use(express.json());

//ROUTE-1 to get user details.
app.post('/api/user', async(req, res)=>{
    const userDetails = req.body;
    // const result = await userDetails.json();
    console.log(userDetails)
    res.status(200).send(userDetails);
});

//ROUTE-2 to get feedback details.
app.post('/api/feedback', async(req, res)=>{
    const feeDetails = req.body;
    console.log(feeDetails);
    res.status(200).send(feeDetails);
});

app.listen(port,()=>{   
    console.log(`listening on http://localhost:${port}`);
});