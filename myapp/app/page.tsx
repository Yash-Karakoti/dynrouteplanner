// app/page.tsx
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import BackgroundVideo from "@/components/sparkles"; // Verify import path

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 h-screen w-full z-0"> {/* Changed to h-screen */}
        <BackgroundVideo videoSrc="/BackgroundVideo.mp4" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}