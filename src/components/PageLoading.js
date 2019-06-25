import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const PageLoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
`;

const PageLoading = () => {
	return (
		<PageLoadingContainer>
			<Loader />
		</PageLoadingContainer>
	);
};

export default PageLoading;
