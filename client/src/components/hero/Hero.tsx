import { useNavigate } from 'react-router-dom'
import { Button } from '../ui'
export const Hero: React.FC = () => {
  const handleScrollToBottom = () => {
    window.scrollBy({
      top: 500,
      behavior: 'smooth',
    })
  }
  const navigate = useNavigate()
  const handleContact = () => {
    navigate('/contact')
  }

  return (
    <section className=" rounded-xl bg-center bg-no-repeat bg-[url('/src/assets/herosection.jpg')] bg-gray-500 bg-blend-multiply">
      <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
          Descansa bien, vive mejor.
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
          Sumérgete en el confort excepcional de nuestros colchones premium.
          Descubre el sueño perfecto que te mereces.
        </p>
        <div className='flex gap-4 flex-col items-center sm:flex sm:flex-row sm:justify-center sm:gap-8'>
          <Button variant={'heroprimary'} onClick={handleScrollToBottom}>
            Comprar
          </Button>
          <Button onClick={handleContact} variant={'herosecondary'}>
            Contacto
          </Button>
        </div>
      </div>
    </section>
  )
}
