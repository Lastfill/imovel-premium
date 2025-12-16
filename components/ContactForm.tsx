import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formType, setFormType] = useState<'message' | 'visit'>('message');

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
      <div className="flex border-b border-gray-200 mb-6">
        <button 
          onClick={() => setFormType('message')}
          className={`flex-1 pb-3 text-sm font-bold uppercase tracking-wide transition-colors ${formType === 'message' ? 'text-brand-navy border-b-2 border-brand-navy' : 'text-gray-400 hover:text-brand-navy'}`}
        >
          Proposta
        </button>
        <button 
          onClick={() => setFormType('visit')}
          className={`flex-1 pb-3 text-sm font-bold uppercase tracking-wide transition-colors ${formType === 'visit' ? 'text-brand-navy border-b-2 border-brand-navy' : 'text-gray-400 hover:text-brand-navy'}`}
        >
          Agendar Visita
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
          <img src="https://picsum.photos/100/100?grayscale" alt="Corretor" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase font-bold">Corretor Online</p>
          <h3 className="font-heading font-bold text-brand-navy">Marcelo Silva</h3>
          <p className="text-xs text-brand-green font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            Online agora
          </p>
        </div>
      </div>

      <form className="space-y-4">
        <div>
          <input 
            type="text" 
            placeholder="Nome" 
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="E-mail" 
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          />
        </div>
        <div>
          <div className="flex">
             <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-200 rounded-l text-gray-500 text-sm font-bold">+55</span>
             <input 
              type="tel" 
              placeholder="(DDD) Telefone" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-r text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
          </div>
        </div>
        
        {formType === 'message' ? (
          <div>
            <textarea 
              rows={3} 
              placeholder="Olá, gostaria de mais informações sobre este imóvel..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            ></textarea>
          </div>
        ) : (
          <div>
            <input 
              type="date"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
          </div>
        )}

        <button 
          type="button"
          className="w-full bg-brand-green text-white font-bold py-3 rounded uppercase tracking-wide hover:bg-opacity-90 transition-all shadow-md transform active:scale-95"
        >
          {formType === 'message' ? 'Enviar Mensagem' : 'Solicitar Visita'}
        </button>

        <button 
          type="button"
          className="w-full border border-green-500 text-green-600 font-bold py-3 rounded flex items-center justify-center gap-2 hover:bg-green-50 transition-colors"
        >
          <MessageCircle size={18} />
          WhatsApp
        </button>
      </form>

      <div className="mt-6 flex justify-center gap-4 text-gray-400">
         <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-brand-blue">
            <Phone size={20} />
            <span className="text-[10px] uppercase font-bold">Ligar</span>
         </div>
         <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-brand-blue">
            <Mail size={20} />
            <span className="text-[10px] uppercase font-bold">E-mail</span>
         </div>
         <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-brand-blue">
            <Calendar size={20} />
            <span className="text-[10px] uppercase font-bold">Agendar</span>
         </div>
      </div>
    </div>
  );
};

export default ContactForm;
