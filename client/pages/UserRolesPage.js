//this is the page that will be rendered when the user clicks on the user roles link in the sidebar
//this page will show the user his/her roles and the roles of all the other users
//this app has these roles: developer, administrator, beekeeper, researcher, and guest
//the developer is the person who created the app and has the highest privileges
//the administrators can moderate on the chat, the forum, the questions, and the answers. They can also flag users for inappropriate behavior so the developer can take action
//the beekeepers can add and edit their own apiaries, add and edit their own hives, add and edit their own inspections, add and edit their own treatments, add and edit their own diseases, add and edit their own pests, add and edit their own notes, add and edit their own photos, add and edit their own videos, add and edit their own documents, add and edit their own questions, add and edit their own answers, add and edit their own comments, add and edit their own friends, add and edit who they follow, manage their own apiaries, manage their own hives, manage their own inspections, manage their own treatments, manage their own diseases, manage their own pests, manage their own notes, manage their own photos, manage their own videos, manage their own documents, manage their own questions, manage their own answers, manage their own comments, manage their own friends, manage who they follow, and manage their own profile and settings (but not the profile and settings of other users) (but not the profile and settings of other users)
//the researchers have access to all the inspections, graphs showing the evolution of the inspections, and all the data from the inspections, the correlation between weather and honey production, the correlation between weather and diseases, the correlation between weather and pests, the correlation between weather and treatments. They can also participate in the forum, the chat, the questions, and the answers. They can also add and edit their own questions, add and edit their own answers, add and edit their own comments, add and edit their own friends, add and edit who they follow, manage their own questions, manage their own answers, manage their own comments, manage their own friends, manage who they follow, and manage their own profile and settings (but not the profile and settings of other users). Researchers can write on the research wiki (only for researchers but public to everyone).
//the guests can only see the home page, the about page, the contact page, the privacy policy page, the terms of service page, the apiaries page, the apiary page, the hive page, the inspection page, the treatment page, the disease page, the pest page, the note page, the photo page, the video page, the document page, the question page, the answer page, the comment page, the user page, the users page, the forum page, the chat page, the questions page, the answers page, the search page, the login page, the signup page, the forgot password page, the reset password page, the verify email page, the resend verification email page, and the not found page (but not the profile and settings of other users)
//users registered as beekeepers can opt to be also research users
//users registered as researchers can opt to be also beekeeper users
//users registered as beekeepers can opt to be also administrator users if they acumulate enough points (points are given to users who are active on the forum, the chat, the questions, and the answers) (points are given to users who are active on the forum, the chat, the questions, and the answers) 
//users registered as researchers can opt to be also administrator users if they acumulate enough points (points are given to users who are active on the forum, the chat, the questions, and the answers) (points are given to users who are active on the forum, the chat, the questions, and the answers) 
//developers can add other users as developers with less privileges than them if they want to give them access to the app to make it better
//developers can add other users as administrators with less privileges than them if they want to give them access to the app to moderate on the forum, the chat, the questions, and the answers

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchUserRoles } from '../actions/userRolesActions';
import { fetchUser } from '../actions/userActions';
import { fetchUsers } from '../actions/usersActions';
import { fetchApiaries } from '../actions/apiariesActions';
import { fetchHives } from '../actions/hivesActions';
import { fetchInspections } from '../actions/inspectionsActions';
import { fetchTreatments } from '../actions/treatmentsActions';
import { fetchDiseases } from '../actions/diseasesActions';
import { fetchPests } from '../actions/pestsActions';
import { fetchNotes } from '../actions/notesActions';
import { fetchPhotos } from '../actions/photosActions';
import { fetchVideos } from '../actions/videosActions';
import { fetchDocuments } from '../actions/documentsActions';
import { fetchQuestions } from '../actions/questionsActions';
import { fetchAnswers } from '../actions/answersActions';
import { fetchComments } from '../actions/commentsActions';
import { fetchFriends } from '../actions/friendsActions';
import { fetchFollows } from '../actions/followsActions';
import { fetchForumPosts } from '../actions/forumPostsActions';
import { fetchForumComments } from '../actions/forumCommentsActions';
import { fetchChatMessages } from '../actions/chatMessagesActions';
import { fetchChatUsers } from '../actions/chatUsersActions';
import { fetchChatRooms } from '../actions/chatRoomsActions';
import { fetchChatRoomUsers } from '../actions/chatRoomUsersActions';
import { fetchChatRoomMessages } from '../actions/chatRoomMessagesActions';
import { fetchChatRoomMessageUsers } from '../actions/chatRoomMessageUsersActions';
import { fetchChatRoomMessageComments } from '../actions/chatRoomMessageCommentsActions';
import { fetchChatRoomMessageCommentUsers } from '../actions/chatRoomMessageCommentUsersActions';
import { fetchChatRoomMessageCommentLikes } from '../actions/chatRoomMessageCommentLikesActions';
import { fetchChatRoomMessageLikes } from '../actions/chatRoomMessageLikesActions';
import { fetchChatRoomMessageCommentDislikes } from '../actions/chatRoomMessageCommentDislikesActions';
import { fetchChatRoomMessageDislikes } from '../actions/chatRoomMessageDislikesActions';
import { fetchChatRoomMessageCommentFlags } from '../actions/chatRoomMessageCommentFlagsActions';
import { fetchChatRoomMessageFlags } from '../actions/chatRoomMessageFlagsActions';
import { fetchChatRoomMessageCommentFlagUsers } from '../actions/chatRoomMessageCommentFlagUsersActions';
import { fetchChatRoomMessageFlagUsers } from '../actions/chatRoomMessageFlagUsersActions';
import { fetchChatRoomMessageCommentFlagReasons } from '../actions/chatRoomMessageCommentFlagReasonsActions';
import { fetchChatRoomMessageFlagReasons } from '../actions/chatRoomMessageFlagReasonsActions';
import { fetchChatRoomMessageCommentFlagReasonUsers } from '../actions/chatRoomMessageCommentFlagReasonUsersActions';

class UserRoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
        userRoles: [],
        user: {},
        users: [],
        apiaries: [],
        hives: [],
        inspections: [],
        treatments: [],
        diseases: [],
        pests: [],
        notes: [],
        photos: [],
        videos: [],
        documents: [],
        questions: [],
        answers: [],
        comments: [],
        friends: [],
        follows: [],
        forumPosts: [],
        forumComments: [],
        chatMessages: [],
        chatUsers: [],
        chatRooms: [],
        chatRoomUsers: [],
        chatRoomMessages: [],
        chatRoomMessageUsers: [],
        chatRoomMessageComments: [],
        chatRoomMessageCommentUsers: [],
        chatRoomMessageCommentLikes: [],
        chatRoomMessageLikes: [],
        chatRoomMessageCommentDislikes: [],
        chatRoomMessageDislikes: [],
        chatRoomMessageCommentFlags: [],
        chatRoomMessageFlags: [],
        chatRoomMessageCommentFlagUsers: [],
        chatRoomMessageFlagUsers: [],
        chatRoomMessageCommentFlagReasons: [],
        chatRoomMessageFlagReasons: [],
        chatRoomMessageCommentFlagReasonUsers: [],
        userRoles: [],
        user: {},
        users: [],
        apiaries: [],
        hives: [],
        inspections: [],
        treatments: [],
        diseases: [],
        pests: [],
        notes: [],
        photos: [],
        videos: [],
        documents: [],
        questions: [],
        answers: [],
        comments: [],
        friends: [],
        follows: [],
        forumPosts: [],
        forumComments: [],
        chatMessages: [],
        chatUsers: [],
        chatRooms: [],
        chatRoomUsers: [],
        chatRoomMessages: [],
        chatRoomMessageUsers: [],
        chatRoomMessageComments: [],
        chatRoomMessageCommentUsers: [],
        chatRoomMessageCommentLikes: [],
        chatRoomMessageLikes: [],
        chatRoomMessageCommentDislikes: [],
        chatRoomMessageDislikes: [],
        chatRoomMessageCommentFlags: [],
        chatRoomMessageFlags: [],
        chatRoomMessageCommentFlagUsers: [],
        chatRoomMessageFlagUsers: [],
        chatRoomMessageCommentFlagReasons: [],
        chatRoomMessageFlagReasons: [],
        chatRoomMessageCommentFlagReasonUsers: [],
        userRoles: [],
        user: {},
        users: [],
        apiaries: [],
        hives: [],
        inspections: [],
        treatments: [],
        diseases: [],
        pests: [],
        notes: [],
        photos: [],
        videos: [],
        documents: [],
        questions: [],
        answers: [],
        comments: [],
        friends: [],
        follows: [],
        forumPosts: [],
        forumComments: [],
        chatMessages: [],
        chatUsers: [],
        chatRooms: [],
        chatRoomUsers: [],
        chatRoomMessages: [],
        chatRoomMessageUsers: [],
        chatRoomMessageComments: [],

        };
    }

    componentDidMount() {
        this.props.fetchUserRoles();
        this.props.fetchUser();
        this.props.fetchUsers();
        this.props.fetchApiaries();
        this.props.fetchHives();
        this.props.fetchInspections();
        this.props.fetchTreatments();
        this.props.fetchDiseases();
        this.props.fetchPests();
        this.props.fetchNotes();
        this.props.fetchPhotos();
        this.props.fetchVideos();
        this.props.fetchDocuments();
        this.props.fetchQuestions();
        this.props.fetchAnswers();
        this.props.fetchComments();
        this.props.fetchFriends();
        this.props.fetchFollows();
        this.props.fetchForumPosts();
        this.props.fetchForumComments();
        this.props.fetchChatMessages();
        this.props.fetchChatUsers();
        this.props.fetchChatRooms();
        this.props.fetchChatRoomUsers();
        this.props.fetchChatRoomMessages();
        this.props.fetchChatRoomMessageUsers();
        this.props.fetchChatRoomMessageComments();
        this.props.fetchChatRoomMessageCommentUsers();
        this.props.fetchChatRoomMessageCommentLikes();
        this.props.fetchChatRoomMessageLikes();
        this.props.fetchChatRoomMessageCommentDislikes();
        this.props.fetchChatRoomMessageDislikes();
        this.props.fetchChatRoomMessageCommentFlags();
        this.props.fetchChatRoomMessageFlags();
        this.props.fetchChatRoomMessageCommentFlagUsers();
        this.props.fetchChatRoomMessageFlagUsers();
        this.props.fetchChatRoomMessageCommentFlagReasons();
        this.props.fetchChatRoomMessageFlagReasons();
        this.props.fetchChatRoomMessageCommentFlagReasonUsers();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newUserRoles) {
            this.props.userRoles.unshift(nextProps.newUserRoles);
        }
    }

    render() {
        const userRolesItems = this.props.userRoles.map(userRole => (
            <div key={userRole.id}>
                <h3>{userRole.name}</h3>
                <p>{userRole.description}</p>
            </div>
        ));
        return (
            <div>
                <h1>User Roles</h1>
                {userRolesItems}
            </div>
        );
    }
}

UserRoles.propTypes = {
    fetchUserRoles: PropTypes.func.isRequired,
    userRoles: PropTypes.array.isRequired,
    newUserRoles: PropTypes.object
};

const mapStateToProps = state => ({
    userRoles: state.userRoles.items,
    newUserRoles: state.userRoles.item
});

export default connect(mapStateToProps, { fetchUserRoles })(UserRoles);

