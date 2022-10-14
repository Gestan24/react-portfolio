import cms from '../../assets/images/cms_img.png';
import bnb from '../../assets/images/BNB_launch.png';
import hb from '../../assets/images/HB.png';
import dash from '../../assets/images/weather-dashboard.png';
import note from '../../assets/images/note-taker.png';
import pass from '../../assets/images/pass-gen.png';

function Project() {

    return (

        <div>

            <div className="heading ml-5 pt-4 pl-3">

                <h1>
                    Portfolio
                </h1>

            </div>

            <div className="container mb-5 pl-3 pr-3 pb-3 align-self-center">

                <div className="row">

                    <div className="col-6 pb-3">

                        <img src={cms} id='portfolio-img' />

                        <div className='row m-auto'>
                            <a href='https://safe-dawn-06356.herokuapp.com/'>

                                <p className='pt-1 col'>CMS Tech Blog</p>

                            </a>

                            <a href='https://github.com/Gestan24/cms-tech-blog'>

                                <p className='pt-1 col'>Github</p>

                            </a>
                        </div>




                    </div>

                    <div className="col-6 pb-3">

                        <img src={bnb} id='portfolio-img' />

                        <div className='row m-auto'>
                            <a href='https://oceanlatte.github.io/booze-n-binge/'>

                                <p className='pt-1 col'>Booze N' Binge</p>

                            </a>

                            <a href='https://github.com/oceanlatte/booze-n-binge'>

                                <p className='pt-1 col'>Github</p>

                            </a>
                        </div>

                    </div>

                    <div className="col-6 pb-3">

                        <img src={hb} id='portfolio-img' />

                        <div className='row m-auto'>
                            <a href='https://enigmatic-bastion-69025.herokuapp.com/'>

                                <p className='pt-1 col'>Homebase</p>

                            </a>

                            <a href='https://github.com/AlexCourtney18/homebase'>

                                <p className='pt-1 col'>Github</p>

                            </a>
                        </div>

                    </div>

                    <div className="col-6 pb-3">

                        <img src={dash} id='portfolio-img' />

                        <div className='row m-auto'>
                            <a href='https://gestan24.github.io/weather-dashboard/'>

                                <p className='pt-1 col'>Weather Dashboard</p>

                            </a>

                            <a href='https://github.com/Gestan24/weather-dashboard'>

                                <p className='pt-1 col'>Github</p>

                            </a>
                        </div>

                    </div>

                    <div className="col-6 pb-3">

                        <img src={note} id='portfolio-img' />

                        <div className='row m-auto'>
                            <a href='https://cryptic-reef-26081.herokuapp.com/'>

                                <p className='pt-1 col'>Note Taker</p>

                            </a>

                            <a href='https://github.com/Gestan24/note-taker'>

                                <p className='pt-1 col'>Github</p>

                            </a>
                        </div>

                    </div>

                    <div className="col-6 pb-3">

                        <img src={pass} id='portfolio-img' />

                        <div className='row m-auto'>
                            <a href='https://gestan24.github.io/password-generator/'>

                                <p className='pt-1 col'>Password Generator</p>

                            </a>

                            <a href='https://github.com/Gestan24/password-generator'>

                                <p className='pt-1 col'>Github</p>

                            </a>
                        </div>

                    </div>

                </div>

            </div>



        </div>
    );

}

export default Project;