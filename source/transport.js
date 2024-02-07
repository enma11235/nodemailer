const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "enmaundostres@gmail.com",
        pass: "lmimogjwsyxvpsut "
    }
})

transport.verify().then(()=>{
    console.log("ready for sending emails")
})

module.exports = transport