import { Input } from "@nextui-org/react";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <form>
      <Input name="name" type="name" label="Name" variant="bordered" />

      <Input
        className="mt-4"
        name="email"
        type="email"
        label="Email"
        variant="bordered"
      />

      <Input
        className="mt-4"
        name="password"
        type="password"
        label="password"
        variant="bordered"
      />
      <div className="flex justify-end pt-2">
        <Link href="/login">
          Al ready have an account. Please{" "}
          <span className="text-blue-500">Login</span>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
