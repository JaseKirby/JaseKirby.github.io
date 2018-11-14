import * as React from "react";
import { Resume } from "../models/resume";

interface INavBarProps {
    resume: Resume;
}

class NavBarState {
    public readonly isMenuActive: boolean = false;
    public readonly sections: Section[];
}

class Section {
    name: string;
    isActive: boolean;
    class: string = "navbar-item";
}

const navStyle: any = {
    borderRadius: 0
};

export class NavBar extends React.PureComponent<INavBarProps, NavBarState> {
    constructor(props: INavBarProps) {
        super(props);
        this.state = new NavBarState();
      }
    public readonly handleBurgerClick = () => {
        this.setState((prevState) => ({isMenuActive: !prevState.isMenuActive}));
    }
    public render(): JSX.Element {
        let navBarMenuClass: string = "navbar-menu";
        if(this.state.isMenuActive) {
            navBarMenuClass = "navbar-menu is-active";
        }
        return(
            <nav className="navbar is-fixed-top" style={navStyle} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        {this.props.resume.firstName} {this.props.resume.lastName}'s Resume
                    </a>
                    <a role="button" onClick={this.handleBurgerClick} className="navbar-burger burger"
                        aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={navBarMenuClass}>
                    <div className="navbar-end">
                        <a className="navbar-item" href="#summary">
                            Summary
                        </a>
                        <a className="navbar-item" href="#education">
                            Education
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}