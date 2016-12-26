import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

class Filter extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
        from: null,
        to: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        const { from, to } = this.state;
        return (
            <div>
                <Select options={options} value={this.state.selected} onChange={this.handleChange} multi={true}/>

                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
            {/*у тебя from и to - это Date, чтоб его вывести следует привести его к строке, например from.toString()*/}    
            { from && to && console.log(from, to) }
                {/*

                It doesn't work properly: http://prntscr.com/dnnyh5
                
                { from && to &&
                <p>
                    You've chosen from { from } to { to }.
                    { ' ' }<a href="#" onClick={ this.handleResetClick }>Reset</a>
                </p>
                }

                */}

                <DayPicker
                    numberOfMonths={ 2 }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
            </div>
        )
    }

    handleChange = selected => this.setState({
        selected
    });

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleResetClick = (e) => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }
}

export default Filter
