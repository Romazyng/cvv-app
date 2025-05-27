import Education from "./Edu";
import Experience from "./Exp";

import { v4 as uuidv4 } from 'uuid';

type MainCardProps = {
    description: any,
    experienceState: any,
    educationState: any
}

export default function MainCard({description, experienceState, educationState}: MainCardProps) {
    const experience = []
    const education = []

    for (let i = 0; i < experienceState; i++) {
        const node = (
            <Experience 
                key={uuidv4()}
                position={educationState[i][1]}
                company={educationState[i+1][1]}
                city={educationState[i+2][1]}
                from={educationState[i+3][1]}
                to={educationState[i+4][1]}
            />
        )
        experience.push(node)
        i += 4
    }
    for (let i = 0; i < educationState; i++) {
        const node = (
            <Education 
                key={uuidv4()}
                name={educationState[i][1]}
                city={educationState[i+1][1]}
                degree={educationState[i+2][1]}
                subject={educationState[i+3][1]}
                from={educationState[i+4][1]}
                to={educationState[i+5][1]}
            />
        )
        education.push(node)
        i += 5
    }
    return (
        <div
            className="bg-gray-100 flex flex-col p-10 gap-8"
            style={{ gridArea: 'main' }}
        >
            <div className="flex flex-col gap-3">
                <h4 className="border-b text-blue-900 border-gray-300 text-2xl font-semibold capitalize">
                    description
            </h4>
            <div className="italic text-2xl text-gray-800">
                {description || '-'}
            </div>
            </div>
            <div className="flex flex-col gap-5 text-gray-800">
                <h4 className="border-b text-blue-900 border-gray-300 text-2xl font-semibold capitalize">
                    experience
                </h4>
                {experience.length > 0 ? experience : '-'}
            </div>
            <div className="flex flex-col gap-5 text-gray-800">
                <h4 className="border-b text-blue-900 border-gray-300 text-2xl font-semibold capitalize">
                    education
                </h4>
                {education.length > 0 ? education : '-'}
            </div>
        </div>
    )
}