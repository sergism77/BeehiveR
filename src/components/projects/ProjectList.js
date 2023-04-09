//this is the ProjectList component

import React from 'react'
import { Link } from 'gatsby'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useFirestoreDocData } from 'reactfire'
import { useFirestoreCollectionData } from 'reactfire'
import { useFirestoreCollection } from 'reactfire'
import { useFirestoreDoc } from 'reactfire'
import { useFirestoreQuery } from 'reactfire'
import moment from 'moment'

const ProjectList = () => {
    const firestore = useFirestore()
    const firestoreConnect = useFirestoreConnect()
    const firestoreDocData = useFirestoreDocData()
    const firestoreCollectionData = useFirestoreCollectionData()
    const firestoreCollection = useFirestoreCollection()
    const firestoreDoc = useFirestoreDoc()
    const firestoreQuery = useFirestoreQuery()
    const firestoreReducer = useSelector(state => state.firestore)
    const firebaseReducer = useSelector(state => state.firebase)
    const auth = useSelector(state => state.firebase.auth)
    const profile = useSelector(state => state.firebase.profile)
    const projects = useSelector(state => state.firestore.ordered.projects)
    const notifications = useSelector(state => state.firestore.ordered.notifications)
    return (
        <div className="project-list section">
            {projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        <div className="card z-depth-0 project-summary">
                            <div className="card-content grey-text text-darken-3">
                                <span className="card-title">{project.title}</span>
                                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList

