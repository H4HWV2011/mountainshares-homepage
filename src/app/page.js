"use client";

import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');
  const [systemStatus, setSystemStatus] = useState('checking');

  useEffect(() => {
    setTimeout(() => {
      setSystemStatus('online');
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-pulse"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main App Container */}
      <div className="relative max-w-7xl mx-auto bg-black/80 backdrop-blur-sm min-h-screen border-l-4 border-r-4 border-yellow-400 shadow-2xl">
        
        {/* Header */}
        <header className="sticky top-0 z-50 bg-gradient-to-r from-black/95 to-slate-900/95 backdrop-blur-sm border-b-2 border-yellow-400/30 p-6">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-6">
              {/* 3D Logo */}
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-blue-400 to-yellow-400 rounded-xl flex items-center justify-center text-3xl shadow-2xl shadow-yellow-400/50 animate-pulse transform hover:scale-110 transition-transform duration-300">
                🏔️
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl font-mono font-black bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
                  MountainShares
                </h1>
                <div className="text-blue-400 text-sm font-bold uppercase tracking-wider">
                  Digital Commons
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg animate-pulse">
              West Virginia • Digital Launch
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="sticky top-24 z-40 bg-gradient-to-r from-slate-900/90 to-black/90 backdrop-blur-sm border-b border-blue-400/30 px-6">
          <div className="flex gap-1 max-w-6xl mx-auto overflow-x-auto">
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
                className={`px-6 py-4 font-mono font-bold uppercase tracking-wide transition-all duration-300 text-sm rounded-t-lg border-b-4 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-400/20 to-blue-400/20 text-white border-yellow-400 shadow-lg shadow-yellow-400/30'
                    : 'text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-blue-400/10 border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="p-6 max-w-6xl mx-auto">
          
          {/* Home Tab */}
          {activeTab === 'home' && (
            <div className="space-y-16 animate-fade-in">
              {/* Hero Section */}
              <section className="bg-gradient-to-r from-black/60 via-slate-900/40 to-black/60 backdrop-blur-xl p-16 rounded-3xl text-center relative overflow-hidden border border-yellow-400/20 shadow-2xl shadow-yellow-400/20">
                <div className="absolute inset-0 bg-gradient-conic from-yellow-400/5 via-blue-400/5 to-yellow-400/5 animate-spin-slow"></div>
                <div className="relative z-10">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-mono font-black mb-8 bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent leading-tight animate-pulse">
                    West Virginia&apos;s Digital Business Revolution
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                    Keep money in our communities with MountainShares rewards, professional business tools, and a trusted local marketplace. Free for all businesses and residents.
                  </p>
                  <div className="flex gap-6 justify-center flex-wrap">
                    <button 
                      onClick={() => setActiveTab('join')}
                      className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black text-lg uppercase tracking-wide rounded-xl hover:scale-105 transform transition-all duration-300 shadow-xl shadow-yellow-400/50 hover:shadow-yellow-400/70"
                    >
                      🎯 Join The Network
                    </button>
                    <button 
                      onClick={() => setActiveTab('mountainshares')}
                      className="px-8 py-4 bg-gradient-to-r from-blue-400/20 to-blue-600/20 text-white font-black text-lg uppercase tracking-wide rounded-xl hover:scale-105 transform transition-all duration-300 border border-blue-400/50 shadow-xl shadow-blue-400/30 backdrop-blur-xl"
                    >
                      💎 Learn About MountainShares
                    </button>
                  </div>
                </div>
              </section>

              {/* What Is MountainShares */}
              <section className="bg-gradient-to-r from-slate-900/40 to-black/40 backdrop-blur-xl p-12 rounded-3xl border border-yellow-400/20">
                <h3 className="text-4xl md:text-5xl font-mono font-black text-center mb-10 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  🏔️ What Is MountainShares?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
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
                    <div key={index} className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl p-6 rounded-xl border border-blue-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20">
                      <div className="text-4xl mb-3">{feature.icon}</div>
                      <h4 className="text-xl font-bold text-yellow-400 mb-3">{feature.title}</h4>
                      <p className="text-gray-200 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How It Helps */}
              <section className="text-center">
                <h3 className="text-4xl md:text-5xl font-mono font-black mb-10 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  🎯 How MountainShares Helps You
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
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
                    <div key={index} className="bg-gradient-to-b from-yellow-400/10 to-blue-400/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300">
                      <h4 className="text-xl font-bold text-blue-400 mb-3">{item.title}</h4>
                      <p className="text-gray-200 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full font-black text-lg uppercase tracking-wide inline-block shadow-xl shadow-yellow-400/50 animate-pulse">
                    ⚡ LAUNCHING FALL 2025 IN FAYETTE COUNTY ⚡
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Business Tab */}
          {activeTab === 'business' && (
            <div className="text-center space-y-12 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-mono font-black bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                🏢 Business Directory & Tools
              </h2>
              <p className="text-xl md:text-2xl text-blue-300 max-w-4xl mx-auto leading-relaxed">
                Everything your business needs to succeed - completely free. Professional tools that normally cost thousands.
              </p>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full font-black text-lg uppercase tracking-wide inline-block shadow-xl shadow-yellow-400/50">
                Business Directory Launching Fall 2025
              </div>
            </div>
          )}

          {/* Community Tab */}
          {activeTab === 'community' && (
            <div className="text-center space-y-12 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-mono font-black bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                🌐 Community Feed & Marketplace
              </h2>
              <p className="text-xl md:text-2xl text-blue-300 max-w-4xl mx-auto leading-relaxed">
                Local social network where neighbors buy, sell, and connect. Like Facebook, but only for your community.
              </p>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full font-black text-lg uppercase tracking-wide inline-block shadow-xl shadow-yellow-400/50">
                Community Feed Launching Phase 2 - Winter 2025
              </div>
            </div>
          )}

          {/* MountainShares Tab */}
          {activeTab === 'mountainshares' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-mono font-black bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                  💎 MountainShares Currency
                </h2>
                <p className="text-xl md:text-2xl text-blue-300 max-w-4xl mx-auto leading-relaxed">
                  Local digital currency that keeps money in West Virginia communities. <strong>1 MountainShare = $1 USD</strong>
                </p>
              </div>

              {/* System Status */}
              <div className="bg-gradient-to-r from-blue-400/10 to-blue-600/10 backdrop-blur-xl p-6 rounded-xl border border-blue-400/30 max-w-3xl mx-auto">
                <p className="text-white text-lg mb-2">
                  <strong className="text-yellow-400">System Status:</strong>{' '}
                  <span className={`font-bold ${
                    systemStatus === 'checking' ? 'text-orange-400 animate-pulse' : 
                    systemStatus === 'online' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {systemStatus === 'checking' ? 'Checking...' : 
                     systemStatus === 'online' ? 'Online' : 'Offline'}
                  </span>
                </p>
                <p className="text-white mb-2">
                  <strong>Blockchain:</strong>{' '}
                  <span className="text-green-400 font-bold">Arbitrum Ready</span>
                </p>
                <p className="text-white">
                  <strong>Last Updated:</strong> {new Date().toLocaleString()}
                </p>
              </div>

              {/* Currency Info */}
              <div className="bg-gradient-to-r from-slate-900/40 to-black/40 backdrop-blur-xl p-12 rounded-3xl border border-yellow-400/20 max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-mono font-black text-yellow-400 mb-6">💸 How It Works</h3>
                  <div className="text-lg md:text-xl text-gray-100 space-y-3">
                    <p><span className="font-bold text-yellow-400">1 MountainShare</span> = 1 volunteer hour <span className="italic text-gray-400">or</span> $1 USD</p>
                    <p>Earn, buy, or redeem across Mount Hope and WV—<span className="text-yellow-400 font-semibold">keeping local wealth local.</span></p>
                    <p className="text-2xl font-bold text-blue-400">92% stays in the community!</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href="https://mountainshares.org/app"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black text-lg uppercase tracking-wide rounded-xl hover:scale-105 transform transition-all duration-300 shadow-xl shadow-yellow-400/50 hover:shadow-yellow-400/70"
                  >
                    💎 Launch the App
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full font-black text-lg uppercase tracking-wide inline-block shadow-xl shadow-yellow-400/50">
                  MountainShares Phase 1 Launching Fall 2025
                </div>
              </div>
            </div>
          )}

          {/* Join Tab */}
          {activeTab === 'join' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-mono font-black bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                  🚀 Join The Commons Network
                </h2>
                <p className="text-xl md:text-2xl text-blue-300 max-w-4xl mx-auto leading-relaxed">
                  Be part of West Virginia&apos;s economic revolution. <strong>Completely free</strong> for all businesses and residents.
                </p>
              </div>

              {/* Join Form */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-blue-400/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20 max-w-3xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-mono font-black bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent mb-6">
                  🎯 Ready to Join?
                </h3>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Get on the waitlist to be among the first businesses and residents in Fayette County to experience The Commons. 
                  <strong className="text-blue-400"> No cost, no risk, huge potential.</strong>
                </p>
                
                <div className="space-y-4 max-w-2xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-4 border-2 border-blue-400 rounded-xl text-lg bg-black/60 text-white placeholder-gray-400 backdrop-blur-xl"
                  />
                  <input
                    type="text"
                    placeholder="Business name (optional)"
                    className="w-full p-4 border-2 border-blue-400 rounded-xl text-lg bg-black/60 text-white placeholder-gray-400 backdrop-blur-xl"
                  />
                  <button
                    onClick={() => alert('Thank you! We&apos;ll add you to our waitlist when we launch the signup system.')}
                    className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black text-xl uppercase tracking-wide rounded-xl hover:scale-105 transform transition-all duration-300 shadow-xl shadow-yellow-400/50 hover:shadow-yellow-400/70"
                  >
                    ⚡ Join The Waitlist
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-slate-900/40 to-black/40 backdrop-blur-xl p-12 rounded-3xl border border-white/20">
                <h3 className="text-3xl md:text-4xl font-mono font-black text-center mb-8 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  📞 Questions? Get In Touch
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="text-4xl md:text-5xl">✉️</div>
                    <h4 className="text-lg md:text-xl font-bold text-blue-400">Business Inquiries</h4>
                    <a href="mailto:info@harmonyforhope.org" className="text-blue-300 hover:text-yellow-400 transition-colors">
                      info@harmonyforhope.org
                    </a>
                  </div>
                  <div className="space-y-3">
                    <div className="text-4xl md:text-5xl">📱</div>
                    <h4 className="text-lg md:text-xl font-bold text-blue-400">Follow Updates</h4>
                    <a href="https://mammakidd.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-yellow-400 transition-colors">
                      Our Blog
                    </a>
                  </div>
                  <div className="space-y-3">
                    <div className="text-4xl md:text-5xl">🏔️</div>
                    <h4 className="text-lg md:text-xl font-bold text-blue-400">Launch Location</h4>
                    <span className="text-blue-300">Fayette County, West Virginia</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-16 p-6 text-center text-gray-400 border-t border-gray-700">
          <div className="max-w-4xl mx-auto mb-4 flex flex-col gap-4 md:flex-row md:justify-center md:gap-8">
            <a className="hover:text-yellow-400 transition-colors" href="https://facebook.com/harmonyforhope">Facebook</a>
            <a className="hover:text-yellow-400 transition-colors" href="https://mammakidd.substack.com/">Blog</a>
            <a className="hover:text-yellow-400 transition-colors" href="mailto:info@harmonyforhope.org">Contact</a>
          </div>
          <span className="block text-gray-500">&copy; {new Date().getFullYear()} MountainShares & Harmony for Hope, Inc. All rights reserved.</span>
        </footer>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
