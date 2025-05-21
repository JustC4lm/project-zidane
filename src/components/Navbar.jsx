import logo from '../assets/img/logo.svg'
import book from '../assets/img/book.svg'
import discord from '../assets/img/discord.svg'
import light from '../assets/img/light.png'
import night from '../assets/img/night.svg'
import play from '../assets/img/play.svg'
import page from '../assets/img/page.svg'
import home from '../assets/img/home.svg'
import search from '../assets/img/search.svg'

const Navbar = () => {
    return (
        <div className="navbar bg-teal-600 text-white sticky top-0 z-40 shadow-md">
            <div className="container mx-auto py-4 font-sans font-bold text-white flex justify-between items-center">
                <div className="kiri flex items-center">
                    <img src={logo} alt="" className='rounded-full size-7 mx-5'/>
                    <ul className='flex gap-7 mt-0.5'>
                        <li className='flex'><img src={home} alt=""className='size-5 mx-1.5 mt-0.5' /><a href="">Home</a></li>
                        <li className='flex'><img src={play} alt="" className='size-5 mx-1.5 mt-0.5'/><a href="">Kelas</a></li>
                        <li className='flex'><img src={page} alt=""className='size-5 mx-1.5 mt-0.5'/><a href="">Tutorial</a></li>
                        <li className='flex'><img src={book} alt="" className='size-5 mx-1.5 mt-0.5'/><a href="">Buku</a></li>
                        <li className='flex'><img src={discord} alt="" className='size-5 mx-1.5 mt-0.5'/><a href="">Discord</a></li>
                    </ul>
                </div>
                <div className="kanan flex justify-end items-center">
                    <ul className='flex '>
                        <li><a href=""><img src={search} alt="" className='size-5 mx-1.5 mt-0.5'/>
                            </a></li>
                        <li><a href=""><img src={light} alt="" className='size-5 mx-1.5 mt-0.5'/>
                            </a></li>
                        <li><a href="">Join Newsletter</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar;