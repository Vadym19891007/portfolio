import Link from "next/link";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="text-amber-50 text-2xl py-14 px-8 flex flex-col items-center gap-4">
      Project not found
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
