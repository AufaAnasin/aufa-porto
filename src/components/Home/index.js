import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss'
import Loader from 'react-loaders';

const Home = () => {

    // for animated letters
    const [letterClass, setLetterClass] = useState('text-animated')
    const nameArray = ['A', 'u', 'f', 'a', ' ', 'A', 'n', 'a', 's', 'i','n']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                {/* add Delay for 12 Second for the next words */}
                <span className={'$letterClass _12'}>i,</span> 
                <br />
                <span className={'$letterClass _13'}>I</span>
                <span className={'$letterClass _14'}>'m</span>  
                <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={11} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />
                <br />
                </h1>
                <h2>Frontend Developer/ReactJS Enthusiasm</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home;