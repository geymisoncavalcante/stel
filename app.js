const express = require('express')
const app = express()
const PORT = 2000
const homeRouter = require('./routers/homeRouter')
const radioRouter = require('./routers/radioRouter')
const radioController = require('./controllers/radioController')

app.set('view engine','ejs')
app.use(express.static('public'));

app.use('/',homeRouter)
app.use('/radio', radioRouter)



app.listen(PORT, function () {
    try {
        console.log('logado a porta', PORT)
    } catch (e) {
        console.log(e)
    }
})