import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { showcaseContent } from '../../../data/projects';

// Animated counter hook
function useCounter(target, duration = 2000, startCounting) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!startCounting) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, startCounting]);
    return count;
}

// Floating Particle
function Particle({ style }) {
    return <div className="showcase-particle" style={style} />;
}

const DIVISIONS = [
    {
        id: 'hardware',
        label: 'Hardware',
        badge: '#',
        desc: 'Inovasi perangkat keras dan solusi IoT dari angkatan 24.',
        gradient: 'from-orange-500 to-red-600',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
            </svg>
        ),
    },
    {
        id: 'software',
        label: 'Software',
        badge: '</> ',
        desc: 'Aplikasi dan solusi digital cerdas karya angkatan 24.',
        gradient: 'from-blue-500 to-indigo-600',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        ),
    },
    {
        id: 'game',
        label: 'Game',
        badge: '🎮',
        desc: 'Pengalaman interaktif dan game seru buatan angkatan 24.',
        gradient: 'from-purple-500 to-pink-600',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
            </svg>
        ),
    },
];

const STATS = [
    { label: 'Proyek Dibuat', value: 9, suffix: '+' },
    { label: 'Anggota Tim', value: 50, suffix: '+' },
    { label: 'Divisi Aktif', value: 3, suffix: '' },
];

const TYPING_WORDS = [
    'Inovasi Nyata.',
    'Karya Terbaik.',
    'Dedikasi Penuh.',
    'Angkatan 24.',
];

export default function Showcase() {
    const [videoOpen, setVideoOpen] = useState(false);
    const [typingIndex, setTypingIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);
    const statsRef = useRef(null);

    const count0 = useCounter(STATS[0].value, 1800, statsVisible);
    const count1 = useCounter(STATS[1].value, 1800, statsVisible);
    const count2 = useCounter(STATS[2].value, 1000, statsVisible);
    const counts = [count0, count1, count2];

    // Typing animation
    useEffect(() => {
        const word = TYPING_WORDS[typingIndex];
        let timeout;
        if (!isDeleting && displayText.length < word.length) {
            timeout = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 80);
        } else if (!isDeleting && displayText.length === word.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 45);
        } else if (isDeleting && displayText.length === 0) {
            setIsDeleting(false);
            setTypingIndex((i) => (i + 1) % TYPING_WORDS.length);
        }
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, typingIndex]);

    // Intersection observer for stats
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setStatsVisible(true);
        }, { threshold: 0.4 });
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    // Generate particles once
    const particles = Array.from({ length: 22 }, (_, i) => ({
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
    }));

    return (
        <>
            <style>{`
                @keyframes floatUp {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-28px) scale(1.08); }
                }
                @keyframes heroFadeIn {
                    from { opacity: 0; transform: translateY(32px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes glowPulse {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(1.08); }
                }
                @keyframes scrollBounce {
                    0%, 100% { transform: translateY(0); opacity: 1; }
                    50% { transform: translateY(8px); opacity: 0.4; }
                }
                @keyframes borderGlow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.0); }
                    50% { box-shadow: 0 0 24px 4px rgba(99,102,241,0.35); }
                }
                .showcase-particle {
                    position: absolute;
                    border-radius: 9999px;
                    background: white;
                    animation: floatUp linear infinite;
                    pointer-events: none;
                }
                .hero-fade-in { animation: heroFadeIn 0.9s ease both; }
                .hero-fade-in-d1 { animation: heroFadeIn 0.9s ease 0.15s both; }
                .hero-fade-in-d2 { animation: heroFadeIn 0.9s ease 0.3s both; }
                .hero-fade-in-d3 { animation: heroFadeIn 0.9s ease 0.45s both; }
                .scroll-bounce { animation: scrollBounce 1.5s ease-in-out infinite; }
                .stat-card:hover { animation: borderGlow 1s ease-in-out; }
                .division-card:hover .division-icon { transform: scale(1.12) rotate(-4deg); transition: transform 0.3s ease; }
            `}</style>

            {/* ─── HERO SECTION ─── */}
            <section
                id="showcase"
                className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #0b1120 0%, #0d1f3c 40%, #111827 70%, #0a0f1e 100%)'
                }}
            >
                {/* Animated glow orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)', animation: 'glowPulse 6s ease-in-out infinite' }} />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)', animation: 'glowPulse 8s ease-in-out infinite 2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)', animation: 'glowPulse 10s ease-in-out infinite 1s' }} />

                {/* Floating particles */}
                {particles.map(p => <Particle key={p.key} style={p.style} />)}

                {/* Grid overlay texture */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28 pb-16">
                    {/* Badge */}
                    <div className="hero-fade-in inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse inline-block" />
                        Showcase Angkatan 24 — Oxigen UTB
                    </div>

                    {/* Main heading */}
                    <h1 className="hero-fade-in-d1 text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4">
                        Karya Kami,{' '}
                        <br />
                        <span style={{ background: 'linear-gradient(90deg, #818cf8, #34d399, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            {displayText}
                            <span className="animate-pulse" style={{ WebkitTextFillColor: 'white', opacity: 0.7 }}>|</span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-fade-in-d2 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
                        {showcaseContent.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-fade-in-d3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <a
                            href="#divisions"
                            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-base border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
                        >
                            Lihat Semua Proyek
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Stats */}
                    <div ref={statsRef} className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
                        {STATS.map((stat, i) => (
                            <div key={stat.label} className="stat-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center">
                                <div className="text-3xl font-black text-white mb-1">
                                    {counts[i]}{stat.suffix}
                                </div>
                                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 scroll-bounce">
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </section>

            {/* ─── VIDEO MODAL ─── */}
            {videoOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
                    onClick={() => setVideoOpen(false)}
                >
                    <div
                        className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setVideoOpen(false)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <video
                            className="w-full aspect-video bg-black"
                            controls
                            autoPlay
                            playsInline
                            poster={showcaseContent.posterUrl}
                        >
                            <source src={showcaseContent.videoUrl} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}

            {/* ─── DIVISION CARDS ─── */}
            <section id="divisions" className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #6366f1 50%, transparent)' }} />

                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-4 uppercase tracking-widest">
                            Explore
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                            Proyek Per Divisi
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-lg">
                            Pilih divisi dan temukan karya-karya terbaik yang dibangun dengan penuh semangat.
                        </p>
                    </div>

                    {/* Division cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {DIVISIONS.map((div) => (
                            <Link
                                key={div.id}
                                to={`/projects/${div.id}`}
                                className="division-card group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 flex flex-col"
                                style={{ transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)' }}
                            >
                                {/* Card top gradient bar */}
                                <div className={`h-2 w-full bg-gradient-to-r ${div.gradient}`} />

                                <div className="p-8 flex flex-col items-center text-center flex-grow">
                                    {/* Icon circle */}
                                    <div
                                        className={`division-icon w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg bg-gradient-to-br ${div.gradient}`}
                                        style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                                    >
                                        {div.icon}
                                    </div>

                                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                                        Project <span className={`bg-gradient-to-r ${div.gradient} bg-clip-text text-transparent`}>{div.label}</span>
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                        {div.desc}
                                    </p>

                                    <span className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm bg-gradient-to-r ${div.gradient} group-hover:opacity-90 transition-opacity shadow-md`}>
                                        Lihat Proyek
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

