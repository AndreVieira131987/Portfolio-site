import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useContent } from '../i18n/LanguageContext';

const Contact: React.FC = () => {
  const { contact } = useContent();

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-violet-600 rounded-full mix-blend-screen filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{contact.heading}</h2>
            <p className="text-slate-400 text-lg mb-12">
              {contact.subheading}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-violet-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{contact.emailLabel}</p>
                  <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-lg font-medium hover:text-violet-400 transition-colors">
                    {CONTACT_INFO.EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-violet-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{contact.phoneLabel}</p>
                  <a href={`https://wa.me/5541999669466`} className="text-lg font-medium hover:text-violet-400 transition-colors">
                    {CONTACT_INFO.PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-violet-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{contact.locationLabel}</p>
                  <p className="text-lg font-medium">
                    {contact.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href={CONTACT_INFO.LINKEDIN} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-violet-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={CONTACT_INFO.GITHUB} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-violet-600 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white">{contact.formTitle}</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">{contact.formName}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                  placeholder={contact.formNamePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">{contact.formEmail}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                  placeholder={contact.formEmailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">{contact.formMessage}</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={contact.formMessagePlaceholder}
                ></textarea>
              </div>
              <button className="w-full bg-violet-600 text-white font-bold py-4 rounded-lg hover:bg-violet-700 transition-colors flex items-center justify-center gap-2">
                {contact.formSubmit} <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
