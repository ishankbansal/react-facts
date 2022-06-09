import ReactImg from "../images/React-icon.svg.png"
export default function Navbar(){
    return (
        <nav>
            <img alt="" src={ReactImg} className="nav--icon"/>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

//https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png