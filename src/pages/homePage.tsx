import * as React from "react";

import {NavBar} from "../components/navBar";
import { Resume } from "../models/resume";
import {ContactSection} from "../components/contactSection";

interface IHomePageProps {
    resume: Resume;
}

class HomePageState {
    public readonly activeSection = "home";
}

const homePageStyle: any = {
    marginTop: "70px"
};

export class HomePage extends React.Component<IHomePageProps> {
    public render(): JSX.Element {
        return(
            <div>
                <NavBar resume={this.props.resume} />
                <div className="container" style={homePageStyle}>
                    <ContactSection
                        id="contact" firstName={this.props.resume.firstName}
                        lastName={this.props.resume.lastName}
                        occupation={this.props.resume.occupation}
                        contactInfo={this.props.resume.contactInfo}/>
                    <div id="summary">
                        {/* <p>summary here</p> */}
                    </div>
                </div>
            </div>
        );
    }
}