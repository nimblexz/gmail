const express = require('express');
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
let smtp_login = process.env.SMTP_LOGIN
let smtp_pass = process.env.SMTP_PASS
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'hhfvbkm1973@gmail.com',
        pass: 'vtnlizhsftqqptif'
    }
})

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.post('/send', async function (req, res) {
    let {name, eMail, message} = req.body
    let info = await transporter.sendMail({
        from: 'HR WANTS ME',
        to: "pacanchik.555@yandex.ru",
        subject: 'JOBS',
        html: `<b>Сообщение с моего портфолио</b>
<div>name: ${name}</div>
<div>email: ${eMail}</div>
<div>message: ${message}</div>
`
    })
    res.send(info)


})
let port = process.env.PORT || 3010
app.listen(port, function () {
    console.log('node launch')
})
