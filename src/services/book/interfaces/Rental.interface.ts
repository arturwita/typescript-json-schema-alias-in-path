import { AuthorInterface } from "@/utils/interfaces";
import { GENRE } from "@/utils/enums";

export interface RentalInterface {
    title: string;
    author: AuthorInterface;
    genre: GENRE;
}
