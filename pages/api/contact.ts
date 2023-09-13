import type { NextApiRequest, NextApiResponse } from "next";

const ACCESS_KEY = process.env.WEB3FORMS_KEY as string;

type FormSubmission = {
  [key: string]: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const submission = JSON.parse(req.body) as FormSubmission;
  const formData = new FormData();

  const keys = Object.keys(submission) as string[];
  keys.forEach((key) => {
    formData.append(key, submission[key]);
  });

  formData.append("subject", "New message from btreiner.com contact form");
  formData.append("access_key", ACCESS_KEY);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    return res.status(200).json({ ...response });
  } catch (e) {
    if (typeof e === "string") {
      return res.status(500).json({ status: "failure", message: e });
    } else if (e instanceof Error) {
      return res.status(500).json({ status: "failure", message: e.message });
    }
  }
}
