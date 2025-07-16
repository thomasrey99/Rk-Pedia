import Searchbar from "@/components/searchbar";
import { Suspense } from "react";
import Loading from "./loading";

export default function LocationsLayout({ children }) {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Searchbar path={"/locations"} placeholder={"Search location..."} />
                {children}
            </Suspense>
        </>
    );
}