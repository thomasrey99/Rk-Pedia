"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function Filters() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const gender = searchParams.get("gender") || "";
    const status = searchParams.get("status") || "";

    const handleChange = (e) => {
        const { name, value } = e.target;
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(name, value);
        } else {
            params.delete(name);
        }

        params.set("page", 1);
        router.push(`/characters?${params.toString()}`);
    };

    const selectStyle =
        "w-full sm:w-auto bg-[var(--space)]/50 backdrop-blur-sm border border-[var(--solid)] text-[var(--white)] placeholder-[var(--grey)] rounded-lg px-3 py-2 sm:py-3 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:border-transparent transition-all duration-200";
    const optionStyle = "bg-[var(--space)] text-[var(--white)]";

    return (
        <div className="flex flex-row sm:flex-row gap-2 sm:gap-4 items-center justify-center w-full sm:w-auto">
            <select
                value={status}
                name="status"
                className={`${selectStyle} w-1/2 sm:w-auto`}
                onChange={handleChange}
            >
                <option className={optionStyle} value="">
                    Status
                </option>
                <option className={optionStyle} value="alive">
                    Alive
                </option>
                <option className={optionStyle} value="dead">
                    Dead
                </option>
                <option className={optionStyle} value="unknown">
                    Unknown
                </option>
            </select>

            <select
                value={gender}
                name="gender"
                className={`${selectStyle} w-1/2 sm:w-auto`}
                onChange={handleChange}
            >
                <option className={optionStyle} value="">
                    Gender
                </option>
                <option className={optionStyle} value="female">
                    Female
                </option>
                <option className={optionStyle} value="male">
                    Male
                </option>
                <option className={optionStyle} value="genderless">
                    Genderless
                </option>
                <option className={optionStyle} value="unknown">
                    Unknown
                </option>
            </select>
        </div>
    );
}