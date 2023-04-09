//this is the form that will be used to create a new post

import React, { useState } from "react"
import { navigate } from "gatsby"
import { useFirebase } from "gatsby-plugin-firebase"
import { useFirestore } from "react-redux-firebase"
import { useFirestoreConnect } from "react-redux-firebase"
import { useSelector } from "react-redux"
import { useFirebaseConnect } from "react-redux-firebase"
import { useFirestoreDocData } from "reactfire"
import { useFirestoreCollectionData } from "reactfire"
import { useFirestoreCollection } from "reactfire"
import { useFirestoreDoc } from "reactfire"
import { useFirestoreQuery } from "reactfire"

const PostForm = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const firebase = useFirebase()
    const firestore = useFirestore()
    const firestoreConnect = useFirestoreConnect()
    const firebaseConnect = useFirebaseConnect()
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
    const handleSubmit = e => {
        e.preventDefault()
        firestore
        .collection("posts")
        .add({
            title,
            content,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: auth.uid,
            createdAt: new Date(),
        })
        .then(() => {
            setTitle("")
            setContent("")
            navigate("/dashboard")
        })
    }
    return (
        <div className="container">
        <form onSubmit={handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create New Post</h5>
            <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={e => setTitle(e.target.value)} value={title} />
            </div>
            <div className="input-field">
            <label htmlFor="content">Post Content</label>
            <textarea id="content" className="materialize-textarea" onChange={e => setContent(e.target.value)} value={content}></textarea>
            </div>
            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
        </form>
        </div>
    )
    }

export default PostForm

// Path: src/components/post.js