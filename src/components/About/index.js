import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import {useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from "@fortawesome/free-brands-svg-icons";

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={13}
                        />
                    </h1>
                    <p>
                        I'm passionate in various sectors within the exponentially growing tech industry.
                        Specifically, I unknowingly began my journey at the age of 12. I created scripts
                        in for my own Garry's Mod servers modifying and creating Lua code. I then picked up
                        an AP Computer Science course in my school focused on Javascript it was an easy class
                        for me and I aced it and the AP exam. I was hungry to do more as the class had its
                        limitations. That's where the field of cryptocurrency opened my eyes and I began
                        learning a relatively new and upcoming language called Python. I created my own
                        scripts and started to mine Ethereum in its early stages and I still do so now.
                    </p>
                    <br />
                    <p>
                        I'm always eager to learn something new and every challenge in code is always fun
                        to solve. I am pursuing my BS in Computer Science with a minor in Math and Finance.
                    </p>
                    <br />
                    <p>
                        I'm confident in my learning abilities provided my natural curiosity of figuring out
                        how things are created. I learn something new every day.
                    </p>

                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                    </div>

                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
