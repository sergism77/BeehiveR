//this is the data file that will be used to populate the database
//what do we need in this file?
//1. a list of all the users
//2. a list of all the posts
//3. a list of all the comments
//4. a list of all the likes
//5. a list of all the follows

//we will use the faker library to generate fake data

import faker from 'faker'
import { db } from './database'

//how do we use the faker library to generate fake data?
faker.name.firstName()
faker.name.lastName()
faker.internet.email()
faker.internet.avatar()
faker.lorem.sentence()
faker.lorem.paragraph()
faker.date.past()

//how do we generate a list of users?
//1. create an empty array
//2. loop over the array and generate a user
//3. add the user to the array
//4. return the array

//how do we generate a user?
//1. create an empty object
//2. add the user's id
//3. add the user's first name
//4. add the user's last name
//5. add the user's email
//6. add the user's avatar
//7. return the user

//how do we generate a list of posts?
//1. create an empty array
//2. loop over the array and generate a post
//3. add the post to the array
//4. return the array

//how do we generate a post?
//1. create an empty object
//2. add the post's id
//3. add the post's user id
//4. add the post's image
//5. add the post's caption
//6. add the post's likes
//7. add the post's comments
//8. return the post

//how do we generate a list of comments?
//1. create an empty array
//2. loop over the array and generate a comment
//3. add the comment to the array
//4. return the array

//how do we generate a comment?
//1. create an empty object
//2. add the comment's id
//3. add the comment's user id
//4. add the comment's post id
//5. add the comment's text
//6. return the comment

//how do we generate a list of likes?
//1. create an empty array
//2. loop over the array and generate a like
//3. add the like to the array
//4. return the array

//how do we generate a like?
//1. create an empty object
//2. add the like's id
//3. add the like's user id
//4. add the like's post id
//5. return the like

//how do we generate a list of follows?
//1. create an empty array
//2. loop over the array and generate a follow
//3. add the follow to the array
//4. return the array

//how do we generate a follow?
//1. create an empty object
//2. add the follow's id
//3. add the follow's user id
//4. add the follow's follower id
//5. return the follow

//how do we export the data?
//1. export the users
//2. export the posts
//3. export the comments
//4. export the likes
//5. export the follows

//how do we import the data?
//1. import the data
//2. use the data

//how do we use the data?
//1. use the data to populate the database

//how do we populate the database?
//1. create a database
//2. create a table for users
//3. create a table for posts
//4. create a table for comments
//5. create a table for likes
//6. create a table for follows
//7. insert the users into the users table
//8. insert the posts into the posts table
//9. insert the comments into the comments table
//10. insert the likes into the likes table
//11. insert the follows into the follows table

//how do we create a database?
//1. create a database
//2. create a table for users
//3. create a table for posts
//4. create a table for comments
//5. create a table for likes
//6. create a table for follows

//how do we create a table for users?
//1. create a table for users
//2. create a table for posts
//3. create a table for comments
//4. create a table for likes
//5. create a table for follows

//how do we create a table for posts?
//1. create a table for posts
//2. create a table for comments
//3. create a table for likes
//4. create a table for follows

//how do we create a table for comments?
//1. create a table for comments
//2. create a table for likes
//3. create a table for follows

//how do we create a table for likes?
//1. create a table for likes
//2. create a table for follows

//how do we create a table for follows?
//1. create a table for follows

//how do we insert the users into the users table?
//1. insert the users into the users table
//2. insert the posts into the posts table
//3. insert the comments into the comments table
//4. insert the likes into the likes table
//5. insert the follows into the follows table

//how do we insert the posts into the posts table?
//1. insert the posts into the posts table
//2. insert the comments into the comments table
//3. insert the likes into the likes table
//4. insert the follows into the follows table

//how do we insert the comments into the comments table?
//1. insert the comments into the comments table
//2. insert the likes into the likes table
//3. insert the follows into the follows table

//how do we insert the likes into the likes table?
//1. insert the likes into the likes table
//2. insert the follows into the follows table

//how do we insert the follows into the follows table?
//1. insert the follows into the follows table

//how do we run the data file?
//1. run the data file

//the name of the database is stored in the.env file 
//user and password are stored on .env file
//the database is on the seigr.network server



//what code do we need in this file?
//1. import the data
//2. import the database
//3. create a database
//4. create a table for users
//5. create a table for posts
//6. create a table for comments
//7. create a table for likes
//8. create a table for follows
//9. insert the users into the users table
//10. insert the posts into the posts table
//11. insert the comments into the comments table
//12. insert the likes into the likes table
//13. insert the follows into the follows table

//we use a database to store data. The database is on a docker container on the seigr.network server. The database is called seigr. The database has a table called users. The users table has a column called id. The users table has a column called first_name. The users table has a column called last_name. The users table has a column called email. The users table has a column called avatar. The database has a table called posts. The posts table has a column called id. The posts table has a column called user_id. The posts table has a column called image. The posts table has a column called caption. The posts table has a column called likes. The posts table has a column called comments. The database has a table called comments. The comments table has a column called id. The comments table has a column called user_id. The comments table has a column called post_id. The comments table has a column called text. The database has a table called likes. The likes table has a column called id. The likes table has a column called user_id. The likes table has a column called post_id. The database has a table called follows. The follows table has a column called id. The follows table has a column called user_id. The follows table has a column called follower_id.
//how do we import the database here?
//what do we need to import?
//1. import the database
//2. import the data
//3. create a database
//4. create a table for users
//5. create a table for posts
//6. create a table for comments
//7. create a table for likes
//8. create a table for follows
//9. insert the users into the users table
//10. insert the posts into the posts table
//11. insert the comments into the comments table
//12. insert the likes into the likes table
//13. insert the follows into the follows table


require('dotenv').config()
import { db } from './database'
import { users, posts, comments, likes, follows } from './database'

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
