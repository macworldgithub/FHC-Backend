import express from 'express';
import { sendMail } from '../controllers/sendMailController'

const router = express.Router();

router.post("/send", sendMail);

export default router;
