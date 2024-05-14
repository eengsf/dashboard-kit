"use client";

// import Link from "next/link";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";

// const Login = () => {
//   return (
//     <div className="flex justify-center items-center bg-[#363740] w-screen h-screen">
//       <div className="flex flex-col bg-white w-[360px] h-[512px] rounded-lg p-5">
//         <div className="w-full h-[40%] flex flex-col items-center gap-5">
//           <div className="flex flex-col items-center gap-2 pt-2">
//             <div className="w-[40px] h-[40px] bg-blue-500 rounded-full">
//               <svg
//                 version="1.0"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="40"
//                 height="40"
//                 viewBox="0 0 100.000000 100.000000"
//                 preserveAspectRatio="xMidYMid meet">
//                 <metadata>
//                   Created by potrace 1.16, written by Peter Selinger 2001-2019
//                 </metadata>
//                 <g
//                   transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
//                   stroke="none">
//                   <path
//                     fill="blue"
//                     stroke="blue"
//                     d="M355 943 c-122 -44 -223 -135 -278 -250 -31 -65 -32 -73 -32 -194 0
//                     -124 0 -126 37 -200 47 -95 130 -177 225 -222 65 -31 73 -32 193 -32 120 0
//                     128 1 193 32 95 45 178 127 225 222 37 74 37 76 37 200 0 121 -1 129 -32 194
//                     -45 95 -127 178 -222 225 -71 35 -81 37 -185 40 -86 2 -122 -2 -161 -15z m317
//                     -67 c107 -52 176 -129 218 -243 18 -50 21 -77 19 -150 -4 -79 -8 -98 -41 -165
//                     -45 -91 -103 -147 -196 -191 -62 -30 -75 -32 -172 -32 -97 0 -110 2 -172 32
//                     -93 44 -151 100 -196 191 -36 73 -37 80 -37 181 0 98 2 111 31 171 52 109 122
//                     175 234 219 46 18 71 21 155 18 85 -3 109 -8 157 -31z"
//                   />
//                   <path
//                     fill="red"
//                     d="M350 500 l0 -180 98 0 c80 0 103 4 130 20 95 58 95 262 0 320 -27 16
//                    -50 20 -130 20 l-98 0 0 -180z m200 103 c58 -52 58 -154 0 -205 -26 -24 -39
//                     -28 -90 -28 l-60 0 0 130 0 130 60 0 c51 0 64 -4 90 -27z"
//                   />
//                 </g>
//               </svg>
//             </div>
//             <h1 className="text-lg font-bold text-slate-400">Dashboard Kit</h1>
//           </div>
//           <div className="flex flex-col items-center gap-1">
//             <h1 className="text-2xl font-bold">Login In to Dashboard kit</h1>
//             <h1 className="text-sm text-slate-400">
//               Enter your email and password below
//             </h1>
//           </div>
//         </div>
//         <form className="w-full h-[60%] flex flex-col gap-6">
//           <div className="flex flex-col">
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               placeholder="Email Address"
//               className="p-2 border rounded-md"
//             />
//           </div>
//           <div className="relative flex flex-col">
//             <div className="flex justify-between">
//               <label htmlFor="password">Password</label>
//               <p className="text-xs">Forgot password?</p>
//             </div>
//             <input
//               type="password"
//               placeholder="Password"
//               className="p-2 border rounded-md"
//             />
//             <button className="absolute top-9 right-3">
//               <FaEye size={20} className="text-slate-400" />
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="py-2 text-white bg-blue-700 rounded-md">
//             Login
//           </button>
//           <div>
//             <p className="text-xs text-center">
//               Don{`'`}t have an account?{" "}
//               <Link href={"/"} className="text-sm text-blue-800">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.length < 8) {
      setIsValid(false);
      return;
    }
    // Lakukan proses login jika valid
    setIsValid(true);
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center bg-[#363740] w-screen h-screen">
      <div className="flex flex-col bg-white w-[360px] h-[512px] rounded-lg p-5">
        <div className="w-full h-[40%] flex flex-col items-center gap-5">
          {/* Bagian Header */}
          <div className="flex flex-col items-center gap-2 pt-2">
            <div className="w-[40px] h-[40px] bg-blue-500 rounded-full">
              {/* Placeholder Icon */}
            </div>
            <h1 className="text-lg font-bold text-slate-400">Dashboard Kit</h1>
          </div>
          {/* Judul Form Login */}
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-2xl font-bold">Login In to Dashboard kit</h1>
            <h1 className="text-sm text-slate-400">
              Enter your email and password below
            </h1>
          </div>
        </div>
        {/* Form Login */}
        <form
          className="w-full h-[60%] flex flex-col gap-6"
          onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              className={`p-2 border rounded-md ${
                !isValid && email.trim() === "" ? "border-red-500" : ""
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="password">Password</label>
              <p className="text-xs">Forgot password?</p>
            </div>
            <input
              type="password"
              placeholder="Password"
              className={`p-2 border rounded-md ${
                !isValid && password.length < 8 ? "border-red-500" : ""
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="absolute top-9 right-3">
              <FaEye size={20} className="text-slate-400" />
            </button>
          </div>
          {/* Tombol Login */}
          <button
            type="submit"
            className="py-2 text-white bg-blue-700 rounded-md">
            Login
          </button>
          {/* Teks Daftar Akun */}
          <div>
            <p className="text-xs text-center">
              Don't have an account?{" "}
              <Link href={"/coba"} className="text-sm text-blue-800">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
