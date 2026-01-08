"use client";

import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const Stats = () => {
    return (
        <div className=" md:px-6 px-4">
            <h2 className="mb-8 text-center text-4xl font-bold tracking-tight leading-tight">
                CNC in Numbers
            </h2>

            <div className="flex flex-col items-center justify-center sm:flex-row">
                <Stat
                    num={20}
                    prefix="+"
                    suffix=""
                    subheading="Successful Event"
                />
                <div className="h-[1px] w-12 bg-indigo-200 dark:bg-indigo-800 sm:h-12 sm:w-[1px]" />
                <Stat
                    num={160}
                    prefix=""
                    suffix=""
                    subheading="Media Coverage"
                />
                <div className="h-[1px] w-12 bg-indigo-200 dark:bg-indigo-800 sm:h-12 sm:w-[1px]" />
                <Stat
                    num={30}
                    prefix="+"
                    suffix=""
                    subheading="Happy Customer"
                />
            </div>
            <div className="flex flex-col items-center justify-center sm:flex-row mt-4">
                <Stat
                    num={20}
                    prefix="+"
                    suffix=""
                    subheading="Years of Experience"
                />
                <div className="h-[1px] w-12 bg-indigo-200 dark:bg-indigo-800 sm:h-12 sm:w-[1px]" />
                <Stat
                    num={53}
                    prefix=""
                    suffix=""
                    subheading="Brand Identity"
                />
                <div className="h-[1px] w-12 bg-indigo-200 dark:bg-indigo-800 sm:h-12 sm:w-[1px]" />
                <Stat
                    num={18}
                    prefix="+"
                    suffix=""
                    subheading="Marketing Campaign"
                />
            </div>
        </div>
    );
};
export default Stats;

interface Props {
    num: number;
    prefix?: string;
    suffix: string;
    decimals?: number;
    subheading: string;
}

const Stat = ({ num, prefix = "", suffix, decimals = 0, subheading }: Props) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex w-72 flex-col items-center py-8 sm:py-0">
            <p className="mb-2 text-center text-5xl font-semibold sm:text-5xl">
                {prefix}
                <span ref={ref}></span>
                {suffix}
            </p>
            <p className="max-w-48 text-center text-neutral-600 dark:text-neutral-400">{subheading}</p>
        </div>
    );
};

