import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animated')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <>
        <div className='container about-page'>
            {/* text zone nya di layout/index.scss */}
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                     strArray={['A','b','o','u','t',' ','M','e']}
                     idx={15}
                    />
                </h1>
                <p>
                I am determined to become a leading expert in frontend development and push the boundaries 
                of what is possible with ReactJS, and am confident that with my skills, drive, and dedication, 
                I will be able to make a significant impact in any organization I join.
                </p>
                <p>
                As a recent graduate with a passion for frontend development and a strong interest in ReactJS. 
                I have experience working with HTML, CSS, and JavaScript, and am constantly learning and exploring new technologies 
                to improve my skills.
                </p>
                <p>
                I am a quick learner and am always eager to take on new challenges. 
                I am excited to bring my knowledge and passion to a team and contribute to creating beautiful, functional, and user-friendly websites.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face5 '>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className='face6 '>
                        <FontAwesomeIcon icon={faLinkedin} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        {/* //for loading the page */}
        <Loader type="pacman" />
        </>
    )
}

export default About;