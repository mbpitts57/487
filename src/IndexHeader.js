import evaristeLogo from './evarist-logo-3.png';
import React from 'react';
import ReactDOM from 'react-dom';

function IndexHeader() {
    return (
        <div className="IndexHeader">
        <header>
            <div class="logo-evariste-row">
                <h1>Evariste</h1>
                <img class="logo-img" src={evaristeLogo} alt="Evariste Logo"/>
            </div>
        </header>
        </div>
    );
}

export default IndexHeader();
ReactDOM.render(<IndexHeader/>, document.getElementById('header-div'));