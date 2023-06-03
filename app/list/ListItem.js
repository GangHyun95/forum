"use client";

import Link from "next/link";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

export default function ListItem({ result }) {
  const handleDelete = async (id, e) => {
    // console.log(e.currentTarget.parentElement);
    await fetch("/api/post/delete", { method: "POST", body: id })
      .then((res) => res.json())
      .then(() => {
        //성공 시 실행할 코드
        console.log(e.target);
        e.target.parentElement.style.opacity = 0;
        setTimeout(() => {
          e.target.parentElement.style.display = "none";
        }, 1000);
      });
  };
  return (
    <div>
      {result.map((item) => (
        <div className="list-item" key={item._id}>
          <Link prefetch={false} href={`/detail/${item._id}`}>
            <h4>{item.title}</h4>
          </Link>
          <Link href={`/edit/${item._id}`}>
            <BsFillPencilFill />
            수정
          </Link>
          <BsFillTrash3Fill
            onClick={(e) => {
              handleDelete(item._id, e);
            }}
          />
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
