import Image from 'next/image';
import Link from 'next/link';

export default function Events() {
  return (
    <section id="events" className="relative bg-[#F5841F] text-white overflow-hidden py-16">
      {/* Efeito de sobreposição para dar profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5841F]/80 to-[#F5841F]/100 z-0"></div>
      
      {/* Efeito de textura nas bordas laterais similar ao da imagem */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#DD6B00]/70 to-[#F5841F] opacity-60"></div>
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#DD6B00]/70 to-[#F5841F] opacity-60"></div>
      
      <div className="container mx-auto relative z-10 px-6 md:px-12">
        {/* Conteúdo principal com layout ajustado */}
        <div className="max-w-4xl mx-auto">
          {/* Título com "Realize" e "seu evento aqui" com mesmo posicionamento de Drinks.js */}
          <div className="mb-12">
            <h2 className="font-cursive text-4xl md:text-5xl mb-1 text-white/90 text-left pl-8 md:pl-16">Realize</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white text-left pl-20 md:pl-32">seu evento aqui</h3>
          </div>
          
          {/* Imagem centralizada do interior do restaurante - dimensionada completamente */}
          <div className="rounded-lg overflow-hidden shadow-xl mb-10">
            <Image 
              src="/images/_DSC0002.jpg" 
              alt="Restaurante Imbuia - Ambiente interno"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Layout horizontal para conteúdo e formulário */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Informações à esquerda - mesmo layout da imagem de referência */}
            <div className="md:w-1/2">
              <p className="text-white/90 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut 
              </p>
              
              <div className="text-white font-semibold text-xl">
                <p className="mb-1">
                  Reservas de Terça à Sábado até as 20h.
                </p>
                <p>
                  Preencha formulário para confirmar a reserva.
                </p>
              </div>
            </div>
            
            {/* Layout do formulário idêntico à imagem de referência */}
            <div className="md:w-1/2 flex items-start gap-4">
              {/* Imagem de drink */}
              <div className="flex-shrink-0 w-32">
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1578338469605-4522a3a239d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                    alt="Drink especial"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Formulário de reserva exatamente como na imagem */}
              <div className="flex-grow">
                <form className="space-y-2.5">
                  <div>
                    <label className="block text-xs font-medium mb-1">NOME DA RESERVA</label>
                    <input 
                      type="text" 
                      placeholder="Nome Completo" 
                      className="w-full px-3 py-2 bg-black/40 rounded-md text-white placeholder-white/60"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium mb-1">CONTATO</label>
                    <input 
                      type="tel" 
                      placeholder="+55" 
                      className="w-full px-3 py-2 bg-black/40 rounded-md text-white placeholder-white/60"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium mb-1">DATA</label>
                    <input 
                      type="text" 
                      placeholder="DD/MM/AAAA" 
                      className="w-full px-3 py-2 bg-black/40 rounded-md text-white placeholder-white/60"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium mb-1">HORÁRIO</label>
                    <input 
                      type="text" 
                      placeholder="00:00" 
                      className="w-full px-3 py-2 bg-black/40 rounded-md text-white placeholder-white/60"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-red-600 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                  >
                    CONFIRMAR RESERVA
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ícone de navegação no canto inferior esquerdo */}
      <div className="absolute bottom-4 left-4">
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs">
          N
        </div>
      </div>
      
    
    </section>
  );
} 