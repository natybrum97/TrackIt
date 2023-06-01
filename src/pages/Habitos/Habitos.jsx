import styled from "styled-components"
import Cabeçalho from "../../components/Cabeçalho";
import FooterComponent from "../../components/FooterComponent";
import CadastrarNovoHabito from "../../components/CadastrarNovoHabito";
import NaoHaHabitos from "../../components/NaoHaHabito";
import TituloComPlus from "../../components/TituloComPlus";

export default function Habitos(props) {

    const { tela1, setTela1, tela2, setTela2 } = props

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