import { useEffect, useState } from 'react';
import { Radio, Waves, Antenna, Zap, Signal, GraduationCap, User, BookOpen } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.observe').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Radio className="w-7 h-7 text-white" />
            </div>
            <span className="text-lg font-bold hidden md:block">ELECTRÓNICA INDUSTRIAL</span>
          </div>
          <div className="text-sm text-cyan-400 font-medium">GESTIÓN 2026</div>
        </div>
      </header>

      <main className="pt-20">
        <section className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

          <div className="container mx-auto px-4 py-20 text-center relative z-10">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 animate-float">
                <Antenna className="w-14 h-14 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              LÍNEAS DE TRANSMISIÓN Y ANTENAS
            </h1>

            <div className="max-w-2xl mx-auto space-y-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">Estudiante</p>
                      <p className="text-lg font-semibold">Alejandro</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">Docente</p>
                      <p className="text-lg font-semibold">GOMEZ ZAMBRANA JHONNY</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-300">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span className="text-lg">Carrera: <span className="font-semibold text-white">Electrónica Industrial</span></span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
                Explorar Contenido
              </button>
              <button className="px-8 py-4 bg-slate-800/80 border border-cyan-500/50 rounded-xl font-semibold hover:bg-slate-700 transform hover:scale-105 transition-all duration-300">
                Ver Conceptos
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/50 observe opacity-0">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">Líneas de Transmisión</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Sistemas fundamentales para el transporte de señales electromagnéticas de alta frecuencia
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <Signal className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Características</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Impedancia característica constante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Propagación de ondas electromagnéticas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Mínimas pérdidas en alta frecuencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Adaptación de impedancias crítica</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                  <Waves className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tipos Comunes</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Coaxial (RG-58, RG-59, RG-213)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Par trenzado (UTP, STP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Microstrip y stripline (PCB)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Guía de onda rectangular</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 observe opacity-0">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">Antenas</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Dispositivos de transición entre ondas guiadas y espacio libre
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-slate-800/80 border border-cyan-500/30 rounded-xl p-6 hover:bg-slate-800 hover:border-cyan-500/60 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Antenna className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Dipolo</h3>
                <p className="text-gray-300 text-sm">
                  Antena básica y fundamental. Patrón de radiación omnidireccional en plano horizontal.
                </p>
              </div>

              <div className="bg-slate-800/80 border border-cyan-500/30 rounded-xl p-6 hover:bg-slate-800 hover:border-cyan-500/60 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Radio className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Yagi-Uda</h3>
                <p className="text-gray-300 text-sm">
                  Alta ganancia y directividad. Ideal para comunicaciones punto a punto.
                </p>
              </div>

              <div className="bg-slate-800/80 border border-cyan-500/30 rounded-xl p-6 hover:bg-slate-800 hover:border-cyan-500/60 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Signal className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Parabólica</h3>
                <p className="text-gray-300 text-sm">
                  Máxima ganancia. Aplicaciones satelitales y enlaces de microondas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/50 observe opacity-0">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">Conceptos Clave</h2>
              <p className="text-xl text-gray-300">Fundamentos esenciales de RF y telecomunicaciones</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Zap, title: 'Impedancia', desc: 'Resistencia al flujo de corriente alterna (típicamente 50Ω o 75Ω)' },
                { icon: Waves, title: 'Ondas EM', desc: 'Propagación de energía electromagnética en el espacio' },
                { icon: Signal, title: 'Frecuencia', desc: 'Número de ciclos por segundo (Hz, MHz, GHz)' },
                { icon: Radio, title: 'Reflexión', desc: 'Rebote de señal por desadaptación de impedancias' },
                { icon: Antenna, title: 'Adaptación', desc: 'ROE mínimo para máxima transferencia de potencia' },
                { icon: Waves, title: 'Ganancia', desc: 'Amplificación direccional de señal (dBi, dBd)' }
              ].map((concept, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:translate-y-[-4px]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <concept.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold">{concept.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{concept.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 observe opacity-0">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-12">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-cyan-500/50">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-8 text-cyan-400">Información Académica</h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Estudiante</p>
                  <p className="text-2xl font-bold">Alejandro</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Docente</p>
                  <p className="text-2xl font-bold">GOMEZ ZAMBRANA JHONNY</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Gestión</p>
                  <p className="text-2xl font-bold">2026</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-cyan-500/30">
                <p className="text-xl font-semibold text-gray-300">
                  Carrera: <span className="text-cyan-400">Electrónica Industrial</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-cyan-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold">LÍNEAS DE TRANSMISIÓN Y ANTENAS</p>
                <p className="text-sm text-gray-400">Electrónica Industrial - Gestión 2026</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p>Desarrollado para educación académica</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
