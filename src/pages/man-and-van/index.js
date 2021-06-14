import PageTemplate from '../../components/page-template'

import Title from '../../components/typography/title'
import styled from 'styled-components'

const Text = styled.div`
  width: 100%;
  margin-bottom: 14px;
`

const PB = styled.p`
  font-weight: 600;
  margin-bottom: 0px!important;
`

const TwoDiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`

const PerfectFor = styled.div`
  margin-top: 16px;
  margin-right: 16px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  padding: 28px;
  flex-grow: 0;
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 0;
  }
`

const Other = styled.div`
  margin-top: 16px;
  padding: 28px;
  flex-grow: 1;
  background: #44B758 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`

const OtherBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  z-index: 0;
  .OtherBackground1, .OtherBackground2 {
    background-image: url("./assets/Quote-mark1@2x.png");
    background-repeat: no-repeat;
    background-size: contain;
    height: 45%;
    flex-grow: 1;
    margin: 28px;
  }
  .OtherBackground2 {
    transform: rotate(-180deg);
    align-self: flex-end;
  }
`


const OtherText = styled.div`
  z-index: 1;
`

function Prices() {
  return (
    <PageTemplate
        title='Man & van'
    >
      <Title title="High quality solution" />
      <Text>
        <p>We provide you with an expert man with a van. We offer different size vans, with as many helpers as you need. We specialise in packing. Storage organisation. Commercial moves. We move anywhere, we move anytime. No risk of damage, safe and secured move of your belongings. We are based in London, but we are happy to travel within the whole UK, whatever you need, we will be there for you. </p>
        <p>Give us a call to speak to one of our helpful advisers. Our customers are a priority.</p>
      </Text>

      <TwoDiesContainer>
        <PerfectFor>
          <div>
            <PB>Perfect for</PB>
            <li>local move</li>
            <li>distance move</li>
            <li>furniture moves </li>
            <li>commercial move</li>
          </div>
        </PerfectFor>
        <Other>
          <OtherBackground>
            <div className="OtherBackground1" />
            <div className="OtherBackground2" />
          </OtherBackground>
          <OtherText>
            <li>Helpful advisers</li>
            <li>Service 7 days/week</li>
            <li>Last minute bookings accepted</li>
            <li>10+ years experience</li>
          </OtherText>
        </Other>
      </TwoDiesContainer>
    </PageTemplate>
  );
}

export default Prices;
