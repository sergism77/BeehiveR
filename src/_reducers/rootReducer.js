//this is the rootReducer.js file in the _reducers folder

//what code do we need in the rootReducer?
//we need the following code in the rootReducer:
import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { posts } from './posts.reducer';
import { comments } from './comments.reducer';
import { likes } from './likes.reducer';
import { follows } from './follows.reducer';
import { messages } from './messages.reducer';
import { notifications } from './notifications.reducer';
import { search } from './search.reducer';
import { profile } from './profile.reducer';
import { profilePosts } from './profilePosts.reducer';
import { profileFollowers } from './profileFollowers.reducer';
import { profileFollowing } from './profileFollowing.reducer';
import { profileLikes } from './profileLikes.reducer';
import { profileComments } from './profileComments.reducer';
import { profileMessages } from './profileMessages.reducer';
import { profileNotifications } from './profileNotifications.reducer';
import { profileSearch } from './profileSearch.reducer';
import { profileSettings } from './profileSettings.reducer';
import { profileSettingsUsername } from './profileSettingsUsername.reducer';
import { profileSettingsEmail } from './profileSettingsEmail.reducer';
import { profileSettingsPassword } from './profileSettingsPassword.reducer';
import { profileSettingsDelete } from './profileSettingsDelete.reducer';
import { profileSettingsPrivacy } from './profileSettingsPrivacy.reducer';
import { profileSettingsNotifications } from './profileSettingsNotifications.reducer';
import { profileSettingsBlockedUsers } from './profileSettingsBlockedUsers.reducer';


const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    posts,
    comments,
    likes,
    follows,
    messages,
    notifications,
    search,
    profile,
    profilePosts,
    profileFollowers,
    profileFollowing,
    profileLikes,
    profileComments,
    profileMessages,
    profileNotifications,
    profileSearch,
    profileSettings,
    profileSettingsUsername,
    profileSettingsEmail,
    profileSettingsPassword,
    profileSettingsDelete,
    profileSettingsPrivacy,
    profileSettingsNotifications,
    profileSettingsBlockedUsers
});

export default rootReducer;
