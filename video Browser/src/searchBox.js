import React from 'react';
import './views/main.css';

class SearchBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {term : ''}
    }

    onInputSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    onInputChange = event=> {
        this.setState({term : event.target.value});
    }


    render() {
        return(
            <div className="ui segment" style={{backgroundColor : 'Grey'}}>
                <form className=" ui form" onSubmit={this.onInputSubmit}>
                <div className="ui search">
                <div className="ui icon input">
                  <input className="prompt" type="text" placeholder="Search"  value = {this.state.term}   onChange={this.onInputChange}
                  style={{backgroundColor:'#333339', color:'Grey', border:'0px'}}/>
                  <i className="search icon"></i>
                </div>
                <div className="results"></div>
                </div>
                </form>
            </div>
        );
    }
    }

export default SearchBox;