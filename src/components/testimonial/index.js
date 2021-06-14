import styled from 'styled-components'


const Container = styled.div`
    max-width:900px;
    margin-top: 24px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-self: ${props => props.right ? "flex-end" : "flex-start"};
`;

const Text = styled.p`
    max-width: 813px;
    padding: 24px;
    background: #E6E6E6;
    font-size: 18px;
    border-radius: 10px;
    @media (max-width: 800px) {
        padding: 14px;
    }
`;

const Comment = styled.p`
    color: #707070;
    font-style: italic;
`;

const Signature = styled.p`
    color: #1E1E1EBF;
    text-align: end;
    font-weight: 600;
`;


const Image = styled.div`
    height: 96px;
    width: 96px;
    border-radius: 99px;
    flex-grow: 0;
    flex-shrink: 0;

    margin-left: ${props => props.right ? "24px" : "0"};
    margin-right: ${props => props.right ? "0" : "24px"};
    order: ${props => props.right ? "5" : "0"};
    background-image: url("./assets/Avatar${props => props.right ? "2" : "1"}.svg");
    background-size: contain;
    @media (max-width: 800px) {
        height: 60px;
        width: 60px;
        margin-left: ${props => props.right ? "16px" : "0"};
        margin-right: ${props => props.right ? "0" : "16px"};
    }
`;



function Testimonial(props) {
    return (
        <Container
            right={props.right}
        >
            <Image
                right={props.right}
            />
            <Text>
                <Comment>{props.text}</Comment>
                <Signature>{props.signature}</Signature>
            </Text>
        </Container>
    );
  }
  
export default Testimonial;
  