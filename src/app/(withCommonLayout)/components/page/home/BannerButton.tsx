"use client";
import { Button } from "@nextui-org/react";
import React from "react";

const BannerButton = () => {
  return (
    <div>
      <Button
        className="mx-2"
        onClick={() => console.log("Hello")}
        color="primary"
        radius="none"
      >
        Book Now
      </Button>
      <Button color="primary" variant="bordered" radius="none">
        Learn More
      </Button>
    </div>
  );
};

export default BannerButton;
