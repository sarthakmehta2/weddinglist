const express = require("express");
const app = express();
app.use(express.json());
const port = 3002;
const {createGuest, updateGuest} = require("./types");
const {guest} = require("../backend/db");
const cors = require("cors");
app.use(cors({}));

app.post("/list", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createGuest.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid Inputs"
        });
        return;
    }

    await guest.create({
        name: createPayload.name,
        age: createPayload.age,
        departure: createPayload.departure,
        confirmed: false
    })
    res.json({
        msg: "Guest added to the list"
    });
   

});

app.get("/lists", async function(req, res){
    const list = await guest.find({});
    res.json({
        list: list
    });
});

app.put("/confirmed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateGuest.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid inputs"
        });
        return;
    }
    await guest.updateOne({
        _id: req.body.guestid
    },{
        confirmed: true
    });
    res.json({
        msg: "Guest confirmed"
    })

});

app.listen(port);