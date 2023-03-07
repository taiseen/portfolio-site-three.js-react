import { Contact, Hero, Who, Works } from './components';

const App = () => {

  return (
    <main
      className='h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth no-scrollbar bg-blurImg text-white'
    >
      <Hero />
      <Who />
      <Works />
      <Contact />
    </main>
  )
}

export default App