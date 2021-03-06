import React from 'react';
import ChampionsIndex from './champions_index';
import { filterChampions } from '../../reducers/selectors';

class ChampionsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  componentDidMount() {
    this.props.fetchChampions();
  }

  setSearchTerm(e) {
    e.preventDefault();
    const searchTerm = e.target.value;
    this.setState({searchTerm});
  }

  render() {
    const searchResult = filterChampions( this.props.champions, this.state.searchTerm);
    return (
      <section className="search">
        <h1>All Champions</h1>
        <input type="text" onChange={ this.setSearchTerm } value={ this.state.searchTerm } placeholder="search..."/>
        <p>Result(s): { searchResult.length }</p>
        <ChampionsIndex champions={ searchResult } fetchChampionData={this.props.fetchChampionData} />
      </section>
    )
  }

}
export default ChampionsSearch
