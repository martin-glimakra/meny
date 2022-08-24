const Menu = ({ isMenuOpen }) => {

    console.log('isMenuOpen?', isMenuOpen)
    return (

        <div className={`menu ${ isMenuOpen ? " " : "far-away"}`}>
            test meny
        </div>
    );
}
 
export default Menu;