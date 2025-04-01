import Image from 'next/image';

export default function Hero() {
  // Usando apenas uma sobreposição escura com a imagem de fundo
  const backgroundStyle = {
    position: 'relative',  // Necessário para posicionar a imagem de fundo
  };

  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={backgroundStyle}>
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/20241119_172711.jpg"
          alt="Imbuia - Ambiente do restaurante" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      {/* Overlay para garantir contraste com o texto */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-1"></div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-white text-center px-4">
        {/* Logo principal */}
        <h1 className="logo-imbuia text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-2" style={{fontFamily: 'monospace', letterSpacing: '0.1em'}}>
          IMBUIA
        </h1>
        
        {/* Subtítulo */}
        <p className="subtitle-raizes text-xl md:text-2xl lg:text-3xl font-light italic mb-4" style={{fontFamily: 'cursive'}}>
          Raízes do Brasil
        </p>
        
        {/* Descrição */}
        <p className="text-base md:text-lg max-w-xl font-light">
          Uma experiência afetiva de brasilidades
        </p>
      </div>
      
      {/* Elemento de navegação no canto inferior esquerdo */}
      <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-black bg-opacity-70 flex items-center justify-center text-white text-xs z-10">
        N
      </div>
    </section>
  );
} 