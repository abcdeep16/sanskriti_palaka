import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock, FiArrowRight } from "react-icons/fi";

export default function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErr("");
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if(!res.ok) {
        setErr(data.error || "Login failed. Please try again.");
        return;
      }
      // success — store user + token and go to dashboard
      try {
        const { token, user } = data;
        localStorage.setItem('user', JSON.stringify({ ...(user || {}), token }));
      } catch (e) {
        // ignore storage errors
      }
      navigate('/dashboard');
    } catch(e) {
      setErr("Server error. Try again.");
    }
  };

  return (
    <div className="min-h-[72vh] flex items-center justify-center">
      <div className="w-full max-w-md mx-4">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-xl mx-auto bg-gradient-to-br from-deepIndigo to-redAccent flex items-center justify-center text-white font-bold">SP</div>
          <h2 className="text-3xl font-merri mt-4">Welcome Back</h2>
          <p className="text-gray-600 mt-1">Sign in to your Sanskriti Pallaka account</p>
        </div>

        <div className="card-glass p-6">
          {err && <div className="mb-4 p-4 border border-red-200 bg-red-50 text-red-700 rounded">{err}</div>}

          <label className="block text-sm font-semibold text-gray-700">Username</label>
          <div className="flex items-center gap-3 bg-white p-2 mt-2 rounded-lg border">
            <FiUser className="text-gray-400" />
            <input className="outline-none w-full bg-transparent" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Enter username" />
          </div>

          <label className="block text-sm font-semibold text-gray-700 mt-4">Password</label>
          <div className="flex items-center gap-3 bg-white p-2 mt-2 rounded-lg border">
            <FiLock className="text-gray-400" />
            <input type="password" className="outline-none w-full bg-transparent" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter password" />
          </div>

          <button onClick={handleLogin} className="w-full mt-6 flex items-center justify-center gap-3 py-3 bg-deepIndigo text-white rounded-lg font-semibold">
            Sign In <FiArrowRight />
          </button>

          <div className="mt-6 text-center text-gray-600">
            Don't have an account? <a href="/register" className="text-deepIndigo font-semibold">Create one now</a>
          </div>
        </div>
      </div>
    </div>
  )
}
