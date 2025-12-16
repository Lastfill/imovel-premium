import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { getPropertyChatResponse } from '../services/geminiService';
import { Message, Property, ChatState } from '../types';

interface GeminiChatProps {
  property: Property;
}

const GeminiChat: React.FC<GeminiChatProps> = ({ property }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual da Brasil Brokers. Como posso ajudar você a saber mais sobre este imóvel incrível?', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [chatState, setChatState] = useState<ChatState>(ChatState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || chatState === ChatState.LOADING) return;

    const userMessage: Message = {
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setChatState(ChatState.LOADING);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await getPropertyChatResponse(history, userMessage.text, property);
      
      const modelMessage: Message = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, modelMessage]);
      setChatState(ChatState.IDLE);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: 'Desculpe, tive um problema técnico. Pode repetir?',
        timestamp: new Date()
      }]);
      setChatState(ChatState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-40 bg-brand-navy text-white p-4 rounded-full shadow-2xl hover:bg-brand-blue transition-all duration-300 flex items-center gap-2 group ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Sparkles className="w-6 h-6 animate-pulse text-brand-green" />
        <span className="font-bold pr-2">Assistente IA</span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 left-6 z-50 w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 border border-gray-200 ${isOpen ? 'h-[500px] opacity-100 translate-y-0' : 'h-0 opacity-0 translate-y-10 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-brand-navy p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white/10 rounded-lg">
               <Sparkles className="w-5 h-5 text-brand-green" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm">Assistente Virtual</h3>
              <p className="text-[10px] text-gray-300 opacity-90">Powered by Gemini</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-blue text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {chatState === ChatState.LOADING && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-brand-blue" />
                <span className="text-xs text-gray-500">Digitando...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full border border-gray-200 focus-within:border-brand-blue focus-within:ring-1 focus-within:ring-brand-blue/20 transition-all">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Pergunte sobre o imóvel..."
              className="flex-1 bg-transparent text-sm text-gray-700 focus:outline-none placeholder:text-gray-400"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputText.trim() || chatState === ChatState.LOADING}
              className="p-1.5 bg-brand-green text-white rounded-full hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiChat;
