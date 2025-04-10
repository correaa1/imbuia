import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50">
      {/* Barra de navegação simplificada */}
      <div className="w-full  bg-opacity-80 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Menu de navegação centralizado */}
          <nav className="flex-1 flex justify-center items-center text-white text-sm md:text-base">
            <Link href="#about" className="hover:text-amber-300 transition-colors px-2">
              História
            </Link>
            <span className="text-white px-1">|</span>
            <Link href="#about" className="hover:text-amber-300 transition-colors px-2">
              Cardápio
            </Link>
            <span className="text-white px-1">|</span>
            <Link href="#about" className="hover:text-amber-300 transition-colors px-2">
              Delivery
            </Link>
            <span className="text-white px-1">|</span>
            <Link href="#events" className="hover:text-amber-300 transition-colors px-2">
              Reservas
            </Link>
            <span className="text-white px-1">|</span>
            <Link href="#drinks" className="hover:text-amber-300 transition-colors px-2">
              Drinks
            </Link>
            <span className="text-white px-1">|</span>
            <Link href="#contact" className="hover:text-amber-300 transition-colors px-2">
              Contato
            </Link>
          </nav>
          
          {/* Seletor de idiomas no canto direito */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-white text-sm">
              <Link href="#" className="hover:text-amber-300 transition-colors">
                PT
              </Link>
              <span>/</span>
              <Link href="#" className="hover:text-amber-300 transition-colors">
                EN
              </Link>
              <span>/</span>
              <Link href="#" className="hover:text-amber-300 transition-colors">
                ES
              </Link>
            </div>
            
            {/* Ícones de mídia social */}
            <div className="flex items-center gap-3 text-white">
              <Link href="#" className="hover:text-amber-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="hover:text-amber-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 