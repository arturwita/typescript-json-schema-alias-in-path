import { AuthorInterface } from "@/utils/interfaces";
import { GENRE } from "@/utils/enums";
// import { AuthorInterface } from "../../../utils/interfaces"; // this would work
// import { GENRE } from "../../../utils/enums"; // this would work

export interface RentalInterface {
    title: string;
    author: AuthorInterface;
    genre: GENRE;
}
