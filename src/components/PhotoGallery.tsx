import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface GalleryImage {
  original: string;
  thumbnail: string;
  description?: string;
}

const galleryImages: GalleryImage[] = [
  {
    original: '/images/recanto-aereo.jpg',
    thumbnail: '/images/recanto-aereo.jpg',
    description: 'Vista aérea do Recanto Terra Viva - Emilianópolis'
  },
  {
    original: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=250',
    description: 'Infraestrutura completa com asfalto e iluminação'
  },
  {
    original: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=250',
    description: 'Lotes espaçosos de 542m² a 1.000m²'
  },
  {
    original: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=250',
    description: 'Área verde preservada e arborizada'
  },
  {
    original: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=250',
    description: 'Portaria com segurança 24 horas'
  },
  {
    original: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=250',
    description: 'Ruas amplas e planejadas'
  },
  {
    original: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=250',
    description: 'Proximidade com a natureza'
  },
  {
    original: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=250',
    description: 'Projeto paisagístico exclusivo'
  }
];

export const PhotoGallery: React.FC = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Galeria do Empreendimento
          </h2>
          <p className="text-lg text-gray-600">
            Conheça cada detalhe do Recanto Terra Viva
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
          <ImageGallery
            items={galleryImages}
            showPlayButton={true}
            showFullscreenButton={true}
            showThumbnails={true}
            showBullets={false}
            autoPlay={false}
            slideInterval={4000}
            slideDuration={450}
            thumbnailPosition="bottom"
            additionalClass="custom-gallery"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-green-600 mb-3">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fotos Reais</h3>
            <p className="text-gray-600">Imagens autênticas do empreendimento</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-green-600 mb-3">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Zoom HD</h3>
            <p className="text-gray-600">Veja cada detalhe em alta definição</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-green-600 mb-3">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Galeria Completa</h3>
            <p className="text-gray-600">Navegação fácil e intuitiva</p>
          </div>
        </div>
      </div>

      <style>{`
        .custom-gallery .image-gallery-slide img {
          border-radius: 12px;
          max-height: 600px;
          object-fit: cover;
        }
        
        .custom-gallery .image-gallery-thumbnail {
          border: 3px solid transparent;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .custom-gallery .image-gallery-thumbnail.active,
        .custom-gallery .image-gallery-thumbnail:hover {
          border-color: #16a34a;
        }
        
        .custom-gallery .image-gallery-icon {
          color: #16a34a;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }
        
        .custom-gallery .image-gallery-icon:hover {
          color: #15803d;
        }
        
        .custom-gallery .image-gallery-play-button,
        .custom-gallery .image-gallery-fullscreen-button {
          background: rgba(22, 163, 74, 0.9);
          border-radius: 50%;
          padding: 12px;
        }
        
        .custom-gallery .image-gallery-play-button:hover,
        .custom-gallery .image-gallery-fullscreen-button:hover {
          background: rgba(21, 128, 61, 0.9);
        }
      `}</style>
    </div>
  );
};
