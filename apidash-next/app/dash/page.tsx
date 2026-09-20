import ApiDash from "@/components/custom/api-dash";
import ResultSection from "@/components/custom/resultSection";

//main app page
export default function Dash() {
    return (
        <div className="flex h-screen flex-col">
            <ApiDash />
            <ResultSection />
        </div>
    )
};