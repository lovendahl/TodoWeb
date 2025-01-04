const express = require('express');
const app = express();
const port = 8010;
app.use(express.json());
app.use(express.static('public'));

app.listen(port,() =>{
    console.log('Server started. Listening on port ' + port);
})

app.post('/new',(req,res) =>
    {
        console.log("server got info at /new");
        const {parcel} = req.body;
        console.log("server: " + parcel);

        if(!parcel) 
            {
                return res.status(400).send({status:'failed'});
            }
            res.status(200).send({status:'got new todo info'});
    });
