import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Nextjs x Sanity</h1>
        <ModeToggle />
      </div>
      <hr className="mt-5" />
    </div>
  );
}
