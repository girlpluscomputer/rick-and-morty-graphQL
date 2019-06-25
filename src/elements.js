import styled from 'styled-components';

const MainContainer = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	font-family: "Roboto", sans-serif;
`;

const Header = styled.div`
	display: flex;
	flex-direction: column;
`;

const HistorialButton = styled.div`
	border: none;
	position: absolute;
	top: 70px;
	right: 100px;
	cursor: pointer;
	color: blueviolet;
`;

const Title = styled.div`
	font-size: 14px;
	padding: 10px 0;
`;

export { MainContainer, Header, HistorialButton, Title };
