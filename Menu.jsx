const Menu = ({ isMenuOpen, children, stäng }) => {

    console.log('isMenuOpen?', isMenuOpen)
    return (

        <div className={`menu ${ isMenuOpen ? " " : "far-away"}`}>
            test meny
            <button onClick={stäng}>X</button>
            { children }
        </div>
    );
}
 
export default Menu;
