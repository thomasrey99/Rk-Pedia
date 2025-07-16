import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const RedirectButton = ({ path, text }) => {
    return (
        <Link href={path} className="inline-flex mt-10 items-center gap-2 px-4 py-2 rounded-lg bg-[var(--space)] text-[var(--white)] hover:bg-[var(--green)] transition-all duration-200">
            <IoMdArrowRoundBack className="text-xl" />
            <span className="text-sm sm:text-base font-medium">{text}</span>
        </Link>
    );
};

export default RedirectButton;
