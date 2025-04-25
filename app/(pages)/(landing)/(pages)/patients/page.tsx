import { Hero } from "./ui/hero";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="w-full">
        <div className="ml-viewport-offset">Content</div>
      </div>
    </main>
  );
}
