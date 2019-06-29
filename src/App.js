import React, { Component, Fragment } from 'react';
import Button from './components/button';
import Character from './components/character';
import Logo from './img/rick-and-morty.png';
import historialButtonImg from './img/history-solid.svg';
import PageLoading from './components/pageloading';
import Historial from './components/historial';
import { MainContainer, HistorialButton, Title } from './elements';
import { withApollo } from 'react-apollo';
import GET_CHARACTER from './requests';
class App extends Component {
	state = {
		show: false,
		loading: false,
		error: false,
		character: {},
		characters: []
	};

	randomCharacter = () => {
		return Math.floor(Math.random() * (493 - 1) + 1);
	};

	componentDidMount() {
		this.generateCharacter();
	}

	generateCharacter = async () => {
		const { client } = this.props;
		const { characters } = this.state;
		this.setState({ loading: true });

		const { data, errors } = await client.query({
			query: GET_CHARACTER,
			variables: { id: this.randomCharacter() }
		});

		if (data) {
			const { character } = data;
			this.setState({ character, characters: [...characters, character] });
		} else if (errors) {
			this.setState({ error: true });
		}

		this.setState({ loading: false });
	};

	handleHistorial = e => {
		const { show } = this.state;
		this.setState({
			show: !show
		});
	};

	render() {
		const { show, characters, character, loading } = this.state;
		return (
			<Fragment>
				{loading ? (
					<PageLoading />
				) : (
					<Fragment>
						<MainContainer>
							<img src={Logo} alt="logo" width="250" />
							<Title>Character generator</Title>
							<HistorialButton onClick={this.handleHistorial}>
								<img
									alt="history button"
									src={historialButtonImg}
									width="28px"
								/>
							</HistorialButton>
							<Character character={character} />
							<Button onClick={this.generateCharacter}>Generate</Button>
						</MainContainer>
						<Historial
							show={show}
							characters={characters}
							handleHistorial={this.handleHistorial}
						/>
					</Fragment>
				)}
			</Fragment>
		);
	}
}

export default withApollo(App);
