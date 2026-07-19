import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
// Error reporting removed as per client request
import { FloatingWhatsApp } from "../components/site/FloatingWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <div className="text-mono-xs text-mute">404 — Not Found</div>
        <h1 className="mt-6 text-display-lg text-foreground">Off the blueprint.</h1>
        <p className="mt-4 text-sm text-mute">
          The page you're looking for isn't part of this project.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 border-b border-accent pb-1 text-sm tracking-wide text-accent transition-colors hover:text-foreground"
          >
            Return home <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    // Error captured in boundary
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <div className="text-mono-xs text-mute">System · Unexpected</div>
        <h1 className="mt-6 text-display-md text-foreground">This page didn't load.</h1>
        <p className="mt-4 text-sm text-mute">
          Something interrupted the render. Try again, or return to the beginning.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border-b border-accent pb-1 text-sm text-accent transition-colors hover:text-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="border-b border-line pb-1 text-sm text-mute transition-colors hover:text-foreground"
          >
            Return home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#FFFFFF" },
      { title: "TOTAL CARE | Premier Labour Supply & High-End Renovation Services" },
      {
        name: "description",
        content:
          "Leading provider of skilled professional labour and complete high-end renovation services. We supply certified tradesmen for commercial, residential, and industrial projects.",
      },
      { name: "author", content: "TOTAL CARE" },
      { property: "og:site_name", content: "TOTAL CARE" },
      {
        property: "og:title",
        content: "TOTAL CARE | Premier Labour Supply & High-End Renovation Services",
      },
      {
        property: "og:description",
        content:
          "Leading provider of skilled professional labour and complete high-end renovation services. We supply certified tradesmen for commercial, residential, and industrial projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "TOTAL CARE | Premier Labour Supply & High-End Renovation Services",
      },
      {
        name: "twitter:description",
        content:
          "Leading provider of skilled professional labour and complete high-end renovation services. We supply certified tradesmen for commercial, residential, and industrial projects.",
      },
      { property: "og:image", content: "https://www.totalcare.ae/images/hero-1.webp" },
      { name: "twitter:image", content: "https://www.totalcare.ae/images/hero-1.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png?v=2", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ConstructionCompany",
          name: "TOTAL CARE",
          description:
            "Leading provider of skilled professional labour and complete high-end renovation services. We supply certified tradesmen for commercial, residential, and industrial projects.",
          areaServed: "AE",
          address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
          url: "https://www.totalcare.ae",
          telephone: "+971563937512",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { Toaster } from "sonner";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <FloatingWhatsApp />
      <Toaster position="bottom-right" theme="dark" />
    </QueryClientProvider>
  );
}
