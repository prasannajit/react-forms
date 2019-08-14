import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: 'Search...' };
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (<div className="ui segment">
            <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
                <div className="field">
                    <label htmlFor="search">Image Search</label>
                    <input type="text" value={this.state.term} id="search"
                        onChange={e => { this.setState({ term: e.target.value }) }}>
                    </input>
                </div>
            </form>
        </div>);
    }
}
export default SearchBar;