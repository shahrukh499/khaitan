import { Button, TextField } from "@mui/material";
import React from "react";

function Form() {
  return (
    <div className="p-5 lg:p-10 bg-white rounded-2xl h-full">
      <div className="mb-6 lg:mb-10">
        <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
        <p>Have a query about our services?</p>
      </div>
      <div className="flex flex-wrap gap-y-5">
        <div className="w-full">
          <TextField id="name" label="Name" variant="standard" fullWidth />
        </div>
        <div className="w-full">
          <TextField id="email" label="Email" variant="standard" fullWidth />
        </div>
        <div className="w-full">
          <TextField id="phone" label="Phone" variant="standard" fullWidth />
        </div>
        <div className="w-full">
          <TextField
            id="message"
            label="Message"
            variant="standard"
            fullWidth
          />
        </div>
        <div className="w-full">
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#e13032",
              color: "white",
              borderRadius: 50,
              px: 8,
              "&:hover": {
                backgroundColor: "#e13032",
              },
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Form;
