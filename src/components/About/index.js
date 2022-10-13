import Gestan from '../../assets/images/Gestan-headshot.jpg';

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

                    I was born and raised in Milwaukee, Wisconsin. I graduated Riverside High School in 2011. I'm a huge fan of music and games.
                    I started playing an instrument around 6th grade and continued to play until i graduated. I studied french all through high
                    school and came within 2 classes of having a minor in french. I traveled to Europe my jr year of high school to visit Paris
                    and Spain for 10 days. I love traveling and learning new and different cultures! I've always been into tech and recently
                    bought parts to build my own desktop computer.

                </p>

            </div>

        </section>

    );

}

export default About;