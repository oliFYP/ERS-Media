import { LogIn } from 'lucide-react';
import { LoginForm } from './components/LoginForm';
import { InvitationNotice } from './components/InvitationNotice';

function App() {
  return (
    <>
      <div className="gradient-bg" />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass backdrop-stable rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#d68a2d] to-[#1a1a1a] mb-4">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/70">Sign in to continue to your account</p>
          </div>

          <InvitationNotice />

          <LoginForm />

          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-[#d68a2d] hover:text-[#e39a3d] font-semibold transition-colors">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
