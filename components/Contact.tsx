import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-600 rounded-full mix-blend-screen filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
            <p className="text-slate-300 text-lg mb-12">
              Estou pronto para ajudar sua empresa a tomar decisões mais inteligentes baseadas em dados. Entre em contato para uma conversa.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-brand-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-lg font-medium hover:text-brand-400 transition-colors">
                    {CONTACT_INFO.EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-brand-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp / Telefone</p>
                  <a href={`https://wa.me/5541999669466`} className="text-lg font-medium hover:text-brand-400 transition-colors">
                    {CONTACT_INFO.PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-brand-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Localização</p>
                  <p className="text-lg font-medium">
                    {CONTACT_INFO.LOCATION}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href={CONTACT_INFO.LINKEDIN} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-brand-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={CONTACT_INFO.GITHUB} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-brand-600 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Como posso ajudar no seu projeto?"
                ></textarea>
              </div>
              <button className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2">
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
