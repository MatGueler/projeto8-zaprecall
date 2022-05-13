import ReactDOM from "react-dom";

import React from 'react';

import OpenQuestions from "./components/QuestionsPage";

function InitialPage(props) {
    const [page, setPage] = React.useState(props.page)

    if (page === 'initial') {
        return (
            <div className="background-page-initial">

                <div className="initial-menu">
                    <img src="./IMG/logo.png" />
                    <h1>ZapRecall</h1>
                    <button onClick={() => setPage('QuestionsPage')}>Iniciar Recall</button>
                </div>

            </div>
        )
    }
    else {
        return (
            <>
                <OpenQuestions />
            </>
        )
    }

}

function App() {
    return (
        <>
            <InitialPage page={'initial'} />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));