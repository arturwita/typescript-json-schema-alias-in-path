import { AddressInterface } from "@/utils/interfaces";
import { GENDER } from "@/utils/enums";
// import { AddressInterface } from "../../../utils/interfaces"; // this would work
// import { GENDER } from "../../../utils/enums"; // this would work

export interface PersonInterface {
    name: string;
    age: number;
    address: AddressInterface;
    gender: GENDER;
}
