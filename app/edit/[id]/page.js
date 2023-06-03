import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("forum");

  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  await db.collection("post").updateOne({}, { $set: { title: "바보" } });
  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
