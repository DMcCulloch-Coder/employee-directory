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

    getMenEmployees = () => {
        this.setState(() => {
            return {
                team: this.state.fullTeam.filter((person) => person.gender === "male")
            }
        })
    }

    getWomanEmployees = () => {
        this.setState(() => {
            return {
                team: this.state.fullTeam.filter((person) => person.gender === "female")
            }
        })
    }

    getAllEmployees = () => {
        this.setState(() => {
            return {
                team: this.state.fullTeam
            }
        })
    }

    sortEmployees = () => {
        this.setState(() => {
            return {
                team: this.state.team.sort((a, b) => {
                    if (a.name.first < b.name.first) {
                        return -1
                    }
                    if (b.name.first > a.name.first) {
                        return 1
                    }
                    return 0
                })
            }
        })
        console.log(this.state.team)
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.state.team.length && <Employees highlightEmployee={this.highlightEmployee} team={this.state.team} getMenEmployees={this.getMenEmployees} getWomanEmployees={this.getWomanEmployees} getAllEmployees={this.getAllEmployees} sortEmployees={this.sortEmployees} />}
                {this.state.currentEmployee && <Profile currentEmployee={this.state.currentEmployee} />}
            </div>
        )
    }
}

export default App;