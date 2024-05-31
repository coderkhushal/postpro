"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class MailService {
    constructor() {
        this.email = process.env.NODEMAILER_EMAIL;
        this.password = process.env.NODEMAILER_PASSWORD;
        this.mailer = nodemailer_1.default.createTransport({
            service: 'Gmail',
            auth: {
                user: this.email,
                pass: this.password,
            },
        });
    }
    sendMail(email, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.mailer.sendMail({
                    from: this.email,
                    to: email,
                    subject: 'Verify Email',
                    text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
                Please click on the following link, or paste this into your browser to complete the process:\n\n
                http://localhost:3000/reset-password/${token}\n\n
                If you did not request this, please ignore this email and your password will remain unchanged.\n`
                });
                return true;
            }
            catch (er) {
                return false;
            }
        });
    }
}
exports.mailService = new MailService();
