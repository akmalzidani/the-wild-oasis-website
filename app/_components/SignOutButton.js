import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

function SignOutButton() {
  return (
    <button className="flex items-center w-full gap-4 px-5 py-3 font-semibold transition-colors hover:bg-primary-900 hover:text-primary-100 text-primary-200">
      <ArrowRightOnRectangleIcon className="w-5 h-5 text-primary-600" />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
