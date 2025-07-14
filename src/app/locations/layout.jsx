import Searchbar from "@/components/searchbar";

export default function LocationsLayout({ children }) {
    return (
        <>
            <Searchbar path={"/locations"} placeholder={"Search location..."} />
            {children}
        </>
    );
}