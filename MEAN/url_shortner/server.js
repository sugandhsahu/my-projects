const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrls')
const shortUrls = require('./models/shortUrls')
const app = express()

mongoose.connect('mongodb://localhost/urlShortner',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json({}));

app.post('/shortUrls', async (req,res) => {
    console.log(req)
    await shortUrls.create({full: req.body.fullUrl})
    res.send({status: 'done'})
})

app.post('/getUrls', async (req,res) => {
    const shortUrls = await ShortUrl.find()
    res.send({ shortUrls: shortUrls})
})

app.post('/:shortUrl', async (req,res) => {
    const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl})
    if (shortUrl == null) {
        return res.sendStatus(404)
    }

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})

app.listen(process.env.PORT || 5000)