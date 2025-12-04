import React from 'react';
import { ShieldAlert, Users, BrainCircuit, Wallet, AlertTriangle, ExternalLink } from 'lucide-react';
import { CrisisChat } from './components/CrisisChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-drama-red selection:text-white flex flex-col lg:h-screen overflow-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2940&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(150%)'
      }} />

      {/* --- HEADER --- */}
      <header className="bg-white border-b-4 border-drama-blue py-3 px-6 flex justify-between items-center z-10 shrink-0 h-16 sm:h-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-drama-blue rounded-full flex items-center justify-center text-white border-2 border-drama-red">
            <BrainCircuit size={24} className="animate-[pulse_4s_ease-in-out_infinite]" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tighter text-drama-blue uppercase leading-none">
              $DRAMA <span className="text-drama-red">FUND</span>
            </h1>
            <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase hidden sm:block">
              Global Dept. of Theoretical Upgrades
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" title="X (Twitter)">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" title="Telegram">
             <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path></svg>
          </a>
          <a href="https://pump.fun" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
            <img src="https://i.postimg.cc/j56WKrBk/ADS-2025-12-03T201034-818.png" alt="Pump.fun" className="h-6 w-auto" />
          </a>
        </div>
      </header>

      {/* --- MAIN GRID --- */}
      <main className="flex-1 lg:grid lg:grid-cols-12 lg:grid-rows-6 gap-0 overflow-y-auto lg:overflow-hidden relative z-0">
        
        {/* BLOCK I: MISSION (Top, Full Width) */}
        <section className="col-span-12 row-span-3 bg-drama-blue text-white flex flex-col md:flex-row relative border-b border-white/10">
           <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                 <ShieldAlert className="text-drama-red w-8 h-8" />
                 <span className="font-mono text-drama-red font-bold uppercase tracking-widest text-sm">Priority Level: Critical</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 leading-none tracking-tight">
                The Global <span className="text-drama-red decoration-4 underline-offset-8 underline decoration-white/20">DRAM Crisis</span><br/>Relief Fund
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-light text-slate-300 max-w-3xl leading-relaxed border-l-4 border-drama-red pl-6">
                Dedicated to providing moral and theoretical support to millions of consumers globally, 
                indefinitely stranded on low-bandwidth architectures due to the catastrophic December 
                Price Parity event. This is an <strong className="text-white font-bold">EXISTENTIAL CRISIS</strong>, not a hardware issue.
              </p>
           </div>
           
           {/* Special Image - Right Side of Block I */}
           <div className="md:w-1/3 lg:w-[400px] xl:w-[500px] h-64 md:h-auto bg-black relative shrink-0 border-l-4 border-white">
              <img 
                src="https://i.postimg.cc/V6R2CghL/20251204-2008-Plac-u-vitriny-simple-compose-01kbn57ypeekmtcdj83x1mrm8r.png" 
                alt="Crisis Visualization" 
                className="w-full h-full object-cover object-center absolute inset-0"
              />
              <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply pointer-events-none"></div>
           </div>
        </section>

        {/* BLOCK III: OPERATIONAL PROTOCOL (Center/Left) */}
        <section className="col-span-12 lg:col-span-7 lg:row-span-2 bg-slate-50 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 relative">
          <div className="absolute top-0 left-0 bg-slate-200 px-3 py-1 font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">Protocol 77-B</div>
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold uppercase text-drama-blue mb-4 flex items-center gap-2">
              <BrainCircuit className="w-6 h-6 text-slate-400" />
              Operational Framework: Moral Bandwidth
            </h3>
            <p className="text-slate-600 leading-relaxed text-justify mb-6">
              The <strong>$DRAMA FUND</strong> provides non-financial, existential relief. We focus on addressing the 
              psychological trauma of performance deficiency. We cannot lower semiconductor prices, but we grant 
              theoretical bandwidth and a community for shared suffering. The governance allows holders to vote 
              on the most 'lagged' software we will collectively ignore.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-auto">
               <div className="bg-white p-4 border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-400 font-mono uppercase mb-1">Status</div>
                  <div className="font-bold text-drama-blue">Monitoring Latency</div>
               </div>
               <div className="bg-white p-4 border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-400 font-mono uppercase mb-1">Aid Type</div>
                  <div className="font-bold text-drama-blue">Psychosomatic</div>
               </div>
            </div>
          </div>
        </section>

        {/* BLOCK II: BENEFICIARIES (Right Side) */}
        <section className="col-span-12 lg:col-span-5 lg:row-span-2 bg-white p-8 md:p-10 border-b border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full -mr-16 -mt-16 z-0"></div>
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold uppercase text-drama-blue max-w-[70%]">
                Eligible Stakeholders: Who We Help
              </h3>
              <div className="w-12 h-12 border-2 border-drama-blue rounded-full flex items-center justify-center">
                 <Users className="text-drama-blue w-6 h-6" />
              </div>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-4">
              This FUND serves the victims of <span className="text-drama-red">irreversible procrastination</span>: 
              those who delayed RAM upgrades until prices equaled or exceeded GPU costs.
            </p>
            <p className="text-sm text-slate-500 italic border-l-2 border-slate-300 pl-4">
              "We acknowledge their sentence to a life of virtual memory swaps and stuttering frame rates. 
              Our solidarity is their only available upgrade path."
            </p>
          </div>
        </section>

        {/* BLOCK IV: PARTICIPATION (Bottom Left) */}
        <section className="col-span-12 lg:col-span-8 lg:row-span-1 bg-bsod-blue text-white p-4 flex items-center relative overflow-hidden group">
          {/* Subtle BSOD Overlay */}
          <div className="absolute inset-0 bg-blue-800 opacity-20 group-hover:opacity-10 transition-opacity"></div>
          
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-6">
             <div className="shrink-0 flex items-center gap-4 border-r border-white/20 pr-6 h-full">
                <AlertTriangle className="w-10 h-10 text-white animate-pulse" />
                <div className="font-mono text-xs leading-tight">
                  <p>FATAL ERROR: INSUFFICIENT MEMORY</p>
                  <p>RELOAD GAME? [NO]</p>
                </div>
             </div>
             
             <div className="flex-1">
                <h4 className="font-bold uppercase text-sm mb-1 text-blue-200">Acquisition & Participation</h4>
                <p className="text-xs md:text-sm font-mono text-blue-100 leading-tight">
                   Acquisition of <span className="text-white font-bold">$DRAMA</span> constitutes a symbolic contribution. 
                   <span className="bg-white text-bsod-blue px-1 ml-1 font-bold">0% Tax, 100% Liquidity Secured</span> (a promise the RAM market never kept). 
                   Your purchase funds the ambition, not the hardware.
                </p>
             </div>
          </div>
        </section>

        {/* BLOCK V: CTA (Bottom Right) */}
        <section className="col-span-12 lg:col-span-4 lg:row-span-1 bg-drama-red text-white p-6 flex items-center justify-center relative hover:bg-red-700 transition-colors cursor-pointer group">
          <div className="text-center">
            <h3 className="font-black text-xl md:text-2xl uppercase mb-1 flex items-center justify-center gap-2">
              Allocate Funds <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="font-mono text-xs uppercase tracking-widest opacity-80 group-hover:opacity-100">
              Contribute to $DRAMA Now
            </p>
          </div>
        </section>

      </main>

      {/* Floating Chat Component */}
      <CrisisChat />

    </div>
  );
};

export default App;