import styled from 'styled-components'

const Container = styled.div`
  width: 0;
  height: 0;
`;

const Image = styled.div`
  background-image: url("./assets/${props => props.assetName}");
  width: 0;
  height: 0;
`;

const images = [
  "Avatar1.svg",
  "Avatar2.svg",
  "Get+your+quote-illustration+1.svg",
  "Get+your+quote-illustration+2.svg",
  "Get+your+quote-illustration+3.svg",
  "Get+your+quote-illustration+4.svg",
  "Luton-van-png.jpg",
  "transit-custom-mirror.jpg",
  "transit-mirror.jpg",
  "Quote-mark1@2x.png",
  "Extra-large-van.jpg",
  "Photo4@2x.jpg",
  "Cambridge_cropped.jpg",
  "Manchester_cropped.jpg",
  "Oxford_cropped.jpg",
  "about1.jpg",
  "about2.jpg",
  "about4.jpg",
  "about6.jpg",
]

function ImageLoader() {
    return (
        <Container>
          {
            images.map(image => 
                <Image 
                  assetName={image} 
                  key={image} 
                />
            )
          }
        </Container>
    );
  }
  
export default ImageLoader;