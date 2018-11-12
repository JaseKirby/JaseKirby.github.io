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
    paddingTop: "70px"
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
                        <h2 className="title is-2">Summary</h2>
                        <hr/>
                        <p className="content is-size-5">{this.props.resume.summary}</p>
                    </div>
                </div>
            </div>
        );
    }
}