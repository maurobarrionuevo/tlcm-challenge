import styled from "styled-components";

export const HourlyTempStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color:white;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    @media only screen and (min-width : 550px) {
        flex-direction: column;
        width: auto;
    }
    span{
        margin:0;
    }
    .temp{
        font-size:16px;
    }
`