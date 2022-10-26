import React, { Component } from 'react';

const arrCells = [
    {id: 1, className: "cell"},
    {id: 2, className: "cell"},
    {id: 3, className: "cell"},
    {id: 4, className: "cell"},
    {id: 5, className: "cell"},
    {id: 6, className: "cell"},
    {id: 7, className: "cell"},
    {id: 8, className: "cell"},
    {id: 9, className: "cell"},
    {id: 10, className: "cell"},
    {id: 11, className: "cell"},
    {id: 12, className: "cell"},
    {id: 13, className: "cell"},
    {id: 14, className: "cell"},
    {id: 15, className: "cell"},
    {id: 16, className: "cell"}
];

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 2
        }
    }

    render() {
        return (
            <div>
                <div className="top-panel" id="top">
                    <div className="title-buttons">
                        <div className="title-box">
                            <h1 className="title">2048</h1>
                        </div>
                        <div className="buttons">
                            <a href="#rule-text" className="btn"><i class='far fa-question-circle'></i></a>
                            <button className="btn"><i class='fas fa-redo-alt'></i></button>
                        </div>
                    </div>
                    <div className="score-best">
                        <div className="score">
                            <div className="label">SCORE:</div>
                            <div className="value">0</div>
                        </div>
                        <div className="best">
                            <div className="label">BEST:</div>
                            <div className="value">0</div>                            
                        </div>
                    </div>
                </div>
                <div className="tbl-brd">
                    <div className="table">
                        <Cells cells={arrCells} />
                    </div>
                </div>
                <Rules />
                <hr></hr>
            </div>
        )
    }
}

const Cells = (props) => {
    return props.cells.map(cell => {
        return (
            <div id={cell.id} className={cell.className}></div>
        )
    })    
}

const Rules = () => {
    return (
        <div className="rule-box">
            <div className="rule" id="rule-text">HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach 2048!</div>
            <a className="return" href="#top">Start playing →</a>            
        </div>
    )
}

export default Home;