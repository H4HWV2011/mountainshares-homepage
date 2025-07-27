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
    <>
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.4); }
          50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.8); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-pulse-custom { animation: pulse 2s infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        
        .gradient-text {
          background: linear-gradient(90deg, #FFD700, #00BFFF, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #0a1628, #1e3a8a, #0f172a);
        }
        
        .card-glass {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .btn-primary {
          background: linear-gradient(90deg, #FFD700, #FFA500);
          color: black;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          border-radius: 12px;
          padding: 16px 32px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
        }
        
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 35px rgba(255, 215, 0, 0.5);
        }
        
        .btn-secondary {
          background: linear-gradient(90deg, rgba(0, 191, 255, 0.2), rgba(0, 102, 255, 0.2));
          color: white;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 2px solid #00BFFF;
          border-radius: 12px;
          padding: 16px 32px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 191, 255, 0.2);
        }
        
        .btn-secondary:hover {
          transform: scale(1.05);
          background: rgba(0, 191, 255, 0.1);
          box-shadow: 0 12px 35px rgba(0, 191, 255, 0.4);
        }
        
        .logo-3d {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #FFD700, #00BFFF, #FFD700);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
          transition: transform 0.3s ease;
        }
        
        .logo-3d:hover {
          transform: scale(1.1) rotateY(15deg);
        }
        
        .nav-item {
          padding: 16px 24px;
          font-family: monospace;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 4px solid transparent;
          color: #9CA3AF;
          background: transparent;
          border-left: none;
          border-right: none;
          border-top: none;
        }
        
        .nav-item.active {
          color: white;
          background: linear-gradient(90deg, rgba(255, 215, 0, 0.1), rgba(0, 191, 255, 0.1));
          border-bottom-color: #FFD700;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
        }
        
        .nav-item:hover:not(.active) {
          color: white;
          background: linear-gradient(90deg, rgba(255, 215, 0, 0.05), rgba(0, 191, 255, 0.05));
        }
        
        .hero-bg {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(30, 58, 138, 0.3));
          border: 2px solid rgba(255, 215, 0, 0.2);
          border-radius: 24px;
          padding: 80px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-bg::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(255, 215, 0, 0.1), transparent);
          animation: spin 20s linear infinite;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 191, 255, 0.2);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(255, 215, 0, 0.4);
          box-shadow: 0 20px 40px rgba(255, 215, 0, 0.2);
        }
        
        .coming-soon {
          background: linear-gradient(90deg, #FFD700, #FFA500);
          color: black;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: inline-block;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
        }
      `}</style>

      <div className="min-h-screen gradient-bg text-white">
        {/* Floating Background Elements */}
        <div 
          className="animate-pulse-custom"
          style={{
            position: 'fixed',
            top: '20%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            zIndex: 1
          }}
        ></div>
        
        <div 
          className="animate-pulse-custom"
          style={{
            position: 'fixed',
            bottom: '20%',
            right: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0, 191, 255, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            zIndex: 1,
            animationDelay: '1s'
          }}
        ></div>

        {/* Main Container */}
        <div className="relative" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          background: 'rgba(0, 0, 0, 0.7)',
          minHeight: '100vh',
          borderLeft: '4px solid #FFD700',
          borderRight: '4px solid #FFD700',
          zIndex: 10
        }}>
          
          {/* Header */}
          <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.95), rgba(15, 23, 42, 0.95))',
            borderBottom: '2px solid rgba(255, 215, 0, 0.3)',
            padding: '24px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div className="logo-3d animate-glow">🏔️</div>
                <div>
                  <h1 className="gradient-text" style={{
                    fontSize: '48px',
                    fontWeight: '900',
                    margin: 0,
                    fontFamily: 'monospace'
                  }}>
                    MountainShares
                  </h1>
                  <div style={{
                    color: '#00BFFF',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}>
                    Digital Commons
                  </div>
                </div>
              </div>
              
              <div className="coming-soon animate-pulse-custom">
                West Virginia • Digital Launch
              </div>
            </div>
          </header>

          {/* Navigation */}
          <nav style={{
            position: 'sticky',
            top: '120px',
            zIndex: 40,
            background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.9), rgba(0, 0, 0, 0.9))',
            borderBottom: '1px solid rgba(0, 191, 255, 0.3)',
            padding: '0 24px'
          }}>
            <div style={{
              display: 'flex',
              gap: '4px',
              maxWidth: '1200px',
              margin: '0 auto',
              overflowX: 'auto'
            }}>
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
                  className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <main style={{ padding: '48px 24px', maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Home Tab */}
            {activeTab === 'home' && (
              <div className="animate-fadeIn" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                {/* Hero Section */}
                <section className="hero-bg">
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <h2 className="gradient-text" style={{
                      fontSize: 'clamp(40px, 8vw, 72px)',
                      fontWeight: '900',
                      marginBottom: '32px',
                      lineHeight: '1.1',
                      fontFamily: 'monospace'
                    }}>
                      West Virginia&apos;s Digital Business Revolution
                    </h2>
                    <p style={{
                      fontSize: 'clamp(18px, 3vw, 24px)',
                      color: '#E5E7EB',
                      marginBottom: '48px',
                      maxWidth: '800px',
                      margin: '0 auto 48px auto',
                      lineHeight: '1.6'
                    }}>
                      Keep money in our communities with MountainShares rewards, professional business tools, and a trusted local marketplace. Free for all businesses and residents.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '24px',
                      justifyContent: 'center',
                      flexWrap: 'wrap'
                    }}>
                      <button 
                        onClick={() => setActiveTab('join')}
                        className="btn-primary"
                      >
                        🎯 Join The Network
                      </button>
                      <button 
                        onClick={() => setActiveTab('mountainshares')}
                        className="btn-secondary"
                      >
                        💎 Learn About MountainShares
                      </button>
                    </div>
                  </div>
                </section>

                {/* What Is MountainShares */}
                <section className="card-glass" style={{
                  padding: '60px 40px',
                  borderRadius: '24px'
                }}>
                  <h3 className="gradient-text" style={{
                    fontSize: 'clamp(32px, 6vw, 48px)',
                    fontWeight: '900',
                    textAlign: 'center',
                    marginBottom: '48px',
                    fontFamily: 'monospace'
                  }}>
                    🏔️ What Is MountainShares?
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px'
                  }}>
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
                      <div key={index} className="feature-card">
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feature.icon}</div>
                        <h4 style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          color: '#FFD700',
                          marginBottom: '16px'
                        }}>
                          {feature.title}
                        </h4>
                        <p style={{
                          color: '#E5E7EB',
                          lineHeight: '1.6',
                          fontSize: '16px'
                        }}>
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* How It Helps */}
                <section style={{ textAlign: 'center' }}>
                  <h3 className="gradient-text" style={{
                    fontSize: 'clamp(32px, 6vw, 48px)',
                    fontWeight: '900',
                    marginBottom: '48px',
                    fontFamily: 'monospace'
                  }}>
                    🎯 How MountainShares Helps You
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '32px',
                    marginBottom: '48px'
                  }}>
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
                      <div key={index} style={{
                        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(0, 191, 255, 0.1))',
                        padding: '32px',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <h4 style={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          color: '#00BFFF',
                          marginBottom: '16px'
                        }}>
                          {item.title}
                        </h4>
                        <p style={{
                          color: '#E5E7EB',
                          lineHeight: '1.6'
                        }}>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="coming-soon animate-pulse-custom">
                    ⚡ LAUNCHING FALL 2025 IN FAYETTE COUNTY ⚡
                  </div>
                </section>
              </div>
            )}

            {/* Business Tab */}
            {activeTab === 'business' && (
              <div className="animate-fadeIn" style={{ textAlign: 'center', padding: '80px 20px' }}>
                <h2 className="gradient-text" style={{
                  fontSize: 'clamp(40px, 8vw, 64px)',
                  fontWeight: '900',
                  marginBottom: '32px',
                  fontFamily: 'monospace'
                }}>
                  🏢 Business Directory & Tools
                </h2>
                <p style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  color: '#00BFFF',
                  marginBottom: '48px',
                  maxWidth: '800px',
                  margin: '0 auto 48px auto'
                }}>
                  Everything your business needs to succeed - completely free. Professional tools that normally cost thousands.
                </p>
                <div className="coming-soon">
                  Business Directory Launching Fall 2025
                </div>
              </div>
            )}

            {/* Community Tab */}
            {activeTab === 'community' && (
              <div className="animate-fadeIn" style={{ textAlign: 'center', padding: '80px 20px' }}>
                <h2 className="gradient-text" style={{
                  fontSize: 'clamp(40px, 8vw, 64px)',
                  fontWeight: '900',
                  marginBottom: '32px',
                  fontFamily: 'monospace'
                }}>
                  🌐 Community Feed & Marketplace
                </h2>
                <p style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  color: '#00BFFF',
                  marginBottom: '48px',
                  maxWidth: '800px',
                  margin: '0 auto 48px auto'
                }}>
                  Local social network where neighbors buy, sell, and connect. Like Facebook, but only for your community.
                </p>
                <div className="coming-soon">
                  Community Feed Launching Phase 2 - Winter 2025
                </div>
              </div>
            )}

            {/* MountainShares Tab */}
            {activeTab === 'mountainshares' && (
              <div className="animate-fadeIn" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h2 className="gradient-text" style={{
                    fontSize: 'clamp(40px, 8vw, 64px)',
                    fontWeight: '900',
                    marginBottom: '32px',
                    fontFamily: 'monospace'
                  }}>
                    💎 MountainShares Currency
                  </h2>
                  <p style={{
                    fontSize: 'clamp(18px, 3vw, 24px)',
                    color: '#00BFFF',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}>
                    Local digital currency that keeps money in West Virginia communities. <strong>1 MountainShare = $1 USD</strong>
                  </p>
                </div>

                {/* System Status */}
                <div className="card-glass" style={{
                  padding: '32px',
                  borderRadius: '16px',
                  maxWidth: '600px',
                  margin: '0 auto',
                  border: '1px solid rgba(0, 191, 255, 0.3)'
                }}>
                  <p style={{ fontSize: '18px', marginBottom: '12px' }}>
                    <strong style={{ color: '#FFD700' }}>System Status:</strong>{' '}
                    <span style={{
                      color: systemStatus === 'checking' ? '#FFA500' : '#00FF88',
                      fontWeight: 'bold'
                    }} className={systemStatus === 'checking' ? 'animate-pulse-custom' : ''}>
                      {systemStatus === 'checking' ? 'Checking...' : 'Online'}
                    </span>
                  </p>
                  <p style={{ fontSize: '16px', marginBottom: '12px' }}>
                    <strong>Blockchain:</strong> <span style={{ color: '#00FF88', fontWeight: 'bold' }}>Arbitrum Ready</span>
                  </p>
                  <p style={{ fontSize: '16px' }}>
                    <strong>Last Updated:</strong> {new Date().toLocaleString()}
                  </p>
                </div>

                {/* Currency Info */}
                <div className="card-glass" style={{
                  padding: '48px',
                  borderRadius: '24px',
                  textAlign: 'center',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  <h3 style={{
                    fontSize: '36px',
                    fontWeight: '900',
                    color: '#FFD700',
                    marginBottom: '32px',
                    fontFamily: 'monospace'
                  }}>
                    💸 How It Works
                  </h3>
                  <div style={{
                    fontSize: '20px',
                    marginBottom: '32px',
                    lineHeight: '1.6'
                  }}>
                    <p style={{ marginBottom: '16px' }}>
                      <span style={{ fontWeight: 'bold', color: '#FFD700' }}>1 MountainShare</span> = 1 volunteer hour <span style={{ fontStyle: 'italic', color: '#9CA3AF' }}>or</span> $1 USD
                    </p>
                    <p style={{ marginBottom: '16px' }}>
                      Earn, buy, or redeem across Mount Hope and WV—<span style={{ color: '#FFD700', fontWeight: 'bold' }}>keeping local wealth local.</span>
                    </p>
                    <p style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#00BFFF'
                    }}>
                      92% stays in the community!
                    </p>
                  </div>
                  
                  <a
                    href="https://mountainshares.org/app"
                    className="btn-primary"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                  >
                    💎 Launch the App
                  </a>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div className="coming-soon">
                    MountainShares Phase 1 Launching Fall 2025
                  </div>
                </div>
              </div>
            )}

            {/* Join Tab */}
            {activeTab === 'join' && (
              <div className="animate-fadeIn" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h2 className="gradient-text" style={{
                    fontSize: 'clamp(40px, 8vw, 64px)',
                    fontWeight: '900',
                    marginBottom: '32px',
                    fontFamily: 'monospace'
                  }}>
                    🚀 Join The Commons Network
                  </h2>
                  <p style={{
                    fontSize: 'clamp(18px, 3vw, 24px)',
                    color: '#00BFFF',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}>
                    Be part of West Virginia&apos;s economic revolution. <strong>Completely free</strong> for all businesses and residents.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="card-glass" style={{
                  padding: '48px',
                  borderRadius: '24px'
                }}>
                  <h3 className="gradient-text" style={{
                    fontSize: '36px',
                    fontWeight: '900',
                    textAlign: 'center',
                    marginBottom: '48px',
                    fontFamily: 'monospace'
                  }}>
                    📞 Questions? Get In Touch
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '32px',
                    textAlign: 'center'
                  }}>
                    <div>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>✉️</div>
                      <h4 style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#00BFFF',
                        marginBottom: '8px'
                      }}>
                        Business Inquiries
                      </h4>
                      <a href="mailto:info@harmonyforhope.org" style={{
                        color: '#00BFFF',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#FFD700'}
                      onMouseLeave={(e) => e.target.style.color = '#00BFFF'}>
                        info@harmonyforhope.org
                      </a>
                    </div>
                    <div>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>📱</div>
                      <h4 style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#00BFFF',
                        marginBottom: '8px'
                      }}>
                        Follow Updates
                      </h4>
                      <a href="https://mammakidd.substack.com/" target="_blank" rel="noopener noreferrer" style={{
                        color: '#00BFFF',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#FFD700'}
                      onMouseLeave={(e) => e.target.style.color = '#00BFFF'}>
                        Our Blog
                      </a>
                    </div>
                    <div>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏔️</div>
                      <h4 style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#00BFFF',
                        marginBottom: '8px'
                      }}>
                        Launch Location
                      </h4>
                      <span style={{ color: '#00BFFF' }}>Fayette County, West Virginia</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Footer */}
          <footer style={{
            marginTop: '80px',
            padding: '32px',
            textAlign: 'center',
            color: '#9CA3AF',
            borderTop: '1px solid #374151'
          }}>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto 24px auto',
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              flexWrap: 'wrap'
            }}>
              <a href="https://facebook.com/harmonyforhope" style={{
                color: '#9CA3AF',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFD700'}
              onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                Facebook
              </a>
              <a href="https://mammakidd.substack.com/" style={{
                color: '#9CA3AF',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFD700'}
              onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                Blog
              </a>
              <a href="mailto:info@harmonyforhope.org" style={{
                color: '#9CA3AF',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFD700'}
              onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                Contact
              </a>
            </div>
            <span style={{ color: '#6B7280' }}>
              &copy; {new Date().getFullYear()} MountainShares & Harmony for Hope, Inc. All rights reserved.
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}
