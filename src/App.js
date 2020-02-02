import React, { Component } from 'react';

const data = [
  {"id": 1, "details" : "reading books", "completed" : false}, 
  {"id": 2, "details" : "writing", "completed" : false},
  {"id": 3, "details" : "doing homework", "completed" : false},
  {"id": 4, "details" : "doing laundry", "completed" : false},
  {"id": 5, "details" : "cooking", "completed" : false},
  {"id": 6, "details" : "taking course", "completed" : false},
  {"id": 7, "details" : "learning English", "completed" : false},
  {"id": 8, "details" : "exercising", "completed" : false},
  {"id": 9, "details" : "yoga", "completed" : false},
  {"id": 10, "details" : "dancing", "completed" : false},
  {"id": 11, "details" : "watching movie", "completed" : false},
  {"id": 12, "details" : "jogging", "completed" : false},
  {"id": 13, "details" : "playing piano", "completed" : false},
  {"id": 14, "details" : "playing basketball", "completed" : false},
  {"id": 15, "details" : "reading magazine", "completed" : false},
  {"id": 16, "details" : "gardening", "completed" : false},
  {"id": 17, "details" : "playing tennis", "completed" : false},
  {"id": 18, "details" : "shopping", "completed" : false},
  {"id": 19, "details" : "watching TV show", "completed" : false}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: data,
      itemsToShow: 5
    };
  }

  showMore = () => {
    if (this.state.itemsToShow < this.state.tasks.length) {
      this.setState({itemsToShow: this.state.itemsToShow + 5})
    } 
  }

  handleChange = (e, index) => {
    let tasks = [...this.state.tasks];
    let completed = tasks[index].completed;
    tasks[index].completed = !completed;
    this.setState({tasks});
  }

  render() {
    console.log(this.state.tasks);
    let { tasks, itemsToShow } = this.state;
    return(
      <div style={{ width: "30%", marginLeft: 30, display: "flex", 
                    flexDirection: "column", padding: 20 }}>
        <h1>Task List</h1>
        <div>
          {tasks.slice(0, itemsToShow).map((ele, index) => {
            return(
              <div key={index} style={{display: "flex"}}>
                <CheckBox 
                  onChange={(e) => this.handleChange(e, index)}
                />
                <div style={{fontSize: 18, marginBottom: 30}}>{ele.details}</div>
              </div>
            )
          })}
        </div>
        <div>
          {itemsToShow < tasks.length &&
            (<button onClick={this.showMore} style={{fontSize: 18}}>
                <span>Show More</span>
            </button>)}
        </div>
      </div>
    )
  }
}

class CheckBox extends Component {
  render() {
    return(
      <input type="checkbox" onChange={this.props.onChange} />
    )
  }
}

export default App;
