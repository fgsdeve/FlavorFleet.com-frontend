import hero from '../assets/hero2.png'

const Hero = () => {
    return (
        <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
            <img src={hero} className='w-[40%] max-h-[600px] object-cover mx-auto' />
        </div>
    )
}

export default Hero
