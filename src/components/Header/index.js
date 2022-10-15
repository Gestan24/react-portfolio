import Navagation from '../Navigation';


function Header(props) {

    const {
        selectedComponent,
        setSelectedComponent
    } = props;

    return (
        <div>
            <div id='jumbotron' className="jumbotron d-flex mb-0">
                <h1 className="p-3 display-4">
                    Gestan Joshua
                </h1>
                <div>
                    <Navagation
                    selectedComponent={selectedComponent}
                    setSelectedComponent={setSelectedComponent}
                    ></Navagation>
                </div>
            </div>
        </div>
    );

}


export default Header;