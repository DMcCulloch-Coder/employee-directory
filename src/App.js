import React from 'react';
import Navbar from './components/Navbar';
import Employees from './components/Employees';
import Profile from './components/Profile';
import './styles/style.css';
import API from './utils/API';

class App extends React.Component {
    state = {
        team: [],
        fullTeam: [],
        currentEmployee: undefined
    }

    componentDidMount() {
        API.search()
            .then((result) => {
                this.setState(() => {
                    return {
                        team: result.data.results,
                        fullTeam: result.data.results,
                        currentEmployee: result.data.results[0]
                    }
                })
            })
            .catch((e) => console.log(e))
    }

    highlightEmployee = (person) => {
        this.setState(() => {
            return {
                currentEmployee: person
            }
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.state.team.length && <Employees highlightEmployee={this.highlightEmployee} team={this.state.team} />}
                {this.state.currentEmployee && <Profile currentEmployee={this.state.currentEmployee} />}
            </div>
        )
    }
}

export default App;