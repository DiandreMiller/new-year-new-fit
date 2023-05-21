import facebook from '../Images/facebook.png'
import github from '../Images/github.png'
import instagram from '../Images/instagram.png'
import linkedin from '../Images/linkedin.png'
import snapchat from '../Images/snapchat.png'
import tiktok from '../Images/tiktok.png'
import twitter from '../Images/twitter.png'
import youtube from '../Images/youtube.png'
import './Footer.css'

import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer_container'>
            <Link target="_blank" to='https://www.facebook.com/'><img src={facebook} alt='facebook logo' height='50px' className='social' /></Link>
            <Link target="_blank" to='https://github.com/DiandreMiller/'><img src={github} alt='github' height='50px' className='social' /></Link>
            <Link target="_blank" to='https://www.instagram.com/'><img src={instagram} alt='instagram'  height='50px' className='social' /></Link>
            <Link target="_blank" to='https://www.linkedin.com/in/diandre-miller/'><img src={linkedin} alt='linkedin'  height='50px' className='social' /></Link>
            <Link target="_blank" to='https://www.snapchat.com/en-US'><img src={snapchat} alt='snapchat'  height='50px' className='social' /></Link>
            <Link target="_blank" to='https://twitter.com/'><img src={twitter} alt='twitter'  height='50px' className='social' /></Link>
            <Link target="_blank" to='https://www.youtube.com/'><img src={youtube} alt='youtube'  height='50px' className='social' /></Link>
            <Link target="_blank" to='https://www.tiktok.com'><img src={tiktok} alt='tiktok' height='70px' className='social1' /></Link>
            <p id="founded">© 2023 New Year New Fit</p>
        </div>
    )
}

export default Footer