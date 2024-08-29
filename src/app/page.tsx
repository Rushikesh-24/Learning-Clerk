import Api from "@/components/Api";
import Form from "@/components/Form";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const {  userId  } = auth()
  // console.log(userId)
  if(!userId){
    return <div>
      You are not logged in
    </div>
  }
  const user  = await currentUser()
  // console.log(user)
  let text: string = "";
  return (
   <div className="flex flex-col justify-center items-center gap-6">
    <h1 className="text-6xl text-center mt-20">HOME</h1>
    <h2 className="text-3xl text-center mt-20">Welcome Back {user?.fullName}</h2>
    <Form/>
    <Api/>
   </div>
  );
}
