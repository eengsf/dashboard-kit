// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FaEye } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isValid, setIsValid] = useState(true);
//   const router = useRouter();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email.trim() === "" || password.length < 8) {
//       setIsValid(false);
//       return;
//     }
//     setIsValid(true);
//     router.push("/dashboard");
//   };

//   return (
//     <div className="flex justify-center items-center bg-[#363740] w-screen h-screen">
//       <div className="flex flex-col bg-white w-[360px] h-[512px] rounded-lg p-5">
//         <div className="w-full h-[40%] flex flex-col items-center gap-5">
//           <div className="flex flex-col items-center gap-2 pt-2">
//             <div className="w-[40px] h-[40px] bg-blue-500 rounded-full"></div>
//             <h1 className="text-lg font-bold text-slate-400">Dashboard Kit</h1>
//           </div>
//           <div className="flex flex-col items-center gap-1">
//             <h1 className="text-2xl font-bold">Login In to Dashboard kit</h1>
//             <h1 className="text-sm text-slate-400">
//               Enter your email and password below
//             </h1>
//           </div>
//         </div>
//         <form
//           className="w-full h-[60%] flex flex-col gap-6"
//           onSubmit={handleLogin}>
//           <div className="flex flex-col">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               placeholder="Email Address"
//               className={`p-2 border rounded-md ${
//                 !isValid && email.trim() === "" ? "border-red-500" : ""
//               }`}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
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
//               className={`p-2 border rounded-md ${
//                 !isValid && password.length < 8 ? "border-red-500" : ""
//               }`}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="button" className="absolute top-9 right-3">
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
//               <Link href={"/coba"} className="text-sm text-blue-800">
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
