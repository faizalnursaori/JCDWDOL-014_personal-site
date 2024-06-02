import Avatar from '../assets/avatar.png';
import { TypeAnimation } from 'react-type-animation';
import PropTypes from 'prop-types';

export default function AboutCard({ activeLink }) {
    return (
        <div className={`card bg-white col-span-2 relative ${activeLink !== 'About' && activeLink !== 'All' ? 'blur-sm' : ''}`}>
            <div className="absolute right-4 top-4 flex items-center py-2 px-[14px] rounded-xl border border-emerald-300 max-w-fit max-h-fit gap-2 bg-green-50 font-bold text-sm text-emerald-500 from-transparent to-white/30 from-[-90%] to-[70%] tracking-wide">
                <div className="w-2 h-2 animate-pulse bg-green-500 rounded-full"></div>
                #OpentoWork
            </div>

            <div className='mx-5 my-8'>
                <img src={Avatar} alt="avatar" width={100} />
                <TypeAnimation
                    className="text-2xl font-bold"
                    style={{
                        display: 'block',
                        whiteSpace: 'pre-line',
                        width: '100%',
                        marginTop: '2rem',
                    }}
                    sequence={[
                        'Hello 👋',
                        2000,
                        'My name is Faizal',
                        7000,
                        'Nice to meet you',
                        3000,
                    ]}
                    speed={30}
                    repeat={Infinity}
                />
                <p>Communication Science, Padjadjaran University.</p>
                <p>I&apos;m interested in becoming a Fullstack Developer.</p>
            </div>
        </div>
    );
}

AboutCard.propTypes = {
    activeLink: PropTypes.string.isRequired,
}