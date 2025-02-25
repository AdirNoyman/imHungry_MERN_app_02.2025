import landingImage from '../../public/assets/landing.png'
import appDownLoad from '../../public/assets/appDownload.png'
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 max-sm:mx-4">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Grab your favorite take away today
            </h1>
            <span className="text-xl">Food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} alt="mobile app" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className='font-bold text-3xl tracking-tighter'>
                Order takeaways from your favorite restaurants 😋
            </span>
            <span>Download the app for faster ordering on the go</span>
            <img src={appDownLoad} alt="link to app in the app store" />
            </div>
        </div>
    </div>
  )
}

export default HomePage