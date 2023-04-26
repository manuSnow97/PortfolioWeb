import React from "react";
import ResumeItem from "./ResumeItem";
import CurriculumEng from "../assets/curriculumeng.png";
import CurriculumSp from "../assets/curriculumesp.png";

const Resume = () => {
    return (
        <div>
            <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
                <h1 className="text-4xl font-bold text-center text-red-600">Resume</h1>
                <div className="grid sm:grid-cols-2 gap-12">
                    <ResumeItem img={CurriculumEng} title='CV (English)' link={'https://drive.google.com/file/d/13r7r_ppdm92zWLA3kpKic1GTabe4H90z/view?usp=share_link'} />
                    <ResumeItem img={CurriculumSp} title='CV (Español)' link={'https://drive.google.com/file/d/1C7y-Y2UteaBkZGNYg2QWHTYStPBflviJ/view?usp=share_link'} />
                </div>
            </div>
        </div>
    )
}

export default Resume