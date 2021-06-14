import React, { useState } from 'react';
import PageTemplate from '../../components/page-template'
import {Title, SmallTitle, GreenTitle} from  '../../components/typography'
import styled from 'styled-components'

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import {ChevronRight, ChevronLeft} from '@material-ui/icons/';

import CarouselDots from '../../components/carousel-dots'


const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    display: none;
  }
  .van-type{
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;


const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  @media (max-width: 799px) {
    display: none;
  }
`;


const SPaper = styled(({ displayNone,  ...rest }) => <Paper {...rest} />)` 
  padding: 16px;
  animation: opac 0.8s;
  ${({ displayNone }) => displayNone && `
      display: none;
  `}
`;

const Inside = styled.div`
  height: 300ox;
  flex-grow: 1;
  padding: 16px;
`;

const SIconButton = styled(IconButton)`
  height: 48px;
  width: 48px;
  margin-top: 200px;
`


const Titles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
  div:last-child {
    margin-left: 16px;
  }
`

const Columns3 = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 799px) {
    flex-direction: column-reverse;
  }
`

const ColumnsText = styled.div`
  flex-grow: 1;
  font-size: 18px;
  p {
    margin-bottom: 16px;
  }
`

const PB = styled.p`
  font-weight: 600;
  margin-bottom: 0px!important;
`

const ColumnsImageDiv = styled.div`
  flex-shrink: 0;
  background-image: url("./assets/${props => props.assetName}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  height: 300px;
  width: 280px;
  margin: 10px;
  border-radius: 8px;
  @media (max-width: 799px) {
    width: 100%;
    margin: 8px 0 12px 0;
  }
  
  ${({ long }) => long && `
    width: 508px;
    background-size: cover;
    @media (max-width: 900px) {
      width: 35vw;
    }
    @media (min-width: 800px) {
      max-width: 50%;
      background-size: cover;
      height: unset;
    }
  `}

@media (max-width: 799px) {
  display: none;
}
`

const ColumnsImageMobile = styled.img`
  max-width: 100%;
  max-height: 440px;
  margin: auto;
  border-radius: 8px;
  margin-bottom: 16px;
  @media (min-width: 800px) {
    display: none;
  }
`

function ColumnsImage(props) {
  return (
    <React.Fragment>
      <ColumnsImageDiv {...props} />
      <ColumnsImageMobile 
        src={`./assets/${props.assetName}`} 
      />
    </React.Fragment>
  )
}

function MediumVans(props) {
  return (
    <SPaper
      className={"van-type"}
      displayNone={props.displayNone}
    >
      <Titles>
        <SmallTitle title="Medium vans" />
        <GreenTitle title="PRICES FROM 30 GBP / HOUR" />
      </Titles>
      <Columns3>
        <ColumnsText>
          <p>Perfect for one or two people moving out. Fits for around up to 30 boxes, depending on their size. Small furniture. Room or studio.</p>
          <p>If you are not sure which option you should choose, please feel more than welcome to give us a call or fill in the quote. We will help you to choose the best possible option.</p>
        
          <PB>Loading area:</PB>
          <li>5,8 cubic meters (m3)</li>
          <li>lenght : 2.37m / 7.77 ft</li>
          <li>height : 1.45m / 4.75 ft </li>
          <li>width : 1.70m / 5.69 ft</li>
        </ColumnsText>
        <ColumnsImage
          assetName={"transit-custom-mirror.jpg"}
        />
      </Columns3>
    </SPaper>
  );
}


function LargeVans(props) {
  return (
    <SPaper
      className={"van-type"}
      displayNone={props.displayNone}
    >
      <Titles>
        <SmallTitle title="Large vans" />
        <GreenTitle title="PRICES FROM 40 GBP / HOUR" />
      </Titles>
      <Columns3>
        <ColumnsText>
          <p>Fits for around up to 40 boxes, alongside with a small furniture. Perfect for one bedroom flat. </p>
          <p>If you are not sure which option you should choose, please feel more than welcome to give us a call or fill in the quote. We will help you to choose the best possible option.</p>
          <PB>Loading area:</PB>
          <li>10,4 cubic meters (m3)</li>
          <li>lenght : 3.37m / 11.15 ft</li>
          <li>height : 1.80m / 5.90 ft </li>
          <li>width : 1.70m / 5.69 ft</li>
          </ColumnsText>
        <ColumnsImage
          assetName={"transit-mirror.jpg"}
        />
      </Columns3>
      </SPaper>
  );
}

function ExtraLargeVans(props) {
  return (
    <SPaper
      className={"van-type"}
      displayNone={props.displayNone}
    >
      <Titles>
        <SmallTitle title="Extra Large vans" />
        <GreenTitle title="PRICES FROM 45 GBP / HOUR" />
      </Titles>
      <Columns3>
        <ColumnsText>
          <p>If you're somewhere between transporting a few belongings and a full-on move the Extra Large Van cloud be right for you. Often favoured by people leaving a studio or one bedroom flat , cleaning out furniture from garage. Our ExL Van is capable of transporting plenty of boxes as well as larger household items and smoller fornitures.</p>
          <PB>Loading area:</PB>
          <li>14,5 cubic meters (m3)</li>
          <li>lenght : 4.50m / 14.91 ft</li>
          <li>height : 1.90m / 6.29 ft </li>
          <li>width : 1.70m / 5.69 ft</li>
        </ColumnsText>
        <ColumnsImage
          assetName={"Extra-large-van.jpg"}
        />
      </Columns3>
      </SPaper>
  );
}


function LutonVans(props) {
  return (
    <SPaper
      className={"van-type"}
      displayNone={props.displayNone}
    >
      <Titles>
        <SmallTitle title="Luton vans" />
        <GreenTitle title="PRICES FROM 50 GBP / HOUR" />
      </Titles>
      <Columns3>
        <ColumnsText>
          <p>The most popular choice for moves. The van can load a lot of your belongings, it is usually used for small houses, two bedroom flat or more. Fits for up to 50 boxes, and the rest of your furniture (2 beds, washing machine, sofa, fridge, table with chairs, wardrobe, drawer). </p>
          <p>If you are not sure which option you should choose, please feel more than welcome to give us a call or fill in the quote. We will help you to choose the best possible option.</p>
          <p>Minimum charge for 2 hours!</p>
          <p>If we need to stay longer we are always available, so don`t worry if anything will take longer or there will be any delays. We are here from the beginning till the end.</p>
          <PB>Loading area:</PB>
          <li>19,6 cubic meters (m3)</li>
          <li>lenght : 4.50m / 14.91 ft</li>
          <li>height : 2.20m / 7.26 ft </li>
          <li>width : 1.98m / 6.59 ft</li>
        </ColumnsText>
        <ColumnsImage
          assetName={"Luton-van-png.jpg"}
        />
      </Columns3>
      </SPaper>
  );
}


