import Filters from "@/components/filters/characters";
import Searchbar from "@/components/searchbar";
import { Suspense } from "react";
import Loading from "./loading";

export default function CharactersLayout({ children }) {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Searchbar path={"/characters"} Filters={Filters} placeholder={"Search character..."} />
                {children}
            </Suspense>
        </>
    );
}