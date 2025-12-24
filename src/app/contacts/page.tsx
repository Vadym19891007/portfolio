import Link from "next/link";

const Contacts = () => {
  return (
    <div className="text-amber-50 text-2xl py-14 px-8 flex flex-col items-center gap-4">
      <h1 className="text-3xl text-center  lg:text-5xl pb-8">Contacts</h1>
      <h2 className="text-2xl font-semibold lg:text-4xl">Location</h2>
      <p className="text-sm text-gray-500 lg:text-base ">Hamburg, Germany</p>
      <h2 className="mt-3 text-2xl font-semibold lg:text-4xl animate-contactRight">
        Telegram/WhatsApp
      </h2>
      <Link
        className="block text-sm text-gray-500 lg:text-base "
        href="https://wa.me/4915172698611"
        target="_blank"
      >
        +4915172698611
      </Link>
      <h2 className="mt-3 text-2xl font-semibold lg:text-4xl ">Email</h2>
      <Link
        className="block text-sm text-gray-500 lg:text-base "
        href="mailto:dubovenko891@gmail.com"
      >
        dubovenko891@gmail.com
      </Link>
    </div>
  );
};

export default Contacts;
