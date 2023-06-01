import styled from "styled-components"
import Cabeçalho from "../../components/Cabeçalho";
import FooterComponent from "../../components/FooterComponent";
import CadastrarNovoHabito from "../../components/CadastrarNovoHabito";
import NaoHaHabitos from "../../components/NaoHaHabito";
import TituloComPlus from "../../components/TituloComPlus";
import { useEffect } from "react";
import { useContext } from 'react';
import { LoginContext } from "../../Contexts/LoginContext";
import axios from "axios";

export default function Habitos(props) {

    const { tela1, setTela1, tela2, setTela2 } = props

    const { login, listadeHabitos, setListadeHabitos } = useContext(LoginContext);
    const token = login.token;

    console.log(listadeHabitos, "lista");

    useEffect(() => {

        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const promise = axios.get(url, config);

        promise.then((resposta) => {

            setListadeHabitos(resposta.data);
            console.log(resposta.data, "lista");

        })

        promise.catch((erro) => {

            console.log(erro.response.data);

        })

    }, []);




    return (
        <>

            <Cabeçalho />

            <TituloComPlus titulo={"Meus hábitos"} display={"block"} onClick={() => {
                setTela1(false);
                setTela2(true);
            }} />


            <ContainerHabitos>

                {tela1 && (
                    <NaoHaHabitos />

                )}

                {tela2 && (
                    <>
                        <CadastrarNovoHabito setTela1={setTela1} tela2={tela2} setTela2={setTela2} />

                        <NaoHaHabitos />
                    </>
                )}


            </ContainerHabitos>

            <FooterComponent />

        </>

    )
}

const ContainerHabitos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width:100%;
    height: auto;
    background-color:#F2F2F2;
`
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width:100%;
    height: auto;
    background-color:#F2F2F2;
`
const HabitoContainer = styled.div`
    height: 91px;
    width: calc(100vw - 34px);
    border-radius: 5px;
    background: #FFFFFF;
`
