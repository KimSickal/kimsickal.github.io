import * as React from 'react';
import './App.css';
import { ImagePost } from './v1/models/Posts';
import { V1Container } from './v1/V1Container';
import { V2Container } from './v2/V2Container';

interface ComponentStates {
  data: ImagePost[];
  screenWidth: number;
  selectedVersion: string;
}

class App extends React.Component<{}, ComponentStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      screenWidth: Math.max(Math.min(document.body.clientWidth, 800), 400),
      selectedVersion: 'v2',
    };
  }
  handleSelect(event: React.FormEvent<HTMLSelectElement>) {
    this.setState({ selectedVersion: event.currentTarget.value })
  }
  componentDidMount() {
    this.setState({
      data: require('./data/data.json'),
    })
    window.addEventListener('resize', () => { this.setState({ screenWidth: document.body.clientWidth }) })
  }

  public render() {
    let maxWidth = Math.max(Math.min(document.body.clientWidth, 800), 400);
    return (
      <div className="App" style={{ width: maxWidth }}>
        <div className="header">
          <div className="headerTitle"><p>Name of this page</p></div>
          <div className="headerSearchBar"><p>Search bar</p></div>
          <div className="headerVersionControl">
            <select className="versionList" onChange={event => this.handleSelect(event)} value={this.state.selectedVersion}>
              <option value='v1'>v1</option>
              <option value='v2'>v2</option>
            </select>
          </div>
        </div>
        {
          (() => {
            switch (this.state.selectedVersion) {
              case 'v1':
                return <V1Container data={this.state.data} />;
              case 'v2':
                return <V2Container data={this.state.data} />;
              default:
                return null;
            }
          })()
        }
      </div>
    );
  }
}

export default App;
