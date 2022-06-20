import React, { useState } from "react";
//import List from "./Pages/List";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import "../Redux/reducers";

const Details = () => {
  const details = useSelector((state) => state);
  //console.log("parth", details);
  const dispatch = useDispatch();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [, setDetails] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fName || !lName || !address || !gender || !pNumber || !email) {
      alert("Please fill all the details");
      console.log(fName, lName, address, gender, pNumber, email);
      setFName("");
      setLName("");
      setAddress("");
      setPNumber("");
      setGender("male");
      setEmail("");
    }
  };

  const addDetails = () => {
    const data = { fName, lName, address, gender, email, pNumber };
    if (fName && lName && address && pNumber && email && gender) {
      setDetails((ls) => [...ls, data]);
      setFName("");
      setLName("");
      setAddress("");
      setPNumber("");
      setEmail("");
    } else {
      alert("Fill all the details");
    }
    const data1 = {
      id: details[details.length - 1].id + 1,
      fName,
      lName,
      address,
      gender,
      email,
      pNumber,
    };

    dispatch({ type: "ADD_DETAILS", payload: data1 });
  };

  return (
    <div className="App">
      <Typography variant="h4" m={2}>
        Enter Employee Details
      </Typography>
      <Grid>
        <Card
          style={{
            maxWidth: 500,
            margin: "0 auto",
            padding: "20px 5px",
          }}
        >
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    value={fName}
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setFName(e.target.value)}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    value={lName}
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setLName(e.target.value)}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Address"
                    value={address}
                    variant="outlined"
                    placeholder="enter address"
                    fullWidth
                    required
                    multiline
                    rows={2}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>

                <Grid xs={12} item>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Select Your Gender
                    </FormLabel>
                    <RadioGroup
                      value={gender}
                      row
                      required
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      defaultValue="male"
                      name="row-radio-buttons-group"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />

                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    type="number"
                    value={pNumber}
                    label="Phone No"
                    placeholder="enter phone no"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => {
                      setPNumber(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>

                {/* time zone wala bacha hai */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={addDetails}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Details;
