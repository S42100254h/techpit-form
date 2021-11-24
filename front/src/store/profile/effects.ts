import { Dispatch } from "redux";
import profileActions from "./actions";
import { Address } from "../../domain/entity/address";

export const serachAddressFromPostalcode = (code: string) => {
  return async (dispatch: Dispatch) => {
    const res = await fetch(
      `https://apis.postcode-jp.com/api/v3/postcodes?apikey="2axZ1F6UFo5ZoBHXQJtHZGPqPlQc2sqhNpbvHqz"&postcode=${code}`
    );
    const result = await res.json();

    const address: Partial<Address> = {
      prefecture: result.data[0].pref,
      city: result.data[0].city + result.data[0].town
    };
    
    dispatch(profileActions.searchAddress.done({ result: address, params: {} }));
  };
};
