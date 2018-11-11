import * as React from "react";
import { ContactInfo } from "../models/contactInfo";

interface IContactSectionProps {
    id: string;
    firstName: string;
    lastName: string;
    occupation: string;
    contactInfo: ContactInfo;
}


export class ContactSection extends React.Component<IContactSectionProps> {
    public render(): JSX.Element {
        return(
        <div id={this.props.id}>
            <h1 className="title is-1 has-text-centered">
                {this.props.firstName} {this.props.lastName}
            </h1>
            <h4 className="title is-4 has-text-centered">
                {this.props.occupation.toUpperCase()}
            </h4>
            <div className="columns has-text-centered">
                <div className="column">
                    <h5 className="title is-5">
                        {this.props.contactInfo.currentLocation}
                    </h5>
                </div>
            </div>
        </div>);
    }
}
