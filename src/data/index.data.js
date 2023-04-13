//this is the data file that will be used to populate the database


import faker from 'faker'
import { db } from './database'
import { users, posts, comments, likes, follows } from './database'
require('dotenv').config()


const database = process.env.DB_NAME
const usersTable = 'users'
const postsTable = 'posts'
const commentsTable = 'comments'
const likesTable = 'likes'
const followsTable = 'follows'



function createDatabase() {
  return db.query(`CREATE DATABASE IF NOT EXISTS ${database}`)
}

function createUsersTable() {
    return db.query(`CREATE TABLE IF NOT EXISTS ${usersTable} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(255),
        avatar VARCHAR(255)
    )`)
    }

function createPostsTable() {
    return db.query(`CREATE TABLE IF NOT EXISTS ${postsTable} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        image VARCHAR(255),
        caption VARCHAR(255),
        likes INT,
        comments INT
    )`)
}

function createCommentsTable() {
    return db.query(`CREATE TABLE IF NOT EXISTS ${commentsTable} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        post_id INT,
        text VARCHAR(255)
    )`)
}

function createLikesTable() {
    return db.query(`CREATE TABLE IF NOT EXISTS ${likesTable} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        post_id INT
    )`)
}

function createFollowsTable() {
    return db.query(`CREATE TABLE IF NOT EXISTS ${followsTable} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        follower_id INT
    )`)
}

function insertUsers() {
    return db.query(`INSERT INTO ${usersTable} (first_name, last_name, email, avatar) VALUES ?`, [users])
}

function insertPosts() {
    return db.query(`INSERT INTO ${postsTable} (user_id, image, caption, likes, comments) VALUES ?`, [posts])
}

function insertComments() {
    return db.query(`INSERT INTO ${commentsTable} (user_id, post_id, text) VALUES ?`, [comments])
}

function insertLikes() {
    return db.query(`INSERT INTO ${likesTable} (user_id, post_id) VALUES ?`, [likes])
}

function insertFollows() {
    return db.query(`INSERT INTO ${followsTable} (user_id, follower_id) VALUES ?`, [follows])
}

async function run() {
    await createDatabase()
    await createUsersTable()
    await createPostsTable()
    await createCommentsTable()
    await createLikesTable()
    await createFollowsTable()
    await insertUsers()
    await insertPosts()
    await insertComments()
    await insertLikes()
    await insertFollows()
    db.end()
}

run()

export { createDatabase, createUsersTable, createPostsTable, createCommentsTable, createLikesTable, createFollowsTable, insertUsers, insertPosts, insertComments, insertLikes, insertFollows }
