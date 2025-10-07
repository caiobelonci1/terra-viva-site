import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, MapPin, Building2, Users, Award, Phone, Mail, Clock, Shield, Trees, Construction, Check } from 'lucide-react';
import { CountUp } from '../components/CountUp';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { PhotoGallery } from '../components/PhotoGallery';
import { PropertyMap } from '../components/PropertyMap';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer para animações
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Flutuante Estilo Apple */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo.png" 
                alt="Terra Viva" 
                className={`transition-all duration-300 ${scrollY > 50 ? 'h-10 w-10' : 'h-14 w-14'}`}
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <span className={`font-bold transition-all duration-300 ${
                scrollY > 50 ? 'text-lg text-[#2C5F2D]' : 'text-xl text-white'
              }`}>
                Terra Viva
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Início', 'Empresas', 'Recanto', 'Contato'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    scrollY > 50 
                      ? 'text-gray-700 hover:text-[#2C5F2D]' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <a 
              href="https://wa.me/5518997213968"
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                scrollY > 50
                  ? 'bg-[#2C5F2D] text-white hover:bg-[#1A4D1B]'
                  : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section com Vídeo Premium */}
      <section id="início" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-forest-5302/1080p.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay Premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C5F2D]/20 via-transparent to-[#C9A961]/20"></div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          {/* Logo Animado */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-block animate-float">
              <img 
                src="/images/logo.png" 
                alt="Terra Viva" 
                className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-8 drop-shadow-2xl"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 animate-fade-in-delay-1" 
              style={{
                fontFamily: "'Playfair Display', serif", 
                letterSpacing: '-0.03em',
                textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)'
              }}>
            Grupo Terra Viva
          </h1>
          
          <p className="text-xl md:text-3xl lg:text-4xl mb-6 font-light animate-fade-in-delay-2"
             style={{textShadow: '0 2px 15px rgba(0,0,0,0.5)'}}>
            Mais de 40 anos transformando sonhos em realidade
          </p>

          <p className="text-base md:text-lg lg:text-xl mb-16 max-w-3xl mx-auto opacity-90 animate-fade-in-delay-3"
             style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
            Fundado em Barueri-SP, unindo tradição, qualidade e sustentabilidade
          </p>

          {/* CTAs Premium com Glassmorphism */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-3">
            <a 
              href="#recanto"
              className="group relative px-10 py-4 bg-white/10 backdrop-blur-lg rounded-full border border-white/30 hover:bg-white hover:text-[#2C5F2D] transition-all duration-500 font-semibold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center gap-2">
                Conheça o Recanto
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="https://wa.me/5518997213968"
              className="group px-10 py-4 bg-[#C9A961] hover:bg-[#B8984E] rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Fale Conosco
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator Elegante */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-sm font-medium tracking-wider">SCROLL</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Números do Sucesso com Animação e Contador */}
      <section className="py-24 bg-gradient-to-b from-white via-[#F5F5F0]/30 to-white" data-animate id="stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Clock className="w-10 h-10" />, number: 40, suffix: '+', label: 'Anos de História' },
              { icon: <Users className="w-10 h-10" />, number: 1000, suffix: '+', label: 'Famílias Felizes' },
              { icon: <Building2 className="w-10 h-10" />, number: 15, suffix: '+', label: 'Projetos Entregues' },
              { icon: <Award className="w-10 h-10" />, number: 2, suffix: '', label: 'Empresas Consolidadas' },
            ].map((stat, index) => (
              <div 
                key={index}
                className={`group text-center p-8 rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible.stats ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2C5F2D]/10 to-[#C9A961]/10 rounded-2xl text-[#2C5F2D] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#2C5F2D] to-[#1A4D1B] bg-clip-text text-transparent mb-3">
                  {isVisible.stats ? <CountUp end={stat.number} suffix={stat.suffix} duration={2500} /> : '0'}
                </h3>
                <p className="text-gray-600 font-semibold text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossas Empresas - Premium Cards */}
      <section id="empresas" className="py-32 bg-gradient-to-b from-white to-[#F5F5F0]" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              <span className="bg-gradient-to-r from-[#2C5F2D] to-[#1A4D1B] bg-clip-text text-transparent">
                Nossas Empresas
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              Duas marcas consolidadas, uma única missão: realizar seus sonhos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Terra Viva Construtora - Card Premium */}
            <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4">
              {/* Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2C5F2D]/10 via-transparent to-[#2C5F2D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2C5F2D]/5 to-transparent rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative p-12">
                <div className="w-24 h-24 bg-gradient-to-br from-[#2C5F2D] to-[#1A4D1B] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-4xl font-bold text-[#2C5F2D] mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
                  Terra Viva Construtora
                </h3>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Fundada em Barueri, há mais de 40 anos construímos loteamentos que unem qualidade, 
                  segurança e contato com a natureza. Nossa expertise transforma terrenos em comunidades prósperas.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: <MapPin className="w-5 h-5" />, text: 'Fundada em Barueri, SP' },
                    { icon: <Award className="w-5 h-5" />, text: 'Mais de 40 anos de experiência' },
                    { icon: <Users className="w-5 h-5" />, text: '1000+ famílias atendidas' },
                    { icon: <Building2 className="w-5 h-5" />, text: 'Loteamentos de alto padrão' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-700 group/item">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#C9A961]/10 rounded-xl flex items-center justify-center text-[#C9A961] group-hover/item:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fascínio Ambientes - Card Premium */}
            <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961]/10 via-transparent to-[#C9A961]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C9A961]/5 to-transparent rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative p-12">
                <div className="w-24 h-24 bg-gradient-to-br from-[#C9A961] to-[#B8984E] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Award className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-4xl font-bold text-[#2C5F2D] mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
                  Fascínio Ambientes
                </h3>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Com mais de 40 anos de tradição, criamos espaços únicos que combinam sofisticação 
                  e funcionalidade. Do planejamento à execução, cada detalhe é pensado para encantar.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    { icon: <Building2 className="w-5 h-5" />, text: 'Design de interiores exclusivo' },
                    { icon: <Award className="w-5 h-5" />, text: '40+ anos de excelência' },
                    { icon: <Users className="w-5 h-5" />, text: 'Projetos personalizados' },
                    { icon: <Check className="w-5 h-5" />, text: 'Arquitetura corporativa' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-700 group/item">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#2C5F2D]/10 rounded-xl flex items-center justify-center text-[#2C5F2D] group-hover/item:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Link para site de Planejados */}
                <a 
                  href="https://fascinio-ambiente-design.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C9A961] to-[#B8984E] text-white rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <span>Ver Móveis Planejados</span>
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fascínio Planejados - Banner Especial */}
      <section className="py-24 bg-gradient-to-br from-[#C9A961] via-[#B8984E] to-[#C9A961] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mb-48"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-lg rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Conteúdo */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-[#C9A961]/10 px-4 py-2 rounded-full mb-6 w-fit">
                  <Award className="w-5 h-5 text-[#C9A961]" />
                  <span className="text-[#C9A961] font-semibold">Novidade</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C5F2D]" style={{fontFamily: "'Playfair Display', serif"}}>
                  Fascínio Planejados
                </h2>
                
                <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                  Conheça nossa nova plataforma digital com projetos exclusivos de móveis planejados.
                </p>
                
                <p className="text-lg text-gray-500 mb-8">
                  Design sofisticado, funcionalidade e qualidade Fascínio Ambientes em cada detalhe.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    '🏠 Projetos 3D Interativos',
                    '✨ Ambientes Personalizados',
                    '🎨 Acabamentos Premium',
                    '📐 Consultoria Especializada'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#C9A961] rounded-full"></div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://fascinio-ambiente-design.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A961] to-[#B8984E] text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                  >
                    <span>Visite o Site</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a 
                    href="https://wa.me/5518997213968?text=Quero%20conhecer%20o%20Fascínio%20Planejados"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#C9A961] text-[#C9A961] rounded-full font-bold hover:bg-[#C9A961] hover:text-white transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Imagem/Preview */}
              <div className="relative h-full min-h-[400px] md:min-h-[600px] bg-gradient-to-br from-[#F5F5F0] to-white p-8 flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961]/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <Award className="w-16 h-16 text-[#C9A961]" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-5xl font-bold text-[#2C5F2D]" style={{fontFamily: "'Playfair Display', serif"}}>
                          Fascínio
                        </p>
                        <p className="text-2xl text-[#C9A961] font-semibold">Planejados</p>
                        <p className="text-gray-600 max-w-xs mx-auto">
                          Transformando espaços em ambientes únicos desde 1980
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-gray-700">Site Online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Projetos */}
      <ProjectCarousel />

      {/* Recanto Terra Viva - Seção Premium */}
      <section id="recanto" className="py-32 bg-gradient-to-b from-white to-[#F5F5F0]" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              <span className="bg-gradient-to-r from-[#2C5F2D] to-[#1A4D1B] bg-clip-text text-transparent">
                Recanto Terra Viva
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Emilianópolis, SP - Seu refúgio particular
            </p>
          </div>

          {/* Card Principal do Projeto */}
          <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Imagem de Destaque */}
            <div className="relative h-[60vh] overflow-hidden">
              <img 
                src="/images/emilianopolis.png" 
                alt="Recanto Terra Viva - Vista Aérea"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Badge Flutuante */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
                <span className="font-bold text-[#2C5F2D]">Lançamento</span>
              </div>

              {/* Info Sobreposta */}
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
                  Lotes de 542m² a 1000m²
                </h3>
                <p className="text-xl opacity-90 max-w-3xl">
                  Um projeto pensado para quem busca exclusividade, segurança e contato direto com a natureza
                </p>
              </div>
            </div>

            {/* Detalhes e Características */}
            <div className="p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: <Shield className="w-8 h-8" />, title: 'Segurança 24h', desc: 'Monitoramento completo' },
                  { icon: <Trees className="w-8 h-8" />, title: 'Área Verde', desc: 'Contato com a natureza' },
                  { icon: <Construction className="w-8 h-8" />, title: 'Infraestrutura', desc: 'Completa e moderna' },
                ].map((feature, i) => (
                  <div key={i} className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#F5F5F0] to-white hover:shadow-lg transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2C5F2D]/10 rounded-2xl text-[#2C5F2D] mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-[#2C5F2D]">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <a 
                  href="https://wa.me/5518997213968?text=Quero%20saber%20mais%20sobre%20o%20Recanto%20Terra%20Viva"
                  className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#2C5F2D] to-[#1A4D1B] text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  Saiba Mais Sobre o Recanto
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos do Empreendimento */}
      <PhotoGallery />

      {/* Mapa Interativo da Propriedade */}
      <PropertyMap />

      {/* Seção de Contato Premium */}
      <section id="contato" className="py-32 bg-gradient-to-br from-[#2C5F2D] via-[#1A4D1B] to-[#2C5F2D] text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A961]/10 rounded-full -mr-48 -mb-48"></div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8" style={{fontFamily: "'Playfair Display', serif"}}>
            Vamos Conversar?
          </h2>
          <p className="text-xl md:text-2xl mb-16 opacity-90 font-light max-w-3xl mx-auto">
            Entre em contato e descubra como podemos transformar seu futuro
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <a 
              href="https://wa.me/5518997213968"
              className="group relative p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white hover:text-[#2C5F2D] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <Phone className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-xl mb-2">WhatsApp</p>
                <p className="text-2xl font-semibold">(18) 99721-3968</p>
              </div>
            </a>

            <a 
              href="tel:1839941221"
              className="group relative p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white hover:text-[#2C5F2D] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <Phone className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-xl mb-2">Telefone</p>
                <p className="text-2xl font-semibold">(18) 3994-1221</p>
              </div>
            </a>
          </div>

          <div className="space-y-4 text-lg opacity-90">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6" />
              <a href="mailto:contato@terraviva.com.br" className="hover:text-[#C9A961] transition-colors">
                contato@terraviva.com.br
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6" />
              <span>Fundada em Barueri, SP - Atuação em todo o estado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Elegante */}
      <footer className="bg-[#0A0A0A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="Terra Viva" 
                  className="h-16 w-16"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
                <span className="text-2xl font-bold">Terra Viva</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Mais de 40 anos construindo sonhos e realizando projetos de vida. 
                Tradição, qualidade e compromisso com o futuro.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-[#C9A961]">Empresas do Grupo</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Terra Viva Construtora</li>
                <li className="hover:text-white transition-colors cursor-pointer">Fascínio Ambientes</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-[#C9A961]">Contato</h4>
              <ul className="space-y-3 text-gray-400">
                <li>(18) 3994-1221</li>
                <li>(18) 99721-3968</li>
                <li>contato@terraviva.com.br</li>
                <li>Barueri, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              &copy; 2024 Grupo Terra Viva. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
