import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-white/90 mb-2"
        >
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-white/50" />
          </div>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#d68a2d] focus:border-transparent transition-all"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-white/90 mb-2"
        >
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-white/50" />
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#d68a2d] focus:border-transparent transition-all"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-white/20 bg-white/10 text-[#d68a2d] focus:ring-[#d68a2d] focus:ring-offset-0"
          />
          <span className="ml-2 text-white/70">Remember me</span>
        </label>
        <a
          href="#"
          className="text-[#d68a2d] hover:text-[#e39a3d] transition-colors"
        >
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#d68a2d] to-[#e39a3d] text-white font-semibold py-3 px-4 rounded-lg hover:from-[#e39a3d] hover:to-[#d68a2d] focus:outline-none focus:ring-2 focus:ring-[#d68a2d] focus:ring-offset-2 focus:ring-offset-transparent transition-all transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Sign In
      </button>
    </form>
  );
}
