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

                    As a kid, I've always had a passion for technology. Whether it be games, Tv, or computers I loved being around it and engaging with it.
                    The more I searched for a career, the more I realized I needed to love what I do. As I searched for careers I ran into a coding bootcamp 
                    ad. I spoke with the advisor, got the financial deposit needed and dove into coding head first. The decision was so easy. I felt natural
                    and at home when learning aything about coding. Now that I've finished the program, it's been the number one goal to get my foot in the door
                    and begin a career I love. 

                </p>

            </div>

        </section>

    );

}

export default About;