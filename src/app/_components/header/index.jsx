import Image from "next/image";

const Header = () => {
    return (
        <header className="relative w-full min-h-[50vh] bg-[var(--white)] flex flex-col items-center justify-center">
        <Image src={"/portal.png"} width={"300"} height={"300"} alt="portal"/>
            <h1 className="text-5xl font-bold text-[var(--background)]">The Rick and Morty Pedia</h1>
        </header>
    )
}

export default Header;