import Image from "next/image";

const Header = () => {
    return (
        <header className="relative w-full max-w-[90%] mx-auto min-h-[30vh] sm:min-h-[50vh] flex flex-col items-center justify-center">
            <Image 
                src={"/portal.png"} 
                width={300} 
                height={300} 
                alt="portal"
            />
            <h1 className="text-3xl sm:text-5xl font-bold text-[var(--white)] mt-4 sm:mt-6 text-center">
                The Rick and Morty Pedia
            </h1>
        </header>
    );
};

export default Header;