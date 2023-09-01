import Gestan from '../../assets/images/Gestan-headshot2.jpg';

function About() {

    return (


        <section id="about" className="About-Me container">

            <div className='row'>

                <img src={Gestan} width="250" height="300" alt="Head shot of Gestan" className='p-5 d-flex justify-content-center' />

            </div>

            <div className="p-3">

                <h2 className="">

                    About Me

                </h2>

            </div>

            <div className="about-me-text row">

                <p className='col-sm'>

                    I was born and raised in Milwaukee, Wisconsin. I graduated Riverside High School in 2011. I went to college for a few years but then dropped out to pay for my bills.
                     I worked at AT&T for 4 years and after that I've just been trying to figure out what I wanted to do in my life. I stumbled across a computer coding course
                     online through the University of Wisconsin school system and decided to enrolled because I was highly interested. I've recently finished that 
                     bootcamp and finished with an A in the class! I'm looking to get my foot in the door, start gaining more knowledge, and expand my network! 

                </p>

            </div>

        </section>

    );

}

export default About;