import { createFileRoute } from "@tanstack/react-router";
import { Recruitment } from "@/components/sections/Recruitment";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

function CareersPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-display-lg text-foreground">Join Our Workforce</h1>
          <p className="mt-4 text-lg text-mute">We are always looking for certified professionals to join our elite teams.</p>
        </div>
        <Recruitment />
      </div>
    </main>
  );
}
