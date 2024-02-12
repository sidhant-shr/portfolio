import { NextResponse } from "next/server";
import { Resend } from "resend";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend("re_KbhfXNvU_83nHr9nRz5iTy1VKPzvrUFvw");
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
