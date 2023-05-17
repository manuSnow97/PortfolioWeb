import React from "react";
import ProjectItem from "./ProjectItem";
import studiosImg from '../assets/studios.png'
import calculadoraImg from '../assets/calculadora.png'
import mercadoliebreImg from '../assets/mercadoliebre.png'
import tictactoeImg from '../assets/tictactoe.png'
import carritoImg from '../assets/carritoReact.png'

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="m-auto text-4xl font-bold text-center text-red-600">Projects</h1>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={studiosImg} title='1771 Studios' link={'https://github.com/manuSnow97/1771Studios'} />
                <ProjectItem img={mercadoliebreImg} title='Mercado Liebre' link={'https://github.com/manuSnow97/MercadoLiebre'} />
                <ProjectItem img={calculadoraImg} title='Calculadora' link={'https://calculadora-ten-jade.vercel.app/'} />
                <ProjectItem img={tictactoeImg} title='Tic-Tac-Toe' link={'https://tic-tac-toe-app-beta.vercel.app/'} />
                <ProjectItem img={carritoImg} title='Carrito de compras' link={'https://carrito-react-js.vercel.app/'} />
            </div>
        </div>
    )
}

export default Projects