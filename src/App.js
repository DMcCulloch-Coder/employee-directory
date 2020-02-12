import React from 'react';
import Navbar from './components/Navbar';
import Employees from './components/Employees';
import Profile from './components/Profile';
import './styles/style.css';
import API from './utils/API';

class App extends React.Component {
    state = {
        team: [],
        highlight: false,
        fullTeam: []
    }

    componentDidMount() {
        API.search()
            .then((result) => {
                this.setState(() => {
                    return {
                        team: result.data.results,
                        fullTeam: result.data.results
                    }
                })
            })
            .catch((e) => console.log(e))
    }

    highlightEmployee = (object) => {
        this.setState(() => {
            return {
                highlight: true
            }
        })

        return (
            <Profile person={object} />
        )
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.state.team.length && <Employees object={this.highlightEmployee} team={this.state.team} />}
                {this.state.highlight && <Profile />}
            </div>
        )
    }
}

export default App;