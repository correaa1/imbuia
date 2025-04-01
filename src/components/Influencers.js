import Image from 'next/image';
import Link from 'next/link';

export default function Influencers() {
  return (
    <section className="relative bg-[#F5841F] text-white overflow-hidden py-16">
      {/* Efeito de sobreposição para dar profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5841F]/80 to-[#F5841F]/100 z-0"></div>
      
      {/* Efeito de textura no fundo */}
      <div className="absolute inset-0 opacity-10 bg-repeat" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}
      ></div>
      
      <div className="container mx-auto relative z-10 px-6 md:px-12">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <h2 className="font-cursive text-4xl md:text-5xl mb-2 text-white/90">Nossos</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white">Influenciadores</h3>
        </div>
        
        {/* Grade de vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Vídeo 1 */}
          <div className="flex flex-col">
            <div className="aspect-[9/12] bg-black relative rounded-lg overflow-hidden shadow-xl mb-4 flex items-center justify-center cursor-pointer group">
              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Ícone de play */}
              <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <p className="text-white/90 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          
          {/* Vídeo 2 */}
          <div className="flex flex-col">
            <div className="aspect-[9/12] bg-black relative rounded-lg overflow-hidden shadow-xl mb-4 flex items-center justify-center cursor-pointer group">
              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Ícone de play */}
              <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <p className="text-white/90 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          
          {/* Vídeo 3 */}
          <div className="flex flex-col">
            <div className="aspect-[9/12] bg-black relative rounded-lg overflow-hidden shadow-xl mb-4 flex items-center justify-center cursor-pointer group">
              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Ícone de play */}
              <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <p className="text-white/90 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 