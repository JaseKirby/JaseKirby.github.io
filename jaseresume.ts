import { Resume } from "./src/models/resume";

const r: Resume = {
    firstName: "Jase",
    lastName: "Kirby",
    occupation: "Software Developer",
    contactInfo: {
        currentLocation: "Timonium, MD"
    },
    summary: `
    Hard working software developer.
    I absoulutely love writing code to create beautiful, functional, and responsive applications.
    I am also a decent mechanic and an avid outdoorsman.
    `,
    education: [
        {
            institution: "West Virginia University",
            degree: "B.S. Management Information Systems",
            location: "Morgantown, WV",
            time: "Graduated 2015"
        }
    ],
    internships: [
        {
            employer: "UPS",
            name: "Information Services",
            location: "Timonium, MD",
            time: "Summer 2015"
        }
    ],
    employment: [
        {
            employer: "UPS Information Services",
            title: "Applications Developer",
            location: "Timonium, MD",
            time: "January 2017-Present"
        },
        {
            employer: "UPS Information Services",
            title: "Applications Developer",
            location: "Timonium, MD",
            time: "December 2015-2016"
        },
        {
            employer: "WVU College of B&E IT Department",
            title: "Computer Lab Assistant",
            location: "Morgantown, WV",
            time: "August 2011-2014"
        },
        {
            employer: "Mar-Len Environmental",
            title: "Reforestation Project Team Member",
            location: "Westminster, MD",
            time: "July 2009-2014"
        }
    ],
    skills: [
        {title: "Linux"},
        {title: "Windows"},
        {title: "HTML"},
        {title: "Javascript"},
        {title: "CSS"},
        {title: "Typescript"},
        {title: "SQL"},
        {title: "DevOps"},
        {title: "Docker"},
        {title: "Kubernetes"},
        {title: "Openshift"},
        {title: "Ansible"},
        {title: "Java"},
        {title: "C#"},
        {title: "Jenkins"},
        {title: "Elasticsearch"},
        {title: "Fluentd"},
        {title: "Web Applications"},
        {title: "Node.js"},
        {title: "NoSQL"},
        {title: "Go"},
        {title: "React"},
        {title: "Groovy"},
        {title: "ASP.NET Core"},
        {title: "Tomcat"},
        {title: "Spring Boot"}
    ]
};

export default r;