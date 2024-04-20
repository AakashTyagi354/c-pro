import React, { useState } from "react";
import Siddbar from "../components/Siddbar";
import { useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Home = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [room, setRoom] = useState("");
  const [beds, setBeds] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex">
      <Siddbar />
      <div className="bg-red-100 w-full ">
        <div className="flex justify-center w-full mt-12 ">
          <p className="text-5xl font-semibold r ">
            Welcome {currentUser.name}{" "}
          </p>
        </div>

        <div className="w-[80%] mx-auto mt-12  flex flex-wrap gap-12 ">
          <Link to="/roompage">
            <div className="h-[200px] w-[200px] bg-gray-100 flex items-center justify-center cursor-pointer ">
              <p>703</p>
            </div>
          </Link>
          <div className="h-[200px] w-[200px] bg-gray-100 flex items-center justify-center cursor-pointer">
            <button onClick={handleOpen} variant="gradient">
              <FiPlus size={40} />
            </button>
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Add rooms here!</DialogHeader>
              <DialogBody>
                <div className="flex flex-col gap-4 w-[80%]">
                  <input
                    placeholder="roomNumber"
                    type="text"
                    className="outline-none h-[30px]"
                  />
                  <input
                    placeholder="totalBeds"
                    type="text"
                    className="outline-none h-[30px]"
                  />
                </div>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="blue" onClick={handleOpen}>
                  <span>Submit</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
