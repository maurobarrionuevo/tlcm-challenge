import styled, { css } from "styled-components";
import { LocationItemProps } from "./LocationItem";

export const LocationItemStyled = styled.div<Partial<LocationItemProps>>`
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray};
    background: none;
    border: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 3fr 1fr;
    text-align: left;
    height: 100px;
    align-items: center;
    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.color.darkBorders};
    }
    &:hover {
        background-color: ${({ theme }) => theme.color.gray};
        border-radius: 5px;
        border: none;
        /* cursor: pointer; */
        color: white;
    }
    ${props =>
        props.selected &&
        css`
            background-color: ${({ theme }) => theme.color.gray};
            border-radius: 5px;
            border: none;
            color: white;
        `}
    .location {
        .top {
            display: flex;
            flex-direction: column;
            .name {
                font-size: 22px;
                font-weight: bold;
                color: white;
            }
            .state {
                line-height: 20px;
            }
        }
    }
    .country {
        span {
            display: block;
        }
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        height: 100%;
    }
`

export const LocationItemButton = styled.button`
    background: none;
    border: none;
    text-align: left;
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: white !important;
    transition: color 0.5 ease;
    &:hover {
        color: darkgray !important;
    }
`