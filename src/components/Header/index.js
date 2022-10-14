import Navagation from '../Navigation';

function Header() {

    return (
        <div>
            <div id='jumbotron' className="jumbotron d-flex mb-0">
                <h1 className="p-3 display-4">
                    Gestan Joshua
                </h1>
                <div>
                    <Navagation></Navagation>
                </div>
            </div>
        </div>
    );

}


export default Header;