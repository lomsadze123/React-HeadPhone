import styled from 'styled-components';
import headphone from'/src/assets/headphone.jpg';
import { Bolls } from './bolls.jsx'

export default function HeadPhones() {
  const h1 = 'Zebronics head phone';
  const price = '$100';
  const paragraph = 'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.';
  return (
    <Main>
      <Box>
        <Img src={headphone} alt="headphone" />
        <Items>
          <Heading as="h2">{price}</Heading>
          <SmlHeading>{h1}</SmlHeading>
          <Paragraph>{paragraph}</Paragraph>
          <SecParagraph>Choose your colour</SecParagraph>
          <Bolls />
          <Button about>Add to cart</Button> <br />
          <Button>Buy now</Button>
          <Anchor href="#">Read reviews</Anchor>
        </Items>
      </Box>
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: #FFC3C3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
`
const Box = styled.div`
  background-color: white;
  max-width: 400px;
  border-radius: 8px;
`
const Items = styled.div`
  padding: 24px 40px 40px;
`
const Img = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
`
const Heading = styled.h1`
  color: #333;
  font-size: 32px;
  font-weight: 700;
`
const SmlHeading = styled(Heading)`
  font-weight: 500;
  font-size: 24px;
  margin-top: 16px;
`
const Paragraph = styled.p`
  color: #333;
  font-family: 16px;
  line-height: 24px;
  margin: 8px 0 24px 0;
`
const SecParagraph = styled(Paragraph)`
  color: #666;
  margin: 0 0 16px;
`
const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  border: ${props => props.about? 'none':'1px solid #61A5FA'};
  background-color: ${props => props.about? '#FBBF23':'#FFF'};
  border-radius: 8px;
  font-size: 24px;
  padding: 14px 0 13px 0;
  margin: ${props => props.about? '32px 0 0 0': '16px 0 32px 0'};
`
const Anchor = styled.a`
  color:#61A5FA;
`