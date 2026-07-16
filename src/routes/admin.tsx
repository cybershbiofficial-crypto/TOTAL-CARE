/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute, Outlet, useNavigate, useLocation, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for our custom bypass demo mode first
    const mockSession = localStorage.getItem("mock_admin_session");
    if (mockSession) {
      setSession(JSON.parse(mockSession));
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !session && location.pathname !== "/admin/login") {
      navigate({ to: "/admin/login" });
    }
    if (!loading && session && location.pathname === "/admin/login") {
      navigate({ to: "/admin" });
    }
  }, [loading, session, location.pathname, navigate]);

  if (loading)
    return (
      <div className="p-10 text-foreground flex items-center justify-center min-h-screen">
        Loading Admin Interface...
      </div>
    );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-line p-6 flex justify-between items-center bg-surface">
        <div className="flex items-center gap-6">
          <Link
            to="/admin"
            className="text-xl font-display font-medium tracking-widest text-accent uppercase"
          >
            Total Care Admin
          </Link>
          <Link
            to="/admin/cms"
            className="text-sm font-medium tracking-widest text-mute uppercase hover:text-foreground transition-colors"
          >
            CMS
          </Link>
        </div>
        {session && (
          <button
            onClick={() => {
              localStorage.removeItem("mock_admin_session");
              supabase.auth.signOut();
              window.location.href = "/admin/login";
            }}
            className="text-[12px] tracking-widest uppercase font-bold text-mute hover:text-foreground transition-colors"
          >
            Sign Out
          </button>
        )}
      </header>
      <main className="p-6 md:p-10 mx-auto max-w-7xl">
        <Outlet />
      </main>
    </div>
  );
}
