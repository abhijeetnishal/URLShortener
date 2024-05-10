import dbConnect from "@/db";
import Url from "@/models/Url";
import { z } from "zod";

const schema = z.object({
  shortId: z.string({ message: "shortId must be a string" }),
});

export async function POST(req: Request) {
  await dbConnect();

  try {
    // Get data from request
    const data = await req.json();

    // Validate data
    const result = schema.safeParse(data);
    if (!result.success) {
      const shortIdErrors = result.error.format().shortId?._errors || [];
      return Response.json(
        {
          success: false,
          message:
            shortIdErrors.length > 0
              ? shortIdErrors.join(", ")
              : "invalid shortId",
        },
        { status: 400 }
      );
    }

    const { shortId } = result.data;
    const url = await Url.findOne({ shortId });

    if (!url) {
      return Response.json(
        {
          success: false,
          message: "url not found",
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "original url fetched successfully",
        data: { url },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("error while fetching original url");
    return Response.json(
      {
        success: false,
        message: "error while fetching original url",
      },
      { status: 500 }
    );
  }
}
