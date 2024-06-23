import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Warehouse } from "lucide-react";
import RegisterForm from "./RegisterForm";


const RegisterPage = () => {
  return (
    <div className="mt-24 flex justify-center items-center">
      <Card className="w-96">
        <CardHeader className="flex justify-center">
          <Warehouse />
          <p className="font-bold text-inherit px-4">Sign Up</p>
        </CardHeader>

        <CardBody>
          <RegisterForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPage;
