export default function Correction({index,indexSel,correction,setQuestionSel,setAnswerSel,setIndexSel,setResp, answer, question}){
    function ChooseIconResult({ index, icon, type }) {
        return (
            <div className="card">
                <div className={type}>
                    <h2>Pergunta {index + 1}</h2>
                    <ion-icon name={icon}></ion-icon>
                </div>
            </div>
        )
    }

    function selectorQuestion(answer, question, index) {
        setQuestionSel(question)
        setAnswerSel(answer)
        setIndexSel(index)
        setResp('question')
    }
    if (index === indexSel) {
        if (correction === 'not') {
            return (
                <ChooseIconResult index={index} icon={'close-circle'} type={'question wrong'} />
            )

        }
        if (correction === 'almost') {
            return (
                <ChooseIconResult index={index} icon={'help-circle'} type={'question middle'} />
            )

        }
        if (correction === 'yes') {
            return (
                <ChooseIconResult index={index} icon={'checkmark-circle'} type={'question correct'} />
            )

        }
    }
    else {
        return (
            <div className="card">
                <div className="question front">
                    <h2>Pergunta {index + 1}</h2>
                    <ion-icon name="play-outline" onClick={() => selectorQuestion(answer, question, index)}></ion-icon>
                </div>
            </div>
        )
    }
}