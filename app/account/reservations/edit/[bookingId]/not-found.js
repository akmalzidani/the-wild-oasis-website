import Link from "next/link";

function NotFound() {
  return (
    <main className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">
        This reservation could not be found :(
      </h1>
      <Link
        href="/account/reservations"
        className="inline-block px-6 py-3 text-lg bg-accent-500 text-primary-800"
      >
        Back to all reservations
      </Link>
    </main>
  );
}

export default NotFound;
