import React from 'react'

export default function ChooseWeek({ changeWeek/*ref*/ }) {
    this.myRef = React.createRef();

    function changeValue(){
        changeWeek(this.myRef.current.value);
    }

    return (
        <div className="z-60 border-t-8 border-transparent">
            <select onChange={changeValue} className="z-60" ref={this.myRef} /*ref={ref}*/>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
        </div>
    )
}
