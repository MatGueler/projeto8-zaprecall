import party from '../../../Assets/IMG/party.png';

import sad from '../../../Assets/IMG/sad.png';

export function Finish({ result, pontuation, setPage }) {
	function IconsResult({ index, element }) {
		if (element === 'C') {
			return (
				<div className='correct'>
					<ion-icon className='correct' name='checkmark-circle'></ion-icon>
				</div>
			);
		}
		if (element === 'E') {
			return (
				<div className='wrong'>
					<ion-icon className='wrong' name='close-circle'></ion-icon>
				</div>
			);
		}
		if (element === 'M') {
			return (
				<div className='middle'>
					<ion-icon className='middle' name='help-circle'></ion-icon>
				</div>
			);
		}
	}
	if (result.length !== 8) {
		return (
			<>
				<h3>{result.length}/8 CONCLUÍDOS</h3>
				<div className='icons-result'>
					{result.map(function (element, index, result) {
						return <IconsResult key={index} element={element} />;
					})}
				</div>
			</>
		);
	} else {
		if (pontuation === 0) {
			return (
				<>
					<div className='resultado'>
						<img src={party} alt='' />
						<h3>Parabéns!</h3>
					</div>
					<h3>Você não esqueceu de nenhum flashcard!</h3>
					<h3>{result.length}/8 CONCLUÍDOS</h3>
					<div className='icons-result'>
						{result.map(function (element, index, result) {
							return <IconsResult key={index} element={element} />;
						})}
					</div>
					<button onClick={() => setPage('initial')}>REINICIAR RECALL</button>
				</>
			);
		} else {
			return (
				<>
					<div className='resultado'>
						<img src={sad} alt='' />
						<h3>Putz...</h3>
					</div>
					<h3>Ainda faltam alguns... Mas não desanime!</h3>
					<h3>{result.length}/8 CONCLUÍDOS</h3>
					<div className='icons-result'>
						{result.map(function (element, index, result) {
							return <IconsResult key={index} element={element} />;
						})}
					</div>
					<button onClick={() => setPage('initial')}>REINICIAR RECALL</button>
				</>
			);
		}
	}
}
