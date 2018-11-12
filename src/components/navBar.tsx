import * as React from "react";
import { Resume } from "../models/resume";

interface INavBarProps {
    resume: Resume;
}

const navStyle: any = {
    borderRadius: 0
};

export class NavBar extends React.Component<INavBarProps> {
    public readonly handleContactClick = () => (e: React.MouseEvent<HTMLLinkElement>) => {
        e.preventDefault();
        // document.getElementById("contact").scrollIntoView({behavior: "smooth"});
        // todo: figure out scroll with fixed navbar
    }
    public render(): JSX.Element {
        return(
            <nav className="navbar is-fixed-top" style={navStyle} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#contact">
                        {this.props.resume.firstName} {this.props.resume.lastName}'s Resume
                    </a>
                    <a role="button" className="navbar-burger burger"
                        aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        );
    }
}