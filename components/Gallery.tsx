import React, { useState } from 'react';
import { Camera, Map, Video } from 'lucide-react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full bg-white relative">
      <div className="max-w-7xl mx-auto md:px-4 lg:px-8 py-6">
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[500px]">
          {/* Main Image */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden cursor-pointer rounded-l-lg">
            <img 
              src={images[0]} 
              alt="Main property view" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
          </div>
          
          {/* Secondary Images */}
          <div className="col-span-1 row-span-1 relative group overflow-hidden cursor-pointer">
             <img src={images[1]} alt="Interior 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="col-span-1 row-span-1 relative group overflow-hidden cursor-pointer rounded-tr-lg">
             <img src={images[2]} alt="Interior 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="col-span-1 row-span-1 relative group overflow-hidden cursor-pointer">
             <img src={images[3]} alt="Interior 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="col-span-1 row-span-1 relative group overflow-hidden cursor-pointer rounded-br-lg">
             <img src={images[4]} alt="Interior 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             
             {/* "View All" Overlay on last image */}
             <div className="absolute inset-0 bg-brand-navy bg-opacity-60 flex flex-col items-center justify-center text-white transition-opacity hover:bg-opacity-70">
                <span className="text-2xl font-bold">+{images.length - 5}</span>
                <span className="text-sm font-medium uppercase tracking-wider">Fotos</span>
             </div>
          </div>
        </div>

        {/* Mobile Carousel (simplified as a scroll container) */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-1 no-scrollbar h-[300px]">
          {images.map((img, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[90vw] relative">
              <img src={img} alt={`Property ${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Action Buttons over Gallery */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-12 flex space-x-2">
        <button className="bg-white text-brand-navy px-4 py-2 rounded shadow-lg flex items-center gap-2 text-sm font-bold hover:bg-gray-100 transition">
          <Camera size={18} />
          <span className="hidden sm:inline">Fotos</span>
        </button>
        <button className="bg-white text-brand-navy px-4 py-2 rounded shadow-lg flex items-center gap-2 text-sm font-bold hover:bg-gray-100 transition">
          <Map size={18} />
          <span className="hidden sm:inline">Mapa</span>
        </button>
        <button className="bg-white text-brand-navy px-4 py-2 rounded shadow-lg flex items-center gap-2 text-sm font-bold hover:bg-gray-100 transition">
          <Video size={18} />
          <span className="hidden sm:inline">Tour Virtual</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
