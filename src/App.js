import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import data from './data';
import './App.css'

import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {

  constructor() {
     super();

    this.state = {
      monsters: data,
      searchField: '',
      newVal: 'nothing'
    }

    // this.handleChange = this.handleChange.bind(this);

  }

  // handleChange(e){
  //    this.setState({ searchField: e.target.value })
  // }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredList = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())

    });

    return (
      <div>
        <h1 className='title'>Monster Robolex</h1>
        <SearchBox placeholder="seacrch monster" handleChange={this.handleChange} />
        <CardList data={filteredList} />
      </div>
    );
  }
}
export default App;
