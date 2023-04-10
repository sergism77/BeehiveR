    //this is the DashboardPage.js file in the pages folder
//this file will be used to display the dashboard page
//this file will be used as the template for users to create new dashboards
//this file will be used as the template for users to edit existing dashboards
//this file will be used as the template for users to delete existing dashboards
//this file will be used as the template for users to add new dashboards with the feed they want to see on the dashboard page
//users will be able to give specific feeds to specific dashboards
//users can name the dashboards whatever they want and save them to the database
//users can edit the dashboards and save them to the database
//users can delete the dashboards and save them to the database
//users can add new dashboards and save them to the database
//users can add new feeds to the dashboards and save them to the database
//users can edit the feeds on the dashboards and save them to the database
//users can delete the feeds on the dashboards and save them to the database
//users can share their saved dashboards with other users
//dashboards can only be edited by the user that created them
//dashboards can only be deleted by the user that created them
//every user can create a maximum of 5 dashboards
//every user can create a maximum of 10 feeds per dashboard
//every user can can navigate through dashboards using a dashboard menu that shows all the dashboards the user has created
//when a user chooses to create a new dashboard, the user will be taken to the dashboard page where they will be asked in a form to give the dashboard a name, there will be a list of all possible feeds to choose from, and there will be a button to save the dashboard
//when a user chooses to edit an existing dashboard, the user will be taken to the dashboard page where they will be asked in a form to give the dashboard a name, there will be a list of all possible feeds to choose from, and there will be a button to save the dashboard
//when a user chooses to delete an existing dashboard, the user will be advised that they are about to delete the dashboard and they will be asked to confirm the deletion
//when a user deletes a dashboard, that concrete dashboard configuration will be deleted from the database
//deleted dashboards will not be shown in the dashboard menu
//deleted dashboards that were shared with other users will no longer be available to those users. Those users will get a message explaining that the user that created that specific dashboard has deleted it
//what do we need to do to make this happen?
//what files do we need to create?
//what files do we need to edit?
//what files do we need to delete?
//what files do we need to move?
//what files do we need to copy?
//what files do we need to rename?
//what files do we need to replace?
//what files do we need to update?
//print code here:
//  
//
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { startAddDashboard } from '../actions/dashboards';
import DashboardForm from './DashboardForm';
import DashboardList from './DashboardList';
import DashboardListFilters from './DashboardListFilters';
import DashboardListSummary from './DashboardListSummary';
import mariadb from 'mariadb';
import { startAddFeed } from '../actions/feeds';
import { startAddUser } from '../actions/users';
import { startAddRole } from '../actions/roles';
import { startAddPermission } from '../actions/permissions';
import { startAddSetting } from '../actions/settings';
import { startAddUserRole } from '../actions/userRoles';
import { startAddUserPermission } from '../actions/userPermissions';
import { startAddRolePermission } from '../actions/rolePermissions';
import { startAddSettingRole } from '../actions/settingRoles';
import { startAddSettingPermission } from '../actions/settingPermissions';
import { startAddSettingUser } from '../actions/settingUsers';
import { startAddSettingDashboard } from '../actions/settingDashboards';
import { startAddSettingFeed } from '../actions/settingFeeds';
import { startAddSettingUserDashboard } from '../actions/settingUserDashboards';
import { startAddSettingUserFeed } from '../actions/settingUserFeeds';
import { startAddSettingRoleDashboard } from '../actions/settingRoleDashboards';
import { startAddSettingRoleFeed } from '../actions/settingRoleFeeds';
import { startAddSettingPermissionDashboard } from '../actions/settingPermissionDashboards';
import { startAddSettingPermissionFeed } from '../actions/settingPermissionFeeds';
import { startAddSettingDashboardFeed } from '../actions/settingDashboardFeeds';
import { startAddSettingUserDashboardFeed } from '../actions/settingUserDashboardFeeds';
import { startAddSettingRoleDashboardFeed } from '../actions/settingRoleDashboardFeeds';
import { startAddSettingPermissionDashboardFeed } from '../actions/settingPermissionDashboardFeeds';

