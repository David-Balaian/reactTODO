import React from 'react';
import Header from './HeaderInput';
import ListContainer from './ListContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Arr: []
    }
  }
  clickHandler = (text) => {
    if (text.trim()) {
      let newArr = [...this.state.Arr];
      newArr = newArr.concat({ value: text, done: false });
      this.setState({ Arr: newArr })
    } else {
      return
    }
  }
  onDelete = (i) => {
    const newArr = [...this.state.Arr];
    newArr.splice(i, 1);
    this.setState({ Arr: [...newArr] });
  }
  makeDone = (i) => {
    const newArr = [...this.state.Arr];
    newArr[i].done = true;
    this.setState({ Arr: [...newArr] });
  }
  changeinput = (e, i) => {
    const newArr = [...this.state.Arr];
    newArr[i].value = e.target.value;
    newArr[i].done = false;
    this.setState({ Arr: [...newArr] });
  }
  render() {
    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", }}>
        <Header onAdd={this.clickHandler} />
        <ListContainer 
        changeinput={this.changeinput} 
        arr={this.state.Arr} 
        makeDone={this.makeDone}
        onDelete={this.onDelete} />
      </div>
    )
  }
}
export default App;
