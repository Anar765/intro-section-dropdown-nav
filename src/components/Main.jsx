import HeroImageMobile from '../images/image-hero-mobile.png';
import HeroImageDesktop from '../images/image-hero-desktop.png';
import ClientAudiophile from '../images/client-audiophile.svg';
import ClientDatabiz from '../images/client-databiz.svg';
import ClientMaker from '../images/client-maker.svg';
import ClientMeet from '../images/client-meet.svg';

const Main = () => {
    return (
        <main className='flex flex-col items-center md:flex-row-reverse md:my-10 md:items-center md:gap-10 md:justify-between md:mx-5 lg:mx-15'>
            <picture>
                <source media="(min-width: 768px)" srcset={HeroImageDesktop} />
                <img src={HeroImageMobile} alt="Hero Image" className='md:min-w-[15rem] my-12' />
            </picture>

            <div className='text-center space-y-3 mx-4 md:flex md:flex-col md:items-start md:text-start md:gap-[clamp(1rem,2vw,2rem)]'>
                <h1 className='text-4xl font-bold md:text-[clamp(3rem,6vw,6rem)]'>Make remote work</h1>
                <p className='text-Gray-500 md:max-w-[40rem]'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

                <button type="button" className='bg-Gray-950 border-2 border-Gray-950 text-Gray-50 px-6 py-3 rounded-2xl font-bold hover:bg-Gray-50 hover:text-Gray-950 md:rounded-xl'>
                    Learn more
                </button>
                <div className="flex items-center justify-center min-[400px]:justify-between flex-wrap gap-6 mx-4 my-10 md:my-5 lg:my-10">
                    <img src={ClientDatabiz} alt="Client Databiz" />
                    <img src={ClientAudiophile} alt="Client Audiophile" />
                    <img src={ClientMeet} alt="Client Meet" />
                    <img src={ClientMaker} alt="client Maker" />
                </div>
            </div>

        </main>
    )
}

export default Main