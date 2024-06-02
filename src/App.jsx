import { useState } from 'react';
import InstagramLogo from './assets/instagram.svg'
import GithubLogo from './assets/github.svg'
import Header from './components/Header'
import AboutCard from './components/AboutCard';
import SocialCard from './components/SocialCard';
import CollabCard from './components/CollabCard';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [activeLink, setActiveLink] = useState('All');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

  return (
    <>
      {/* Header */}
      <Header activeLink={activeLink} handleLinkClick={handleLinkClick} />

      {/* Content */}
      <main className='grid grid-cols-4 gap-6 max-w-4xl m-auto mt-8'>
        <AboutCard id='about' activeLink={activeLink} />
        <SocialCard id="social-1" logo={InstagramLogo} link="https://instagram.com/faizalnursaori" activeLink={activeLink} />
        <SocialCard id="social-2" logo={GithubLogo} link="https://github.com/faizalnursaori" activeLink={activeLink} />
        <CollabCard activeLink={activeLink} />
      </main>

      <Footer />
    </>
  )
}

export default App