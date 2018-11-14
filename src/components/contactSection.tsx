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
                {this.props.contactInfo.email &&
                    <div className="column">
                        <h5 className="title is-5">
                            <span className="icon">
                                <i className="fas fa-envelope"></i>
                            </span>
                            {this.props.contactInfo.email}
                        </h5>
                    </div>
                }
                {this.props.contactInfo.phone &&
                    <div className="column">
                        <h5 className="title is-5">
                            <span className="icon">
                                <i className="fas fa-mobile"></i>
                            </span>
                            {this.props.contactInfo.phone}
                        </h5>
                    </div>
                }
                {this.props.contactInfo.currentLocation &&
                    <div className="column">
                        <h5 className="title is-5">
                            <span className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </span>
                            {this.props.contactInfo.currentLocation}
                        </h5>
                    </div>
                }
            </div>
        </div>);
    }
}
