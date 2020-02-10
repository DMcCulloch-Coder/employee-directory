import React from 'react';
import Navbar from './components/Navbar';
import Employees from './components/Employees';
import Profile from './components/Profile';
import './styles/style.css';
import API from './utils/API';

class App extends React.Component {
    state = {
        team: []
    }

    componentDidMount() {
        API.search()
            .then((result) => {
                this.setState(() => {
                    return {
                        team: result.data.results
                    }
                })
            })
            .catch((e) => console.log(e))
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.state.team.length && <Employees team={this.state.team} />}
                <Profile />
            </div>
        )
    }
}

export default App;