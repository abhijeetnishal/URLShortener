import dbConnect from "@/db";
import Url from "@/models/Url";

import { z } from "zod";
import { nanoid } from "nanoid";

const schema = z.object({
  originalUrl: z
    .string({ message: "url must be string" })
    .url({ message: "url must be valid url" }),
});

export async function POST(req: Request) {
  await dbConnect();

  try {
    // Get data from request
    const data = await req.json();

    // Validate data with zod
    const result = schema.safeParse(data);

    // Throw 400 error if data is invalid
    if (!result.success) {
      const originalUrlErrors =
        result.error.format().originalUrl?._errors || [];

      return Response.json(
        {
          success: false,
          message:
            originalUrlErrors.length > 0
              ? originalUrlErrors.join(", ")
              : "invalid url",
        },
        { status: 400 }
      );
    }

    // Get original url from result after validation
    const { originalUrl } = result.data;

    // Create a shortId for original url
    const shortId = nanoid(16);

    // Create a new url and save it in database
    const url = await Url.create({ originalUrl, shortId });

    // Send a success response with data
    return Response.json(
      {
        success: true,
        message: "short link created",
        data: url,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("error while creating short link", error);
    return Response.json(
      {
        success: false,
        message: "error while creating short link",
      },
      { status: 500 }
    );
  }
}
