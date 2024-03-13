import styled from "styled-components";

export const LocationSelectorStyled = styled.aside<{showMenu: boolean}>`
    background-color: ${({theme}) => theme.color.secondary};
    position: absolute;
    top:0px;
    left:0px;
    min-height: 100%;
    width: 70%;
    z-index: 10;
    display: ${props => props.showMenu ? 'block' : 'none'};
    @media only screen and (min-width : 768px) {
        width: 17%;
        min-width: 250px;
        position: relative;
    }
    .heading{
        border-bottom:1px solid ${({theme}) => theme.color.tertiary};
        padding:15px 5px;
        text-align: right;
        display: flex;
        justify-content: space-between;
        color:${({theme}) => theme.color.tertiary};
        font-size:14px;
        margin:0 10px;
    }
    .locations{
        display: flex;
        flex-direction: column;
        gap:10px;
        padding:0 10px;
        margin-top:10px;
    }
    .empty-block{
        height: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        color: ${({theme}) => theme.color.tertiary};
        font-size:16px;
        font-weight: bold;
        padding:20px;
        box-sizing: border-box;
        p{
            margin:0;
        }
    }
`

export const SearchInput = styled.input`
    color:${({theme}) => theme.color.tertiary};
    font-size:14px;
    background: none;
    border:none;
    padding:10px;
    width: 100%;
    margin-right:15px;
`