import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

  if (!SECRET_KEY) {
    return res
      .status(500)
      .json({ status: "failure", message: "No reCaptcha keys found" });
  }

  const { token } = JSON.parse(req.body) as { token: string };

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`;

  try {
    const recaptchaResponse = await fetch(url, { method: "POST" });
    const recaptcha = await recaptchaResponse.json();

    return res.status(200).json({ status: "success", ...recaptcha });
  } catch (e: unknown) {
    if (typeof e === "string") {
      return res.status(400).json({ status: "failure", message: e });
    } else if (e instanceof Error) {
      return res.status(400).json({ status: "failure", message: e.message });
    }
  }
}
