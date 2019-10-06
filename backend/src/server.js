const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://vinidg-dev:pXs3S3ZygIEvMSI3@cluster0-mheor.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')))
app.use(routes)


app.listen(3333)