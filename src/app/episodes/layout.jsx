import Searchbar from "@/components/searchbar";
import { Suspense } from "react";
import Loading from "./loading";

export default function EpisodesLayout({ children }) {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Searchbar path={"/episodes"} placeholder={"Search episode..."} />
                {children}
            </Suspense>
        </>
    );
}