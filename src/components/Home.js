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
            <div className="tbl-brd">
                <div className="table">
                    <Cells cells={arrCells} />
                </div>
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

export default Home;