import {
    Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

function NearestStore() {
  return (
    <section className="lg:py-12 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-y-3">
          <div className="w-full lg:w-[40%] lg:px-10 px-5 py-5 flex flex-col justify-center border border-gray-100 shadow rounded-2xl">
            <div className="mb-5">
              <span className="font-semibold">Find Your</span>
              <h4 className="text-[22px] lg:text-[30px] font-bold leading-tight">
                Nearest Store
              </h4>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:mb-5 mb-3">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="State"
                    sx={{
                      borderRadius: "9999px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "9999px",
                      },
                      "& .MuiSelect-select": {
                        paddingLeft: "24px",
                        paddingRight: "24px",
                      },
                    }}
                  >
                    <MenuItem value={10}>Maharashtra</MenuItem>
                    <MenuItem value={20}>Gujarat</MenuItem>
                    <MenuItem value={30}>Rajasthan</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="w-full relative">
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: "9999px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "9999px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "24px",
                      paddingRight: "24px",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "9999px",
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "#e13032",
                    color: "white",
                    padding: "10px 20px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    display: "block",
                    margin: "auto",
                  }}
                >
                  Search Now</Button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] lg:px-1.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14740.486404118763!2d88.37852279392544!3d22.537117141390386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276badf701f6f%3A0xe3398cf5c19f9102!2sTopsia%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1764592365431!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NearestStore;
