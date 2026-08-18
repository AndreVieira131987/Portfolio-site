import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';
import { useContent } from '../i18n/LanguageContext';

const Contact: React.FC = () => {
  const { contact } = useContent();

  return (
    <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row gap-16">

            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{contact.finalCtaHeading}</h2>
              <p className="text-slate-400 text-lg mb-10">
                {contact.finalCtaSubtext}
              </p>

              <a
                href="https://wa.me/5541999669466"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition-colors mb-10"
              >
                <MessageCircle size={18} /> {contact.scheduleCall}
              </a>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center text-violet-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{contact.emailLabel}</p>
                    <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-base font-medium text-slate-200 hover:text-white transition-colors">
                      {CONTACT_INFO.EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center text-violet-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{contact.phoneLabel}</p>
                    <a href="https://wa.me/5541999669466" className="text-base font-medium text-slate-200 hover:text-white transition-colors">
                      {CONTACT_INFO.PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center text-violet-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{contact.locationLabel}</p>
                    <p className="text-base font-medium text-slate-200">
                      {contact.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-3">
                <a href={CONTACT_INFO.LINKEDIN} target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={CONTACT_INFO.GITHUB} target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="md:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">{contact.formTitle}</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">{contact.formName}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                    placeholder={contact.formNamePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">{contact.formEmail}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                    placeholder={contact.formEmailPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">{contact.formMessage}</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all resize-none"
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
      </div>
    </section>
  );
};

export default Contact;
