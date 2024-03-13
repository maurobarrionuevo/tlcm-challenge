import styled from 'styled-components'

type Props = {
    copy: string
}

const EmptyBlock = ({copy}: Props) => {
  return (
    <EmptyBlockStyled>
        <p>{copy}</p>
    </EmptyBlockStyled>
  )
}

export default EmptyBlock

const EmptyBlockStyled = styled.div`
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
        text-align:center;
        width: 100%;
    }
`