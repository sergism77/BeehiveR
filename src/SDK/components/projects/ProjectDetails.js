//this is the ProjectDetails.js in the projects folder
//

import React from "react"
import { Link } from "gatsby"
import { useFirestore, useFirestoreConnect } from "react-redux-firebase"
import { useSelector } from "react-redux"
import { useFirestoreDocData } from "reactfire"
import { useFirestoreCollectionData } from "reactfire"
import { useFirestoreCollection } from "reactfire"
import { useFirestoreDoc } from "reactfire"
import { useFirestoreQuery } from "reactfire"
import moment from "moment"

const ProjectDetails = props => {
    const id = props.match.params.id
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
    const project = projects ? projects.find(project => project.id === id) : null
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}

export default ProjectDetails