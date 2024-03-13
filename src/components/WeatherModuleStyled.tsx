import styled from "styled-components";

export const WeatherModuleStyled = styled.div`
    border-radius: 10px;
    background: ${({theme}) => theme.color.secondary};
    border:1px solid ${({theme}) => theme.color.tertiary};
    display: flex;
    flex-direction: column;
    .header{
        color:white;
        border-bottom:1px solid ${({theme}) => theme.color.tertiary};
        padding:5px 10px;
        font-size:13px;
        .icon{
            opacity: .5;
            margin-right: 10px;
            font-size:12px;
        }
    }
    .component{
        flex:1;
        overflow: hidden;
        padding:15px;
        box-sizing: border-box;
    }
`