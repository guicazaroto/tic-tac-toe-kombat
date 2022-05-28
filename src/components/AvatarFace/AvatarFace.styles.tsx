import styled from 'styled-components'

export const AvatarFaceStyles = styled.div<{ source?: String }>`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 150px;
    border: 3px solid #666;
    cursor: pointer;

    ${({ source }) => source &&  `background-image: url(/avatars/${source}.png)`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const AvatarFaceContainer = styled.div`
    display: flex;
    flex-direction: column;
`