import { Card, CardBody } from "@nextui-org/react";
import BannerButton from "./BannerButton";
import MotionCar from "./MotionCar";

const Banner = () => {
  return (
    <Card className="py-4 flex" shadow="none">
      <CardBody className="overflow-visible py-2 ">
        <div className="flex items-center justify-between">
          <div className="w-2/5">
            <h1 className="text-6xl font-bold mb-2 text-default-900">
              Revolutionizing Your{" "}
              <span className="text-lime-500">Driving</span> Experience
            </h1>
            <h4 className=" text-xl text-gray-500 my-4">
              Explore the thrill of automotive innovation at AutoFusion.
              Discover reviews, trends, and technology shaping the future of
              driving.
            </h4>
            <BannerButton />
          </div>
          <MotionCar />
        </div>
      </CardBody>
    </Card>
  );
};

export default Banner;
