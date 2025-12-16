import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1">
            <div className="mb-6">
               <span className="font-heading font-bold text-2xl tracking-tight">
                BRASIL<span className="font-light">BROKERS</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A maior rede de imobiliárias do Brasil. Encontre o imóvel dos seus sonhos com quem entende do assunto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-green">Institucional</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Relação com Investidores</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Assessoria de Imprensa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canal de Ética</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-green">Imóveis</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Comprar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alugar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lançamentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Anunciar Imóvel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Simular Financiamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-green">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>Central de Vendas:</span>
                <span className="font-bold text-white">4003-5555</span>
              </li>
              <li>Capitais e Regiões Metropolitanas</li>
              <li className="pt-2">Fale Conosco</li>
              <li>Dúvidas Frequentes</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 Brasil Brokers. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Mapa do Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
