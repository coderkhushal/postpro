import nodemailer from "nodemailer"
require("dotenv").config()
export class Mailer{
    private username : string 
    private password : string
    private transporter : nodemailer.Transporter | null
    private static instance : Mailer
    private constructor(){
        this.username = process.env.NODEMAILER_USERNAME as string
        this.password = process.env.NODEMAILER_PASSWORD as string
        this.transporter = null
    }
    static getinstance (){
        if (!this.instance){
            this.instance = new Mailer()
            return this.instance
        } 
        return this.instance
    }
    async sendMail(to: string, token :string){
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: this.username,
                pass: this.password
            }
        })

        const content = `
        <h1>Reset Password</h1>
        <p>Click on the link below to reset your password</p>
        <a href="http://localhost:5173/reset-password/${token}">Reset Password</a>
        `
        const mailOptions = {
            from: "rajeshbhasin4488@gmail.com",
            to: to ,
            subject: "Reset Password",
            html: content
        }
        let p = new Promise((resolve, reject)=>{
            this.transporter?.sendMail(mailOptions, (err, info)=>{
                if(err){
                    console.log(err)
                    reject(false)
                }
                else{
                    console.log(info)
                    resolve(true)
                }
            })
        })
        return p;
    }
       
    
}
