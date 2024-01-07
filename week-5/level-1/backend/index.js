const express = require('express');
const zod = require('zod');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('');

const businessCardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: Array,
    linkdinUrl: String,
    twitterUrl: String
});

const businessCardModel = mongoose.model('BusinessCards', businessCardSchema);
const app = express();
app.use(bodyParser.json());
app.use(cors());
let en1 = new businessCardModel({
    name: "Sharad Shukla",
    description: "Hi there this is Sharad.",
    interests: ['swimming', 'singing', 'interest3'],
    linkdinUrl: '#',
    twitterUrl: '#'
});
// async function save()
// {
//     await en1.save();
// }
// save();
app.get('/businessCards', async function(req, resp) {
    try
    {
        const businessCards = await businessCardModel.find();
        resp.status(200).json(businessCards);
    }
    catch(err)
    {
        resp.status(404).json({
            message: 'Internal Server Error.'
        })
    }
    
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});