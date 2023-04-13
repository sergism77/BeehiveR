//this is the bee.js component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import './app.css';

class Queen extends Component {
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
    }

    handleQueenName = (e) => {
        this.setState({
            queen_name: e.target.value
        })
    }

    handleQueenBirthYear = (e) => {
        this.setState({
            queen_birth_year: e.target.value
        })
    }

    handleQueenHive = (e) => {
        this.setState({
            queen_hive: e.target.value
        })
    }

    handleQueenColorCode = (e) => {
        this.setState({
            queen_color_code: e.target.value
        })
    }

    handleQueenPicture = (e) => {
        this.setState({
            queen_picture: e.target.value
        })
    }

    handleQueenNotes = (e) => {
        this.setState({
            queen_notes: e.target.value
        })
    }

    handleQueenDeath = (e) => {
        this.setState({
            queen_death: e.target.value
        })
    }

    handleQueenNewHive = (e) => {
        this.setState({
            queen_new_hive: e.target.value
        })
    }

    handleQueenMother = (e) => {
        this.setState({
            queen_mother: e.target.value
        })
    }

    handleQueenDaughter = (e) => {
        this.setState({
            queen_daughter: e.target.value
        })
    }

    handleQueenBreeder = (e) => {
        this.setState({
            queen_breeder: e.target.value
        })
    }

    handleQueenId = (e) => {
        this.setState({
            queen_id: e.target.value
        })
    }

    handleQueenHiveId = (e) => {
        this.setState({
            queen_hive_id: e.target.value
        })
    }

    handleQueenMotherId = (e) => {
        this.setState({
            queen_mother_id: e.target.value
        })
    }

    handleQueenDaughterId = (e) => {
        this.setState({
            queen_daughter_id: e.target.value
        })
    }

    handleQueenBreederId = (e) => {
        this.setState({
            queen_breeder_id: e.target.value
        })
    }

    handleQueenDeathId = (e) => {
        this.setState({
            queen_death_id: e.target.value
        })
    }

    handleQueenNewHiveId = (e) => {
        this.setState({
            queen_new_hive_id: e.target.value
        })
    }

    handleQueenColorCodeId = (e) => {
        this.setState({
            queen_color_code_id: e.target.value
        })
    }

    handleQueenPictureId = (e) => {
        this.setState({
            queen_picture_id: e.target.value
        })
    }

    handleQueenNotesId = (e) => {
        this.setState({
            queen_notes_id: e.target.value
        })
    }

    handleQueenBirthYearId = (e) => {
        this.setState({
            queen_birth_year_id: e.target.value
        })
    }

    handleQueenNameId = (e) => {
        this.setState({
            queen_name_id: e.target.value
        })
    }

    handleQueenHiveName = (e) => {
        this.setState({
            queen_hive_name: e.target.value
        })
    }

    handleQueenMotherName = (e) => {
        this.setState({
            queen_mother_name: e.target.value
        })
    }

    handleQueenDaughterName = (e) => {
        this.setState({
            queen_daughter_name: e.target.value
        })
    }

    handleQueenBreederName = (e) => {
        this.setState({
            queen_breeder_name: e.target.value
        })
    }

    handleQueenDeathName = (e) => {
        this.setState({
            queen_death_name: e.target.value
        })
    }

    handleQueenNewHiveName = (e) => {
        this.setState({
            queen_new_hive_name: e.target.value
        })
    }

    handleQueenColorCodeName = (e) => {
        this.setState({
            queen_color_code_name: e.target.value
        })
    }

    handleQueenPictureName = (e) => {
        this.setState({
            queen_picture_name: e.target.value
        })
    }

    handleQueenNotesName = (e) => {
        this.setState({
            queen_notes_name: e.target.value
        })
    }

    handleQueenMotherYear = (e) => {
        this.setState({
            queen_mother_year: e.target.value
        })
    }

    handleQueenDaughterYear = (e) => {
        this.setState({
            queen_daughter_year: e.target.value
        })
    }

    handleQueenDeathYear = (e) => { 
        this.setState({
            queen_death_year: e.target.value
        })
    }

    handleQueenNewHiveYear = (e) => {
        this.setState({
            queen_new_hive_year: e.target.value
        })
    }

    handleQueenColorCodeYear = (e) => {
        this.setState({
            queen_color_code_year: e.target.value
        })
    }

    handleQueenPictureYear = (e) => {
        this.setState({
            queen_picture_year: e.target.value
        })
    }

    handleQueenMoved = (e) => {
        this.setState({
            queen_moved: e.target.value
        })
    }

    handleQueenMovedId = (e) => {
        this.setState({
            queen_moved_id: e.target.value
        })
    }

    handleQueenMovedName = (e) => {
        this.setState({
            queen_moved_name: e.target.value
        })
    }

    handleQueenMovedYear = (e) => {
        this.setState({
            queen_moved_year: e.target.value
        })
    }

    handleQueenMovedHive = (e) => {
        this.setState({
            queen_moved_hive: e.target.value
        })
    }

    handleQueenMovedHiveId = (e) => {
        this.setState({
            queen_moved_hive_id: e.target.value
        })
    }

    handleQueenMovedHiveName = (e) => {
        this.setState({
            queen_moved_hive_name: e.target.value
        })
    }

    handleQueenMovedHiveYear = (e) => {
        this.setState({
            queen_moved_hive_year: e.target.value
        })
    }

    handleQueenMovedHiveNotes = (e) => {
        this.setState({
            queen_moved_hive_notes: e.target.value
        })
    }
}

export default QueenForm
