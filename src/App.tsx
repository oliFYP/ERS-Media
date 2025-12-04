import { LoginForm } from "./components/LoginForm";
import { InvitationNotice } from "./components/InvitationNotice";
import CompanyLogo from "./assets/company-logo.png"; // import your logo

function App(): JSX.Element {
  return (
    <>
      <div className="gradient-bg" />

      {/* Top-left logo with padding */}
      <div className="absolute top-0 left-0 p-4">
        <img
          src={CompanyLogo}
          alt="Company Logo"
          className="h-auto object-contain"
          style={{ width: "120px" }}
        />
      </div>

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass backdrop-stable rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/70">Sign in to continue to your account</p>
          </div>

          <InvitationNotice />

          <LoginForm />

          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-[#d68a2d] hover:text-[#e39a3d] font-semibold transition-colors"
              >
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
