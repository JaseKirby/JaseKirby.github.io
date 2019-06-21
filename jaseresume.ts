import { Resume } from "./src/models/resume";
import { SkillLevel } from "./src/models/skillLevel";

const r: Resume = {
    firstName: "Jase",
    lastName: "Kirby",
    occupation: "Software/DevOps Engineer",
    githubLink: "github.com/jasekirby",
    contactInfo: {
        currentLocation: "Timonium, MD"
    },
    summary: `
    Hard working software/DevOps engineer.
    I love writing code and creating beautiful, functional, and responsive applications.
    I am also a decent mechanic and an outdoorsman.
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
            employer: "Blackboard",
            title: "DevOps Engineer",
            location: "Baltimore, MD",
            time: "April 2019 - Present"
        },
        {
            employer: "UPS Information Services",
            title: "Applications Developer for UPS.com",
            location: "Timonium, MD",
            time: "January 2017 - April 2019"
        },
        {
            employer: "UPS Information Services",
            title: "Technology Support Associate (Third Level Support for UPS.com)",
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
        {title: "Linux", level: SkillLevel.Advanced},
        {title: "Windows", level: SkillLevel.Advanced},
        {title: "HTML", level: SkillLevel.Advanced},
        {title: "Javascript", level: SkillLevel.Intermediate},
        {title: "CSS", level: SkillLevel.Beginner},
        {title: "Typescript", level: SkillLevel.Intermediate},
        {title: "SQL", level: SkillLevel.Intermediate},
        {title: "DevOps", level: SkillLevel.Expert},
        {title: "Docker", level: SkillLevel.Expert},
        {title: "Kubernetes", level: SkillLevel.Advanced},
        {title: "Openshift", level: SkillLevel.Advanced},
        {title: "Ansible", level: SkillLevel.Advanced},
        {title: "Terraform", level: SkillLevel.Beginner},
        {title: "AWS", level: SkillLevel.Intermediate},
        {title: "Java", level: SkillLevel.Advanced},
        {title: "C#", level: SkillLevel.Advanced},
        {title: "Jenkins", level: SkillLevel.Advanced},
        {title: "Elasticsearch", level: SkillLevel.Intermediate},
        {title: "Fluentd", level: SkillLevel.Intermediate},
        {title: "Web Applications", level: SkillLevel.Advanced},
        {title: "Node.js", level: SkillLevel.Intermediate},
        {title: "NoSQL", level: SkillLevel.Intermediate},
        {title: "Go", level: SkillLevel.Beginner},
        {title: "React", level: SkillLevel.Intermediate},
        {title: "Groovy", level: SkillLevel.Intermediate},
        {title: "ASP.NET Core", level: SkillLevel.Advanced},
        {title: "Tomcat", level: SkillLevel.Intermediate},
        {title: "Spring Boot", level: SkillLevel.Intermediate}
    ]
};

export default r;