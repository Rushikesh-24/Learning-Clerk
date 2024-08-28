import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth()
  console.log(userId)
  if(!userId){
    return <div>
      You are not logged in
    </div>
  }
  const user  = await currentUser()
  console.log(user?.firstName)
  console.log(user?.lastName)
  return (
   <div className="flex flex-col justify-center items-center">
    <h1 className="text-6xl text-center mt-20">HOME</h1>
    <h2>{user?.username}</h2>
    <h2>Welcome Back {user?.fullName}</h2>
   </div>
  );
}
