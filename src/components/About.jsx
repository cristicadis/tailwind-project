import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
import hero from '../assets/hero.svg'
const About = () => {
  return (
    <section className="bg-white py-20" id='about'>
    <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className='w-full h-64' alt='image'/>
        <article>
            <SectionTitle text='code and coffee' />
            <p className='text-slate-600 mt-8 leading-loose'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloribus natus, libero fugiat voluptatibus asperiores quos vero corrupti quia itaque? Consequatur recusandae, provident odio hic nemo nulla eligendi sit, architecto tempore qui ducimus cupiditate unde, esse ex voluptate eveniet laudantium.</p>
        </article>
    </div>
    </section>
  )
}

export default About