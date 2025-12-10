"use client";

import { useEffect, useState } from 'react';
import { ArrowRight, Shield, Truck, RefreshCw, Mail, Phone, MapPin, Clock, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import Footer from '@/components/custom/footer';
import { storage } from '@/lib/storage';

// Componente de Slider de Produto
function ProductSlider({ images, name }: { images: string[], name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <div className="relative group">
      <div 
        className="aspect-square overflow-hidden bg-gray-100 relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`${name} - Imagem ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        {/* Navegação - Visível no hover (desktop) ou sempre (mobile) */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 sm:opacity-100 z-10"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 sm:opacity-100 z-10"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>

            {/* Label com número da imagem */}
            <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full z-10">
              {currentIndex + 1}/{images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [expandedDescription, setExpandedDescription] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Carregar preferências do Local Storage
    const preferences = storage.getPreferences();
    if (preferences.theme) {
      document.documentElement.classList.toggle('dark', preferences.theme === 'dark');
    }
  }, []);

  if (!mounted) return null;

  const features = [
    {
      icon: Shield,
      title: 'Compra Segura',
      description: 'Pagamento 100% seguro e protegido'
    },
    {
      icon: Truck,
      title: 'Frete Grátis',
      description: 'Em compras acima de R$ 299'
    },
    {
      icon: RefreshCw,
      title: 'Troca Fácil',
      description: '30 dias para trocar ou devolver'
    }
  ];

  const products = [
    { 
      id: 1, 
      images: [
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e2d9c492-7e5d-4821-8ab5-e8f280d317f3.jpg",
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a1a21789-6435-43d6-909d-136fee9d7c9b.jpg"
      ], 
      name: "Camiseta Verde Escuro - Cassino",
      color: "Verde Escuro"
    },
    { 
      id: 2, 
      images: [
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/1484a7f0-8973-42c2-b896-c6fdab25c619.jpg",
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/373875e7-d77a-450b-87b5-0e7ea67dd4cd.jpg"
      ], 
      name: "Camiseta Preta",
      color: "Preta"
    },
    { 
      id: 3, 
      images: [
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a633520c-a45d-498e-ade9-c5c7579d5316.jpg",
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/8b330805-7208-4094-b233-6a0cfa98f416.jpg"
      ], 
      name: "Camiseta Bege",
      color: "Bege"
    },
    { 
      id: 4, 
      images: [
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/29b9b017-aa0c-473b-ac36-f2dd9162b205.jpg",
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/30ff9a36-c529-4eb8-b4cc-516de2a16ffb.jpg"
      ], 
      name: "Camiseta Bet On Yourself",
      color: "Verde Menta"
    },
    { 
      id: 5, 
      images: [
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/bf8c97a2-40e7-4d7e-a61b-6ea43aa5d158.jpg",
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d6a1c5d1-a324-451f-abe0-d0b11d424221.jpg",
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e9b42cbc-ae2d-4d84-aca7-ca896cc59bf8.jpg",
        "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/623f9c0d-8013-4db5-bb0f-783c2007b5a3.jpg"
      ], 
      name: "Roleta Cassino Premium",
      color: "Preto/Vermelho/Dourado",
      description: "Roda de roleta de 10 polegadas - Jogos de cassino com roda giratória e torre central",
      brand: "Trademark Games",
      model: "ALLINONEWHEEL2",
      characteristics: {
        dimensions: {
          length: "25 cm",
          height: "5 cm"
        },
        materials: "Metal, Alumínio",
        players: {
          min: 1,
          max: 8
        },
        pieces: 1,
        recommendedAge: "14 anos ou mais"
      },
      packageContent: [
        "1 x Roda de roleta com uma torre central giratória",
        "2 x Bolas"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/b8bae625-989e-4656-80a7-3dd307192db5.jpg" 
              alt="PEDROCAH777 Logo" 
              className="h-32 sm:h-40 md:h-48 w-auto drop-shadow-2xl"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
            PEDROCAH<span className="text-red-500">777</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Moda exclusiva com a energia e estilo do cassino. Vista-se com atitude e elegância.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <a
              href="#products"
              className="group px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/50"
            >
              Ver Produtos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border border-white/20"
            >
              Entre em Contato
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-pulse">♠</div>
          <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-pulse animation-delay-1000">♦</div>
          <div className="absolute top-40 right-20 text-4xl opacity-20 animate-pulse animation-delay-500">♣</div>
          <div className="absolute bottom-40 left-20 text-4xl opacity-20 animate-pulse animation-delay-1500">♥</div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confira nossa coleção exclusiva. Deslize para ver todas as imagens de cada modelo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <ProductSlider images={product.images} name={product.name} />
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">Cor: {product.color}</p>
                  
                  {/* Descrição expansível para Roleta Cassino Premium */}
                  {product.id === 5 && product.description && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button
                        onClick={() => setExpandedDescription(!expandedDescription)}
                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                      >
                        <span className="text-lg leading-none">...</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            expandedDescription ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {expandedDescription && (
                        <div className="mt-3 space-y-3 animate-fade-in">
                          <div>
                            <h4 className="text-xs font-semibold text-gray-900 mb-1">Descrição:</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">{product.description}</p>
                          </div>
                          
                          {product.brand && (
                            <div>
                              <h4 className="text-xs font-semibold text-gray-900 mb-1">Marca:</h4>
                              <p className="text-xs text-gray-600">{product.brand}</p>
                            </div>
                          )}
                          
                          {product.model && (
                            <div>
                              <h4 className="text-xs font-semibold text-gray-900 mb-1">Modelo:</h4>
                              <p className="text-xs text-gray-600">{product.model}</p>
                            </div>
                          )}
                          
                          {product.characteristics && (
                            <div>
                              <h4 className="text-xs font-semibold text-gray-900 mb-1">Características:</h4>
                              <ul className="text-xs text-gray-600 space-y-1">
                                <li>• Dimensões: {product.characteristics.dimensions.length} x {product.characteristics.dimensions.height}</li>
                                <li>• Materiais: {product.characteristics.materials}</li>
                                <li>• Jogadores: {product.characteristics.players.min} a {product.characteristics.players.max}</li>
                                <li>• Peças: {product.characteristics.pieces}</li>
                                <li>• Idade recomendada: {product.characteristics.recommendedAge}</li>
                              </ul>
                            </div>
                          )}
                          
                          {product.packageContent && (
                            <div>
                              <h4 className="text-xs font-semibold text-gray-900 mb-1">Conteúdo do Pacote:</h4>
                              <ul className="text-xs text-gray-600 space-y-1">
                                {product.packageContent.map((item, idx) => (
                                  <li key={idx}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center mt-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                      <Clock className="w-4 h-4" />
                      Em Breve
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Sobre a PEDROCAH<span className="text-red-500">777</span>
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  A PEDROCAH777 nasceu da paixão por moda exclusiva e pelo universo vibrante dos cassinos. 
                  Combinamos estilo urbano com a elegância e energia das mesas de jogo.
                </p>
                <p>
                  Cada peça é cuidadosamente selecionada para representar atitude, confiança e sofisticação. 
                  Nossa missão é vestir aqueles que não têm medo de se destacar e fazer suas próprias regras.
                </p>
                <p>
                  Com qualidade premium e designs exclusivos, a PEDROCAH777 é mais que uma marca - 
                  é um estilo de vida para quem joga para ganhar.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-1">100%</div>
                  <div className="text-sm text-white/60">Qualidade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-1">777+</div>
                  <div className="text-sm text-white/60">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-1">5★</div>
                  <div className="text-sm text-white/60">Avaliação</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/4858acb7-e303-45e5-baeb-a2ac85cfbf4e.jpg"
                  alt="Sobre PEDROCAH777"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500 rounded-full flex items-center justify-center text-6xl animate-pulse">
                ♠
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Políticas de Troca e Devolução
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sua satisfação é nossa prioridade. Confira nossas políticas transparentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <RefreshCw className="w-6 h-6 text-red-500" />
                Trocas
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Prazo de 30 dias corridos a partir do recebimento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Produto deve estar sem uso, com etiquetas e embalagem original</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Primeira troca sem custo adicional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Processamento em até 5 dias úteis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-red-500" />
                Devoluções
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Direito de arrependimento em até 7 dias (CDC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Reembolso integral do valor pago</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Estorno em até 10 dias úteis após aprovação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Frete de devolução por nossa conta</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-black text-white p-8 rounded-2xl text-center">
            <p className="text-lg mb-4">
              <strong>Defeito de fabricação?</strong> Trocamos imediatamente sem custo!
            </p>
            <p className="text-white/80">
              Entre em contato conosco pelo e-mail ou WhatsApp para iniciar o processo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos aqui para ajudar. Fale conosco através dos canais abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
              <p className="text-gray-600">pedro7.7.7cah@gmail.com</p>
              <p className="text-sm text-gray-500 mt-2">Respondemos em até 24h</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600">(47) 99264-4552</p>
              <p className="text-sm text-gray-500 mt-2">Seg a Sex, 9h às 18h</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Localização</h3>
              <p className="text-gray-600">Balneário Camboriú, SC</p>
              <p className="text-sm text-gray-500 mt-2">Entrega para todo país</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