export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboardName: '',
            dashboardDescription: '',
            dashboardId: '',
            dashboardUserId: '',
            dashboardUserEmail: '',
            dashboardUserFirstName: '',
            dashboardUserLastName: '',
            dashboardUserAvatar: '',
            dashboardUserCreatedAt: '',
            dashboardUserUpdatedAt: '',
            dashboardUserDeletedAt: '',
            dashboardCreatedAt: '',
            dashboardUpdatedAt: '',
            dashboardDeletedAt: '',
            dashboardFeedId: '',
            dashboardFeedName: '',
            dashboardFeedDescription: '',
            dashboardFeedUserId: '',
            dashboardFeedUserEmail: '',
            dashboardFeedUserFirstName: '',
            dashboardFeedUserLastName: '',
            dashboardFeedUserAvatar: '',
            dashboardFeedUserCreatedAt: '',
            dashboardFeedUserUpdatedAt: '',
            dashboardFeedUserDeletedAt: '',
            dashboardFeedCreatedAt: '',
            dashboardFeedUpdatedAt: '',
            dashboardFeedDeletedAt: '',
            dashboardFeedSettingId: '',
            dashboardFeedSettingName: '',
            dashboardFeedSettingDescription: '',
            dashboardFeedSettingUserId: '',
            dashboardFeedSettingUserEmail: '',
            dashboardFeedSettingUserFirstName: '',
            dashboardFeedSettingUserLastName: '',
            dashboardFeedSettingUserAvatar: '',
            dashboardFeedSettingUserCreatedAt: '',
            dashboardFeedSettingUserUpdatedAt: '',
            dashboardFeedSettingUserDeletedAt: '',
            dashboardFeedSettingCreatedAt: '',
            dashboardFeedSettingUpdatedAt: '',
            dashboardFeedSettingDeletedAt: '',
            dashboardFeedSettingRoleId: '',
            dashboardFeedSettingRoleName: '',
            dashboardFeedSettingRoleDescription: '',
            dashboardFeedSettingRoleUserId: '',
            dashboardFeedSettingRoleUserEmail: '',
            dashboardFeedSettingRoleUserFirstName: '',
            dashboardFeedSettingRoleUserLastName: '',
            dashboardFeedSettingRoleUserAvatar: '',
            dashboardFeedSettingRoleUserCreatedAt: '',
            dashboardFeedSettingRoleUserUpdatedAt: '',
            dashboardFeedSettingRoleUserDeletedAt: '',
            dashboardFeedSettingRoleCreatedAt: '',
            dashboardFeedSettingRoleUpdatedAt: '',
            dashboardFeedSettingRoleDeletedAt: '',
            dashboardFeedSettingPermissionId: '',
            dashboardFeedSettingPermissionName: '',
            dashboardFeedSettingPermissionDescription: '',
            dashboardFeedSettingPermissionUserId: '',
            dashboardFeedSettingPermissionUserEmail: '',
            dashboardFeedSettingPermissionUserFirstName: '',
            dashboardFeedSettingPermissionUserLastName: '',
            dashboardFeedSettingPermissionUserAvatar: '',
            dashboardFeedSettingPermissionUserCreatedAt: '',
            dashboardFeedSettingPermissionUserUpdatedAt: '',
            dashboardFeedSettingPermissionUserDeletedAt: '',
            dashboardFeedSettingPermissionCreatedAt: '',
            dashboardFeedSettingPermissionUpdatedAt: '',
            dashboardFeedSettingPermissionDeletedAt: '',
            dashboardFeedSettingDashboardId: '',
            dashboardFeedSettingDashboardName: '',
            dashboardFeedSettingDashboardDescription: '',
            dashboardFeedSettingDashboardUserId: '',
            dashboardFeedSettingDashboardUserEmail: '',
            dashboardFeedSettingDashboardUserFirstName: '',
            dashboardFeedSettingDashboardUserLastName: '',
            dashboardFeedSettingDashboardUserAvatar: '',
            dashboardFeedSettingDashboardUserCreatedAt: '',
            dashboardFeedSettingDashboardUserUpdatedAt: '',
            dashboardFeedSettingDashboardUserDeletedAt: '',
            dashboardFeedSettingDashboardCreatedAt: '',
            dashboardFeedSettingDashboardUpdatedAt: '',
            dashboardFeedSettingDashboardDeletedAt: '',
            dashboardFeedSettingFeedId: '',
            dashboardFeedSettingFeedName: '',
            dashboardFeedSettingFeedDescription: '',
            dashboardFeedSettingFeedUserId: '',
            dashboardFeedSettingFeedUserEmail: '',
            dashboardFeedSettingFeedUserFirstName: '',
            dashboardFeedSettingFeedUserLastName: '',
            dashboardFeedSettingFeedUserAvatar: '',
            dashboardFeedSettingFeedUserCreatedAt: '',
            dashboardFeedSettingFeedUserUpdatedAt: '',
            dashboardFeedSettingFeedUserDeletedAt: '',
            dashboardFeedSettingFeedCreatedAt: '',
            dashboardFeedSettingFeedUpdatedAt: '',
            dashboardFeedSettingFeedDeletedAt: '',
            dashboardFeedSettingUserDashboardId: '',
            dashboardFeedSettingUserDashboardName: '',
            dashboardFeedSettingUserDashboardDescription: '',
            dashboardFeedSettingUserDashboardUserId: '',
            dashboardFeedSettingUserDashboardUserEmail: '',
            dashboardFeedSettingUserDashboardUserFirstName: '',
            dashboardFeedSettingUserDashboardUserLastName: '',
            dashboardFeedSettingUserDashboardUserAvatar: '',
            dashboardFeedSettingUserDashboardUserCreatedAt: '',
            dashboardFeedSettingUserDashboardUserUpdatedAt: '',
            dashboardFeedSettingUserDashboardUserDeletedAt: '',
            dashboardFeedSettingUserDashboardCreatedAt: '',
            dashboardFeedSettingUserDashboardUpdatedAt: '',
            dashboardFeedSettingUserDashboardDeletedAt: '',
            dashboardFeedSettingUserFeedId: '',
            dashboardFeedSettingUserFeedName: '',
            dashboardFeedSettingUserFeedDescription: '',
            dashboardFeedSettingUserFeedUserId: '',
            dashboardFeedSettingUserFeedUserEmail: '',
            dashboardFeedSettingUserFeedUserFirstName: '',
            dashboardFeedSettingUserFeedUserLastName: '',
            dashboardFeedSettingUserFeedUserAvatar: '',
            dashboardFeedSettingUserFeedUserCreatedAt: '',
            dashboardFeedSettingUserFeedUserUpdatedAt: '',
            dashboardFeedSettingUserFeedUserDeletedAt: '',
            dashboardFeedSettingUserFeedCreatedAt: '',
            dashboardFeedSettingUserFeedUpdatedAt: '',
            dashboardFeedSettingUserFeedDeletedAt: '',
            dashboardFeedSettingRoleDashboardId: '',
            dashboardFeedSettingRoleDashboardName: '',
            dashboardFeedSettingRoleDashboardDescription: '',
            dashboardFeedSettingRoleDashboardUserId: '',
            dashboardFeedSettingRoleDashboardUserEmail: '',
            dashboardFeedSettingRoleDashboardUserFirstName: '',
            dashboardFeedSettingRoleDashboardUserLastName: '',
            dashboardFeedSettingRoleDashboardUserAvatar: '',
            dashboardFeedSettingRoleDashboardUserCreatedAt: '',
            dashboardFeedSettingRoleDashboardUserUpdatedAt: '',
            dashboardFeedSettingRoleDashboardUserDeletedAt: '',
            dashboardFeedSettingRoleDashboardCreatedAt: '',
            dashboardFeedSettingRoleDashboardUpdatedAt: '',
            dashboardFeedSettingRoleDashboardDeletedAt: '',
            dashboardFeedSettingRoleFeedId: '',
            dashboardFeedSettingRoleFeedName: '',
            dashboardFeedSettingRoleFeedDescription: '',
            dashboardFeedSettingRoleFeedUserId: '',
            dashboardFeedSettingRoleFeedUserEmail: '',
            dashboardFeedSettingRoleFeedUserFirstName: '',
            dashboardFeedSettingRoleFeedUserLastName: '',
            dashboardFeedSettingRoleFeedUserAvatar: '',
            dashboardFeedSettingRoleFeedUserCreatedAt: '',
            dashboardFeedSettingRoleFeedUserUpdatedAt: '',
            dashboardFeedSettingRoleFeedUserDeletedAt: '',
            dashboardFeedSettingRoleFeedCreatedAt: '',
            dashboardFeedSettingRoleFeedUpdatedAt: '',
            dashboardFeedSettingRoleFeedDeletedAt: '',
            dashboardFeedSettingPermissionDashboardId: '',
            dashboardFeedSettingPermissionDashboardName: '',
            dashboardFeedSettingPermissionDashboardDescription: '',
            dashboardFeedSettingPermissionDashboardUserId: '',
            dashboardFeedSettingPermissionDashboardUserEmail: '',
            dashboardFeedSettingPermissionDashboardUserFirstName: '',
            dashboardFeedSettingPermissionDashboardUserLastName: '',
            dashboardFeedSettingPermissionDashboardUserAvatar: '',
            dashboardFeedSettingPermissionDashboardUserCreatedAt: '',
            dashboardFeedSettingPermissionDashboardUserUpdatedAt: '',
            dashboardFeedSettingPermissionDashboardUserDeletedAt: '',
            dashboardFeedSettingPermissionDashboardCreatedAt: '',
            dashboardFeedSettingPermissionDashboardUpdatedAt: '',
            dashboardFeedSettingPermissionDashboardDeletedAt: '',
            dashboardFeedSettingPermissionFeedId: '',
            dashboardFeedSettingPermissionFeedName: '',
            dashboardFeedSettingPermissionFeedDescription: '',
            dashboardFeedSettingPermissionFeedUserId: '',
            dashboardFeedSettingPermissionFeedUserEmail: '',
            dashboardFeedSettingPermissionFeedUserFirstName: '',
            dashboardFeedSettingPermissionFeedUserLastName: '',
            dashboardFeedSettingPermissionFeedUserAvatar: '',
            dashboardFeedSettingPermissionFeedUserCreatedAt: '',
            dashboardFeedSettingPermissionFeedUserUpdatedAt: '',
            dashboardFeedSettingPermissionFeedUserDeletedAt: '',
            dashboardFeedSettingPermissionFeedCreatedAt: '',
            dashboardFeedSettingPermissionFeedUpdatedAt: '',
            dashboardFeedSettingPermissionFeedDeletedAt: '',

            
        };
    }

    componentDidMount() {
        this.getDashboardFeedSetting();
    }

    getDashboardFeedSetting() {
        axios.get('/api/dashboard-feed-settings/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    dashboardFeedSettingId: res.data.id,
                    dashboardFeedSettingUserId: res.data.user_id,
                    dashboardFeedSettingRoleId: res.data.role_id,
                    dashboardFeedSettingPermissionId: res.data.permission_id,
                    dashboardFeedSettingDashboardId: res.data.dashboard_id,
                    dashboardFeedSettingFeedId: res.data.feed_id,
                    dashboardFeedSettingUserDashboardId: res.data.user_dashboard_id,
                    dashboardFeedSettingUserFeedId: res.data.user_feed_id,
                    dashboardFeedSettingRoleDashboardId: res.data.role_dashboard_id,
                    dashboardFeedSettingRoleFeedId: res.data.role_feed_id,
                    dashboardFeedSettingPermissionDashboardId: res.data.permission_dashboard_id,
                    dashboardFeedSettingPermissionFeedId: res.data.permission_feed_id,
                    dashboardFeedSettingUserId: res.data.user_id,
                    dashboardFeedSettingUserEmail: res.data.user.email,
                    dashboardFeedSettingUserFirstName: res.data.user.first_name,
                    dashboardFeedSettingUserLastName: res.data.user.last_name,
                    dashboardFeedSettingUserAvatar: res.data.user.avatar,
                    dashboardFeedSettingUserCreatedAt: res.data.user.created_at,
                    dashboardFeedSettingUserUpdatedAt: res.data.user.updated_at,
                    dashboardFeedSettingUserDeletedAt: res.data.user.deleted_at,
                    dashboardFeedSettingRoleId: res.data.role_id,
                    dashboardFeedSettingRoleName: res.data.role.name,
                    dashboardFeedSettingRoleDescription: res.data.role.description,
                    dashboardFeedSettingRoleUserId: res.data.role.user_id,
                    dashboardFeedSettingRoleUserEmail: res.data.role.user.email,
                    dashboardFeedSettingRoleUserFirstName: res.data.role.user.first_name,
                    dashboardFeedSettingRoleUserLastName: res.data.role.user.last_name,
                    dashboardFeedSettingRoleUserAvatar: res.data.role.user.avatar,
                    dashboardFeedSettingRoleUserCreatedAt: res.data.role.user.created_at,
                    dashboardFeedSettingRoleUserUpdatedAt: res.data.role.user.updated_at,
                    dashboardFeedSettingRoleUserDeletedAt: res.data.role.user.deleted_at,
                    dashboardFeedSettingRoleCreatedAt: res.data.role.created_at,
                    dashboardFeedSettingRoleUpdatedAt: res.data.role.updated_at,
                    dashboardFeedSettingRoleDeletedAt: res.data.role.deleted_at,
                    dashboardFeedSettingPermissionId: res.data.permission_id,
                    dashboardFeedSettingPermissionName: res.data.permission.name,
                    dashboardFeedSettingPermissionDescription: res.data.permission.description,
                    dashboardFeedSettingPermissionUserId: res.data.permission.user_id,
                    dashboardFeedSettingPermissionUserEmail: res.data.permission.user.email,
                    dashboardFeedSettingPermissionUserFirstName: res.data.permission.user.first_name,
                    dashboardFeedSettingPermissionUserLastName: res.data.permission.user.last_name,
                    dashboardFeedSettingPermissionUserAvatar: res.data.permission.user.avatar,
                    dashboardFeedSettingPermissionUserCreatedAt: res.data.permission.user.created_at,
                    dashboardFeedSettingPermissionUserUpdatedAt: res.data.permission.user.updated_at,
                    dashboardFeedSettingPermissionUserDeletedAt: res.data.permission.user.deleted_at,
                    dashboardFeedSettingPermissionCreatedAt: res.data.permission.created_at,
                    dashboardFeedSettingPermissionUpdatedAt: res.data.permission.updated_at,
                    dashboardFeedSettingPermissionDeletedAt: res.data.permission.deleted_at,
                    dashboardFeedSettingDashboardId: res.data.dashboard_id,
                    dashboardFeedSettingDashboardName: res.data.dashboard.name,
                    dashboardFeedSettingDashboardDescription: res.data.dashboard.description,
                    dashboardFeedSettingDashboardUserId: res.data.dashboard.user_id,
                    dashboardFeedSettingDashboardUserEmail: res.data.dashboard.user.email,
                    dashboardFeedSettingDashboardUserFirstName: res.data.dashboard.user.first_name,
                    dashboardFeedSettingDashboardUserLastName: res.data.dashboard.user.last_name,
                    dashboardFeedSettingDashboardUserAvatar: res.data.dashboard.user.avatar,
                    dashboardFeedSettingDashboardUserCreatedAt: res.data.dashboard.user.created_at,
                    dashboardFeedSettingDashboardUserUpdatedAt: res.data.dashboard.user.updated_at,
                    dashboardFeedSettingDashboardUserDeletedAt: res.data.dashboard.user.deleted_at,
                    dashboardFeedSettingDashboardCreatedAt: res.data.dashboard.created_at,
                    dashboardFeedSettingDashboardUpdatedAt: res.data.dashboard.updated_at,
                    dashboardFeedSettingDashboardDeletedAt: res.data.dashboard.deleted_at,
                    dashboardFeedSettingFeedId: res.data.feed_id,
                    dashboardFeedSettingFeedName: res.data.feed.name,
                    dashboardFeedSettingFeedDescription: res.data.feed.description,
                    dashboardFeedSettingFeedUserId: res.data.feed.user_id,
                    dashboardFeedSettingFeedUserEmail: res.data.feed.user.email,
                    dashboardFeedSettingFeedUserFirstName: res.data.feed.user.first_name,
                    dashboardFeedSettingFeedUserLastName: res.data.feed.user.last_name,
                    dashboardFeedSettingFeedUserAvatar: res.data.feed.user.avatar,
                    dashboardFeedSettingFeedUserCreatedAt: res.data.feed.user.created_at,
                    dashboardFeedSettingFeedUserUpdatedAt: res.data.feed.user.updated_at,
                    dashboardFeedSettingFeedUserDeletedAt: res.data.feed.user.deleted_at,
                    dashboardFeedSettingFeedCreatedAt: res.data.feed.created_at,
                    dashboardFeedSettingFeedUpdatedAt: res.data.feed.updated_at,
                    dashboardFeedSettingFeedDeletedAt: res.data.feed.deleted_at,

                    
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Dashboard Feed Setting</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <dl className="row">
                            <dt className="col-sm-3">Id</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingId}</dd>
                            <dt className="col-sm-3">User Id</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingUserId}</dd>
                            <dt className="col-sm-3">Role Id</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingRoleId}</dd>
                            <dt className="col-sm-3">Permission Id</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingPermissionId}</dd>
                            <dt className="col-sm-3">Dashboard Id</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingDashboardId}</dd>
                            <dt className="col-sm-3">Feed Id</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingFeedId}</dd>
                            <dt className="col-sm-3">User Dashboard Id</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingUserDashboardId}</dd>
                            <dt className="col-sm-3">User Feed Id</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingUserFeedId}</dd>
                            <dt className="col-sm-3">Role Dashboard Id</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingRoleDashboardId}</dd>
                            <dt className="col-sm-3">Role Feed Id</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingRoleFeedId}</dd>
                            <dt className="col-sm-3">Permission Dashboard Id</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingPermissionDashboardId}</dd>
                            <dt className="col-sm-3">Permission Feed Id</dt>
                            <dd className="col-sm-9">{
                                this.state.dashboardFeedSettingPermissionFeedId
                            }</dd>
                            <dt className="col-sm-3">User Email</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingUserEmail}</dd>
                            <dt className="col-sm-3">User First Name</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingUserFirstName}</dd>
                            <dt className="col-sm-3">User Last Name</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingUserLastName}</dd>
                            <dt className="col-sm-3">User Avatar</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingUserAvatar}</dd>
                            <dt className="col-sm-3">User Created At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingUserCreatedAt}</dd>
                            <dt className="col-sm-3">User Updated At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingUserUpdatedAt}</dd>
                            <dt className="col-sm-3">User Deleted At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingUserDeletedAt}</dd>
                            <dt className="col-sm-3">Role Name</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingRoleName}</dd>
                            <dt className="col-sm-3">Role Description</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingRoleDescription}</dd>
                            <dt className="col-sm-3">Role Created At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingRoleCreatedAt}</dd>
                            <dt className="col-sm-3">Role Updated At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingRoleUpdatedAt}</dd>
                            <dt className="col-sm-3">Role Deleted At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingRoleDeletedAt}</dd>
                            <dt className="col-sm-3">Permission Name</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingPermissionName}</dd>
                            <dt className="col-sm-3">Permission Description</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingPermissionDescription}</dd>
                            <dt className="col-sm-3">Permission Created At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingPermissionCreatedAt}</dd>
                            <dt className="col-sm-3">Permission Updated At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingPermissionUpdatedAt}</dd>
                            <dt className="col-sm-3">Permission Deleted At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingPermissionDeletedAt}</dd>
                            <dt className="col-sm-3">Dashboard Name</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingDashboardName}</dd>
                            <dt className="col-sm-3">Dashboard Description</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingDashboardDescription}</dd>
                            <dt className="col-sm-3">Dashboard Created At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingDashboardCreatedAt}</dd>
                            <dt className="col-sm-3">Dashboard Updated At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingDashboardUpdatedAt}</dd>
                            <dt className="col-sm-3">Dashboard Deleted At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingDashboardDeletedAt}</dd>
                            <dt className="col-sm-3">Feed Name</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingFeedName}</dd>
                            <dt className="col-sm-3">Feed Description</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingFeedDescription}</dd>
                            <dt className="col-sm-3">Feed Created At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingFeedCreatedAt}</dd>
                            <dt className="col-sm-3">Feed Updated At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingFeedUpdatedAt}</dd>
                            <dt className="col-sm-3">Feed Deleted At</dt>
                            <dd className="col-sm-9">{this.state.dashboardFeedSettingFeedDeletedAt}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardFeedSetting;

