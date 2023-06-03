import { connectDB } from "@/app/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title.trim().length === 0) {
      return res.status(500).json("너 제목 왜 안씀");
    }
    const client = await connectDB;
    const db = client.db("forum");
    db.collection("post").insertOne(req.body);
    return res.redirect(302, "/list");
  }
}
