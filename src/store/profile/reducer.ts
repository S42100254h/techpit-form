import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Profile } from "../../domain/entity/profile";
import profileActions from "./actions";

const init: Profile = {
  name: "",
  description: "",
  birthday: "",
  gender: "",
  address: {
    postalcode: "",
    prefecture: "",
    town: "",
    restAddress: ""
  },
  college: {
    name: "",
    faculty: "",
    department: ""
  }
};

const profileReducer = reducerWithInitialState(init)
  .case(profileActions.setProfile, (state, payload) => ({
    ...state,
    ...payload
  }))
  .case(profileActions.setAddress, (state, payload) => ({
    ...state,
    address: { ...state.address, ...payload }
  }))
  .case(profileActions.setCollege, (state, payload) => ({
    ...state,
    college: { ...state.college, ...payload }
  }))
  .case(profileActions.searchAddress.done, (state, payload) => ({
    ...state,
    address: { ...state.address, ...payload.result }
  }));

export default profileReducer;