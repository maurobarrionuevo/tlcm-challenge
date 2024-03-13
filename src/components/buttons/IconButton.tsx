import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

type Props = {
    onClick: () => void,
    icon: IconName
    title?: string
    spin?: boolean
}

const IconButton = ({onClick, icon, title, spin}: Props) => {
  return (
    <IconButtonStyled onClick={onClick} title={title}>
        <FontAwesomeIcon icon={icon} className="icon" spin={spin}/>
    </IconButtonStyled>
  )
}

export default IconButton

const IconButtonStyled = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    .icon {
        color: white;
        &:hover {
            color: darkgray;
        }
    }
`