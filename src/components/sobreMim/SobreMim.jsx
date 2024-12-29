import React from 'react'
import'./sobreMim.style.css'
import img from '../../assets/img/sobremim.png'
import BtnSalvarCurriculo from '../btnSalvarCurriculo/BtnCurriculo'

export default function Sobremim() {
  return (
    <section id='sobremim'>
      <article className='imgSobreMim'>
        {/* <img src="https://my-portfolio-lp.vercel.app/assets/about-illustration.svg" alt="" srcset="" /> */}
        <img src={img} width="450" alt="" />
      </article>
      <article className='txtSobreMim'>
        <h1>Sobre Mim</h1>
        <h3>
        Meu nome é Willian Borges, tenho 40 anos e sou graduando em Análise e 
        Desenvolvimento de Sistemas pela Universidade Cândido Mendes, com 
        conclusão prevista para abril de 2025. Atuo na área de tecnologia 
        desde 2019, desenvolvendo sites, aplicativos móveis e sistemas completos.
        </h3>
        <h3>
        Iniciei na programação com HTML, CSS e JavaScript, ampliando meu 
        conhecimento para <span>TypeScript</span>, <span>ReactJS</span>, <span>NodeJS</span> e <span>React Native</span>. 
        Tenho experiência em Front-End e Back-End, trabalhando com bancos de dados 
        relacionais e NoSQL. Atualmente, aprimoro habilidades com Tailwind, 
        Material UI e MySQL, focando no desenvolvimento fullstack para criar 
        soluções tecnológicas de alto impacto.
        </h3>
        <BtnSalvarCurriculo />
      </article>
    </section>
  )
}
