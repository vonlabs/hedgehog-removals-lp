import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components'

const SButton = styled(({ bold,  menu, ...rest }) => <MuiButton {...rest} />)`
    .MuiButton-label {
        color: rgba(255,255,255,0.6);
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    margin-top: 8px;
    margin-bottom: 8px;


    &.MuiButtonBase-root.MuiButton-root.Mui-disabled {
        background-color: rgba(0,0,0,0.1);
        .MuiButton-label {
            color: #888888;
        }
    }



    ${({ width }) => width && `
        width: ${width}px;
    `}
    ${({ bold }) => bold && `
        .MuiButton-label{
            font-weight: 600;
            color: #FFFFFF;
        }
    `}

    ${({ card }) => card && `
        width: 100%;
        height: 48px;
        margin-right: 40px;
        max-width: 460px;
        font-size: 20px;
        .MuiButton-label{
            font-weight: 600;
            color: #FFFFFF;
        }
    `}
    ${({ green }) => green && `
        background-color: #44B758;
        :hover {
            background-color: #3FAB52;
        }
    `}
    ${({ long }) => long && `
        @media (min-width: 1060px) {
            max-width: 960px;
        }
    `}

    ${({ outlined }) => outlined && `
        background-color: rgba(0,0,0,0);
        border: 2px solid #44B758;
        border-radius: 2px;
        .MuiButton-label{
            color:  #44B758;
        }
    `}

    ${({ green, outlined }) => (outlined || green) && `
        @media (max-width: 560px) {
            width: 100%;
            max-width: 460px;
            margin-right: 0;
            min-height: 48px;
            height: unset;
        }
    `}

    ${({ menu }) => menu && `
        font-size:  18px;
    `}

    ${({ lastOnMobile }) => lastOnMobile && `
        @media (max-width: 1059px) {
            order: 99;
        }
    `}

`;


function Button(props) {
    return (
        <SButton
            {...props}
        >
            {props.children}
        </SButton>
    );
  }
  
export default Button;
  