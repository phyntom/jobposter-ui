type HeroProps = {
  title?: string;
  subtitle?: string;
};

const Hero = ({
  title = 'Become a Frontend Dev',
  subtitle = 'Find the React job that fits your skills and needs',
}: HeroProps) => {
  return (
    <>
      <section className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-72 py-20 mb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
              {title}
            </h1>
            <p className='my-4 text-xl text-white'>{subtitle}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
