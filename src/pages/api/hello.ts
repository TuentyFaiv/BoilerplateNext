// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Data } from "@typing/nextApi";

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    data: {
      name: "John Doe"
    }
  });
}
