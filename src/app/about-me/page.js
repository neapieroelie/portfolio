"use client"

import Header from "../components/Header"
import PageNotDone from "../components/PageNotDone"

export default function AboutMe() {
    return (
        <>
            <div className="fixed top-0 right-0 z-10 w-full">
                <Header />
            </div>
            <div className=" z-0 ">
                <PageNotDone/>
            </div>
        </>
    )
}