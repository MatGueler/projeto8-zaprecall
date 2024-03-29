import React, { useState } from 'react';

import OpenQuestions from '../QuestionPage/QuestionsPage.jsx';

import logo from '../../../Assets/IMG/logo.png';

export function InitialPage(props) {
	const [page, setPage] = useState(props.page);

	const [qtd, setQtd] = useState(0);

	function comparador() {
		return Math.random() - 0.5;
	}

	let objct = [
		{
			question: 'O que é JSX?',
			answer: 'Uma extensão de linguagem do JavaScript',
		},
		{
			question: 'O React é __',
			answer: 'uma biblioteca JavaScript para construção de interfaces',
		},
		{ question: 'Componentes devem iniciar com __', answer: 'letra maiúscula' },
		{ question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' },
		{
			question: 'O ReactDOM nos ajuda __',
			answer: 'interagindo com a DOM para colocar componentes React na mesma',
		},
		{
			question: 'Usamos o npm para __',
			answer: 'gerenciar os pacotes necessários e suas dependências',
		},
		{
			question: 'Usamos props para __',
			answer: 'passar diferentes informações para componentes',
		},
		{
			question: 'Usamos estado (state) para __',
			answer:
				'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
		},
	];

	if (page === 'initial') {
		objct.sort(comparador);
		return (
			<div className='background-page-initial'>
				<div className='initial-menu'>
					<img src={logo} alt='' />
					<h1>ZapRecall</h1>
					<button onClick={() => setPage('QuestionsPage')}>
						Iniciar Recall
					</button>
				</div>
			</div>
		);
	} else {
		objct.sort(comparador);
		return (
			<>
				<OpenQuestions
					objct={objct}
					setPage={setPage}
					qtd={qtd}
					setQtd={setQtd}
				/>
			</>
		);
	}
}
