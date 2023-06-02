import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("forum");

  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(props);
  return (
    <div>
      <h4>상세 페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}