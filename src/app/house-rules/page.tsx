'use client'

import RuleCards from "@/components/ui/RuleCards";

export default function HouseRules() {
return(
    <>
    <div className="flex flex-col text-center gap-y-20 justify-items-center my-48 ">
        <h1 className="font-pirata_one text-7xl text-violet">House <br/> Rules</h1>
        <div className="">
            <RuleCards/>
        </div>
    </div>

    </>
);
}