import * as React from "react";

import {NavBar} from "../components/navBar";
import { Resume } from "../models/resume";
import {ContactSection} from "../components/contactSection";
import { Section } from "../components/section";

interface IHomePageProps {
    resume: Resume;
}

class HomePageState {
    public readonly activeSection = "home";
}

const homePageStyle: any = {
    marginTop: "40px"
};

const skillStyle: any = {
    marginLeft: "10px"
};

export class HomePage extends React.Component<IHomePageProps> {
    public render(): JSX.Element {
        return(
            <div>
                <NavBar resume={this.props.resume} />
                <div className="container" style={homePageStyle}>
                    <ContactSection id="home" firstName={this.props.resume.firstName}
                        lastName={this.props.resume.lastName}
                        occupation={this.props.resume.occupation}
                        githubLink={this.props.resume.githubLink}
                        contactInfo={this.props.resume.contactInfo} />
                    <div id="summary">
                        <h2 className="title is-2">Summary</h2>
                        <hr/>
                        <p className="content is-size-5">{this.props.resume.summary}</p>
                    </div>
                    <br/>
                    <div id="education">
                        <h2 className="title is-2">Education</h2>
                        <hr/>
                        {this.props.resume.education.map((e, i) =>
                        <div key={i}>
                            <Section organization={e.institution} title={e.degree} location={e.location} time={e.time} />
                        </div>)}
                    </div>
                    <br/>
                    <div id="internship">
                        <h2 className="title is-2">Internship</h2>
                        <hr/>
                        {this.props.resume.internships.map((e, i) =>
                        <div key={i}>
                            <Section organization={e.employer} title={e.name} location={e.location} time={e.time} />
                        </div>)}
                    </div>
                    <br/>
                    <div id="employment">
                        <h2 className="title is-2">Employment</h2>
                        <hr/>
                        {this.props.resume.employment.map((e, i) =>
                        <div key={i}>
                            <Section organization={e.employer} title={e.title} location={e.location} time={e.time} />
                        </div>)}
                    </div>
                    <br/>
                    <div id="skills">
                        <h2 className="title is-2">Skills</h2>
                        <hr/>
                        <aside className="menu" style={skillStyle}>
                            {this.props.resume.skills.map((e) =>
                            <p key={e.title} className="menu-label is-size-4">
                                {e.title} - {e.level}
                            </p>)}
                        </aside>
                    </div>
                    <br/>
                </div>
            </div>
        );
    }
}