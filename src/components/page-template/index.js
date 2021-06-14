import styled from 'styled-components'



const Page = styled.div`
    width: 100%;
`;

const CenterGreen = styled.div`
    width: 100%;
    background: #44B758 0% 0% no-repeat padding-box;
    display: inline-flex;
    justify-content: center;
    height: 115px;

    @media (max-width: 850px) {
        height: 70px;
    }

`;

const Centered = styled.div`
    width: 100%;
    max-width: 1502px;
//    max-width: 502px;
 //   background: orange;
    display: flex;
    margin-left: 24px;
    margin-right: 36px;
    @media (max-width: 560px) {
        margin-left: 12px;
        margin-right: 28px;
    }
`;

const TitleContainer = styled.div`
   @media (max-width: 850px) {
        margin-left: 34px;
   }
   @media (max-width: 560px) {
        margin-left: 46px;
    }
`;

const Title = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 72px;
    text-transform : uppercase;
    height: 101px;
    color: #FFFFFF;
    font-weight: 800;

    font-size: 58px;
    height: 70px;
    margin-top: 20px;

    @media (max-width: 850px) {
        font-size: 34px;
        height: 46px;
        margin-top: 6px;
    }
`;

const Line = styled.div`
    width: 100%;
    height: 10px;
    background: #8DF49F;

    @media (max-width: 850px) {
        height: 6px;
    }
`;


const Center = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: center;
`;

const Content = styled.div`
    margin-top: 16px;
    margin-bottom: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;



function PageTitle(props) {
    return (
        <Page>
            <CenterGreen>
                <Centered>
                    <TitleContainer>
                        <Title>
                            {props.title}
                        </Title>
                        <Line/>
                    </TitleContainer>
                </Centered>
            </CenterGreen>
            <Center>
                <Centered>
                    <Content>
                        {props.children}
                    </Content>
                </Centered>
            </Center>
        </Page>
    );
  }
  
export default PageTitle;
  