const {Router} = require("express")
const router = Router()
const transport = require("../transport.js")

router.post("/send-email", async (req, res) => {
    const {name, email, phone, message} = req.body

    const HTMLcontent = `
    <h1>User Information</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>email: ${email}</li>
        <li>phone: ${phone}</li>
    </ul>
    <p>message: ${message}</p>
    `
    await transport.sendMail({
        from: "'enmaunodstres@gmail.com",
        to: email,
        subject: "nodemailer",
        html: HTMLcontent
    })
    res.send("recibido")
})

module.exports = router