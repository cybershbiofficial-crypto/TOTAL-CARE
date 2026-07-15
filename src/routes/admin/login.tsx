import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Magnetic } from "@/components/site/Magnetic";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

function AdminLogin() {
  const [email, setEmail] = useState("totalcare.official");
  const [password, setPassword] = useState("12345");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Map the client's preferred alias to a valid Supabase email/password
    let actualEmail = email;
    let actualPassword = password;
    if (email === "totalcare.official" && password === "12345") {
      actualEmail = "totalcares.official@gmail.com";
      actualPassword = "totalcare2026"; // Must be >= 6 characters for Supabase
    }

    const { error } = await supabase.auth.signInWithPassword({ email: actualEmail, password: actualPassword });
    if (error) {
      // Attempt to auto-signup if the user doesn't exist (helpful for first-time admin setup)
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({ email: actualEmail, password: actualPassword });
      
      if (!signUpError && signUpData.user) {
        toast.success(
          "Account created! If email confirmation is required, please check your inbox.",
        );
      } else {
        toast.error(error.message || "Invalid login credentials.");
      }
    } else {
      toast.success("Welcome back.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-md bg-surface border border-line p-10 shadow-2xl">
        <h1 className="text-display-md text-foreground mb-2">Admin Portal</h1>
        <p className="text-mute text-sm mb-8">Authorized access only.</p>
        <form onSubmit={handleLogin} className="space-y-6">
          <label className="block">
            <span className="text-mono-xs text-mute block mb-2">Email Address</span>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-line bg-transparent py-3 text-lg text-foreground outline-none focus:border-accent"
            />
          </label>
          <label className="block">
            <span className="text-mono-xs text-mute block mb-2">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-line bg-transparent py-3 text-lg text-foreground outline-none focus:border-accent"
            />
          </label>
          <div className="pt-4">
            <Magnetic strength={0.2}>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent px-8 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-foreground hover:text-background disabled:opacity-50"
              >
                {loading ? "Authenticating..." : "Sign In"}
              </button>
            </Magnetic>
          </div>
        </form>
      </div>
    </div>
  );
}
