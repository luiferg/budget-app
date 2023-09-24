import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='sticky top-0 py-8 backdrop-blur-md'>
      <nav className='mx-auto max-w-screen-xl flex flex-row justify-between items-center'>
        <Link href='/' className='text-5xl'>
          HF
        </Link>
        <div className='flex flex-row lg:gap-8 items-center'>
          <Link href='/about'>About</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
