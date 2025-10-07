import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  status: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Recanto Terra Viva',
    description: 'Loteamento fechado em Emilianópolis com lotes de 542m² a 1.000m². Infraestrutura completa: água, luz, asfalto e segurança.',
    image: '/images/emilianopolis.png',
    location: 'Emilianópolis - SP',
    status: 'Lançamento'
  },
  {
    id: 2,
    title: 'Residencial Vista Verde',
    description: 'Condomínio residencial com área de lazer completa, quadras esportivas e espaço gourmet. Projeto sustentável com energia solar.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    location: 'Presidente Prudente - SP',
    status: 'Em Obras'
  },
  {
    id: 3,
    title: 'Jardim das Acácias',
    description: 'Loteamento urbano com 120 lotes, próximo a escolas e comércio. Ideal para construir seu lar ou investir.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
    location: 'Álvares Machado - SP',
    status: 'Últimas Unidades'
  },
  {
    id: 4,
    title: 'Loteamento Serra Azul',
    description: 'Localização privilegiada próxima a São Bernardo do Campo. Lotes com excelente infraestrutura e fácil acesso às principais vias.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800',
    location: 'Região de São Bernardo do Campo - SP',
    status: 'Disponível'
  }
];

export const ProjectCarousel: React.FC = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Empreendimentos
          </h2>
          <p className="text-lg text-gray-600">
            Descubra os projetos que transformam sonhos em realidade
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="project-carousel"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="pb-12">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-green-600 font-semibold mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="swiper-button-prev-custom bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .project-carousel {
          padding: 20px 0;
        }
        
        .project-carousel .swiper-slide {
          width: 350px;
          height: auto;
        }
        
        .project-carousel .swiper-pagination-bullet {
          background: #16a34a;
          opacity: 0.5;
        }
        
        .project-carousel .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
