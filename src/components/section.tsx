import * as React from "react";

interface ISectionProps {
    organization: string;
    title: string;
    location: string;
    time: string;
    bullets?: string[];
}

const sectionStyle: any = {
    marginBottom: "20px"
};

export class Section extends React.Component<ISectionProps> {
    public render(): JSX.Element {
        return(
            <div className="columns" style={sectionStyle}>
                <div className="column">
                    <h3 className="title is-3 has-text-primary">{this.props.organization}</h3>
                    <h5 className="subtitle is-5">{this.props.title}</h5>
                </div>
                <div className="column is-offset-6">
                    <h3 className="title is-3 has-text-primary">{this.props.location}</h3>
                    <h5 className="subtitle is-5">{this.props.time}</h5>
                </div>
            </div>
            );
    }
}