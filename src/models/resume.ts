import {Education} from "./education";
import { Internship } from "./internship";
import { Employment } from "./employment";
import { Skill } from "./skill";
import { ContactInfo } from "./contactInfo";

export class Resume {
    firstName?: string;
    lastName?: string;
    occupation?: string;
    githubLink?: string;
    contactInfo?: ContactInfo;
    summary?: string;
    education?: Education[];
    internships?: Internship[];
    employment?: Employment[];
    skills?: Skill[];
}
