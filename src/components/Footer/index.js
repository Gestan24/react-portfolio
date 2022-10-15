import github from '../../assets/images/github_icon.png';
import stack from '../../assets/images/stackoverflow_icon.png';
import linkIn from '../../assets/images/linkdin_icon.png';

function Footer() {

    return (

        <footer className="footer fixed-bottom">
            <div className='d-flex justify-content-center'>
                <a href='https://github.com/Gestan24'>
                    <img src={github} alt='git hub icon' id='img' className='p-2 mx-3' />
                </a>
                <a href='https://stackoverflow.com/users/19011330/gestan24'>
                    <img src={stack} alt='git hub icon' id='img' className='p-2 mx-3' />
                </a>
                <a href='https://www.linkedin.com/in/gestan-joshua-64a713239/'>
                    <img src={linkIn} alt='git hub icon' id='img' className='p-2 mx-3' />
                </a>
            </div>
        </footer>

    );

}

export default Footer;