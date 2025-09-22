import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // or smtp
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Thar Tribe Hostel" <${process.env.SMTP_USER}>`,
      to: toEmail, // Guest ka email
      subject: "Your Stay at Thar Tribe Hostel Jaisalmer 🏨",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333; max-width:600px; margin:auto; border:1px solid #eee; padding:20px; border-radius:10px;">
          <h2 style="color:#e67e22; text-align:center;">Thar Tribe Hostel Jaisalmer</h2>
          <p>Dear Guest,</p>
          <p>Thank you for choosing <b>Thar Tribe Hostel</b> for your upcoming stay in Jaisalmer.</p>

          <p>We eagerly anticipate your arrival at <b>"Thar Tribe Hostel Jaisalmer"</b>.</p>

          <h3 style="margin-top:20px; color:#2c3e50;">Property Details:</h3>
          <ul>
            <li><b>Property Name:</b> Thar Tribe Hostel Jaisalmer</li>
            <li><b>Address:</b> Fort Rd, Dhibba Para, Manak Chowk, Amar Sagar Pol, Jaisalmer, Rajasthan 345001</li>
            <li><b>MAP Link:</b> <a href="https://maps.app.goo.gl/sRPFaisLjpEbkyh48" target="_blank">View Location</a></li>
            <li><b>Point of Contact (Check-in):</b> <a href="tel:9461065214">9461065214</a></li>
          </ul>

          <p style="margin-top:20px;">Thank you,<br>
          <b>Harsh Rathore</b><br>
          Thar Tribe Hostel</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
