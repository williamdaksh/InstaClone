import  { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [username, setUsername] = useState("")
  const [email,setEmail] = useState('')
  const [password,setPassword]= useState('')


  async function submitHandler(e){

    e.preventDefault()

    const res =await axios.post('http://localhost:3000/api/auth/register',{
      username,
      email,
      password
    },{ withCredentials: true })
    
    console.log(res.data)
  }

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-indigo-950 px-4">
  <form
    onSubmit={submitHandler}
    className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 
    rounded-3xl shadow-2xl p-8 space-y-6 transition-all duration-500"
  >
    {/* Header */}
    <div className="text-center space-y-2">
      <h1 className="text-3xl font-bold text-white tracking-tight">
        Create Account
      </h1>
      <p className="text-gray-400 text-sm">
        Join us and experience premium access
      </p>
    </div>

    {/* Username */}
    <div className="space-y-2">
      <label className="text-sm text-gray-300">Username</label>
      <input
        onInput={(e)=>setUsername(e.target.value)}
        type="text"
        placeholder="Enter username"
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20
        text-white placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        focus:border-indigo-500
        transition-all duration-300"
      />
    </div>

    {/* Email */}
    <div className="space-y-2">
      <label className="text-sm text-gray-300">Email</label>
      <input
        onInput={(e)=>setEmail(e.target.value)}
        type="text"
        placeholder="Enter email"
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20
        text-white placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-purple-500
        focus:border-purple-500
        transition-all duration-300"
      />
    </div>

    {/* Password */}
    <div className="space-y-2">
      <label className="text-sm text-gray-300">Password</label>
      <input
        onInput={(e)=>setPassword(e.target.value)}
        type="password"
        placeholder="Enter password"
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20
        text-white placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-pink-500
        focus:border-pink-500
        transition-all duration-300"
      />
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full py-3 rounded-xl font-semibold text-white
      bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
      hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
      shadow-lg hover:shadow-purple-500/40
      transition-all duration-300 active:scale-[0.98]"
    >
      Sign Up
    </button>

    {/* Footer */}
    <p className="text-center text-gray-400 text-sm">
      Already have an account?
      <Link to={'/login'} className="text-indigo-400 hover:text-indigo-300 cursor-pointer ml-1">
        Login
      </Link>
    </p>
  </form>
</div>

  )
}

export default SignUp
