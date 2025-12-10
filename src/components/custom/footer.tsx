"use client";

import { Instagram, Mail, MapPin, Phone, Spade } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Spade className="w-8 h-8 text-white" />
              <span className="text-xl font-bold tracking-wider">
                PEDROCAH<span className="text-red-500">777</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Moda exclusiva com a energia e estilo do cassino. Vista-se com atitude e elegância.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Políticas</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  Envio e Entrega
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4" />
                <span>pedro7.7.7cah@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="w-4 h-4" />
                <span>(47) 99264-4552</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Balneário Camboriú, SC</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/pedrocah777/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} PEDROCAH777. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs mt-2">
            Desenvolvido com ♠ para os amantes de estilo e atitude.
          </p>
        </div>
      </div>
    </footer>
  );
}
