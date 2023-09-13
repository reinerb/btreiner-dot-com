import type { NextApiRequest, NextApiResponse } from "next";

const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY;
const RECAPTCHA_KEY = process.env.RECAPTCHA_SECRET_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Handle non-POST requests
  if (req.method === "GET") {
    return res.status(200).json({ message: "Please submit form values" });
  } else if (req.method !== "POST") {
    return res
      .status(501)
      .json({ message: `${req.method} requests are not supported` });
  }

  // Handle missing reCaptcha key
  if (!RECAPTCHA_KEY) {
    return res
      .status(503)
      .json({ success: false, message: "reCaptcha key invalid" });
  }

  // Handle missing Web3Forms key
  if (!WEB3FORMS_KEY) {
    return res
      .status(503)
      .json({ success: false, message: "Web3Forms key invalid" });
  }

  const { formData, token } = JSON.parse(req.body);

  try {
    // Get reCaptcha info
    const reCaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_KEY}&response=${token}`;

    const recaptcha = await fetch(reCaptchaUrl, { method: "POST" }).then(
      (res) => res.json(),
    );

    // If score is low, respond with error code
    if (recaptcha.score <= 0.5) {
      return res
        .status(401)
        .json({ success: false, message: "reCaptcha score too low" });
    }

    const submission = {
      ...formData,
      subject: "New message from btreiner.com contact form",
      access_key: WEB3FORMS_KEY,
    };

    // Send payload to Web3Forms endpoint
    // const web3forms = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   body: JSON.stringify(submission),
    // }).then((res) => res.json());
    const web3forms = {
      success: true,
      message: "Message sent successfully!",
      body: formData,
    };
    return res.status(200).json({ ...web3forms });
  } catch (e: unknown) {
    if (typeof e === "string") {
      return res.status(400).json({ success: false, message: e });
    } else if (e instanceof Error) {
      return res.status(400).json({ success: false, message: e.message });
    }
  }
}
