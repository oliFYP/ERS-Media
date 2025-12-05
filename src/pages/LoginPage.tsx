import LoginForm from "../components/LoginForm";

import CompanyLogo from "../assets/company-logo.png";

function LoginPage(): JSX.Element {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Logo */}
        <header className="p-6 lg:p-8">
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="h-auto object-contain"
            style={{ width: "200px" }}
          />
        </header>

        {/* Login Form */}
        <main className="flex-1 flex items-center justify-center px-4 pb-12">
          <div className="w-full max-w-md">
            <div className="glass-card rounded-2xl p-8 glow-orange animate-fade-in">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-display font-bold text-foreground">
                  Welcome Back
                </h1>
                <p className="text-muted-foreground mt-2">
                  Sign in to access your dashboard
                </p>
              </div>
              <LoginForm />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center text-muted-foreground text-sm">
          © 2024 Agency Portal. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default LoginPage;
