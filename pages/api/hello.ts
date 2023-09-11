import type { NextApiRequest, NextApiResponse } from "next";

type FormSubmissionData = {
  name: string;
  email: string;
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
