
import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'MEI Inicial',
      price: 'R$ 49',
      period: '/mês',
      description: 'Nossa equipe emite por você',
      features: ['Até 5 notas/mês', 'Emissão via WhatsApp', 'Armazenamento de XML', 'Suporte Especializado'],
      isPopular: false,
      whatsappMsg: "Olá! Gostaria de assinar o plano MEI Inicial do NotaFacil."
    },
    {
      name: 'Crescimento PME',
      price: 'R$ 99',
      period: '/mês',
      description: 'O preferido dos empreendedores',
      features: ['Até 20 notas/mês', 'Prioridade no atendimento', 'Relatório mensal de vendas', 'Envio direto p/ cliente', 'NF-e e NFS-e inclusas'],
      isPopular: true,
      whatsappMsg: "Olá! Gostaria de assinar o plano Crescimento PME do NotaFacil."
    },
    {
      name: 'Escalabilidade',
      price: 'R$ 199',
      period: '/mês',
      description: 'Para quem vende muito todo dia',
      features: ['Notas Ilimitadas', 'Gestão de faturamento total', 'Consultoria tributária básica', 'Atendimento VIP 24/7', 'MDF-e e CT-e inclusos'],
      isPopular: false,
      whatsappMsg: "Olá! Gostaria de assinar o plano Escalabilidade do NotaFacil."
    },
  ];

  return (
    <section id="planos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">Investimento que se paga em tempo</h2>
          <p className="text-xl text-slate-600 font-medium">Escolha o plano que melhor atende sua demanda mensal.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-10 rounded-[3rem] border ${
                plan.isPopular ? 'border-[#00E676] border-4 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-xl'
              } transition-all`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00E676] text-blue-900 text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest">
                  Campeão de Vendas
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-blue-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-blue-900">{plan.price}</span>
                  <span className="text-slate-500 font-bold">{plan.period}</span>
                </div>
                <p className="text-slate-500 font-medium mt-4">{plan.description}</p>
              </div>
              <ul className="flex flex-col gap-5 mb-10 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-bold">
                    <Check className="w-6 h-6 text-[#00E676] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/5521968996088?text=${encodeURIComponent(plan.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-5 rounded-full font-black text-lg text-center transition-all ${
                  plan.isPopular 
                    ? 'bg-blue-900 text-white hover:bg-blue-800 shadow-lg' 
                    : 'bg-slate-100 text-blue-900 hover:bg-slate-200'
                }`}
              >
                Contratar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
