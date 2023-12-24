const express = require('express');
const app = express();
app.use(express.json());
var users = [{
    name : "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numOfKid = johnKidneys.length;
    let numOfHealthyKidneys = johnKidneys.filter((kidney) => kidney.healthy).length;
    const noOfUnhealthyKidneys = numOfKid - numOfHealthyKidneys;
    res.json({
        numOfKid,
        numOfHealthyKidneys,
        noOfUnhealthyKidneys
    })
})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg : "done!"
    })
})

app.put("/", (req, res) => {
    const johnKidneys = users[0].kidneys;
    johnKidneys.filter((kidney) => kidney.healthy = true);
    res.json({});
})

app.delete("/", (req, res) => {
    let johnKidneys = users[0].kidneys;
    users[0].kidneys = johnKidneys.filter((kidney) => kidney.healthy);
    res.json({msg : "done"});
})

app.listen(3000);