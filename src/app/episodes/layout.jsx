import Searchbar from "@/components/searchbar";

export default function EpisodesLayout({ children }) {
    return (
        <>
            <Searchbar path={"/episodes"} placeholder={"Search episode..."} />
            {children}
        </>
    );
}