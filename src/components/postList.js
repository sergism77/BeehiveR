//this is the component that will be used to display the list of posts

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

const PostList = () => {
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
        <div className="post-list section">
            {posts && posts.map(post => {
                return (
                    <div className="card z-depth-0 post-summary" key={post.id}>
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title">{post.title}</span>
                            <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
                            <p className="grey-text">{moment(post.createdAt.toDate()).calendar()}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList
