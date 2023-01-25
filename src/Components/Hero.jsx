import poster from '../images/bghero.jpg';
function Hero(){
    const bg_img = {
        backgroundImage: `url(${poster})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        zIndex: '0',
      }
    return(
        <div className="flex flex-col items-center justify-center h-[88vh]"  style={bg_img}>
                <h1 className="text-2xl sm:text-3xl md:text-5xl text-white font-extrabold">Unlimited Movies,Tv's and Shows</h1>
                <h5 className="text-xl sm:text-2xl md:text-3xl text-white font-medium md:mt-10">Watch anywhere. Cancel anytime.</h5>
        </div>
    );
}

export default Hero;