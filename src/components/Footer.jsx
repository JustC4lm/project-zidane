import footer from '../assets/img/svgexport-30.svg'
const Footer = () => {
    return (
        <div className="cantainer pt-20 bg-slate-800 text-white">
            <div className="footer mx-auto px-4 lg:max-w-7xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="leftest col-span-2 mb-4 md:mb-6 lg:mb-0">
                    <a href="" ><img src={footer} alt="" className='w-60' /></a>
                    <p className='mt-6'>Tempat belajar budidaya kode (coding)
                    dengan tutorial yang gampang dipahami.</p>
                </div>
                <div className="">
                    <h1 className='text-xl font-bold mb-4 '>Belajar</h1>
                    <div className=" flex flex-col justify-start gap-2">
                        <a href="" className='hover:text-teal-400 text-slate-300'>Artikel</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>Tutorial</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>Buku</a>
                    </div>
                </div>
                <div className="">
                    <h1 className='text-xl font-bold mb-4'>Popular Tutorial</h1>
                    <div className=" flex flex-col justify-start gap-2">
                        <a href="" className='hover:text-teal-400 text-slate-300'>Tutorial Bahasa C</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>Tutorial  JavaScript</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>Tutorial  Java</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>Tutorial  PHP</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>Tutorial  Python</a>
                    </div>
                </div>
                <div className="">
                <h1 className='text-xl font-bold mb-4'>Social Media</h1>
                    <div className=" flex flex-col justify-start gap-2">
                        <a href="" className='hover:text-teal-400 text-slate-300'>Facebook Page</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>Instagram</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>Twitter</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>YouTube Channel</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>Telegram Channel</a>
                        </div>
                </div>
                <div className="">
                    <h1 className='text-xl font-bold mb-4'>Petani Kode</h1>
                    <div className=" flex flex-col justify-start gap-2">
                        <a href="" className='hover:text-teal-400 text-slate-300'>About</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>FAQs</a>
                        <a href="" className='hover:text-teal-400 text-slate-300'>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;