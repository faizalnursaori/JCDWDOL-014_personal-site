export default function SocialCard({ id, logo, link, activeLink }) {
    return (
        <div
            id={id}
            className={`card bg-slate-800 flex items-center justify-center ${activeLink !== 'Social' && activeLink !== 'All' ? 'blur-sm' : ''}`}
        >
            <a href={link}>
                <img src={logo} alt="social" width="200px" height="200px" />
            </a>
        </div>
    );
}