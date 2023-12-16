import {Link} from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className=" bg-secondary flex justify-around relative z-10 h-48 text-white">
            <div className="logo flex items-center">
                <p className=''>Syphax Hotel</p>
            </div>
            <div className="links flex flex-col justify-between max-sm:hidden">
                <div className="flex relative max-sm:hidden mt-8">
                    <Link to="/" className="px-2 text-lg hover:text-primary"><p className="mx-2 hover:border-b-2 border-primary">Home</p></Link>
                    <Link to="/room" className="px-2 text-lg  hover:text-primary"><p className="mx-2 hover:border-b-2 border-primary">Room</p></Link>
                    <Link to="/pricing" className="px-2 text-lg hover:text-primary"><p className="mx-2 hover:border-b-2 border-primary">Pricing</p></Link>
                </div>
                <div className="copyrights text-center">copyrights</div>
            </div>
            <div className="contact flex flex-col justify-center">
                <h1>Contact Us</h1>
                <p>034 81 67 04</p>
                <p>hotelsyphactichi@gmail.com</p>
                <div className='socials'>
                <InstagramIcon color="white" fontSize="large" />
                <FacebookIcon color="white" fontSize="large" />
                <LinkedInIcon color="white" fontSize="large" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
