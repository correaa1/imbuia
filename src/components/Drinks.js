import Image from 'next/image';
import Link from 'next/link';

export default function Drinks() {
  return (
    <section className="relative bg-[#F5841F] text-white overflow-hidden py-16">
      {/* Efeito de sobreposição para dar profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5841F]/80 to-[#F5841F]/100 z-0"></div>
      
      {/* Efeito de textura nas bordas laterais similar ao da imagem */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#DD6B00]/70 to-[#F5841F] opacity-60"></div>
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#DD6B00]/70 to-[#F5841F] opacity-60"></div>
      
      <div className="container mx-auto relative z-10 px-6 md:px-12">
        {/* Conteúdo principal com layout ajustado */}
        <div className="max-w-4xl mx-auto">
          {/* Título com "Drinks" e "autênticos" com menor distância entre eles */}
          <div className="mb-12">
            <h2 className="font-cursive text-4xl md:text-5xl mb-1 text-white/90 text-left pl-8 md:pl-16">Drinks</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white text-left pl-20 md:pl-32">autênticos</h3>
          </div>
          
          {/* Imagem dos drinks - três drinks coloridos em copos */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Drinks autênticos"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>
          
          {/* Texto à esquerda como na imagem de referência */}
          <div className="md:max-w-lg">
            <p className="text-white/90 text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in
            </p>
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