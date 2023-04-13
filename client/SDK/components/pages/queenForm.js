//this is the queenForm.js file in the pages folder
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import './queenForm.css';

class QueenForm extends Component {
    constructor() {
        super();
        this.state = {
            queen_name: '',
            queen_birth_year: '',
            queen_hive: '',
            queen_color_code: '',
            queen_picture: '',
            queen_notes: '',
            queen_death: '',
            queen_new_hive: '',
            queen_mother: '',
            queen_daughter: '',
            queen_breeder: '',
            queen_id: '',
            queen_hive_id: '',
            queen_mother_id: '',
            queen_daughter_id: '',
            queen_breeder_id: '',
            queen_death_id: '',
            queen_new_hive_id: '',
            queen_color_code_id: '',
            queen_picture_id: '',
            queen_notes_id: '',
            queen_birth_year_id: '',
            queen_name_id: '',
            queen_hive_name: '',
            queen_mother_name: '',
            queen_daughter_name: '',
            queen_breeder_name: '',
            queen_death_name: '',
            queen_new_hive_name: '',
            queen_color_code_name: '',
            queen_picture_name: '',
            queen_notes_name: '',
            queen_mother_year: '',
            queen_daughter_year: '',
            queen_death_year: '',
            queen_new_hive_year: '',
            queen_color_code_year: '',
            queen_picture_year: '',
            queen_moved: '',
            queen_moved_id: '',
            queen_moved_name: '',
            queen_moved_date: '',
            queen_moved_hive: '',
        }
    }

    componentDidMount() {
        this.props.getUser();
        axios.get(`/api/queen/${this.props.match.params.id}`).then(res => {
            this.setState({
                queen_name: res.data[0].queen_name,
                queen_birth_year: res.data[0].queen_birth_year,
                queen_hive: res.data[0].queen_hive,
                queen_color_code: res.data[0].queen_color_code,
                queen_picture: res.data[0].queen_picture,
                queen_notes: res.data[0].queen_notes,
                queen_death: res.data[0].queen_death,
                queen_new_hive: res.data[0].queen_new_hive,
                queen_mother: res.data[0].queen_mother,
                queen_daughter: res.data[0].queen_daughter,
                queen_breeder: res.data[0].queen_breeder,
                queen_id: res.data[0].queen_id,
                queen_hive_id: res.data
            })
        })
    }

    handleNameChange = (e) => {
        this.setState({
            queen_name: e.target.value
        })
    }

    handleBirthYearChange = (e) => {
        this.setState({
            queen_birth_year: e.target.value
        })
    }

    handleHiveChange = (e) => {
        this.setState({
            queen_hive: e.target.value
        })
    }

    handleColorCodeChange = (e) => {
        this.setState({
            queen_color_code: e.target.value
        })
    }

    handlePictureChange = (e) => {
        this.setState({
            queen_picture: e.target.value
        })
    }

    handleNotesChange = (e) => {
        this.setState({
            queen_notes: e.target.value
        })
    }

    handleDeathChange = (e) => {
        this.setState({
            queen_death: e.target.value
        })
    }

    handleNewHiveChange = (e) => {
        this.setState({
            queen_new_hive: e.target.value
        })
    }

    handleMotherChange = (e) => {
        this.setState({
            queen_mother: e.target.value
        })
    }

    handleDaughterChange = (e) => {
        this.setState({
            queen_daughter: e.target.value
        })
    }

    handleBreederChange = (e) => {
        this.setState({
            queen_breeder: e.target.value
        })
    }

    handleMovedChange = (e) => {
        this.setState({
            queen_moved: e.target.value
        })
    }

    handleMovedDateChange = (e) => {
        this.setState({
            queen_moved_date: e.target.value
        })
    }

    handleMovedHiveChange = (e) => {
        this.setState({
            queen_moved_hive: e.target.value
        })
    }

