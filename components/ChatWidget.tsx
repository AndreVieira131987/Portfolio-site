import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { useContent, useLanguage } from '../i18n/LanguageContext';

const ChatWidget: React.FC = () => {
  const { chat } = useContent();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: chat.greeting }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ id: '1', role: 'model', text: chat.greeting }]);
  }, [chat.greeting]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, text: m.text }));

    const responseText = await sendMessageToGemini(userMsg.text, history, language);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 md:w-96 bg-black/80 backdrop-blur-xl rounded-2xl shadow-2xl z-50 flex flex-col border border-white/10 transition-all duration-300 origin-bottom-right transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-black/60 p-4 rounded-t-2xl flex items-center gap-3 border-b border-white/10">
            <div className="bg-violet-500 p-2 rounded-full">
                <Bot size={20} className="text-white" />
            </div>
            <div>
                <h3 className="text-white font-bold text-sm flex items-center gap-2">
                    {chat.title}
                    <Sparkles size={12} className="text-yellow-400" />
                </h3>
                <p className="text-slate-400 text-xs">{chat.poweredBy}</p>
            </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-violet-600 text-white rounded-br-none'
                    : 'bg-white/10 text-slate-200 shadow-sm border border-white/10 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none shadow-sm border border-white/10 flex gap-1 items-center">
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-black/60 border-t border-white/10 rounded-b-2xl">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={chat.placeholder}
              className="flex-1 bg-white/10 border-0 rounded-full px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500 outline-none"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="p-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
