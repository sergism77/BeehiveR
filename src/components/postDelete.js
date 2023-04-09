//this is the postDelete component
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

const PostDelete = () => {
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
    return (
        <div className="post-delete section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Delete Post</span>
                    <p>Are you sure you want to delete this post?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default PostDelete
