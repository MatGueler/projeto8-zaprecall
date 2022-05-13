// import Questions from "./Questions"
import React from 'react';

import Questions from './Questions';


export default function OpenQuestions() {

    function Finish() {

        if (result.length !== 8) {
            return (
                <></>
            )
        }
        else {
            if (pontuation === 0) {
                return (
                    <>
                        <div class="resultado">
                            <img src="./IMG/party.png"/>
                                <h3>Parabéns!</h3>
                        </div>
                        <h3>Você não esqueceu de nenhum flashcard!</h3></>
                )
            }
            else {
                return (
                    <>
                        <div class="resultado">
                            <img src="./IMG/sad.png" />
                            <h3>Putz!</h3>
                        </div>
                        <h3>Ainda faltam alguns...
                            Mas não desanime!</h3></>
                )
            }
        }
    }

    function IconsResult({ index, element }) {
        if (element === 'C') {
            return (
                <div className='correct'><ion-icon className="correct" name="checkmark-circle"></ion-icon></div>
            )
        }
        if (element === 'E') {
            setPontuation(1)
            return (
                <div className='wrong'><ion-icon className="wrong" name="close-circle"></ion-icon></div>

            )
        }
        if (element === 'M') {
            return (
                <div className='middle'><ion-icon className="middle" name="help-circle"></ion-icon></div>

            )
        }
    }

    const questions = [
        'O que é JSX?',

        'O React é __',

        'Componentes devem iniciar com __',

        'Podemos colocar __ dentro do JSX',

        'O ReactDOM nos ajuda __',

        'Usamos o npm para __',

        'Usamos props para __',

        'Usamos estado (state) para __'
    ]

    const answers = [
        'Uma extensão de linguagem do JavaScript',

        'uma biblioteca JavaScript para construção de interfaces',

        'letra maiúscula',

        'expressões',

        'interagindo com a DOM para colocar componentes React na mesma',

        'gerenciar os pacotes necessários e suas dependências',

        'passar diferentes informações para componentes',

        'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    ]

    const [result, setResult] = React.useState([])

    const [resp, setResp] = React.useState('initial')

    const [base, setBase] = React.useState('base')

    const [pontuation, setPontuation] = React.useState(0)

    return (
        <>
            <div className="page-questions">
                <div className="top-questions">
                    <img src="./IMG/logo.png" />
                    <h1>ZapRecall</h1>
                </div>


                <div className="questions done">
                    {questions.map(function (element, index) { return (<Questions key={index} question={element} index={index} answer={answers[index]} resp={resp} setResp={setResp} answers={answers} questions={questions} result={result} setResult={setResult} base={base} setBase={setBase} />) })}
                </div>

                <div className={base}>
                    <Finish />
                    <h3>{result.length}/8 CONCLUÍDOS</h3>
                    <div className="icons-result">
                        {result.map(function (element, index, result) {
                            return (
                                <IconsResult key={index} element={element} />
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}