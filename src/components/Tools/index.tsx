import React, {memo, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from './styles';

import ToolsImage from '../../assets/images/tools';


const Tools = memo(() => {

  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        once: true, 
      })
    }, 0)
  }, [])
  
  return (
    <Container>
      <div>
        <ToolsImage/>
      </div>
      <div data-aos='zoom-in-up'>
        <h4>Ferramentas e habilidades</h4>
        <p>
          Escrever código é uma embarcação complexa. Colocamos
          o melhor ambiente e ferramentas a nossos desenvolveres
          para a melhor experiência e caminharmos a uma melhor 
          base de código.
        </p>
      </div>
    </Container>
  )
})

export default Tools;