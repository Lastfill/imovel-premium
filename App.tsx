import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';
import { Property } from './types';
import { MapPin, Check, Ruler, Bed, Bath, Car, Share2, Printer, Heart, DollarSign } from 'lucide-react';

const mockProperty: Property = {
  id: "685",
  title: "Lotes Recreio dos Bandeirantes",
  address: "Av. das Américas, 15000",
  neighborhood: "Recreio dos Bandeirantes",
  city: "Rio de Janeiro",
  price: 450000,
  area: 360,
  bedrooms: 0,
  bathrooms: 0,
  suites: 0,
  parking: 2,
  description: "Exclusividade e sofisticação em um dos bairros mais valorizados do Rio. Lotes a partir de 360m² em condomínio fechado com total infraestrutura de lazer e segurança. Próximo às melhores praias e shoppings da região. Oportunidade única para construir a casa dos seus sonhos em meio à natureza.",
  features: [
    "Segurança 24h",
    "Academia completa",
    "Piscina adulto e infantil",
    "Salão de festas gourmet",
    "Quadra de tênis",
    "Playground",
    "Área verde preservada",
    "Acesso asfaltado"
  ],
  images: [
    "https://picsum.photos/1200/800?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
    "https://picsum.photos/800/600?random=4",
    "https://picsum.photos/800/600?random=5",
    "https://picsum.photos/800/600?random=6"
  ],
  type: "Terreno em Condomínio",
  status: "Lançamento"
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-gray flex flex-col font-sans">
      <Header />
      
      {/* Breadcrumb Area */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 font-medium uppercase tracking-wide flex items-center gap-2">
          <span>Home</span>
          <span className="text-gray-300">/</span>
          <span>Rio de Janeiro</span>
          <span className="text-gray-300">/</span>
          <span>Recreio dos Bandeirantes</span>
          <span className="text-gray-300">/</span>
          <span className="text-brand-blue">{mockProperty.title}</span>
        </div>
      </div>

      <main className="flex-grow">
        <Gallery images={mockProperty.images} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Header Info */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block bg-brand-blue text-white text-xs font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide">
                      {mockProperty.status}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy mb-2">
                      {mockProperty.title}
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm gap-1">
                      <MapPin size={16} />
                      <p>{mockProperty.address}, {mockProperty.neighborhood} - {mockProperty.city}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-brand-navy border border-gray-200 rounded-full hover:bg-gray-50 transition">
                      <Share2 size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-brand-navy border border-gray-200 rounded-full hover:bg-gray-50 transition">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-end gap-2 mb-6 border-b border-gray-100 pb-6">
                  <span className="text-sm text-gray-500 mb-1">A partir de</span>
                  <span className="text-3xl font-bold text-brand-navy">R$ {mockProperty.price.toLocaleString('pt-BR')}</span>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-100">
                    <Ruler className="text-brand-blue mb-1" size={24} />
                    <span className="font-bold text-brand-navy">{mockProperty.area} m²</span>
                    <span className="text-xs text-gray-500">Área Total</span>
                  </div>

                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-100">
                    <DollarSign className="text-brand-blue mb-1" size={24} />
                    <span className="font-bold text-brand-navy">
                      {(mockProperty.price / mockProperty.area).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                    <span className="text-xs text-gray-500">Preço/m²</span>
                  </div>

                  {mockProperty.bedrooms > 0 && (
                    <div className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-100">
                      <Bed className="text-brand-blue mb-1" size={24} />
                      <span className="font-bold text-brand-navy">{mockProperty.bedrooms}</span>
                      <span className="text-xs text-gray-500">Quartos</span>
                    </div>
                  )}
                  {mockProperty.bathrooms > 0 && (
                     <div className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-100">
                      <Bath className="text-brand-blue mb-1" size={24} />
                      <span className="font-bold text-brand-navy">{mockProperty.bathrooms}</span>
                      <span className="text-xs text-gray-500">Banheiros</span>
                    </div>
                  )}
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-100">
                    <Car className="text-brand-blue mb-1" size={24} />
                    <span className="font-bold text-brand-navy">{mockProperty.parking > 0 ? mockProperty.parking : '-'}</span>
                    <span className="text-xs text-gray-500">Vagas</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-heading font-bold text-brand-navy mb-4 pb-2 border-b border-gray-100">
                  Sobre o Imóvel
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {mockProperty.description}
                </p>
                <div className="mt-6 flex gap-3">
                   <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded uppercase">Condomínio Fechado</span>
                   <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded uppercase">Pronto para construir</span>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-heading font-bold text-brand-navy mb-6 pb-2 border-b border-gray-100">
                  Características e Diferenciais
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                  {mockProperty.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-green-50 text-brand-green flex items-center justify-center flex-shrink-0">
                         <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-heading font-bold text-brand-navy mb-6 pb-2 border-b border-gray-100">
                  Localização
                </h2>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
                   <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: 'url("https://picsum.photos/800/400?grayscale")'}}></div>
                   <div className="relative z-10 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-brand-navy font-bold hover:scale-105 transition-transform">
                      <MapPin className="text-brand-green" />
                      Ver no Mapa
                   </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p className="font-bold text-brand-navy mb-1">Pontos de interesse próximos:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>5 min do Recreio Shopping</li>
                    <li>10 min da Praia do Recreio</li>
                    <li>Próximo a escolas e supermercados</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-1">
              <ContactForm />
              
              <div className="mt-6 bg-brand-blue rounded-lg p-6 text-white text-center shadow-lg">
                <h3 className="font-heading font-bold text-xl mb-2">Simule seu Financiamento</h3>
                <p className="text-blue-100 text-sm mb-4">Veja as melhores taxas do mercado para você.</p>
                <button className="w-full bg-white text-brand-blue font-bold py-2 rounded uppercase text-sm hover:bg-gray-100 transition-colors">
                  Simular Agora
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <GeminiChat property={mockProperty} />
    </div>
  );
};

export default App;