import PageTemplate from '../../components/page-template'
import {Title, Text} from  '../../components/typography'
import Testimonial from '../../components/testimonial'

import styled from 'styled-components'

const Columns3 = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`


const ColumnsImage = styled.div`
  flex-shrink: 0;
  background-image: url("./assets/${props => props.assetName}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  width: 47%;
  height: 440px;
  margin: 10px 0 10px 10px;
  border-radius: 8px;
  @media (max-width: 1200px) {
    display: none;
  }
`

const ColumnsImageMobile = styled.img`
  max-width: 100%;
  max-height: 440px;
  margin: auto;
  border-radius: 8px;
  @media (min-width: 1201px) {
    display: none;
  }
`

const FourImages = styled.div`
  @media (max-width: 850px) {
      display: none;
  }
`

const FourImagesTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Image4 = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  background-image: url("./assets/${props => props.assetName}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: ${props => props.width}%;
  height: 406px;
  margin-right: ${props => props.right ? '8px' : 0};
  margin-left: ${props => props.right ? 0 : '8px' };
  margin-bottom: 16px;
  border-radius: 8px;
`


function About() {
  return (
    <PageTemplate
        title='About Us'
    >
        <Title title="Our history" />
        <Columns3>
          <Text>
            <p>The story begins with the idea of creating a reliable company which helps people to make strong decision about their life. Your experience will give you power to create a new better beginning of your life in a new place.</p>
            <p>We take care of our clients and we provide service on a highest possible quality. People matter to us. We have the right skills, right equipment and right abilities to handle your belongings with a care and our own tricks, to make the whole move fast and safe.</p>
            <p>Our knowledge about industry, working in a different removals companies and all our observations give us ability to provide the best possible service on the market.</p>
            <p>You will cope with real people, not a corporation, you can trust us. We are sure you will be extremely happy with our services.</p>
          </Text>
          <ColumnsImage
            assetName={"Photo4@2x.jpg"}
            src={"./assets/Photo4@2x.jpg"}
          />
          <ColumnsImageMobile
            assetName={"Photo4@2x.jpg"}
            src={"./assets/Photo4@2x.jpg"}
          />
        </Columns3>
        <FourImages>
          <FourImagesTop>
            <Image4
              assetName={"about1.jpg"}
              right
              width={55}
            />
          <Image4
              assetName={"about4.jpg"}
              width={45}
            />
          </FourImagesTop>
          <FourImagesTop>
            <Image4
              right
              assetName={"about6.jpg"}
              width={45}
            />
          <Image4
              assetName={"about2.jpg"}
              width={55}
            />
          </FourImagesTop>
        </FourImages>
        <Title title="Testimonials" />
        <Testimonial
          text="I had the best experience with Strong Move Removals, I moved out so many times in my life and I will always use their services. I am very happy."
          signature="Adam, London"
        />
        <Testimonial
          text="Everything on time! Friendly and well organised staff."
          signature="Mawa, London"
          right
        />
        <Testimonial
          text="I highly recommend this company, very lovely people who showed up on time. Everything has been scheduled and I received a confirmation. They called me 30min before the scheduled time to confirm again and let me know they are on their way. The whole move was super quick, they were gentle with moving my stuff. The whole experience was very positive and gave me a good kick start in a very positive, friendly atmosphere."
          signature="Darren, Manchester"
        />
        <Testimonial
          text="The team packed my belongings with a great care. Very fast and professional. These guys are good! Thank you so much."
          signature="Andrea, Southampton"
          right
        />
       <Testimonial
          text="REAL PROFESSIONALISTS!!! They took my move very seriously, helpful people with a passion. They are very nice guys, very bubbly, I felt a lot of positivity related with my moving. They were in touch with me, everything on time. Good luck guys!"
          signature="Tom, Luton"
        />
        <Testimonial
          text="I was moving from Brighton to London, I lived in Brighton for 36 years... Be honest... I had a lot stuff, I was very worried that something may go wrong, but the whole move was very quick and well organised. I was more calm with these guys, they took care of my whole life. If I will ever move again I will definitely use your services :) thank you so much for your help."
          signature="Anna, Brighton"
          right
        />
        <Testimonial
          text="You are the best. Take care."
          signature="Oussama, Manchester"
        />
    </PageTemplate>
  );
}

export default About;
