import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await sendgrid.send({
      to: "michaeljroeslein@gmail.com",
      from: "michaeljroeslein@gmail.com",
      subject: "Serverless Functions",
      text: "Hello, world!",
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};
