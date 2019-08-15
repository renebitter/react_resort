import styled from 'styled-components';
import defaultImg from '../images/placeholder-img.jpeg';

const orange="#f15025";

const StyledHero = styled.header`
    min-height: calc(100vh - 66px);
    background: url(${props => props.img || defaultImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyledHero;