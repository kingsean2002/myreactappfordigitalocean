import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect , useState } from 'react';
import Logo from "./logo";


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['e', 'a', 'n']
    const jobArray = ['I',
        ' ',
        'b',
        'u',
        'i',
        'l',
        't',
        ' ',
        't',
        'h',
        'i',
        's',
        ' ',
        'w',
        'e',
        'b',
        's',
        'i',
        't',
        'e',
        ' ',
        'f',
        'r',
        'o',
        'm',
        ' ',
        's',
        'c',
        'r',
        'a',
        't',
        'c',
        'h',
        '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _3`}>e</span>
                        <span className={`${letterClass} _4`}>y,</span>
                        <br />
                        <span className={`${letterClass} _4`}>W</span>
                        <span className={`${letterClass} _5`}>h</span>
                        <span className={`${letterClass} _6`}>a</span>
                        <span className={`${letterClass} _7`}>t</span>
                        <span className={`${letterClass} _8`}>s </span>
                        <span className={`${letterClass} _9`}>U</span>
                        <span className={`${letterClass} _10`}>p!</span>
                        <br />
                        <span className={`${letterClass} _11`}>I</span>
                        <span className={`${letterClass} _12`}>'m</span>
                        <img src={LogoTitle} alt="developer"
                        />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={13}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={16}
                        />
                    </h1>
                    <h2>Fullstack Developer / Python and Javascript</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>

            <Loader type="pacman"  />
        </>
    )
}

export default Home