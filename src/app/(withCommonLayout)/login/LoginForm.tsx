import { Input } from "@nextui-org/react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form>
      <Input name="email" type="email" label="Email" variant="bordered" />

      <Input
        className="mt-4"
        name="password"
        type="password"
        label="password"
        variant="bordered"
      />
      <div className="flex justify-end pt-2">
        <Link href="/register">
          If you have account <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
