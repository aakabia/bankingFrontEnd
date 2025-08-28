
import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Zap, TrendingUp, Users, Star, Menu, X, ArrowRight, CheckCircle, BarChart3, CreditCard, Smartphone, Globe } from 'lucide-react';
import LoginModal from './LoginModal';

export const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Military-grade encryption and multi-factor authentication protect your financial data 24/7."
    },
    {
      icon: Zap,
      title: "Lightning Fast Transfers",
      description: "Send money anywhere in the world in seconds, not days. Real-time processing guaranteed."
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "AI-powered insights help you make better financial decisions with predictive analytics."
    },
    {
      icon: CreditCard,
      title: "Seamless Payments",
      description: "Accept payments from anywhere with our unified payment processing platform."
    }
  ];

  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "$2.5B+", label: "Transactions Processed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "150+", label: "Countries Supported" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Inc.",
      content: "This platform transformed our payment processing. We've seen 40% faster transactions and our customers love the seamless experience.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CFO, Global Ventures",
      content: "The analytics dashboard gives us insights we never had before. It's like having a financial advisor built into our banking platform.",
      rating: 5
    },
    {
      name: "Elena Kozlov",
      role: "Founder, RetailFlow",
      content: "Security was our biggest concern, but their bank-level protection and compliance features exceeded our expectations completely.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b3d91] to-[#00a8b5] flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#0b3d91] to-[#00a8b5] bg-clip-text text-transparent">
                SwiftSpend
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-[#0b3d91] transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-[#0b3d91] transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#0b3d91] transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-[#0b3d91] transition-colors">Pricing</a>
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-[#0b3d91] text-white px-6 py-2 rounded-full hover:bg-[#0a3580] transition-all transform hover:scale-105"
                >
                Login
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-[#0b3d91]">Features</a>
              <a href="#about" className="block text-gray-700 hover:text-[#0b3d91]">About</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-[#0b3d91]">Testimonials</a>
              <a href="#pricing" className="block text-gray-700 hover:text-[#0b3d91]">Pricing</a>
              <button className="w-full bg-[#0b3d91] text-white py-3 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0b3d91]/10 to-purple-600/10 border border-[#0b3d91]/20 mb-6">
                <span className="text-[#0b3d91] text-sm font-semibold">🚀 Now live in 150+ countries</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                The Future of
                <span className="bg-gradient-to-r from-[#0b3d91] to-[#00a8b5] bg-clip-text text-transparent block">
                  Digital Finance
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience lightning-fast transactions, bank-level security, and AI-powered insights. 
                Join millions who trust SwiftSpend for their digital financial needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-[#0b3d91] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0a3580] transition-all transform hover:scale-105 flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="border-2 border-[#0b3d91] text-[#0b3d91] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0b3d91] hover:text-white transition-all">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#0b3d91]">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b3d91]/20 to-purple-600/20 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="bg-gradient-to-br from-[#0b3d91] to-[#00a8b5] rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-semibold">Account Balance</span>
                      <Smartphone className="text-white" size={24} />
                    </div>
                    <div className="text-white text-3xl font-bold">$24,892.50</div>
                    <div className="text-white/80 text-sm">+12.5% this month</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="text-green-600" size={20} />
                        </div>
                        <div className="ml-3">
                          <div className="font-semibold">Investment Return</div>
                          <div className="text-sm text-gray-600">Portfolio Growth</div>
                        </div>
                      </div>
                      <div className="text-green-600 font-bold">+$1,250</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Globe className="text-blue-600" size={20} />
                        </div>
                        <div className="ml-3">
                          <div className="font-semibold">International Transfer</div>
                          <div className="text-sm text-gray-600">To Europe</div>
                        </div>
                      </div>
                      <div className="text-blue-600 font-bold">-$500</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <Star className="text-white" size={24} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="text-4xl lg:text-5xl font-bold text-[#0b3d91] mb-2 group-hover:bg-gradient-to-r group-hover:from-[#0b3d91] group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-[#0b3d91] to-[#00a8b5] bg-clip-text text-transparent"> SwiftSpend</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for the modern economy with cutting-edge technology and uncompromising security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0b3d91] to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Trusted by
              <span className="bg-gradient-to-r from-[#0b3d91] to-purple-600 bg-clip-text text-transparent"> Leaders</span>
            </h2>
            <p className="text-xl text-gray-600">See what our customers are saying about SwiftSpend</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0b3d91] to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0b3d91] to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Financial Future?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses and individuals who trust SwiftSpend for secure, fast, and intelligent financial solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-[#0b3d91] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center group">
              Start Your Free Trial
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <div className="flex items-center text-white/90">
              <CheckCircle className="mr-2" size={20} />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b3d91] to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="ml-3 text-2xl font-bold">SwiftSpend</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering the future of digital finance with secure, fast, and intelligent solutions.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0b3d91] transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0b3d91] transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0b3d91] transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 SwiftSpend. All rights reserved.</p>
            <p className="text-gray-400">Made with ❤️ for the future of finance</p>
          </div>
        </div>
      </footer>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
};