DashboardFeedSetting.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            dashboardFeedSettingId: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

DashboardFeedSetting.defaultProps = {};

DashboardFeedSetting.contextTypes = {
    router: PropTypes.object.isRequired,
};

DashboardFeedSetting.displayName = 'DashboardFeedSetting';

DashboardFeedSetting.getDerivedStateFromProps = (nextProps, prevState) => {
    if (prevState.dashboardFeedSettingId !== nextProps.match.params.dashboardFeedSettingId) {
        return {
            dashboardFeedSettingId: nextProps.match.params.dashboardFeedSettingId,
        };
    }

    return null;
}

DashboardFeedSetting.getDerivedStateFromError = (error) => {
    console.log(error);
}

DashboardFeedSetting.getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log(prevProps, prevState);
}

DashboardFeedSetting.componentDidCatch = (error, info) => {
    console.log(error, info);
}

DashboardFeedSetting.componentDidMount = () => {
    this.getDashboardFeedSetting();
}

DashboardFeedSetting.componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(prevProps, prevState, snapshot);
}

DashboardFeedSetting.componentWillUnmount = () => {
    console.log('DashboardFeedSetting will unmount');
}

DashboardFeedSetting.componentWillMount = () => {
    console.log('DashboardFeedSetting will mount');
}

