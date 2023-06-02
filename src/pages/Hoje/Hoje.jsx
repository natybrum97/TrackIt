import Cabeçalho from "../../components/Cabeçalho"
import TituloComPlus from "../../components/TituloComPlus"
import FooterComponent from "../../components/FooterComponent"
import HabitosDeHoje from "../../components/HabitosDeHoje";
import styled from 'styled-components';
import { useContext } from 'react';
import { LoginContext } from "../../Contexts/LoginContext";
import { useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function Hoje() {

    const { login, habitosdeHoje, setHabitosdeHoje, porcentagem } = useContext(LoginContext);
    const token = login.token;

    dayjs.locale('pt-br');
    const diadesemana = dayjs().format('dddd').replace('-feira', '');
    const primeiroCaracter = diadesemana.charAt(0).toUpperCase();
    const restante = diadesemana.slice(1);
    const diaSemanaFormatado = primeiroCaracter + restante;
    const data = dayjs().format('DD/MM');

    useEffect(() => {

        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

        const promise = axios.get(url, config);

        promise.then((resposta) => {

            console.log(resposta.data, "lista");
            setHabitosdeHoje(resposta.data);

        })

        promise.catch((erro) => {

            console.log(erro.response.data);

        })

    }, []);

    return (
        <>

            <Cabeçalho />

            <TituloComPlus titulo={diaSemanaFormatado + ", " + data} display={"none"} margin={"0px"} />

            <Central>

            <HabitosConcluidos data-test="today-counter" concluido={porcentagem > 0}>

                {habitosdeHoje.length === 0 || porcentagem === 0
                    ? "Nenhum hábito concluído ainda"
                    : `${porcentagem}% dos hábitos concluídos`}
                    
            </HabitosConcluidos>

                <HabitosDeHoje />

            </Central>

            <FooterComponent />

        </>

    )
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
`
const Central = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`