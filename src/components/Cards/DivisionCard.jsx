import { Link } from 'react-router-dom';

const getIcon = (id) => {
    switch (id) {
        case 'hardware':
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" /></svg>;
        case 'software':
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>;
        case 'game':
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>;
        default:
            return null;
    }
};

export default function DivisionCard({ div }) {
    return (
        <Link
            to={`/showcase/projects/${div.id}#projectdivisions`}
            className="division-card group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 flex flex-col"
            style={{ transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)' }}
        >
            <div className={`h-2 w-full bg-gradient-to-r ${div.gradient}`} />
            <div className="p-8 flex flex-col items-center text-center flex-grow">
                <div
                    className={`division-icon w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg bg-gradient-to-br ${div.gradient}`}
                    style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                >
                    {getIcon(div.id)}
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
    );
}