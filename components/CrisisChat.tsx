import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Cpu } from 'lucide-react';
import { sendCrisisMessage } from '../services/geminiService';
import { ChatMessage } from '../types';

export const CrisisChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to the DRAM Crisis Support Terminal. I am your Virtual Memory Grief Counselor. Are you experiencing stuttering or emotional lag today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await sendCrisisMessage(messages, userMsg);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-drama-red text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all border-2 border-white flex items-center gap-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="font-mono text-sm uppercase font-bold tracking-widest hidden sm:inline">Request Counsel</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-slate-900 border-2 border-drama-blue w-80 sm:w-96 h-[400px] flex flex-col shadow-2xl rounded-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Chat Header */}
          <div className="bg-drama-blue text-white p-3 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">Support_Agent_v2.5</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-red-400 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/95">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 text-xs font-mono leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-900 text-blue-100 border border-blue-700'
                      : 'bg-slate-800 text-slate-300 border border-slate-600'
                  }`}
                >
                  {msg.role === 'model' && <span className="block text-[10px] text-slate-500 mb-1 uppercase tracking-wider">System:</span>}
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-300 border border-slate-600 p-3 text-xs font-mono">
                  <span className="animate-pulse">ALLOCATING_VIRTUAL_SYMPATHY...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-3 bg-drama-blue border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Describe your latency..."
              className="flex-1 bg-slate-800 border border-slate-600 text-white text-xs p-2 font-mono focus:outline-none focus:border-red-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-drama-red text-white p-2 hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};