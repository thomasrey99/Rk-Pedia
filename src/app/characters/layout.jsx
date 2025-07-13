import Searchbar from "@/components/searchbar";

export default function CharactersLayout({ children }) {
    return (
        <>
            <Searchbar path={"/characters"} placeholder={"Search character..."} />
            {children}
        </>
    );
}