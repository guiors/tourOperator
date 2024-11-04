import React from 'react';
import { Instagram } from 'lucide-react';

const TikTokIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
  >
    <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-1.022 6.174 6.174 0 0 1-1.13-1.741h.004a5.816 5.816 0 0 1-.291-.721H12.2v12.796l-.002 3.039a3.578 3.578 0 0 1-1.685 2.878 3.596 3.596 0 0 1-1.914.556 3.641 3.641 0 0 1-3.039-1.538 3.607 3.607 0 0 1-.156-3.439 3.635 3.635 0 0 1 2.047-1.889 3.6 3.6 0 0 1 1.149-.188v-3.713a7.075 7.075 0 0 0-2.626.507 7.163 7.163 0 0 0-3.823 3.823 7.209 7.209 0 0 0 1.536 7.834 7.123 7.123 0 0 0 5.097 2.119 7.145 7.145 0 0 0 7.166-7.167l-.001-8.954a10.005 10.005 0 0 0 5.851 1.917V8.41a6.218 6.218 0 0 1-2.478-.514z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-amber-900/90 to-green-900/90 text-stone-100">
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className='text-justify leading-relaxed'>
            <h3 className="text-2xl font-semibold">Kadaba Ethiopia Tour</h3>
            <p className="text-stone-200">Découvrez l'authenticité de l'Éthiopie</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://www.instagram.com/voyage_en_ethiopie/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span>Suivez-nous sur Instagram</span>
            </a>
            
            <a 
              href="https://www.tiktok.com/@natyo0922" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <TikTokIcon className="w-5 h-5" />
              <span>Suivez-nous sur TikTok</span>
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-stone-100/20 text-center">
          <p className="text-stone-300">&copy; {new Date().getFullYear()} Kadaba Ethiopia Tour. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;