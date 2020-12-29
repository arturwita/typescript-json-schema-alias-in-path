import { PersonInterface } from "@/services/user/interfaces";
// import { PersonInterface } from "../../services/user/interfaces"; // this would work

export interface AuthorInterface {
    publications: number;
    person: PersonInterface;
}
