import styled, { css } from "styled-components";
import { LocationItemProps } from "./LocationItem";

export const LocationItemStyled = styled.button<Partial<LocationItemProps>>`
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 600;
    color: ${({theme}) => theme.color.gray};
    background: none;
    border:none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 3fr 1fr;
    text-align: left;
    height: 100px;
    align-items: center;
    &:not(:last-child) {
        border-bottom: 1px solid ${({theme}) => theme.color.darkBorders};
    }
    &:hover {
        background-color: ${({theme}) => theme.color.gray};
        border-radius: 5px;
        border: none;
        cursor: pointer;
        color: white;
    }
    ${props => props.selected && css`
        background-color: ${({theme}) => theme.color.gray};
        border-radius: 5px;
        border: none;
        cursor: pointer;
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
            .state{
                line-height: 20px;
            }
        }
    }
    .country{
        justify-self: self-end;
        align-self: self-start;
    }
`;