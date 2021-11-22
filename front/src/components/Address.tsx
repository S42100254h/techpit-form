import React from "react";
import { TextField } from "@material-ui/core";
import { PROFILE } from "../domain/services/profile";
import useStyles from "./styles";

const Address = () => {
  const classes = useStyles();

  return (
    <>
      <TextField
        fullWidth
        className={classes.formField}
        label={PROFILE.ADDRESS.POSTALCODE}
      />
      <TextField
        fullWidth
        className={classes.formField}
        label={PROFILE.ADDRESS.PREFECTURE}
      />
      <TextField
        fullWidth
        className={classes.formField}
        label={PROFILE.ADDRESS.CITY}
      />
      <TextField
        fullWidth
        className={classes.formField}
        label={PROFILE.ADDRESS.RESTADDRESS}
      />
    </>
  );
};

export default Address;
