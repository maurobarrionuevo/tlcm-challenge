import styled from "styled-components";

export const CurrentWeatherStyled = styled.div`
    background-color: ${({theme}) => theme.color.primary};
    flex:1; 
    height: 100%;
    padding:20px 0 50px 0;
    box-sizing: border-box;
    max-width: 80%;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media only screen and (min-width : 768px) {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
    };
    @media only screen and (min-width : 1117px) {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: auto;
    };
    .main-data{
        align-self: center;
    }
    .hourly-forecast{
        grid-column: 1/-1;
        grid-row: 2/2;
        // background-color: aliceblue;
        @media only screen and (min-width : 1117px) {
            grid-column: 1/5;
            grid-row: 2/2;
        };
    };
    .rain-forecast{
        grid-column: 3/-1;
        grid-row: 3/5;
        @media only screen and (min-width : 1117px) {
            grid-column: 5/-1;
            grid-row: 2/4;
        };
    };
    .extended-forecast{
        grid-column: 1/3;
        grid-row: 3/5;
    }
`