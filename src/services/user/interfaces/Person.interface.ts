import { AddressInterface } from "@/utils/interfaces";
import { GENDER } from "@/utils/enums";

export interface PersonInterface {
    name: string;
    age: number;
    address: AddressInterface;
    gender: GENDER;
}
