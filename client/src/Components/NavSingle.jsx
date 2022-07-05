function NavSingle(props) {
    return (
        <li>
            <a href={props.Link} className="NavBarText CursiveFont">
                {props.Title}
            </a>
        </li>
    );
}

export default NavSingle;