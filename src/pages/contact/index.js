import PageTemplate from '../../components/page-template'
import styled from 'styled-components'


const Text = styled.span`
  font-size: 42px;
  line-height: 1.5;
  color: #1E1E1EBF;
  font-weight: 600;
  @media (max-width: 1150px) {
    font-size: 30px;
  }
  .text-green{
    text-decoration: none;
    white-space: nowrap;
    color: #44B758;
    &:hover{
      color: #39994A;
    } 
    @media (max-width: 399px) {
      font-size: 14px;
    }
    @media (min-width: 400px) {
      font-size: 16px;
    }
    @media (min-width: 450px) {
      font-size: 19px;
    }
    @media (min-width: 561px) {
      font-size: 22px;
    }
    @media (min-width: 1151px) {
      font-size: 30px;
    }
  }
  ${({ space }) => space && `
    margin-bottom: 24px;
  `}
`

const Table = styled.tbody`
  margin-top: 4px;
  font-size: 18px;
  td:first-child{
    padding-right: 16px;
  }
`

const NewLineMobile = styled.br`
    @media (min-width: 851px) {
      display:none;
    }
`

function Prices() {
  return (
    <PageTemplate
      title='Contact'
    >
        <Text>Email: <NewLineMobile/> <a href="mailto:office@hedgehogremovals.co.uk" className={"text-green"}>office@hedgehogremovals.co.uk</a> </Text>
        <Text space>Phone number: <NewLineMobile/>  <a href="tel:07821832274" className={"text-green"}> 0782 183 22 74 </a></Text>

        <Text>Office hours:</Text>
        <Table>
          <tr>
            <td>Monday</td>
            <td>8:00 AM - 9:00 PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>8:00 AM - 9:00 PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>8:00 AM - 9:00 PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>8:00 AM - 9:00 PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>8:00 AM - 9:00 PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>8:00 AM - 9:00 PM</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>8:00 AM - 9:00 PM</td>
          </tr>
        </Table>
    </PageTemplate>
  );
}

export default Prices;
