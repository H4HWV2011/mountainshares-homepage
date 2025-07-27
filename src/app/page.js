"use client";

import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');
  const [systemStatus, setSystemStatus] = useState('checking');

  useEffect(() => {
    // Simulate system status check
    setTimeout(() => {
      setSystemStatus('online');
    }, 2000);

    // Add floating particles
    const createParticles = () => {
      for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: fixed;
          width: 4px;
          height: 4px;
          background: #FFD700;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          left: ${Math.random() * 100}%;
          animation: particleFloat ${15 + Math.random() * 20}s linear infinite;
          animation-delay: ${Math.random() * 5}s;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
        `;
        document.body.appendChild(particle);
      }
    };

    createParticles();

    return () => {
      document.querySelectorAll('.particle').forEach(p => p.remove());
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent animate-pulse"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Main App Container */}
      <div className="relative max-w-7xl mx-auto bg-black/80 backdrop-blur-xl min-h-screen border-l-4 border-r-4 border-yellow-400 shadow-2xl shadow-yellow-400/20">
        
        {/* Header */}
        <header className="sticky top-0 z-50 bg-gradient-to-r from-black/90 to-gray-900/80 backdrop-blur-xl border-b border-yellow-400/30 p-8">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-8">
              {/* 3D Holographic Logo */}
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 via-blue-400 to-yellow-400 rounded-2xl flex items-center justify-center text-4xl relative overflow-hidden transform-gpu animate-pulse shadow-2xl shadow-yellow-400/50">
                <div className="absolute inset-0 bg-gradient-conic from-transparent via-white/20 to-transparent animate-spin"></div>
                <span className="relative z-10 filter drop-shadow-lg">🏔️</span>
              </div>
              
              <div>
                <h1 className="text-5xl font-mono font-black bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                  MountainShares
                </h1>
                <div className="text-blue-400 text-lg font-bold uppercase tracking-widest">
                  Digital Commons
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full font-black text-lg uppercase tracking-wider shadow-lg shadow-yellow-400/50 animate-pulse">
              West Virginia • Digital Launch
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="sticky top-32 z-40 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border-b border-blue-400/30 px-8">
          <div className="flex gap-2 max-w-6xl mx-auto overflow-x-auto">
            {[
              { id: 'home', label: '🏔️ Home' },
              { id: 'business', label: '🏢 Business' },
              { id: 'community', label: '🌐 Community Feed' },
              { id: 'mountainshares', label: '💎 MountainShares' },
              { id: 'join', label: '🚀 Join Network' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-10 py-6 font-mono font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden rounded-t-2xl ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-400/20 to-blue-400/20 text-white border-b-4 border-yellow-400 shadow-lg shadow-yellow-400/30'
                    : 'text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-blue-400/10'
                }`}
              >
                <div className="relative z-10">{tab.label}</div>
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-blue-400/5 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="p-8 max-w-6xl mx-auto relative">
          
          {/* Home Tab */}
          {activeTab === 'home' && (
            <div className="space-y-20 animate-fadeIn">
              {/* Hero Section */}
              <section className="bg-gradient-to-r from-black/60 via-gray-900/40 to-black/60 backdrop-blur-xl p-20 rounded-3xl text-center relative overflow-hidden border border-yellow-400/20 shadow-2xl shadow-yellow-400/20">
                <div className="absolute inset-0 bg-gradient-conic from-yellow-400/5 via-blue-400/5 to-yellow-400/5 animate-spin"></div>
                <div className="relative z-10">
                  <h2 className="text-7xl font-mono font-black mb-10 bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
                    West Virginia&apos;s Digital Business Revolution
                  </h2>
                  <p className="text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Keep money in our communities with MountainShares rewards, professional business tools, and a trusted local marketplace. Free for all businesses and residents.
                  </p>
                  <div className="flex gap-8 justify-center flex-wrap">
                    <button 
                      onClick={() => setActiveTab('join')}
                      className="px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black text-xl uppercase tracking-wider rounded-2xl hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-yellow-400/50 hover:shadow-yellow-400/70"
                    >
                      🎯 Join The Network
                    </button>
                    <button 
                      onClick={() => setActiveTab('mountainshares')}
                      className="px-12 py-6 bg-gradient-to-r from-blue-400/20 to-blue-600/20 text-white font-black text-xl uppercase tracking-wider rounded-2xl hover:scale-105 transform transition-all duration-300 backdrop-blur-xl border border-blue-400/50 shadow-2xl shadow-blue-400/30"
                    >
                      💎 Learn About MountainShares
                    </button>
                  </div>
                </div>
              </section>

              {/* What Is MountainShares */}
              <section className="bg-gradient-to-r from-gray-900/40 to-black/40 backdrop-blur-xl p-16 rounded-3xl border border-yellow-400/20">
                <h3 className="text-5xl font-mono font-black text-center mb-12 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  🏔️ What Is MountainShares?
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: "💎",
                      title: "Local Currency System",
                      desc: "Earn MountainShares (1 MS = $1) as bonuses for good work and community participation. Keep money circulating locally instead of flowing to big corporations."
                    },
                    {
                      icon: "🏢",
                      title: "Business Directory",
                      desc: "Free professional listings with $15,000+ worth of business analytics. Customer tracking, competitor analysis, and sales metrics normally only big companies can afford."
                    },
                    {
                      icon: "⚖️",
                      title: "Community Protection",
                      desc: "Democratic governance system where the community votes out bad actors. Real financial consequences for scams, no-shows, and rude behavior."
                    }
                  ].map((feature, index) => (
                    <div key={index} className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl p-8 rounded-2xl border border-blue-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h4 className="text-xl font-bold text-yellow-400 mb-4">{feature.title}</h4>
                      <p className="text-gray-200 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How It Helps */}
              <section className="text-center">
                <h3 className="text-5xl font-mono font-black mb-12 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  🎯 How MountainShares Helps You
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "For Business Owners",
                      desc: "Professional tools, free analytics, loyal employees who earn MountainShares bonuses, protection from bad customers, and more local customers."
                    },
                    {
                      title: "For Employees", 
                      desc: "Earn MountainShares bonuses on top of your regular wage. Double your buying power while keeping money in your community."
                    },
                    {
                      title: "For Residents",
                      desc: "Safe local marketplace, trusted businesses, earn rewards for community participation, and support your neighbors."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-b from-yellow-400/10 to-blue-400/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                      <h4 className="text-xl font-bold text-blue-400 mb-4">{item.title}</h4>
                      <p className="text-gray-200 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-12 py-6 rounded-full font-black text-xl uppercase tracking-wider inline-block shadow-2xl shadow-yellow-400/50 animate-pulse">
                  ⚡ LAUNCHING FALL 2025 IN FAYETTE COUNTY ⚡
                </div>
              </section>
            </div>
          )}

          {/* Business Tab */}
          {activeTab === 'business' && (
            <div className="text-center space-y-16 animate-fadeIn">
              <h2 className="text-6xl font-mono font-black bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-8">
                🏢 Business Directory & Tools
              </h2>
              <p className="text-2xl text-blue-300 max-w-4xl mx-auto leading-relaxed">
                Everything your business needs to succeed - completely free. Professional tools that normally cost thousands.
              </p>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-12 py-6 rounded-full font-black text-xl uppercase tracking-wider inline-block shadow-2xl shadow-yellow-400/50">
                Business Directory Launching Fall 2025
              </div>
            </div>
          )}

          {/* Community Tab */}
          {activeTab === 'community' && (
            <div className="text-center space-y-16 animate-fadeIn">
              <h2 className="text-6xl font-mono font-black bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-8">
                🌐 Community Feed & Marketplace
              </h2>
              <p className="text-2xl text-blue-300 max-w-4xl mx-auto leading-relaxed">
                Local social network where neighbors buy, sell, and connect. Like Facebook, but only for your community.
              </p>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-12 py-6 rounded-full font-black text-xl uppercase tracking-wider inline-block shadow-2xl shadow-yellow-400/50">
                Community Feed Launching Phase 2 - Winter 2025
              </div>
            </div>
          )}

          {/* MountainShares Tab */}
          {activeTab === 'mountainshares' && (
            <div className="space-y-16 animate-fadeIn">
              <div className="text-center">
                <h2 className="text-6xl font-mono font-black bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-8">
                  💎 MountainShares Currency
                </h2>
                <p className="text-2xl text-blue-300 max-w-4xl mx-auto leading-relaxed">
                  Local digital currency that keeps money in West Virginia communities. <strong>1 MountainShare = $1 USD</strong>
                </p>
              </div>

              {/* System Status */}
              <div className="bg-gradient-to-r from-blue-400/10 to-blue-600/10 backdrop-blur-xl p-8 rounded-2xl border border-blue-400/30 max-w-3xl mx-auto">
                <p className="text-white text-lg">
                  <strong className="text-yellow-400">System Status:</strong>{' '}
                  <span className={`font-bold ${
                    systemStatus === 'checking' ? 'text-orange-400 animate-pulse' : 
                    systemStatus === 'online' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {systemStatus === 'checking' ? 'Checking...' : 
                     systemStatus === 'online' ? 'Online' : 'Offline'}
                  </span>
                </p>
                <p className="text-white">
                  <strong>Blockchain:</strong>{' '}
                  <span className="text-green-400 font-bold">Arbitrum Ready</span>
                </p>
                <p className="text-white">
                  <strong>Last Updated:</strong> {new Date().toLocaleString()}
                </p>
              </div>

              {/* Currency Info */}
              <div className="bg-gradient-to-r from-gray-900/40 to-black/40 backdrop-blur-xl p-16 rounded-3xl border border-yellow-400/20 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-mono font-black text-yellow-400 mb-8">💸 How It Works</h3>
                  <div className="text-xl text-gray-100 space-y-4">
                    <p><span className="font-bold text-yellow-400">1 MountainShare</span> = 1 volunteer hour <span className="italic text-gray-400">or</span> $1 USD</p>
                    <p>Earn, buy, or redeem across Mount Hope and WV—<span className="text-yellow-400 font-semibold">keeping local wealth local.</span></p>
                    <p className="text-2xl font-bold text-blue-400">92% stays in the community!</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href="https://mountainshares.org/app"
                    className="inline-block px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black text-xl uppercase tracking-wider rounded-2xl hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-yellow-400/50"
                  >
                    💎 Launch the App
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-12 py-6 rounded-full font-black text-xl uppercase tracking-wider inline-block shadow-2xl shadow-yellow-400/50">
                  MountainShares Phase 1 Launching Fall 2025
                </div>
              </div>
            </div>
          )}

          {/* Join Tab */}
          {activeTab === 'join' && (
            <div className="space-y-16 animate-fadeIn">
              <div className="text-center">
                <h2 className="text-6xl font-mono font-black bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-8">
                  🚀 Join The Commons Network
                </h2>
                <p className="text-2xl text-blue-300 max-w-4xl mx-auto leading-relaxed">
                  Be part of West Virginia&apos;s economic revolution. <strong>Completely free</strong> for all businesses and residents.
                </p>
              </div>

              {/* Join Form */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-blue-400/10 backdrop-blur-xl p-16 rounded-3xl border border-white/20 max-w-3xl mx-auto text-center">
                <h3 className="text-4xl font-mono font-black bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent mb-8">
                  🎯 Ready to Join?
                </h3>
                <p className="text-xl text-gray-100 mb-10 leading-relaxed">
                  Get on the waitlist to be among the first businesses and residents in Fayette County to experience The Commons. 
                  <strong className="text-blue-400"> No cost, no risk, huge potential.</strong>
                </p>
                
                <div className="space-y-6 max-w-2xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-6 border-2 border-blue-400 rounded-2xl text-xl bg-black/60 text-white backdrop-blur-xl placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Business name (optional)"
                    className="w-full p-6 border-2 border-blue-400 rounded-2xl text-xl bg-black/60 text-white backdrop-blur-xl placeholder-gray-400"
                  />
                  <button
                    onClick={() => alert('Thank you! We&apos;ll add you to our waitlist when we launch the signup system.')}
                    className="w-full px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black text-2xl uppercase tracking-wider rounded-2xl hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-yellow-400/50"
                  >
                    ⚡ Join The Waitlist
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-gray-900/40 to-black/40 backdrop-blur-xl p-16 rounded-3xl border border-white/20">
                <h3 className="text-4xl font-mono font-black text-center mb-12 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  📞 Questions? Get In Touch
                </h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <div className="text-5xl">✉️</div>
                    <h4 className="text-xl font-bold text-blue-400">Business Inquiries</h4>
                    <a href="mailto:info@harmonyforhope.org" className="text-blue-300 hover:text-yellow-400 transition-colors">
                      info@harmonyforhope.org
                    </a>
                  </div>
                  <div className="space-y-4">
                    <div className="text-5xl">📱</div>
                    <h4 className="text-xl font-bold text-blue-400">Follow Updates</h4>
                    <a href="https://mammakidd.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-yellow-400 transition-colors">
                      Our Blog
                    </a>
                  </div>
                  <div className="space-y-4">
                    <div className="text-5xl">🏔️</div>
                    <h4 className="text-xl font-bold text-blue-400">Launch Location</h4>
                    <span className="text-blue-300">Fayette County, West Virginia</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-20 p-8 text-center text-gray-400 border-t border-gray-700">
          <div className="max-w-4xl mx-auto mb-6 flex flex-col gap-4 md:flex-row md:justify-center md:gap-8">
            <a className="hover:text-yellow-400 transition-colors" href="https://facebook.com/harmonyforhope">Facebook</a>
            <a className="hover:text-yellow-400 transition-colors" href="https://mammakidd.substack.com/">Blog</a>
            <a className="hover:text-yellow-400 transition-colors" href="mailto:info@harmonyforhope.org">Contact</a>
          </div>
          <span className="block text-gray-500">&copy; {new Date().getFullYear()} MountainShares & Harmony for Hope, Inc. All rights reserved.</span>
        </footer>
      </div>

      <style jsx>{`
        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg) scale(0);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
