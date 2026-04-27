import { motion } from 'motion/react';
import { 
  ArrowRight, 
  LineChart, 
  ShieldCheck, 
  MonitorSmartphone, 
  PieChart, 
  BrainCircuit, 
  Building2, 
  Briefcase, 
  Terminal, 
  Landmark,
  ChevronRight,
  Download
} from 'lucide-react';
import React from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const logos = [
  { name: 'Dayalbagh Educational Institute', url: '/logos/dayalbagh_educational_institute_logo.jpg' },
  { name: 'Techademy', url: '/logos/techademy_ulxp_logo.jpg' },
  { name: 'TVS Credit', url: '/logos/tvs_credit_services_ltd__logo.jpg' },
  { name: 'Cognixia', url: '/logos/cognixia_logo.jpg' },
  { name: 'KPMG', url: '/logos/kpmgindia_logo.jpg' },
  { name: 'eClerx', url: '/logos/eclerx_logo.jpg' },
  { name: 'Axis Bank', url: '/logos/axis_bank_logo.jpg' },
  { name: 'Concentrix', url: '/logos/concentrix_logo.jpg' },
  { name: 'YOUniTE', url: '/logos/younite.jpg' },
  { name: 'NIIT', url: '/logos/niit.jpg' },
  { name: 'Counsel India', url: '/logos/counsel_india_logo.jpg' },
  { name: 'Mazenet', url: '/logos/mazenet_logo.jpg' },
  { name: 'Fidelity Investments', url: '/logos/fidelity_investments_logo.jpg' },
  { name: 'Konecranes', url: '/logos/konecranes_logo.jpg' },
  { name: 'Medhavi Skills University', url: '/logos/medhavi_skills_university_logo.jpg' },
  { name: 'UNext Learning', url: '/logos/unext_learning_logo.jpg' }
];

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#F9F7F2]/90 backdrop-blur-md border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl italic tracking-tighter text-[#1A1A1A]">Shilpa Sooden</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-[#1A1A1A] hover:opacity-70 transition-opacity text-[10px] uppercase tracking-widest font-bold">About</a>
            <a href="#services" className="text-[#1A1A1A] hover:opacity-70 transition-opacity text-[10px] uppercase tracking-widest font-bold">Methodology</a>
            <a href="#audience" className="text-[#1A1A1A] hover:opacity-70 transition-opacity text-[10px] uppercase tracking-widest font-bold">Client Success</a>
            <a href="#contact" className="bg-[#1A1A1A] text-white px-6 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#333333] transition-colors">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#F9F7F2] border-b border-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl sm:text-6xl lg:text-[72px] font-serif leading-[0.9] tracking-tight text-[#1A1A1A] mb-8"
            >
              Equipping Financial Workforces for the <span className="italic">Future</span> of Banking.
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg leading-relaxed text-[#4A4A4A] mb-10 max-w-xl"
            >
              Bridge the gap between complex financial theory and practical business application. With 20+ years of frontline banking leadership, I deliver high-impact, simulation-based training.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest uppercase font-bold text-white bg-[#1A1A1A] hover:opacity-80 transition-opacity"
              >
                Schedule a Discovery Call
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest uppercase font-bold text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#EAE6DF] transition-all"
              >
                Explore Programs
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-12 lg:mt-0"
          >
            <div className="relative aspect-[4/5] bg-[#EAE6DF] border border-[#1A1A1A] overflow-hidden">
              <img 
                src="/shilpa-front.jpg" 
                alt="Shilpa Sooden" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                  e.currentTarget.classList.add('grayscale');
                }}
                className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#F9F7F2]/90 backdrop-blur-sm border-t border-[#1A1A1A] p-4 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">
                Shilpa Sooden • Banking & FinTech Expert
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-12 bg-[#F9F7F2] border-b border-[#1A1A1A] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center border-b border-[#1A1A1A]/10 pb-8">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A8A8A]">
          Delivering Excellence for Global Industry Leaders
        </p>
      </div>
      
      {/* Infinite Marquee */}
      <div className="flex overflow-hidden relative w-full pt-4 pb-10">
        <motion.div 
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="mx-8 lg:mx-16 flex flex-col items-center justify-center min-w-[120px] h-16 relative group cursor-default">
              {logo.url ? (
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="max-h-12 w-auto object-contain opacity-80 grayscale contrast-125 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <span className={`text-xl font-serif font-bold text-[#1A1A1A] tracking-tight ${logo.url ? 'hidden' : ''}`}>
                {logo.name}
              </span>
              {/* Tooltip for company name */}
              {logo.url && (
                <span className="absolute -bottom-6 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-[#EAE6DF] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-8 order-2 lg:order-1"
          >
            <motion.h2 variants={fadeIn} className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#1A1A1A]"></span>
              About
            </motion.h2>

            <motion.h3 variants={fadeIn} className="text-4xl md:text-6xl font-serif leading-[0.9] tracking-tight text-[#1A1A1A] mb-8">
              Real-World Experience. <br/><span className="italic">High-Impact</span> Learning.
            </motion.h3>
            
            <div className="space-y-6 text-lg text-[#4A4A4A] leading-relaxed max-w-2xl">
              <motion.p variants={fadeIn}>
                In a rapidly evolving financial landscape, theoretical knowledge is no longer enough. Professionals need practical, business-relevant insights to drive compliance, innovation, and growth.
              </motion.p>
              
              <motion.p variants={fadeIn}>
                I'm Shilpa Sooden. Before I became a corporate trainer, I spent over two decades leading branch operations, managing high-net-worth portfolios, and driving business growth at institutions like Standard Chartered, ABN AMRO (Royal Bank of Scotland), and HDFC Bank.
              </motion.p>
              
              <motion.p variants={fadeIn} className="font-serif italic text-xl border-l border-[#1A1A1A] pl-6 my-8 text-[#1A1A1A]">
                "I don't just teach the 'what.' Through live diagnostics, operational case simulations, and decision-based exercises, I teach your teams the 'how' and the 'why.'"
              </motion.p>
            </div>

            <motion.div variants={fadeIn} className="mt-16 max-w-2xl">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#1A1A1A]"></span>
                The Shilpa Difference
              </h4>
              <ul className="space-y-6">
                {[
                  { title: "Direct Experience", desc: "Training grounded in 20+ years of actual banking leadership." },
                  { title: "Cross-Functional", desc: "Bridging banking operations, compliance, and digital FinTech." },
                  { title: "Psychology of Finance", desc: "Leveraging my MA in Psychology to integrate behavioral insights." }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col sm:flex-row justify-between border-t border-[#1A1A1A]/10 pt-4 gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] sm:w-1/3 pt-1">{item.title}</span>
                    <p className="text-[#4A4A4A] text-sm sm:w-2/3">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] bg-[#F9F7F2] overflow-hidden border border-[#1A1A1A]">
              <img 
                src="/shilpa-2.jpg" 
                alt="Shilpa Sooden presenting" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                }}
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="mt-6 border-t border-[#1A1A1A]/10 pt-4 text-xs font-bold uppercase tracking-widest text-[#8A8A8A]">
              S. Sooden — Corporate Trainer
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const workshops = [
  {
    icon: <LineChart className="w-6 h-6 text-[#1A1A1A]" />,
    title: "Capital Markets & Investment Banking Operations",
    description: "Master the complexities of global trading environments. Designed for mid-senior professionals requiring strategic operational understanding.",
    topics: ["Trade Lifecycles", "Settlement Cycles (T+1)", "ISO 20022", "Asset Management", "Custodian Migrations"]
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#1A1A1A]" />,
    title: "Risk, Compliance & Regulatory Frameworks",
    description: "Safeguard your institution with actionable, scenario-based compliance training.",
    topics: ["KYC & AML", "India's DPDP Act", "Risk Management", "Audit Implications", "Global Reg Compliance"]
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-[#1A1A1A]" />,
    title: "FinTech, AI & The Digital Evolution",
    description: "Demystify the technological shifts disrupting traditional banking.",
    topics: ["Open Banking", "AI in Financial Services", "Digital Asset Custody", "Digital Lending Platforms"]
  },
  {
    icon: <PieChart className="w-6 h-6 text-[#1A1A1A]" />,
    title: "Financial Acumen for IT & Tech Professionals",
    description: "Empower your IT, consulting, and operational teams to truly understand the clients they serve.",
    topics: ["Banking Industry Fundamentals", "Decoding Financial Statements", "Banking Profitability", "Commercial Banking"]
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-[#1A1A1A]" />,
    title: "Leadership & Financial Psychology",
    description: "Transform managers into leaders through behavioral insights.",
    topics: ["Emotional Intelligence", "Client CRM", "Cross-Selling Strategies", "Change Management"]
  }
];

function Services() {
  return (
    <section id="services" className="py-24 bg-[#F9F7F2] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-[#1A1A1A]"></span>
            Specialized Solutions
            <span className="w-4 h-[1px] bg-[#1A1A1A]"></span>
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif leading-[0.9] tracking-tight text-[#1A1A1A] mb-8">
            Tailored Curriculums for the <br/><span className="italic">Financial Ecosystem</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-[#F9F7F2] p-8 border border-[#1A1A1A] flex flex-col hover:bg-[#EAE6DF] transition-colors ${idx === 3 || idx === 4 ? 'lg:col-span-1' : ''}`}
            >
              <div className="mb-6 w-min p-3 border border-[#1A1A1A] bg-[#F9F7F2]">
                {workshop.icon}
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#1A1A1A] leading-tight mb-4 tracking-tight">
                {workshop.title}
              </h4>
              <p className="text-[#4A4A4A] text-sm mb-10 flex-grow leading-relaxed">
                {workshop.description}
              </p>
              
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] mt-auto">
                {workshop.topics.map((topic, i) => (
                  <li key={i} className="flex justify-between border-t border-[#1A1A1A]/10 pt-3">
                    <span className="flex-grow">{topic}</span>
                    <span className="text-[#8A8A8A]">0{i+1}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const audiences = [
  {
    icon: <Building2 className="w-5 h-5 text-[#1A1A1A]" />,
    title: "GCCs",
    description: "Aligning offshore teams with global market nuances and settlement complexities."
  },
  {
    icon: <Briefcase className="w-5 h-5 text-[#1A1A1A]" />,
    title: "Consulting",
    description: "Deepening financial domain expertise for high-stakes client advisory."
  },
  {
    icon: <Terminal className="w-5 h-5 text-[#1A1A1A]" />,
    title: "Tech Teams",
    description: "Providing the banking context needed to build compliant software."
  },
  {
    icon: <Landmark className="w-5 h-5 text-[#1A1A1A]" />,
    title: "Banking & FS",
    description: "Upskilling retail, commercial, and investment banking workforces."
  }
];

function Audience() {
  return (
    <section id="audience" className="py-24 bg-[#EAE6DF] border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#1A1A1A]"></span>
              Target Audience
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif leading-[0.9] tracking-tight text-[#1A1A1A] mb-8">
              Who Benefits from <br/><span className="italic">My Training?</span>
            </h3>
            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
              Programs are designed for decision-makers and teams who need practical, actionable financial knowledge tailored to their specific vertical. Let your team self-identify and step into mastery.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 pt-2">
            {audiences.map((aud, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F9F7F2] p-8 border border-[#1A1A1A]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 border border-[#1A1A1A] flex items-center justify-center bg-[#EAE6DF]">
                    {aud.icon}
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">{aud.title}</h4>
                </div>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">{aud.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-32 bg-[#F9F7F2] border-b border-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#EAE6DF] border border-[#1A1A1A] p-12 sm:p-20 shadow-[8px_8px_0_#1A1A1A]">
        <h2 className="text-4xl sm:text-6xl font-serif leading-[0.9] tracking-tight text-[#1A1A1A] mb-8">
          Ready to Elevate Your <br/><span className="italic">Team's Expertise?</span>
        </h2>
        <p className="text-lg text-[#4A4A4A] mb-12 max-w-2xl mx-auto">
          Let's design a tailored learning experience that aligns with your specific organizational goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="mailto:shilpa.sooden@yahoo.com?subject=Corporate%20Training%20Inquiry&body=Hi%20Shilpa,%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20corporate%20training%20programs.%20I%20would%20like%20to%20discuss%20how%20we%20can%20collaborate.%0A%0ABest%20regards," target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-[10px] tracking-widest font-bold uppercase text-white bg-[#1A1A1A] hover:bg-[#333333] transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#F9F7F2] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <span className="font-serif text-3xl italic tracking-tighter text-[#1A1A1A] mb-4 md:mb-0">
            Shilpa Sooden
          </span>
          <nav className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">
            <a href="https://www.linkedin.com/in/shilpasooden9/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">LinkedIn</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
          </nav>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#1A1A1A] pt-8">
          <div className="text-[10px] uppercase tracking-widest text-[#8A8A8A] font-bold mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shilpa Sooden • Global Financial Education
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-[#F9F7F2] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#F9F7F2]">
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <Services />
      <Audience />
      <CTA />
      <Footer />
    </div>
  );
}
