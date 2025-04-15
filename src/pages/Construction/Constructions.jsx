import Logo from "@/components/layout/Logo";
import SocialMedia from "@/components/layout/SocialMedia";
import { Button, TextField } from "@mui/material";

function Constructions() {
  return (
    <div className="flex justify-center items-center h-screen bg-white overflow-hidden">
      <div className="flex flex-col items-start space-y-6 max-w-lg">
        <header>
          <h1 className="text-[#18191C] text-4xl font-medium leading-[56px] font-inter">
            Our website is under construction
          </h1>
          <p className="text-[#474C54] text-lg font-normal leading-[28px] font-inter mt-4">
            We are working hard to bring you a new experience. <br /> Please
            check back later.
          </p>
        </header>
        <div className="flex items-center space-x-4 w-full gap-3">
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            className="flex-1"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="bg-blue-500 text-white text-lg px-6 py-6 min-h-[56px] flex justify-center items-center gap-2 "
          >
            Subscribe →
          </Button>
        </div>
      </div>
      <div className="ml-16">
        <img
          src="src/assets/Screenshot 2025-04-03 070838.png"
          alt="Under Construction"
          className="max-w-md"
        />
      </div>
      <div className="absolute top-4 left-32 flex items-center gap-2">
        <Logo />
      </div>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default Constructions;
