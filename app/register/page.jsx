"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSending, setIsSending] = useState(false);

  const route = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch(`${process.env.PUBLIC_URL}/api`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      setEmail("");
      setPassword("");
      if (res.ok) {
        alert("User created successfully");
        route.push("/dashboard");
      } else {
        alert("Failed to created user");
        throw new Error("Failed to created user");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center bg-[#363740] w-screen h-screen">
        <div className="flex flex-col bg-white w-[360px] h-[512px] rounded-lg p-5">
          <div className="w-full h-[40%] flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-2 pt-2">
              <div className="w-[40px] h-[40px] bg-blue-500 rounded-full"></div>
              <h1 className="text-lg font-bold text-slate-400">
                Dashboard Kit
              </h1>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-2xl font-bold">Register Dashboard kit</h1>
              <h1 className="text-sm text-slate-400">
                Created account for free
              </h1>
            </div>
          </div>
          <form
            className="w-full h-[60%] flex flex-col gap-6"
            onSubmit={handleSubmit}
            method="POST">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                //   autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`p-2 border rounded-md `}
              />
            </div>
            <div className="relative flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                //   autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`p-2 border rounded-md `}
              />
            </div>
            <button
              type="submit"
              className="py-2 text-white bg-blue-700 rounded-md">
              Register
            </button>
            <div>
              <p className="text-xs text-center">
                Login with your social media account
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
