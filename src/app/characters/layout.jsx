import Filters from "@/components/filters/characters";
import Searchbar from "@/components/searchbar";

export default function CharactersLayout({ children }) {
    return (
        <>
            <Searchbar path={"/characters"} Filters={Filters} placeholder={"Search character..."} />
            {children}
        </>
    );
}