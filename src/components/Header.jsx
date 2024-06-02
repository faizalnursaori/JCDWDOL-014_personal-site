
export default function Header({ activeLink, handleLinkClick }) {
    return (
        <header className='flex justify-between items-center p-4 mx-8'>
            <div className='logo text-white'>Faizal.</div>
            <nav className='flex gap-4 bg-white px-6 py-2 rounded-full '>
                <a
                    href='#'
                    className={`link ${activeLink === 'All' ? 'linkActive' : ''}`}
                    onClick={() => handleLinkClick('All')}
                >
                    All
                </a>
                <a
                    href='#about'
                    className={`link ${activeLink === 'About' ? 'linkActive' : ''}`}
                    onClick={() => handleLinkClick('About')}
                >
                    About
                </a>
                <a
                    href='#social-1'
                    className={`link ${activeLink === 'Social' ? 'linkActive' : ''}`}
                    onClick={() => handleLinkClick('Social')}
                >
                    Social
                </a>
                <a
                    href='#queueCollab'
                    className={`link ${activeLink === 'Collab' ? 'linkActive' : ''}`}
                    onClick={() => handleLinkClick('Collab')}
                >
                    Collab
                </a>
            </nav>
            <a href='#' className='font-bold text-white'>Contact</a>
        </header>
    );
}
