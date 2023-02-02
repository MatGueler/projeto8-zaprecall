// import Questions from "./Questions"
import React from 'react';

import Questions from './ChooseQuestions';

import logo from '../../../Assets/IMG/logo.png';
import { Finish } from './FinalResultComponent';

export default function OpenQuestions({ objct, setPage, qtd }) {
	const [result, setResult] = React.useState([]);

	const [resp, setResp] = React.useState('initial');

	const [base, setBase] = React.useState('base');

	const [boxQuestions, setboxQuestions] = React.useState('questions');

	const [pontuation, setPontuation] = React.useState(0);

	return (
		<>
			<div className='page-questions'>
				<div className='top-questions'>
					<img src={logo} alt='' />
					<h1>ZapRecall</h1>
				</div>

				<div className={boxQuestions}>
					{objct.map(function (element, index) {
						return (
							<Questions
								key={index}
								question={element.question}
								index={index}
								answer={element.answer}
								resp={resp}
								setResp={setResp}
								result={result}
								setResult={setResult}
								setBase={setBase}
								setPontuation={setPontuation}
								setboxQuestions={setboxQuestions}
							/>
						);
					})}
				</div>

				<div className={base}>
					<Finish result={result} pontuation={pontuation} setPage={setPage} />
				</div>
			</div>
		</>
	);
}
