import { Play } from "lucide-react";
import Image from "next/image";

export default function HeroVideo() {
  return (
    <section className="relative bg-white pb-16 md:pb-32">
      {/* Background Pattern Image - Positioned to align with video top */}
      <div className="pointer-events-none absolute top-[-50px] left-0 z-0 w-full md:top-[-100px]">
        <Image
          src="/images/Background pattern.png"
          alt="Background Pattern"
          width={1440}
          height={600}
          className="h-auto w-full object-cover opacity-100"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Video Player */}
        <div className="relative mx-auto w-full max-w-[1080px]">
          <div className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl border border-gray-100/50 bg-gray-200 shadow-xl md:rounded-2xl md:shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Timeso Team Demo"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20"></div>
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/30 backdrop-blur-sm transition-transform group-hover:scale-110 md:h-20 md:w-20">
                <Play className="ml-0.5 h-6 w-6 fill-current text-white md:ml-1 md:h-8 md:w-8" />
              </div>
            </div>

            <div className="absolute right-3 bottom-3 left-3 z-20 flex items-center gap-3 md:right-6 md:bottom-6 md:left-6 md:gap-4">
              <Play className="h-3 w-3 fill-current text-white md:h-4 md:w-4" />
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
                <div className="h-full w-1/4 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
