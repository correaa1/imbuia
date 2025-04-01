'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#F5841F] text-white overflow-hidden py-16">
      {/* Efeito de sobreposição para dar profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5841F]/80 to-[#F5841F]/100 z-0"></div>
      
      {/* Efeito de textura nas bordas laterais */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#DD6B00]/70 to-[#F5841F] opacity-60"></div>
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#DD6B00]/70 to-[#F5841F] opacity-60"></div>
      
      <div className="container mx-auto relative z-10 px-6 md:px-12">
        {/* Conteúdo principal com layout ajustado */}
        <div className="max-w-4xl mx-auto">
          {/* Título com "Entre em" e "contato" com mesmo posicionamento de Drinks.js */}
          <div className="mb-12">
            <h2 className="font-cursive text-4xl md:text-5xl mb-1 text-white/90 text-left pl-8 md:pl-16">Entre em</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white text-left pl-20 md:pl-32">contato</h3>
          </div>
          
          {/* Grid de informações e fotos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coluna de informações à esquerda */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Conheça nossos sabores</h4>
              
              {/* Endereço */}
              <div className="mb-6">
                <p className="text-white/90">
                  R. Adhemar da Silva, 1100 - <br />
                  Kobrasol, São José - SC, 88101-091
                </p>
              </div>
              
              {/* Horário de funcionamento */}
              <div className="mb-6">
                <h5 className="font-semibold mb-2">Funcionamento</h5>
                <p className="text-white/90">Terça a Sábado das 18h às 01h.</p>
              </div>
              
              {/* Telefone */}
              <div className="mb-6">
                <h5 className="font-semibold mb-2">Telefone</h5>
                <p className="text-white/90">(48) 3208-0064</p>
              </div>
              
              {/* WhatsApp */}
              <div className="mb-8">
                <h5 className="font-semibold mb-2">WhatsApp</h5>
                <Link 
                  href="https://wa.me/5548991994774" 
                  className="text-white/90 hover:text-white underline flex items-center"
                  target="_blank"
                >
                  +55 48 99199-4774
                </Link>
              </div>
              
              {/* Galeria de imagens de pratos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Drink especial"
                    width={250}
                    height={250}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Prato do menu"
                    width={250}
                    height={250}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Prato especial"
                    width={250}
                    height={250}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Hambúrguer gourmet"
                    width={250}
                    height={250}
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Coluna de mapa e avaliações à direita */}
            <div>
              {/* Mapa do Google usando iframe - localização atualizada */}
              <div className="rounded-lg overflow-hidden shadow-xl mb-6 h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.294682323431!2d-48.61472857497925!3d-27.591795382834837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274914ede6da39%3A0xd60f97ff0216d6b4!2sBAR%20IMBUI%C3%81%20-%20Raizes%20do%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1699482241576!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Bar Imbuiá"
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Card com imagem real de avaliação e botão para ver todas */}
              <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-xl">
                <div className="p-4">
                  <h5 className="font-bold text-xl text-black mb-2">BAR IMBUIÁ - Raízes do Brasil</h5>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-500">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <span className="ml-1 text-sm">4.9 (225)</span>
                    <span className="ml-2 text-sm text-gray-600">Bar · Restaurante</span>
                  </div>
                  
                  {/* Avaliação real do Google como imagem */}
                  <div className="border-t border-b border-gray-200 py-4 mb-3">
                    <div className="rounded-lg overflow-hidden mb-2">
                      <Image 
                        src="/images/rating.png" 
                        alt="Avaliação real do restaurante Imbuia"
                        width={600}
                        height={300}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <p className="text-sm text-gray-700 mb-3">
                      Veja todas as avaliações de nossos clientes
                    </p>
                    
                    <a 
                      href="https://www.google.com/search?sca_esv=cd731438e95bc999&sxsrf=AHTn8zq6iElBEgvgMVqTKFrftWl6rs6p5w:1743542672140&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzSFmBfr8zxoLBFPQCdrDKBHmhRm6aA-z5cdQXTpxOjNV2aHaoOZaQX0oDdCnyaZE44sajT4BMJt8taAnpbwANlL3gifUuk8p-TTRC1c8e6OAYIXSZyqqGeTj2K36iLH-CWbZeGo%3D&q=BAR+IMBUI%C3%81+-+Raizes+do+Brasil+Coment%C3%A1rios&sa=X&ved=2ahUKEwjrqf7M4reMAxWoq5UCHecAJPwQ0bkNegQIMBAE&biw=1702&bih=836&dpr=1.1" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >
                      Ver no Google
                    </a>
                  </div>
                </div>
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