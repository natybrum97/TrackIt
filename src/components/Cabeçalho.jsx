import styled from 'styled-components';

export default function Cabeçalho() {

    return (
        <PageContainerTopo>

        <PageContainer>

            <NavContainer>

                <h1>TrackIt</h1>
                <img src='https://www.ocasaldafoto.com/wp-content/uploads/2018/09/Foto-de-Paisagem-Lago-da-Pampulha-Belo-Horizonte-Charles-Torres.jpg' />

            </NavContainer>

        </PageContainer>

    </PageContainerTopo>
    )
}

const PageContainerTopo = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 70px;
    background-color: #126BA5;
    width:100%;
    box-shadow: 0px 4px 4px 0px #00000026;
    position: fixed;
    top: 0;
    margin-bottom:28px;

`
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: calc(100vw - 36px);
    background-color: #126BA5;

    h1 {
        height: 49px;
        width: 97px;
        left: 18px;
        top: 10px;
        border-radius: nullpx;
        color: #FFFFFF;
        font-family: Playball;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        letter-spacing: 0em;
        text-align: left;
    }
    img {
        height: 51px;
        width: 51px;
        border-radius: 98.5px;
        object-fit: cover;
    }
`