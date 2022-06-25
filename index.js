import express from "express"
import bodyParser from "body-parser"
import morgan from "morgan"

// const express = require('express')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(morgan('combined'))
app.get('/', (req, res) => res.send('Hello Web'))
app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`))