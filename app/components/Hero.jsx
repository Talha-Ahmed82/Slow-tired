import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Running image on the right */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[54%]">
        <Image
          src="/hero-bg.jpeg"
          alt="Runners moving forward on a running track"
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 54vw"
          className="object-cover object-center grayscale"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-black/20 to-black/10 lg:from-[#080808] lg:via-transparent lg:to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1800px] items-center px-6 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-32 lg:px-12 xl:px-16">
        <div className="w-full max-w-[650px]">
          {/* Logo */}
          <Link href="/" aria-label="Slow and Tired home" className="inline-flex">
            <Image
              src="/logo-white.png"
              alt="Slow & Tired"
              width={565}
              height={100}
              priority
              className="mb-9 h-auto w-[230px] object-contain sm:mb-10 sm:w-[330px] lg:w-[min(100%,565px)]"
            />
          </Link>

          {/* Headline */}
          <h1 className="max-w-[620px] text-[clamp(2.65rem,5.1vw,5.1rem)] font-black uppercase leading-[0.88] tracking-[-0.045em]">
            <span className="block">Not about</span>
            <span className="block">the pace.</span>
            <span className="block text-[#999999]">It’s about</span>
            <span className="block">moving</span>
            <span className="block">forward.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[470px] text-base leading-7 text-[#bdbdbd] sm:mt-9 sm:text-lg sm:leading-[1.9rem]">
            A running community built around movement,
            connection, and the belief that every mile counts.
          </p>

          {/* CTA */}
          <Link
            href="/community"
            className="group mt-8 inline-flex min-h-[58px] items-center justify-center gap-5 border border-white px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-white hover:text-black sm:mt-11 sm:px-8 sm:text-sm"
          >
            <span>Join the community</span>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M4 12h15m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}