DashboardFeedSetting.componentWillReceiveProps = (nextProps, nextContext) => {
    console.log(nextProps, nextContext);
}

DashboardFeedSetting.componentWillUpdate = (nextProps, nextState, nextContext) => {
    console.log(nextProps, nextState, nextContext);
}

DashboardFeedSetting.shouldComponentUpdate = (nextProps, nextState, nextContext) => {
    console.log(nextProps, nextState, nextContext);
}

DashboardFeedSetting.render = () => {
    console.log('DashboardFeedSetting render');
}

DashboardFeedSetting.getDashboardFeedSetting = () => {
    axios.get('/api/v1/dashboard-feed-setting/' + this.state.dashboardFeedSettingId)
        .then((response) => {
            this.setState({
                dashboardFeedSettingId: response.data.id,
                dashboardFeedSettingUserId: response.data.user_id,
                dashboardFeedSettingRoleId: response.data.role_id,
                dashboardFeedSettingPermissionId: response.data.permission_id,
                dashboardFeedSettingDashboardId: response.data.dashboard_id,
                dashboardFeedSettingFeedId: response.data.feed_id,
                dashboardFeedSettingCreatedAt: response.data.created_at,
                dashboardFeedSettingUpdatedAt: response.data.updated_at,
                dashboardFeedSettingDeletedAt: response.data.deleted_at,
                dashboardFeedSettingUserEmail: response.data.user_email,
                dashboardFeedSettingUserFirstName: response.data.user_first_name,
                dashboardFeedSettingUserLastName: response.data.user_last_name,
                dashboardFeedSettingUserAvatar: response.data.user_avatar,
                dashboardFeedSettingUserCreatedAt: response.data.user_created_at,
                dashboardFeedSettingUserUpdatedAt: response.data.user_updated_at,
                dashboardFeedSettingUserDeletedAt: response.data.user_deleted_at,
                dashboardFeedSettingRoleName: response.data.role_name,
                dashboardFeedSettingRoleDescription: response.data.role_description,
                dashboardFeedSettingRoleCreatedAt: response.data.role_created_at,
                dashboardFeedSettingRoleUpdatedAt: response.data.role_updated_at,
                dashboardFeedSettingRoleDeletedAt: response.data.role_deleted_at,
                dashboardFeedSettingPermissionName: response.data.permission_name,
                dashboardFeedSettingPermissionDescription: response.data.permission_description,
                dashboardFeedSettingPermissionCreatedAt: response.data.permission_created_at,
                dashboardFeedSettingPermissionUpdatedAt: response.data.permission_updated_at,
                dashboardFeedSettingPermissionDeletedAt: response.data.permission_deleted_at,
                dashboardFeedSettingDashboardName: response.data.dashboard_name,
                dashboardFeedSettingDashboardDescription: response.data.dashboard_description,
                dashboardFeedSettingDashboardCreatedAt: response.data.dashboard_created_at,
                dashboardFeedSettingDashboardUpdatedAt: response.data.dashboard_updated_at,
                dashboardFeedSettingDashboardDeletedAt: response.data.dashboard_deleted_at,
                dashboardFeedSettingFeedName: response.data.feed_name,
                dashboardFeedSettingFeedDescription: response.data.feed_description,
                dashboardFeedSettingFeedCreatedAt: response.data.feed_created_at,
                dashboardFeedSettingFeedUpdatedAt: response.data.feed_updated_at,
                dashboardFeedSettingFeedDeletedAt: response.data.feed_deleted_at,
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

DashboardFeedSetting.deleteDashboardFeedSetting = () => {
    axios.delete('/api/v1/dashboard-feed-setting/' + this.state.dashboardFeedSettingId)
        .then((response) => {
            this.context.router.history.push('/dashboard-feed-setting');
        })
        .catch((error) => {
            console.log(error);
        });
}

DashboardFeedSetting.updateDashboardFeedSetting = () => {
    axios.put('/api/v1/dashboard-feed-setting/' + this.state.dashboardFeedSettingId, {
        user_id: this.state.dashboardFeedSettingUserId,
        role_id: this.state.dashboardFeedSettingRoleId,
        permission_id: this.state.dashboardFeedSettingPermissionId,
        dashboard_id: this.state.dashboardFeedSettingDashboardId,
        feed_id: this.state.dashboardFeedSettingFeedId,
        created_at: this.state.dashboardFeedSettingCreatedAt,
        updated_at: this.state.dashboardFeedSettingUpdatedAt,
        deleted_at: this.state.dashboardFeedSettingDeletedAt,
        user_email: this.state.dashboardFeedSettingUserEmail,
        user_first_name: this.state.dashboardFeedSettingUserFirstName,
        user_last_name: this.state.dashboardFeedSettingUserLastName,
        user_avatar: this.state.dashboardFeedSettingUserAvatar,
        user_created_at: this.state.dashboardFeedSettingUserCreatedAt,
        user_updated_at: this.state.dashboardFeedSettingUserUpdatedAt,
        user_deleted_at: this.state.dashboardFeedSettingUserDeletedAt,
        role_name: this.state.dashboardFeedSettingRoleName,
        role_description: this.state.dashboardFeedSettingRoleDescription,
        role_created_at: this.state.dashboardFeedSettingRoleCreatedAt,
        role_updated_at: this.state.dashboardFeedSettingRoleUpdatedAt,
        role_deleted_at: this.state.dashboardFeedSettingRoleDeletedAt,
        permission_name: this.state.dashboardFeedSettingPermissionName,
        permission_description: this.state.dashboardFeedSettingPermissionDescription,
        permission_created_at: this.state.dashboardFeedSettingPermissionCreatedAt,
        permission_updated_at: this.state.dashboardFeedSettingPermissionUpdatedAt,
        permission_deleted_at: this.state.dashboardFeedSettingPermissionDeletedAt,
        dashboard_name: this.state.dashboardFeedSettingDashboardName,
        dashboard_description: this.state.dashboardFeedSettingDashboardDescription,
        dashboard_created_at: this.state.dashboardFeedSettingDashboardCreatedAt,
        dashboard_updated_at: this.state.dashboardFeedSettingDashboardUpdatedAt,
        dashboard_deleted_at: this.state.dashboardFeedSettingDashboardDeletedAt,
        feed_name: this.state.dashboardFeedSettingFeedName,
        feed_description: this.state.dashboardFeedSettingFeedDescription,
        feed_created_at: this.state.dashboardFeedSettingFeedCreatedAt,
        feed_updated_at: this.state.dashboardFeedSettingFeedUpdatedAt,
        feed_deleted_at: this.state.dashboardFeedSettingFeedDeletedAt,
    })
        .then((response) => {
            this.context.router.history.push('/dashboard-feed-setting');
        })
        .catch((error) => {
            console.log(error);
        });
}

DashboardFeedSetting.render = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>DashboardFeedSetting</h1>
                    <div className="form-group">
                        <label>DashboardFeedSetting Id</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingId} onChange={this.handleDashboardFeedSettingIdChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting User Id</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingUserId} onChange={this.handleDashboardFeedSettingUserIdChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Role Id</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingRoleId} onChange={this.handleDashboardFeedSettingRoleIdChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Permission Id</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingPermissionId} onChange={this.handleDashboardFeedSettingPermissionIdChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Id</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardId} onChange={this.handleDashboardFeedSettingDashboardIdChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Feed Id</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingFeedId} onChange={this.handleDashboardFeedSettingFeedIdChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Created At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingCreatedAt} onChange={this.handleDashboardFeedSettingCreatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Updated At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingUpdatedAt} onChange={this.handleDashboardFeedSettingUpdatedAtChange} />
                    </div>
                    <div className="form-group
                        <label>DashboardFeedSetting Deleted At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDeletedAt} onChange={this.handleDashboardFeedSettingDeletedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting User Email</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingUserEmail} onChange={this.handleDashboardFeedSettingUserEmailChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting User First Name</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingUserFirstName} onChange={this.handleDashboardFeedSettingUserFirstNameChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting User Last Name</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingUserLastName} onChange={this.handleDashboardFeedSettingUserLastNameChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting User Avatar</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingUserAvatar} onChange={this.handleDashboardFeedSettingUserAvatarChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting User Created At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingUserCreatedAt} onChange={this.handleDashboardFeedSettingUserCreatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting User Updated At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingUserUpdatedAt} onChange={this.handleDashboardFeedSettingUserUpdatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting User Deleted At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingUserDeletedAt} onChange={this.handleDashboardFeedSettingUserDeletedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Role Name</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingRoleName} onChange={this.handleDashboardFeedSettingRoleNameChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Role Description</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingRoleDescription} onChange={this.handleDashboardFeedSettingRoleDescriptionChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Role Created At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingRoleCreatedAt} onChange={this.handleDashboardFeedSettingRoleCreatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Role Updated At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingRoleUpdatedAt} onChange={this.handleDashboardFeedSettingRoleUpdatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Role Deleted At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingRoleDeletedAt} onChange={this.handleDashboardFeedSettingRoleDeletedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Permission Name</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingPermissionName} onChange={this.handleDashboardFeedSettingPermissionNameChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Permission Description</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingPermissionDescription} onChange={this.handleDashboardFeedSettingPermissionDescriptionChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Permission Created At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingPermissionCreatedAt} onChange={this.handleDashboardFeedSettingPermissionCreatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Permission Updated At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingPermissionUpdatedAt} onChange={this.handleDashboardFeedSettingPermissionUpdatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Permission Deleted At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingPermissionDeletedAt} onChange={this.handleDashboardFeedSettingPermissionDeletedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Name</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardName} onChange={this.handleDashboardFeedSettingDashboardNameChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Description</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardDescription} onChange={this.handleDashboardFeedSettingDashboardDescriptionChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Created At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardCreatedAt} onChange={this.handleDashboardFeedSettingDashboardCreatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Updated At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardUpdatedAt} onChange={this.handleDashboardFeedSettingDashboardUpdatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Deleted At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardDeletedAt} onChange={this.handleDashboardFeedSettingDashboardDeletedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Name</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedName} onChange={this.handleDashboardFeedSettingDashboardFeedNameChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Description</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedDescription} onChange={this.handleDashboardFeedSettingDashboardFeedDescriptionChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Created At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedCreatedAt} onChange={this.handleDashboardFeedSettingDashboardFeedCreatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Updated At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedUpdatedAt} onChange={this.handleDashboardFeedSettingDashboardFeedUpdatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Deleted At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedDeletedAt} onChange={this.handleDashboardFeedSettingDashboardFeedDeletedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Setting Name</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedSettingName} onChange={this.handleDashboardFeedSettingDashboardFeedSettingNameChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Setting Description</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedSettingDescription} onChange={this.handleDashboardFeedSettingDashboardFeedSettingDescriptionChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Setting Created At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedSettingCreatedAt} onChange={this.handleDashboardFeedSettingDashboardFeedSettingCreatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Setting Updated At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedSettingUpdatedAt} onChange={this.handleDashboardFeedSettingDashboardFeedSettingUpdatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Setting Deleted At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedSettingDeletedAt} onChange={this.handleDashboardFeedSettingDashboardFeedSettingDeletedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Setting Role Name</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedSettingRoleName} onChange={this.handleDashboardFeedSettingDashboardFeedSettingRoleNameChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Setting Role Description</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedSettingRoleDescription} onChange={this.handleDashboardFeedSettingDashboardFeedSettingRoleDescriptionChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Setting Role Created At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedSettingRoleCreatedAt} onChange={this.handleDashboardFeedSettingDashboardFeedSettingRoleCreatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Setting Role Updated At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedSettingRoleUpdatedAt} onChange={this.handleDashboardFeedSettingDashboardFeedSettingRoleUpdatedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Setting Role Deleted At</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedSettingRoleDeletedAt} onChange={this.handleDashboardFeedSettingDashboardFeedSettingRoleDeletedAtChange} />
                    </div>
                    <div className="form-group">
                        <label>DashboardFeedSetting Dashboard Feed Setting Role Permission Name</label>
                        <input type="text" className="form-control" value={this.state.dashboardFeedSettingDashboardFeedSettingRolePermissionName} onChange={this.handleDashboardFeedSettingDashboardFeedSettingRolePermissionNameChange} />
                    </div>
                </div>                    
            <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    );
    }