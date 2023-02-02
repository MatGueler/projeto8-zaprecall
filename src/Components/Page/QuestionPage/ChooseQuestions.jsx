import React from 'react';
import Correction from './Correction';
import Question from './Question';

export default function Questions({
	question,
	index,
	answer,
	resp,
	setResp,
	result,
	setResult,
	setBase,
	setPontuation,
	setboxQuestions,
}) {
	const [indexSel, setIndexSel] = React.useState('');
	const [questionSel, setQuestionSel] = React.useState('');
	const [answerSel, setAnswerSel] = React.useState('');
	const [correction, setCorrcetion] = React.useState('');

	function NotSelected({ index, icon }) {
		return (
			<div className='card'>
				<div className='question front'>
					<h2>Pergunta {index + 1}</h2>
					<ion-icon name={icon}></ion-icon>
				</div>
			</div>
		);
	}

	function ChooseIconResult({ index, icon, type }) {
		return (
			<div className='card'>
				<div className={type}>
					<h2>Pergunta {index + 1}</h2>
					<ion-icon name={icon}></ion-icon>
				</div>
			</div>
		);
	}

	function selectorQuestion(answer, question, index) {
		setQuestionSel(question);
		setAnswerSel(answer);
		setIndexSel(index);
		setResp('question');
	}

	function corretion(type) {
		let u = result;
		if (type === 'not') {
			setCorrcetion('not');
			setPontuation(1);
			u.push('E');
		}
		if (type === 'almost') {
			setCorrcetion('almost');
			u.push('M');
		}
		if (type === 'yes') {
			setCorrcetion('yes');
			u.push('C');
		}
		if (result.length === 8) {
			setBase('base done');
			setboxQuestions('questions done');
		}
		setResp('correction');
	}

	function Selected({ index }) {
		if (index === indexSel) {
			if (correction === 'not') {
				return (
					<ChooseIconResult
						index={index}
						icon={'close-circle'}
						type={'question wrong'}
					/>
				);
			}
			if (correction === 'almost') {
				return (
					<ChooseIconResult
						index={index}
						icon={'help-circle'}
						type={'question middle'}
					/>
				);
			}
			if (correction === 'yes') {
				return (
					<ChooseIconResult
						index={index}
						icon={'checkmark-circle'}
						type={'question correct'}
					/>
				);
			}
		}
	}

	if (resp === 'initial') {
		return (
			<div className='card'>
				<div className='question front'>
					<h2>Pergunta {index + 1}</h2>
					<ion-icon
						name={'play-outline'}
						onClick={() =>
							selectorQuestion(answer, question, index)
						}></ion-icon>
				</div>
			</div>
		);
	}
	if (resp === 'question') {
		return (
			<Question
				index={index}
				indexSel={indexSel}
				correction={correction}
				setResp={setResp}
				question={question}
				questionSel={questionSel}
			/>
		);
	}
	if (resp === 'answer') {
		if (correction !== '') {
			return (
				<div>
					<Selected index={index} />
				</div>
			);
		}
		if (answer === answerSel) {
			return (
				<div className='answer back'>
					<h2>{answer}</h2>

					<div className='buttons'>
						<button className='not' onClick={() => corretion('not')}>
							Não lembrei!
						</button>

						<button className='almost' onClick={() => corretion('almost')}>
							Quase não lembrei!
						</button>

						<button className='yes' onClick={() => corretion('yes')}>
							Zap!
						</button>
					</div>
				</div>
			);
		} else {
			return <NotSelected index={index} icon={'play-outline'} />;
		}
	}
	if (resp === 'correction') {
		return (
			<Correction
				index={index}
				indexSel={indexSel}
				correction={correction}
				setQuestionSel={setQuestionSel}
				setAnswerSel={setAnswerSel}
				setIndexSel={setIndexSel}
				setResp={setResp}
				answer={answer}
				question={question}
			/>
		);
	}
}
