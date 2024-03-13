import styled from "styled-components";

export const DailyTempsStyled = styled.div<{ range: number }>`
    color:white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 3fr 1fr;
    gap:5px;
    span{
        margin:8px 0;
        justify-self: center;
        align-self: center;
    }
    .temperature-bar{
        height: 5px;
        background-color: ${({theme}) => theme.color.light_secondary};
        align-self: center;
        position: relative;
        width: 100%;
        .temp-range{
            position: absolute;
            background: ${`linear-gradient(to right,#BFCA86 ${0}%,#F25E2D ${100}%);`};
            height: 5px;
            left: ${props => props.range && `${(100 - props.range) / 2}%`};
            width: ${props => props.range && `${props.range}%`};
            border-radius:3px;
        }
    }
`