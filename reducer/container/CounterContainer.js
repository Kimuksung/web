import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import { increment, decrement } from '../actions/counter';

class CounterContainer extends Component { //3
    handleIncrement = () => {
        console.log("CounterContainer handleIncrement");
        this.props.increment() ;
    } ;

    handleDecrement = () => {
        console.log("CounterContainer handleDecrement");
        this.props.decrement () ;
    } ;

    render() {
        const { number } = this.props ;
        return (
            <Counter 
                value={number}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
        ) ;
    } 
}

const mapStateToProps = ({ counter }) => ({  //2
    number: counter.number,
}) ;

const mapDispatchToProps = {increment, decrement} ; //1

export default connect ( // 스토어와 연결
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer) ;
