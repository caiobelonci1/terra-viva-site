import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix para ícones do Leaflet não aparecerem
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Lot {
  id: number;
  position: [number, number];
  size: string;
  status: 'Disponível' | 'Vendido' | 'Reservado';
  price: string;
}

const lots: Lot[] = [
  {
    id: 1,
    position: [-21.8437, -51.4820],
    size: '542m²',
    status: 'Disponível',
    price: 'Consulte'
  },
  {
    id: 2,
    position: [-21.8442, -51.4815],
    size: '800m²',
    status: 'Disponível',
    price: 'Consulte'
  },
  {
    id: 3,
    position: [-21.8435, -51.4812],
    size: '1.000m²',
    status: 'Vendido',
    price: '-'
  },
  {
    id: 4,
    position: [-21.8440, -51.4825],
    size: '750m²',
    status: 'Disponível',
    price: 'Consulte'
  },
  {
    id: 5,
    position: [-21.8445, -51.4820],
    size: '600m²',
    status: 'Reservado',
    price: '-'
  },
];

const getMarkerColor = (status: string) => {
  switch (status) {
    case 'Disponível':
      return '#16a34a'; // verde
    case 'Vendido':
      return '#dc2626'; // vermelho
    case 'Reservado':
      return '#ea580c'; // laranja
    default:
      return '#6b7280'; // cinza
  }
};

export const PropertyMap: React.FC = () => {
  // Coordenadas de Emilianópolis - SP
  const center: [number, number] = [-21.8437, -51.4818];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Localização do Empreendimento
          </h2>
          <p className="text-lg text-gray-600">
            Recanto Terra Viva - Emilianópolis, SP
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-green-600">
              <MapContainer
                center={center}
                zoom={16}
                scrollWheelZoom={false}
                style={{ height: '500px', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Círculo delimitando a área do empreendimento */}
                <Circle
                  center={center}
                  radius={200}
                  pathOptions={{
                    color: '#16a34a',
                    fillColor: '#16a34a',
                    fillOpacity: 0.1,
                  }}
                />

                {/* Marcadores dos lotes */}
                {lots.map((lot) => (
                  <Marker key={lot.id} position={lot.position}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold text-lg mb-2">Lote #{lot.id}</h3>
                        <p className="text-gray-700">
                          <strong>Tamanho:</strong> {lot.size}
                        </p>
                        <p className="text-gray-700">
                          <strong>Status:</strong>{' '}
                          <span
                            className="font-semibold"
                            style={{ color: getMarkerColor(lot.status) }}
                          >
                            {lot.status}
                          </span>
                        </p>
                        <p className="text-gray-700">
                          <strong>Valor:</strong> {lot.price}
                        </p>
                        {lot.status === 'Disponível' && (
                          <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
                            Consultar
                          </button>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          <div className="space-y-6">
            {/* Legenda */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-6 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Legenda</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-600 mr-3"></div>
                  <span className="text-gray-700 font-medium">Disponível</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-orange-600 mr-3"></div>
                  <span className="text-gray-700 font-medium">Reservado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-red-600 mr-3"></div>
                  <span className="text-gray-700 font-medium">Vendido</span>
                </div>
              </div>
            </div>

            {/* Informações adicionais */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Diferenciais
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Infraestrutura completa</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Segurança 24 horas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Área verde preservada</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Asfalto e iluminação</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Interessado?
              </h3>
              <p className="mb-4 text-green-50">
                Entre em contato e agende uma visita!
              </p>
              <a
                href="https://wa.me/5518997213968"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-green-600 hover:bg-green-50 font-bold py-3 px-6 rounded-lg text-center transition-colors shadow-lg"
              >
                Falar com Consultor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
