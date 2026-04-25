/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  XCircle, 
  MessageCircle, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Users, 
  Lock,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";

const CTA_LINK = "https://pay.cakto.com.br/36m26f9_857006";

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-green-100 border-t-8 border-green-500">
      {/* 1. PROMESSA (TOPO DA PÁGINA) */}
      <header className="relative py-16 px-6 md:py-24 max-w-5xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            O método simples que faz o cliente parar de sumir e começar a responder até fechar a venda no <span className="text-green-600">WhatsApp</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Descubra como conduzir qualquer conversa do jeito certo e transformar mensagens ignoradas em vendas fechadas todos os dias — mesmo que você não saiba vender.
          </p>
          
          {/* VSL / VÍDEO NO TOPO */}
          <div className="max-w-3xl mx-auto mb-10 px-4 md:px-0">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/YY1A5xr7TrQ?si=fyUvTxbnPtORWe0S" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <a
            href={CTA_LINK}
            id="hero-cta"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-5 px-10 rounded-lg transition-all hover:scale-105 shadow-lg shadow-green-100 uppercase tracking-wide group"
          >
            QUERO PARAR DE PERDER VENDAS AGORA
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </header>

      {/* 2. SUSTENTAÇÃO */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center border-t border-slate-50">
        <motion.div {...fadeInUp}>
          <p className="text-lg text-slate-600 leading-relaxed space-y-6">
            Se você já tentou vender no WhatsApp, você sabe como funciona…<br/><br/>
            No começo o cliente responde. Parece interessado. Mas do nada… <span className="font-bold text-slate-900">ele some.</span><br/><br/>
            E você fica sem saber o que fez de errado.
          </p>
          <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-xs uppercase font-bold text-slate-400 mb-6 tracking-widest">A Realidade</h3>
            <ul className="space-y-4 text-left inline-block">
              <li className="flex items-center text-lg text-slate-800">
                <CheckCircle2 className="text-green-500 w-5 h-5 mr-3" /> Não é o seu produto
              </li>
              <li className="flex items-center text-lg text-slate-800">
                <CheckCircle2 className="text-green-500 w-5 h-5 mr-3" /> Não é o seu preço
              </li>
            </ul>
            <p className="mt-8 text-lg font-bold text-slate-900">
              É a forma como você conduz a conversa.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. DORES */}
      <section className="py-20 bg-slate-50/50 px-6 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-sm uppercase font-bold text-slate-400 mb-3 tracking-widest">O Problema</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Você provavelmente já passou por isso:</h3>
          </motion.div>
          <div className="grid md:grid-cols-1 gap-3 max-w-2xl mx-auto">
            {[
              "Cliente visualiza e não responde",
              "Você não sabe o que falar depois",
              "A conversa morre no meio",
              "Você manda mensagem e parece forçado",
              "O cliente pede preço e desaparece"
            ].map((text, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp} 
                className="flex items-center p-4 bg-white rounded-xl border border-slate-100"
              >
                <span className="text-red-500 mr-4">❌</span>
                <span className="text-slate-700">{text}</span>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="mt-12 text-center">
            <p className="text-sm italic text-slate-500 mx-auto max-w-lg leading-relaxed">
              "Você não perde vendas por falta de cliente, perde por falta de direção na conversa."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 💥 FRASE DE IMPACTO */}
      <section className="py-16 px-6 bg-slate-900 text-white text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight">
            Você não perde vendas por falta de cliente…<br className="hidden md:block"/>
            perde por falta de direção na conversa.
          </h2>
        </motion.div>
      </section>

      {/* 4. SOLUÇÃO */}
      <section id="solution" className="py-24 px-6 text-center max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-sm uppercase font-bold text-green-500 mb-3 tracking-widest">A Solução</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Cliente Não Some Mais</h3>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            70 mensagens prontas organizadas por etapa para você transformar conversas frias em vendas fechadas.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Sem travar", "Sem improvisar", "Sem parecer vendedor"].map((item, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-xl bg-white shadow-sm">
                <p className="text-sm font-bold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. O QUE VOCÊ RECEBE */}
      <section className="py-20 bg-slate-50 px-6 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">O que você recebe dentro do método:</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "70 mensagens prontas", desc: "Organizadas por cada etapa da venda." },
              { title: "Estrutura completa", desc: "Saiba exatamente por onde a conversa deve ir." },
              { title: "Quebra de objeções", desc: "Técnicas embutidas para desarmar o \"não\"." },
              { title: "Condução certeira", desc: "Mensagens que levam o cliente direto ao “sim”." }
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} className="flex items-start bg-green-50 p-6 rounded-xl border border-green-100">
                <span className="bg-green-500 text-white p-1 rounded-full text-[10px] mr-4 flex-shrink-0 mt-1">✔</span>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BÔNUS */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-yellow-50 border-l-8 border-yellow-400 p-8 md:p-12 rounded-r-2xl">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-bold text-yellow-800 uppercase mb-2 tracking-widest">Bônus Exclusivo</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Manual da Conversa Irresistível</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Um guia estratégico que revela como conduzir qualquer cliente até a decisão final sem parecer forçado ou chato.
            </p>
            <p className="text-sm text-yellow-800 bg-yellow-100/50 p-4 rounded-lg inline-block">
              <span className="font-bold">💡 Impacto:</span> Entenda o que falar, quando falar e por que falar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ⭐ NOVA PROVA SOCIAL (PRINTS) */}
      <section className="py-16 px-6 bg-white border-t border-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h3 className="text-sm uppercase font-bold text-slate-400 mb-2 tracking-widest text-center">Resultados Reais</h3>
          </motion.div>
          
          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar touch-auto">
              {[
                "https://i.postimg.cc/T2V8Bwfk/prova-social-1.jpg",
                "https://i.postimg.cc/RVpgY56D/prova-social-2.jpg",
                "https://i.postimg.cc/4dGPcXqc/prova-social-3.jpg",
                "https://i.postimg.cc/4dXvdBH6/prova-social-4.jpg",
                "https://i.postimg.cc/g0W8SNsx/prova-social-5.jpg"
              ].map((img, i) => (
                <div key={i} className="flex-none w-[85vw] max-w-[300px] md:w-[350px] snap-center first:ml-[5vw] last:mr-[5vw] md:first:ml-0 md:last:mr-0">
                  <div className="bg-white rounded-2xl p-1 shadow-sm border border-slate-100 overflow-hidden">
                    <img 
                      src={img} 
                      alt={`Prova Social ${i + 1}`} 
                      className="w-full h-auto rounded-xl pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indicador visual de scroll (Mobile) */}
            <div className="md:hidden flex justify-center gap-1.5 mt-2">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 💰 9. ANCORAGEM & 10. PREÇO */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-sm text-slate-500 line-through mb-10 font-medium">
              Pague R$ 200,00 ou mais em treinamentos complexos
            </p>
            <div className="bg-slate-950 text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                <Lock className="w-40 h-40" />
              </div>
              <p className="text-xs font-bold text-slate-300 uppercase mb-8 tracking-[0.2em]">Acesso Imediato Hoje</p>
              <div className="flex items-baseline justify-center mb-10">
                <span className="text-2xl font-semibold opacity-90">R$</span>
                <span className="text-7xl md:text-8xl font-black mx-2 tracking-tighter text-white">19,90</span>
              </div>
              
              <a
                href={CTA_LINK}
                className="w-full inline-flex items-center justify-center bg-green-500 hover:bg-green-400 text-white text-lg font-extrabold py-5 rounded-xl transition-all shadow-[0_10px_20px_-10px_rgba(34,197,94,0.5)] active:scale-[0.98] mb-8 ring-1 ring-white/10"
              >
                QUERO PARAR DE PERDER VENDAS AGORA
              </a>
              <div className="flex items-center justify-center gap-8 text-[11px] text-slate-400 uppercase tracking-widest font-bold">
                <span className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                  <Lock className="w-3 h-3" /> Compra Segura
                </span>
                <span className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                  <ShieldCheck className="w-3 h-3" /> 7 Dias de Garantia
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ❓ 12. QUEBRA DE OBJEÇÕES (FAQ) */}
      <section className="py-24 px-6 max-w-3xl mx-auto border-t border-slate-100">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-xs uppercase font-bold text-slate-400 mb-3 tracking-widest">Dúvidas Frequentes</h2>
        </motion.div>
        
        <div className="space-y-8">
          {[
            { q: "Funciona para iniciantes?", a: "Sim, foi totalmente desenhado para quem não tem experiência nenhuma em vendas e se sente perdido na hora de conversar." },
            { q: "Serve para qualquer nicho?", a: "Sim, porque o método não é baseado em um produto específico, e sim em gatilhos e comportamento humano de compra." },
            { q: "Preciso aparecer?", a: "Não. Você só precisa enviar as mensagens certas diretamente do seu teclado." },
            { q: "Funciona mesmo?", a: "Se você aplicar as mensagens recomendadas, sim. O problema nunca foi o seu produto — sempre foi a sua abordagem." }
          ].map((faq, i) => (
            <div key={i}>
              <p className="text-sm font-bold text-slate-900 mb-2">{faq.q}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 bg-white border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Se você continuar fazendo o que sempre fez, vai continuar tendo o mesmo resultado. <br/>
              <strong className="text-slate-900 font-extrabold uppercase tracking-tight">Mude sua forma de conversar.</strong>
            </p>
            <p className="mt-12 text-slate-300 text-[10px] uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Cliente Não Some Mais
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
