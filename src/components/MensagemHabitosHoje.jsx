import styled from 'styled-components';
import { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';
import { useState } from 'react';
import { useEffect } from 'react';

export default function MensagemHabitosHoje() {
    const { habitosdeHoje, porcentagem } = useContext(LoginContext);
    const [mensagem, setMensagem] = useState('');
    const [showCompleted, setShowCompleted] = useState(false);
  
    useEffect(() => {
      if (habitosdeHoje.length > 0 || porcentagem > 0) {
        setMensagem(`${porcentagem}% dos hábitos concluídos`);
        setShowCompleted(true);
      } else if (!showCompleted) {
        setMensagem(null);
      } else {
        setMensagem('Nenhum hábito concluído ainda');
      }
    }, [habitosdeHoje, porcentagem]);
  
    return <HabitosConcluidos data-test="today-counter" concluido={porcentagem > 0}>{mensagem}</HabitosConcluidos>;
  }

const HabitosConcluidos = styled.div`
    width: calc(100vw - 34px);
    height: 22px;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: ${({ concluido }) => (concluido ? '#8FC549' : '#BABABA')};
    margin-left: 18px;
`