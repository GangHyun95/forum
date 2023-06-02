import { connectDB } from "../util/database";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");

  const result = await db.collection("post").find().toArray();

  console.log(result);
  return (
    <div className="list-bg">
      {result.map((item) => (
        <div className="list-item">
          <h4>{item.title}</h4>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
