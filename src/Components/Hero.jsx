import heroImg from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Mixtape fingerstache brunch lumbersexual flannel gochujang wayfarers
            umami chicharrones fanny pack microdosing hexagon hoodie sriracha
            bitters. Venmo umami meditation bespoke edison bulb biodiesel
            vibecession.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='Hero Image' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
