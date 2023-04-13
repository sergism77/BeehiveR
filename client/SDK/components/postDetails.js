//this is the posDetails component

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

const PostDetails = (props) => {
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
    const posts = useSelector(state => state.firestore.ordered.posts)
    const id = props.match.params.id
    const post = posts ? posts.find(post => post.id === id) : null
    const deletePost = () => {
        firestore.delete({ collection: 'posts', doc: id }).then(() => {
            props.history.push('/')
        })
    }
    return (
        <div className="container section post-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <p>{post.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
                    <div>{moment(post.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails

