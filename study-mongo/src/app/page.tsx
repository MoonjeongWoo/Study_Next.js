import { connectDB } from "../../util/database"

export default async function Home() {

  const client = await connectDB;
  const db = client.db("studymongo");
  let result = await db.collection('post').find().toArray() //서버컴포넌트 쪽에서만 작성
  
  
  return (
  <div>
    안녕
  </div>
  )
}
