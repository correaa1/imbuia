import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="relative bg-[#F5841F] text-white overflow-hidden py-16">
      {/* Efeito de sobreposição para dar profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5841F]/90 to-[#F5841F]/100 z-0"></div>
      
      {/* Efeito de textura de madeira no fundo */}
      <div className="absolute inset-0 opacity-10 bg-repeat" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}
      ></div>
      
      <div className="container mx-auto relative z-10 px-6 md:px-12">
        {/* Primeira seção: Conheça o Imbuiá */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-24">
          <div className="md:w-1/2">
            <h2 className="font-cursive text-4xl md:text-5xl mb-2 text-white/90">Conheça o</h2>
            <h3 className="text-5xl md:text-7xl font-bold mb-6 text-white">Imbuiá</h3>
            <p className="mb-8 max-w-xl text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-xl w-full max-w-md">
              <Image 
                src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Prato Imbuiá"
                width={400}
                height={300} 
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
        
        {/* Segunda seção: Experiência nossa Culinária */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="font-cursive text-3xl md:text-4xl mb-2 text-white/90">Experiencie nossa</h2>
            <h3 className="text-5xl md:text-6xl font-bold mb-6 text-white">Culinária</h3>
            <p className="mb-8 max-w-xl text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore
            </p>
            <Link href="#cardapio" className="inline-block px-6 py-3 bg-white text-[#F5841F] font-medium rounded-lg hover:bg-white/90 transition-colors">
              Confira o cardápio
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-xl w-full max-w-md">
              <Image 
                src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hambúrguer Gourmet"
                width={400}
                height={300} 
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Botão flutuante para chat/atendimento */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-white p-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F5841F" viewBox="0 0 24 24">
            <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
          </svg>
        </button>
      </div>
    </section>
  );
} 