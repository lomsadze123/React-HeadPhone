import styled from 'styled-components';

export const Bolls = () => {
    return (
        <Flex>
        <DifBoll diff></DifBoll>
        <DifBoll></DifBoll>
        <Boll></Boll>
        </Flex>
    );
}

const Boll = styled.div`
    width: 30px;
    height: 30px;
    background-color: #000;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`
const Flex = styled.div`
    display: flex;
    gap: 16px;
`
const DifBoll = styled(Boll)`
    background-color: ${props => props.diff? '#E44' : '#3C81F6;'};
    border: ${props => props.diff? '4px solid black' : '4px solid white'};
`