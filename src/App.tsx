import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const titles: Record<string, string> = {
    "/": "HIKE — Outdoor Clothing & Trail Footwear",
    "/about": "About Us — HIKE",
    "/contacts": "Contact Us — HIKE",
  };
  const page =
    path === "/" ? (
      <Home />
    ) : path === "/about" ? (
      <About />
    ) : path === "/contacts" ? (
      <Contacts />
    ) : (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">404</h1>
        <p>Page not found.</p>
        <a href="/" className="underline">
          Back to home
        </a>
      </main>
    );
  return (
    <>
      <title>{titles[path] ?? "Page not found — HIKE"}</title>
      {page}
    </>
  );
}
