import { navLinks } from '../../constants/data';
import images from '../../assets';


const Navbar = () => {

  return (
    <nav className='flex justify-center'>
      <div className='w-[1400px] flex justify-between items-center py-3 px-0'>

        <div className='flex items-center gap-5'>
          <img src={images.logo} alt="logo" className='h-14' />

          <ul className='flex gap-5'>

            {
              navLinks.map(({ path, name }) =>
                <li key={path}>
                  <a href={path}>{name}</a>
                </li>
              )
            }
          </ul>
        </div>

        <div className='flex items-center gap-5'>
          <img src={images.search} alt="search" className='w-5 cursor-pointer' />
          <a href='#contact' className='btn text-center'>Hire Now</a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar