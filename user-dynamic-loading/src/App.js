import React, { Component } from 'react';
import Loadable from 'react-loadable';
import './App.css';
// Modules configured. This can come from a database...
const available = ['Header', 'Body'];
class App extends Component {
  state = { modules: [], active: [] };
  // Toggle module
  toggleModule = (nome) => {
    const { active } = this.state, modules = [];
    // Add or remove from list
    let i = active.indexOf(nome);
    if (i > -1) active.splice(i, 1);
    else active.push(nome);
    // Create loadables. THIS IS THE MAGIC!
    active.map(m => {
      return modules.push(Loadable({
        loader: () => import('./components/'+m), // Here can be any component!
        loading: () => <div>Loading { m }...</div>,
      }));
    });
    this.setState({ ...this.state, modules, active });
  }
  render() {
    const { modules, active } = this.state;
    return (
      <div className="App">
        { modules.map((item, i) => {
          let Module = modules[i]
          return <Module key={i} />
        }) }
        <ul>
          { available.map((name, i) => (
            <li key={i}>
              { name }
              <input type="checkbox"
                checked={active.indexOf(name) > -1}
                onClick={e => this.toggleModule(name)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;