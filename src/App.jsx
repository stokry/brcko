import React, { useState, useEffect } from 'react';
import { Clock, ArrowUpRight, ArrowLeft, Bot, Newspaper, Zap, Brain, Mail, Phone, MapPin, Shield, Eye, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-[#000000] py-24 overflow-hidden">
      {/* Dots pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(#D1FF4C 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: '0.1'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            brzi<span className="text-[#D1FF4C]">.info</span>
          </h1>
          
          <p className="mt-6 text-lg text-gray-400">
            Curated articles from trusted sources, refined by AI for clarity and conciseness
          </p>
          
          <div className="mt-6 text-sm text-gray-500">
            Powered by advanced AI | Updated every hour
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-full sm:w-[600px] bg-[#111111] z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">
                O <span className="text-[#D1FF4C]">nama</span>
              </h2>
              <button
                onClick={onClose}
                className="text-[#D1FF4C] hover:text-[#c1ee44] transition-colors p-2 rounded-full border border-[#D1FF4C] hover:border-[#c1ee44] bg-transparent"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#D1FF4C]/10 rounded-lg">
                  <Newspaper className="h-6 w-6 text-[#D1FF4C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Brzi.info Portal</h3>
                  <p className="text-gray-400">
                    Brzi.info je inovativni news portal koji koristi najnoviju AI tehnologiju kako bi vam 
                    pružio brz i jednostavan pristup najvažnijim vijestima iz Hrvatske.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#D1FF4C]/10 rounded-lg">
                  <Brain className="h-6 w-6 text-[#D1FF4C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">AI Tehnologija</h3>
                  <p className="text-gray-400">
                    Koristimo napredne AI algoritme za obradu i sažimanje vijesti, osiguravajući da dobijete 
                    najbitnije informacije bez nepotrebnih detalja. Naša AI tehnologija kontinuirano uči i 
                    prilagođava se kako bi vam pružila što kvalitetniji sadržaj.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#D1FF4C]/10 rounded-lg">
                  <Zap className="h-6 w-6 text-[#D1FF4C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Brzo i Pouzdano</h3>
                  <p className="text-gray-400">
                    Naš sustav automatski prati i ažurira vijesti 24/7, osiguravajući da uvijek imate 
                    pristup najnovijim informacijama. Sve vijesti prolaze kroz našu AI obradu koja 
                    garantira točnost i relevantnost sadržaja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
};

const ContactDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-full sm:w-[600px] bg-[#111111] z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">
                Kontakt <span className="text-[#D1FF4C]">informacije</span>
              </h2>
              <button
                onClick={onClose}
                className="text-[#D1FF4C] hover:text-[#c1ee44] transition-colors p-2 rounded-full border border-[#D1FF4C] hover:border-[#c1ee44] bg-transparent"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#D1FF4C]/10 rounded-lg">
                  <Mail className="h-6 w-6 text-[#D1FF4C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:info@brzi.info" className="text-gray-400 hover:text-[#D1FF4C] transition-colors">
                    info@brzi.info
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#D1FF4C]/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-[#D1FF4C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Lokacija</h3>
                  <p className="text-gray-400">
                    Zagreb, Hrvatska
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Pošaljite nam poruku</h3>
                <p className="text-gray-400 mb-6">
                  Za sve upite, sugestije ili poslovne prijedloge, slobodno nas kontaktirajte putem emaila.
                  Trudimo se odgovoriti unutar 24 sata.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
};

const PrivacyDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-full sm:w-[600px] bg-[#111111] z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">
                Pravila <span className="text-[#D1FF4C]">privatnosti</span>
              </h2>
              <button
                onClick={onClose}
                className="text-[#D1FF4C] hover:text-[#c1ee44] transition-colors p-2 rounded-full border border-[#D1FF4C] hover:border-[#c1ee44] bg-transparent"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#D1FF4C]/10 rounded-lg">
                  <Shield className="h-6 w-6 text-[#D1FF4C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Zaštita podataka</h3>
                  <p className="text-gray-400">
                    Brzi.info se zalaže za zaštitu vaše privatnosti. Ne prikupljamo osobne podatke 
                    posjetitelja osim anonimnih analitičkih podataka za poboljšanje korisničkog iskustva.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#D1FF4C]/10 rounded-lg">
                  <Eye className="h-6 w-6 text-[#D1FF4C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Korištenje podataka</h3>
                  <p className="text-gray-400">
                    Prikupljeni anonimni podaci koriste se isključivo za:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                    <li>Poboljšanje korisničkog iskustva</li>
                    <li>Analizu korištenja web stranice</li>
                    <li>Optimizaciju sadržaja</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#D1FF4C]/10 rounded-lg">
                  <Lock className="h-6 w-6 text-[#D1FF4C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sigurnost</h3>
                  <p className="text-gray-400">
                    Koristimo najnovije sigurnosne protokole za zaštitu naše web stranice i podataka. 
                    Ne pohranjujemo nikakve osobne podatke korisnika i ne koristimo kolačiće koji bi 
                    mogli identificirati pojedinačne korisnike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
};

const Footer = ({ onAboutClick, onContactClick, onPrivacyClick }) => {
  return (
    <footer className="bg-[#111111] border-t border-gray-800/20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-white mb-2">
              brzi<span className="text-[#D1FF4C]">.info</span>
            </h2>
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} Brzi.info. Sva prava pridržana.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <span 
                onClick={onAboutClick}
                className="text-gray-400 hover:text-[#D1FF4C] transition-colors cursor-pointer"
              >
                O nama
              </span>
              <span 
                onClick={onContactClick}
                className="text-gray-400 hover:text-[#D1FF4C] transition-colors cursor-pointer"
              >
                Kontakt
              </span>
              <span 
                onClick={onPrivacyClick}
                className="text-gray-400 hover:text-[#D1FF4C] transition-colors cursor-pointer"
              >
                Pravila privatnosti
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Najbrži način da saznate što se događa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const NewArticleIndicator = ({ isNew }) => {
  if (!isNew) return null;
  
  return (
    <div className="new-article-indicator">
      <div className="pulse-dot" />
      <span className="text-[#D1FF4C] text-sm">New</span>
    </div>
  );
};

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isNewArticle, setIsNewArticle] = useState(false);
  const articlesPerPage = 12;

  const getTimeAgo = (dateStr) => {
    const now = new Date();  
    const date = new Date(dateStr);
    
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 5) {  
      return 'just now';
    } else if (diffMins < 60) {
      return `${diffMins}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else {
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      return date.toLocaleDateString('hr-HR', options);
    }
  };

  const processContent = (content) => {
    if (!content) return '';
    
    try {
      const contentObj = JSON.parse(content);
      return contentObj.main_content || contentObj.summary || '';
    } catch (e) {
      // If content is not JSON, return it as is
      return content;
    }
  };

  const checkForNewArticles = async () => {
    try {
      const response = await fetch(
        'https://kibfdaxeegvddusnknfs.supabase.co/rest/v1/articles?select=*&category_name=eq.Vijesti&order=date_unparsed.desc&limit=1',
        {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpYmZkYXhlZWd2ZGR1c25rbmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMTQ2NzMsImV4cCI6MjAzOTg5MDY3M30.l9HjERTXw_8mAqzIOkv8vck82CBbh2wPiZ_pS96k7Mg',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpYmZkYXhlZWd2ZGR1c25rbmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMTQ2NzMsImV4cCI6MjAzOTg5MDY3M30.l9HjERTXw_8mAqzIOkv8vck82CBbh2wPiZ_pS96k7Mg'
          }
        }
      );
      const [latestArticle] = await response.json();
      
      if (latestArticle && articles.length > 0) {
        const latestDate = new Date(latestArticle.date_unparsed);
        const currentLatestDate = new Date(articles[0].date_unparsed);
        
        if (latestDate > currentLatestDate) {
          await fetchArticles();
          setIsNewArticle(true);
          setTimeout(() => {
            setIsNewArticle(false);
          }, 10000); // Hide after 10 seconds
        }
      }
    } catch (error) {
      console.error('Error checking for new articles:', error);
    }
  };

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        'https://kibfdaxeegvddusnknfs.supabase.co/rest/v1/articles?select=*&category_name=eq.Vijesti&order=date_unparsed.desc',
        {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpYmZkYXhlZWd2ZGR1c25rbmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMTQ2NzMsImV4cCI6MjAzOTg5MDY3M30.l9HjERTXw_8mAqzIOkv8vck82CBbh2wPiZ_pS96k7Mg',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpYmZkYXhlZWd2ZGR1c25rbmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMTQ2NzMsImV4cCI6MjAzOTg5MDY3M30.l9HjERTXw_8mAqzIOkv8vck82CBbh2wPiZ_pS96k7Mg',
            'Prefer': 'return=representation'
          }
        }
      );

      const data = await response.json();
      
      const processedArticles = data.map(article => ({
        id: article.post_id,
        title: article.title,
        content: processContent(article.content),
        timestamp: getTimeAgo(article.date_unparsed),
        category: 'Vijesti',
        date_unparsed: article.date_unparsed
      }));

      setArticles(processedArticles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setError('Error loading news: ' + error.message);
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setPage(prev => prev + 1);
    // Implement pagination logic here when needed
  };

  const pulseStyle = `
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(209, 255, 76, 0.7);
      }
      
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(209, 255, 76, 0);
      }
      
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(209, 255, 76, 0);
      }
    }
  `;

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedArticle]);

  useEffect(() => {
    // Initial fetch
    fetchArticles();
    
    // Check for new articles every 2 seconds
    const pollInterval = setInterval(checkForNewArticles, 2000);
    
    // Also set up WebSocket connection for real-time updates
    const ws = new WebSocket('wss://kibfdaxeegvddusnknfs.supabase.co/realtime/v1/websocket?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpYmZkYXhlZWd2ZGR1c25rbmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMTQ2NzMsImV4cCI6MjAzOTg5MDY3M30.l9HjERTXw_8mAqzIOkv8vck82CBbh2wPiZ_pS96k7Mg');
    
    ws.onopen = () => {
      console.log('Connected to Supabase realtime');
      ws.send(JSON.stringify({
        type: 'ACCESS_TOKEN',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpYmZkYXhlZWd2ZGR1c25rbmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMTQ2NzMsImV4cCI6MjAzOTg5MDY3M30.l9HjERTXw_8mAqzIOkv8vck82CBbh2wPiZ_pS96k7Mg'
      }));
      ws.send(JSON.stringify({
        type: 'SUBSCRIBE',
        table: 'articles',
        schema: 'public'
      }));
    };
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'INSERT' && data.table === 'articles') {
        checkForNewArticles();
      }
    };
    
    // Cleanup
    return () => {
      clearInterval(pollInterval);
      ws.close();
    };
  }, []);

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    const truncated = text.substr(0, maxLength);
    return truncated.substr(0, truncated.lastIndexOf(' ')) + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000000]">
        <Hero />
      
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#000000]">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center text-red-400">Error loading news: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] relative">
      <style>{pulseStyle}</style>
      <div className={`transition-all duration-300 ${selectedArticle ? 'blur-sm brightness-50' : ''}`}>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-stretch">
            {articles.map((article) => (
              <div
                key={article.id}
                className={`bg-[#1A1A1A] rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#D1FF4C] hover:border-2 cursor-pointer border-2 border-transparent`}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-[#1E1E1E] text-[#D1FF4C] px-3 py-1 rounded-full text-sm inline-block">
                    {article.category}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 ml-4 whitespace-nowrap">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.timestamp}
                  </div>
                  {isNewArticle && <NewArticleIndicator isNew={true} />}
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">{article.title}</h2>
                <p className="text-gray-400 text-sm">{truncateText(article.content, 800)}</p>
                <div className="text-[#D1FF4C] mt-4 text-sm">Read Full Article ↗</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={loadMore}
              className="rounded-md bg-[#D1FF4C] px-6 py-3 text-base font-medium text-black hover:bg-[#c1ee44] transition-colors"
            >
              Load More
            </button>
          </div>
        </div>
      </div>

      {/* Side Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-1/3 bg-[#111111] p-6 transform transition-transform duration-300 ease-in-out ${
          selectedArticle ? 'translate-x-0' : 'translate-x-full'
        } shadow-xl overflow-y-auto z-50`}
      >
        {selectedArticle && (
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-[#D1FF4C] hover:bg-[#c1ee44] transition-colors p-2 rounded-full text-black"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <a 
                href={selectedArticle.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D1FF4C] hover:text-[#c1ee44] transition-colors"
              >
                Open Original
                <ArrowUpRight className="ml-1 h-4 w-4 inline" />
              </a>
            </div>

            <div className="mb-4">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#D1FF4C]/10 text-[#D1FF4C] inline-block mb-3">
                {selectedArticle.category}
              </span>
              <h2 className="text-2xl font-semibold text-white mb-2">{selectedArticle.title}</h2>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {selectedArticle.timestamp}
              </div>
            </div>

            <div className="flex-grow text-gray-300 text-base space-y-4 leading-relaxed">
              {selectedArticle.content}
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSelectedArticle(null)}
        />
      )}
      <AboutDrawer isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <PrivacyDrawer isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <Footer 
        onAboutClick={() => setIsAboutOpen(true)}
        onContactClick={() => setIsContactOpen(true)}
        onPrivacyClick={() => setIsPrivacyOpen(true)}
      />
    </div>
  );
};

export default NewsPage;