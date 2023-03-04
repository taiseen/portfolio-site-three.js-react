import images from '../../assets'

const Navbar = () => {
  return (
    <nav className='flex justify-center'>
      <div className='w-[1400px] flex justify-between items-center py-3 px-0'>

        <div className='flex items-center gap-5'>
          <img src={images.logo} alt="logo" className='h-14' />

          <ul className='flex gap-5'>
            <li>Home</li>
            <li>Studio</li>
            <li>Woks</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='flex items-center gap-5'>
          <img src={images.search} alt="search" className='w-5 cursor-pointer'/>
          <button className='btn'>Hire Now</button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar