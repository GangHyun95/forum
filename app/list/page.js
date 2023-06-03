import Link from "next/link";
import { connectDB } from "../util/database";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");

  const result = await db.collection("post").find().toArray();

  console.log(result);
  return (
    <div className="list-bg">
      {result.map((item) => (
        <div className="list-item" key={item._id}>
          <Link prefetch={false} href={`/detail/${item._id}`}>
            <h4>{item.title}</h4>
          </Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
