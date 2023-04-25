import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: 2022,
        title: 'Experiencia basada en el proyecto en Digital House',
        duration: '1 Año',
        details: 'Participación en el desarrollo de aplicaciones web completas, trabajando en el Front-end y Back-end de los proyectos. Diseño y creación de bases de datos utilizando tecnologías como MySQL y PHPMyAdmin. Aprender y aplicar las mejores prácticas de programación, incluido el uso de patrones de diseño y la implementación de buenas prácticas de seguridad.'

    },
    {
        year: 2017,
        title: 'Empleado administrativo legal',
        duration: '6 Años',
        details: 'Asistencia al abogado principal, trámites web (sau.pjn.gov.ar; anses.gov.ar; afip.gov.ar). Elaboración de certificados, oficios y escrituras. Montaje, edición y digitalización de documentos y escritos jurídicos.'

    }
]
const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-red-600">Work</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    )
}

export default Work