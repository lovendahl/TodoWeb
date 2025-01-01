const express = require('express');
const app = express();
const port = 8010;
app.use(express.json());
app.use(express.static('public'));

app.listen(port,() =>{
    console.log('Server started. Listening on port ' + port);
})


app.post('/',(request,response) => {
    console.log("showing main page");
});
