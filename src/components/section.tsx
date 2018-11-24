import * as React from "react";

interface ISectionProps {
    organization: string;
    title: string;
    location: string;
    time: string;
    bullets?: string[];
}

export class Section extends React.Component<ISectionProps> {
    public render(): JSX.Element {
        return(
            <div className="columns">
                <div className="column">
                    <h3 className="title is-3 has-text-primary">{this.props.organization}</h3>
                    <h5 className="subtitle is-5">{this.props.title}</h5>
                </div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column">
                    <h3 className="title is-3 has-text-primary">{this.props.location}</h3>
                    <h5 className="subtitle is-5">{this.props.time}</h5>
                </div>
            </div>
            );
    }
}