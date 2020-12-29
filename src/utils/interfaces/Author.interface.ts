import { PersonInterface } from "@/services/user/interfaces";

export interface AuthorInterface {
    publications: number;
    person: PersonInterface;
}
