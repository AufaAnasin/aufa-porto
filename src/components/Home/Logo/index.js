import '../Logo/index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useRef } from 'react'; 

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoS} alt="S" />
            <svg version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="500.000000pt" 
                height="500.000000pt" 
                viewBox="0 0 500.000000 500.000000"
                preserveAspectRatio="xMidYMid meet">
                <g 
                className='svg-container'
                transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                fill="#000000" 
                stroke="none">
                </g>
</svg>

        </div>
    )
}

export default Logo