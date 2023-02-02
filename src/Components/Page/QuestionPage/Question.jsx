import setinha from '../../../Assets/IMG/setinha.png';
export default function Question({
	index,
	indexSel,
	correction,
	setResp,
	question,
	questionSel,
}) {
	function selectorAnswer() {
		setResp('answer');
	}
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

	// Show questions already have answered
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

	// Answer structure
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

	if (correction !== '') {
		return (
			<div>
				<Selected index={index} />
			</div>
		);
	} else {
		if (question === questionSel) {
			return (
				<div className='card'>
					<div className='answer front'>
						<h2>{question}</h2>
						<img src={setinha} onClick={selectorAnswer} alt='' />
					</div>
				</div>
			);
		} else {
			return <NotSelected index={index} icon={'play-outline'} />;
		}
	}
}