    handleUpdate = () => {
        axios.put(`/api/queen/${this.props.match.params.id}`, {
            queen_name: this.state.queen_name,
            queen_birth_year: this.state.queen_birth_year,
            queen_hive: this.state.queen_hive,
            queen_color_code: this.state.queen_color_code,
            queen_picture: this.state.queen_picture,
            queen_notes: this.state.queen_notes,
            queen_death: this.state.queen_death,
            queen_new_hive: this.state.queen_new_hive,
            queen_mother: this.state.queen_mother,
            queen_daughter: this.state.queen_daughter,
            queen_breeder: this.state.queen_breeder,
            queen_moved: this.state.queen_moved,
            queen_moved_date: this.state.queen_moved_date,
            queen_moved_hive: this.state.queen_moved_hive,
        }).then(res => {
            this.props.history.push('/queen')
        })
    }

    render() {
        return (
            <div className='queenForm'>
                <div className='queenFormHeader'>
                    <h1>Queen Form</h1>
                </div>
                <div className='queenFormBody'>
                    <div className='queenFormName'>
                        <h2>Name</h2>
                        <input
                            value={this.state.queen_name}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div className='queenFormBirthYear'>
                        <h2>Birth Year</h2>
                        <input
                            value={this.state.queen_birth_year}
                            onChange={this.handleBirthYearChange}
                        />
                    </div>
                    <div className='queenFormHive'>
                        <h2>Hive</h2>
                        <input
                            value={this.state.queen_hive}
                            onChange={this.handleHiveChange}
                        />
                    </div>
                    <div className='queenFormColorCode'>
                        <h2>Color Code</h2>
                        <input
                            value={this.state.queen_color_code}
                            onChange={this.handleColorCodeChange}
                        />
                    </div>
                    <div className='queenFormPicture'>
                        <h2>Picture</h2>
                        <input
                            value={this.state.queen_picture}
                            onChange={this.handlePictureChange}
                        />
                    </div>
                    <div className='queenFormNotes'>
                        <h2>Notes</h2>
                        <input
                            value={this.state.queen_notes}
                            onChange={this.handleNotesChange}
                        />
                    </div>
                    <div className='queenFormDeath'>
                        <h2>Death</h2>
                        <input
                            value={this.state.queen_death}
                            onChange={this.handleDeathChange}
                        />
                    </div>
                    <div className='queenFormNewHive'>
                        <h2>New Hive</h2>
                        <input
                            value={this.state.queen_new_hive}
                            onChange={this.handleNewHiveChange}
                        />
                    </div>
                    <div className='queenFormMother'>
                        <h2>Mother</h2>
                        <input
                            value={this.state.queen_mother}
                            onChange={this.handleMotherChange}
                        />
                    </div>
                    <div className='queenFormDaughter'>
                        <h2>Daughter</h2>
                        <input
                            value={this.state.queen_daughter}
                            onChange={this.handleDaughterChange}
                        />
                    </div>
                    <div className='queenFormBreeder'>
                        <h2>Breeder</h2>
                        <input
                            value={this.state.queen_breeder}
                            onChange={this.handleBreederChange}
                        />
                    </div>
                    <div className='queenFormMoved'>
                        <h2>Moved</h2>
                        <input
                            value={this.state.queen_moved}
                            onChange={this.handleMovedChange}
                        />
                    </div>
                    <div className='queenFormMovedDate'>
                        <h2>Moved Date</h2>
                        <input
                            value={this.state.queen_moved_date}
                            onChange={this.handleMovedDateChange}
                        />
                    </div>
                    <div className='queenFormMovedHive'>
                        <h2>Moved Hive</h2>
                        <input
                            value={this.state.queen_moved_hive}
                            onChange={this.handleMovedHiveChange}
                        />
                    </div>
                </div>
                <div className='queenFormFooter'>
                    <button onClick={this.handleUpdate}>Update</button>
                </div>
            </div>
        )
    }
}

export default QueenEdit
