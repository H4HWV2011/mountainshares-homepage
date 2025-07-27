// ~/mountainshares-homepage/src/app/page.js
import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-blue-800">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1
          className="text-5xl md:text-6xl font-mono font-extrabold mb-6"
          style={{
            background: "linear-gradient(90deg, #FFD700, #00BFFF, #2980b9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          💎 MountainShares—Own a Share of the Mountain
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl text-blue-100 mb-10 drop-shadow-xl">
          A community-powered currency & digital commons for West Virginia. Empowering local business, strengthening community, rewarding culture. <strong className="text-wv-gold">92% stays local.</strong>
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#mountainshares"
            className="px-8 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 font-semibold shadow-lg"
          >
            Get MountainShares
          </a>
          <a
            href="#business"
            className="px-8 py-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-lg"
          >
            For Businesses
          </a>
        </div>
      </section>

      {/* BUSINESS DIRECTORY SECTION */}
      <section id="business" className="bg-blue-950 py-20 px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-mono mb-4"
          style={{
            background: "linear-gradient(90deg, #FFD700, #00BFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          🏢 Business Directory &amp; Tools
        </h2>
        <p className="text-sky-300 text-xl mb-8 max-w-3xl mx-auto">
          Everything your business needs to succeed—<span className="font-bold">completely free.</span> 
          Professional tools that normally cost thousands.
        </p>
        <div className="inline-block bg-yellow-100 text-yellow-800 px-6 py-2 rounded-full font-semibold mb-10 shadow-lg">
          Business Directory launching Fall 2025
        </div>
      </section>

      {/* MOUNTAINSHARES CURRENCY SECTION */}
      <section id="mountainshares" className="py-20 px-6 text-center bg-gradient-to-r from-blue-900 to-blue-800">
        <h2
          className="text-4xl md:text-5xl font-mono mb-4"
          style={{
            background: "linear-gradient(90deg, #FFD700,#00BFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          💸 MountainShares Currency
        </h2>
        {/* Status - swap for dynamic system status widget when ready */}
        <p className="text-lg md:text-xl text-gray-100 mb-10">
          <span className="font-semibold text-yellow-400">System Status:</span>{" "}
          <span className="animate-pulse text-sky-300">Checking…</span>
        </p>
        {/* Currency explainer */}
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-sky-100 text-lg leading-relaxed">
            <span className="font-bold text-yellow-400">1 MountainShare</span> = 1 volunteer hour <span className="italic text-gray-400">or</span> $1 USD.<br />
            Earn, buy, or redeem across Mount Hope and WV—<span className="text-wv-gold font-semibold">keeping local wealth local.</span>
          </p>
        </div>
        <a
          href="https://mountainshares.org/app"
          className="inline-block px-8 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 font-semibold shadow-lg transition"
        >
          Launch the App
        </a>
      </section>

      {/* COMMUNITY FEED SECTION */}
      <section id="community" className="py-20 px-6 text-center bg-blue-950">
        <h2
          className="text-4xl md:text-5xl font-mono mb-4"
          style={{
            background: "linear-gradient(90deg, #FFD700, #00BFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          🌐 Community Feed &amp; Marketplace
        </h2>
        <p className="text-sky-300 text-xl mb-8 max-w-2xl mx-auto">
          Hyper-local listing, commerce, and grassroots news for Fayette County and beyond.
          <br />
          <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full mt-3 shadow">Coming 2025!</span>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="pt-16 pb-8 text-center text-gray-300 text-sm">
        <div className="max-w-4xl mx-auto mb-4 flex flex-col gap-2 md:flex-row md:justify-center md:gap-8">
          <a className="hover:underline" href="https://facebook.com/harmonyforhope">Facebook</a>
          <a className="hover:underline" href="https://mammakidd.substack.com/">Blog</a>
          <a className="hover:underline" href="mailto:info@harmonyforhope.org">Contact</a>
        </div>
        <span className="block text-gray-500 mt-4">&copy; {new Date().getFullYear()} MountainShares & Harmony for Hope, Inc. All rights reserved.</span>
      </footer>
    </main>
  );
}
