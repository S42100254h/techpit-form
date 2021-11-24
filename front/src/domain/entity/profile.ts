import { Address } from "./address";
import { College } from "./college";
import { Career } from "./career";
import { Gender} from "./gender";

export type Profile = {
  name: string;
  description: string;
  birthday: string;
  gender: Gender;
  address: Address;
  college: College;
  careers: Career[];
};
