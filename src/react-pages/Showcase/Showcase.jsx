import { useState, useRef, useMemo, useEffect } from 'react';
import { showcaseContent } from '../../data/projects';
import showcaseData from '../../data/showcase.json';
import useCounter from '../../hooks/useCounter';
import useTypingEffect from '../../hooks/useTypingEffect';
import DivisionCard from '../../components/Cards/DivisionCard';

import './Showcase.css';


const BackgroundEffects = () => {

    const particles = useMemo(() => Array.from({ length: 22 }, (_, i) => ({
        key: i,
        style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 10}px`,
            height: `${4 + Math.random() * 10}px`,
            opacity: 0.12 + Math.random() * 0.2,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${5 + Math.random() * 8}s`,
        }
    })), []);

    return (
        <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)', animation: 'glowPulse 6s ease-in-out infinite' }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)', animation: 'glowPulse 8s ease-in-out infinite 2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)', animation: 'glowPulse 10s ease-in-out infinite 1s' }} />

            {particles.map(p => <div key={p.key} className="showcase-particle" style={p.style} />)}

            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </>
    );
};

const StatsGrid = () => {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.4 });
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    const count0 = useCounter(showcaseData.stats[0].value, 1800, isVisible);
    const count1 = useCounter(showcaseData.stats[1].value, 1800, isVisible);
    const count2 = useCounter(showcaseData.stats[2].value, 1000, isVisible);
    const counts = [count0, count1, count2];

    return (
        <div ref={statsRef} className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {showcaseData.stats.map((stat, i) => (
                <div key={stat.label} className="stat-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center">
                    <div className="text-3xl font-black text-white mb-1">
                        {counts[i]}{stat.suffix}
                    </div>
                    <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};


const VideoModal = ({ isOpen, onClose, videoUrl, posterUrl }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }} onClick={onClose}>
            <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <video className="w-full aspect-video bg-black" controls autoPlay playsInline poster={posterUrl}>
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};


export default function Showcase() {
    const [videoOpen, setVideoOpen] = useState(false);
    const displayText = useTypingEffect(showcaseData.typingWords);

    return (
        <>
            {/* HERO SECTION */}
            <section id="showcase" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0b1120 0%, #0d1f3c 40%, #111827 70%, #0a0f1e 100%)' }}>

                <BackgroundEffects />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28 pb-16">
                    <div className="hero-fade-in inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse inline-block" />
                        Showcase Angkatan 24 — Oxigen UTB
                    </div>

                    <h1 className="hero-fade-in-d1 text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4">
                        Karya Kami, <br />
                        <span style={{ background: 'linear-gradient(90deg, #818cf8, #34d399, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            {displayText}
                            <span className="animate-pulse" style={{ WebkitTextFillColor: 'white', opacity: 0.7 }}>|</span>
                        </span>
                    </h1>

                    <p className="hero-fade-in-d2 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
                        {showcaseContent.description}
                    </p>

    
                    <div className="hero-fade-in-d3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <a href="#divisions" className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-base border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105">
                            Lihat Semua Proyek
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>

                        <button
                            onClick={() => setVideoOpen(true)}
                            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-base bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                            </svg>
                            Tonton Recap Project 24
                        </button>
                    </div>

                    <StatsGrid />
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 scroll-bounce">
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </div>
            </section>

            <VideoModal
                isOpen={videoOpen}
                onClose={() => setVideoOpen(false)}
                videoUrl={showcaseContent.videoUrl}
                posterUrl={showcaseContent.posterUrl}
            />

            {/* DIVISION CARDS */}
            <section id="divisions" className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #6366f1 50%, transparent)' }} />

                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-4 uppercase tracking-widest">Explore</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Proyek Per Divisi</h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-lg">Pilih divisi dan temukan karya-karya terbaik yang dibangun dengan penuh semangat.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {showcaseData.divisions.map((div) => (
                            <DivisionCard key={div.id} div={div} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}