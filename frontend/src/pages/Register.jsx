import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Register(){
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleRegister = async () => {
    setMsg("");
    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      setMsg("All fields are required");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setMsg("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ username: form.username, email: form.email, password: form.password })
      });
      const data = await res.json();
      if(!res.ok) {
        if (data.error === "Email already exists") {
          setMsg("This email is already registered. Please use another.");
        } else if (data.error === "Username already exists") {
          setMsg("This username is already taken. Please choose another.");
        } else {
          setMsg(data.error || "Registration failed");
        }
        return;
      }
      try {
        const { token, user } = data;
        localStorage.setItem('user', JSON.stringify({ ...(user || {}), token }));
      } catch (e) {}
      navigate('/dashboard');
    } catch(e){
      setMsg("Server error. Try again.");
    }
  };

  return (
    <div className="min-h-[72vh] flex items-center justify-center">
      <div className="w-full max-w-md mx-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-merri">Create account</h2>
          <p className="text-gray-600 mt-1">Join Sanskriti Pallaka</p>
        </div>

        <div className="card-glass p-6">
          {msg && <div className="mb-4 p-3 rounded bg-yellow-50 text-yellow-800">{msg}</div>}

          <label className="block text-sm font-semibold text-gray-700">Username</label>
          <input name="username" className="w-full mt-2 p-3 rounded border" value={form.username} onChange={handleChange} />

          <label className="block text-sm font-semibold text-gray-700 mt-4">Email</label>
          <input name="email" type="email" className="w-full mt-2 p-3 rounded border" value={form.email} onChange={handleChange} />

          <label className="block text-sm font-semibold text-gray-700 mt-4">Password</label>
          <input name="password" type="password" className="w-full mt-2 p-3 rounded border" value={form.password} onChange={handleChange} />

          <label className="block text-sm font-semibold text-gray-700 mt-4">Confirm Password</label>
          <input name="confirmPassword" type="password" className="w-full mt-2 p-3 rounded border" value={form.confirmPassword} onChange={handleChange} />

          <button onClick={handleRegister} className="w-full mt-6 py-3 bg-accentGold text-white rounded-lg font-semibold">Create account</button>
        </div>
      </div>
    </div>
  );
}
