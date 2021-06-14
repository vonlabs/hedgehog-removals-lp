import styled from 'styled-components'

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${props => props.selected ? "#545454" : "#5454544D"};
  border-radius: 99px;
  margin-right: 6px;
  margin-left: 6px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;



function CarouselDots(props) {
    return (
      <Container>
        <Dot 
          selected={props.selected === 0}
          onClick={()=>{props.onClicka(0)}}
        />
        <Dot 
          selected={props.selected === 1}
          onClick={()=>{props.onClicka(1)}}
        />
        <Dot 
          selected={props.selected === 2}
          onClick={()=>{props.onClicka(2)}}
        />
        <Dot
          selected={props.selected === 3}
          onClick={()=>{props.onClicka(3)}}
        />
        <Dot
          selected={props.selected === 4}
          onClick={()=>{props.onClicka(4)}}
        />
      </Container>
    );
  }
  
export default CarouselDots;
  