function BetweenCitiesText(props) {
  return (
    <ColumnsText>
      <p>Thanks to the Hedgehog Removal team, moving from {props.city1} to {props.city2} is quick and stress-free Our team will make your {props.city1} to {props.city2} move smoothly and without unnecessary problems for you.</p>
      <p>The difference between us and other companies is that there are no hidden costs.</p>
      <p>Our {props.city1}-{props.city2} service is offered in 4 options to suit your needs.  We offer 4 sizes of vans: Small, Large, Extra Large and Luton.</p>
      <p>We offer a 10% discount for students, and no additional charges for traffic delays up to 1 hour</p>
    </ColumnsText>
  )
}

function BetweenCities(props) {
  return (
    <SPaper
      className={"van-type"}
      displayNone={props.displayNone}
    >
      <div>
        <Titles>
          <SmallTitle title="London - Oxford" />
          <GreenTitle title="PRICES FROM 115 GBP" />
        </Titles>
        <Columns3>
          <BetweenCitiesText city1="London" city2="Oxford" />
          <ColumnsImage
            assetName={"Oxford_cropped.jpg"}
            long
            city
          />
        </Columns3>
      </div>
      <div>
        <Titles>
          <SmallTitle title="London - Manchester" />
          <GreenTitle title="PRICES FROM 325 GBP" />
        </Titles>
        <Columns3>
        <BetweenCitiesText city1="London" city2="Manchester" />
          <ColumnsImage
            assetName={"Manchester_cropped.jpg"}
            long
            city
          />
        </Columns3>
      </div>
      <div>
        <Titles>
          <SmallTitle title="London - Cambridge" />
          <GreenTitle title="PRICES FROM 120 GBP" />
        </Titles>
        <Columns3>
          <BetweenCitiesText city1="London" city2="Cambridge" />
          <ColumnsImage
            assetName={"Cambridge_cropped.jpg"}
            long
            city
          />
        </Columns3>
      </div>
      </SPaper>
  );
}



function Prices() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleBack = () => {
    switch(activeSlide) {
      case 0:
        setActiveSlide(3);
        break;
      case 1:
        setActiveSlide(0);
        break;
      case 2:
        setActiveSlide(1);
        break;
      case 3:
        setActiveSlide(2);
        break;
      case 4:
        setActiveSlide(3);
        break;
    }
  }; 

  const handleForward = () => {
    switch(activeSlide) {
      case 0:
        setActiveSlide(1);
        break;
      case 1:
        setActiveSlide(2);
        break;
      case 2:
        setActiveSlide(3);
        break;
      case 3:
        setActiveSlide(4);
        break;
      case 4:
        setActiveSlide(0);
        break;
    }
  }; 

  


  return (
    <PageTemplate
        title='Prices'
    >
      <Title title="Van sizes & prices:" />
      <CarouselContainer>
        <SIconButton
          onClick={handleBack}
        >
          <ChevronLeft/>
        </SIconButton>
        <Inside>
          <MediumVans displayNone={activeSlide !== 0} />
          <LargeVans displayNone={activeSlide !== 1}/>
          <ExtraLargeVans displayNone={activeSlide !== 2}/>
          <LutonVans displayNone={activeSlide !== 3}/>
          <BetweenCities displayNone={activeSlide !== 4}/>
          <CarouselDots 
            selected={activeSlide}
            onClicka={(input)=>{
              setActiveSlide(input)
            }}
          />
        </Inside>
        <SIconButton
          onClick={handleForward}
        >
          <ChevronRight/>
        </SIconButton>
      </CarouselContainer>
      <MobileContainer>
        <MediumVans/>
        <LargeVans/>
        <ExtraLargeVans/>
        <LutonVans/>
        <BetweenCities/>
      </MobileContainer>
    </PageTemplate>
  );
}

export default Prices;
