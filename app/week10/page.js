"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  }

  return (
    <main className="bg-[#bacee2] w-full p-8   h-screen">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      
      {!user &&
        <button onClick={handleLogin} className="bg-blue-600 text-white p-4 my-4 rounded-lg text-center w-60 hover:bg-blue-400 hover:underline">
          Sign In with GitHub
        </button>
      }
      {user &&
        <div className=" rounded-xl  text-white  ">
          <p className="text-blue-500">Welcome, {user.displayName} ({user.email})</p>
          <div className="container  ">
            <Link href="/week10/shopping-list" 
            className="  text-blue-500   rounded-lg text-center   hover:underline  ">Continue to your Shopping List</Link>
            
            <button onClick={handleLogout} 
            className="bg-blue-600 block text-white p-3 my-4   rounded-lg text-center hover:bg-blue-400 hover:underline  ">Sign Out</button>
          </div>
        </div>
      }
    </main>
  );
};

