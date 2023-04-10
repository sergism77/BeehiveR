//this is the dasboard feed setting create page

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createDashboardFeedSetting } from '../../actions/dashboardFeedSettingActions';
import { getDashboardFeedSettings } from '../../actions/dashboardFeedSettingActions';
import { getDashboardFeeds } from '../../actions/dashboardFeedActions';
import { getDashboardFeedTypes } from '../../actions/dashboardFeedTypeActions';
import { getDashboardFeedTypeSettings } from '../../actions/dashboardFeedTypeSettingActions';
import { getDashboardFeedTypeSettingOptions } from '../../actions/dashboardFeedTypeSettingOptionActions';
import { getDashboardFeedTypeSettingOptionValues } from '../../actions/dashboardFeedTypeSettingOptionValueActions';
import { getDashboardFeedTypeSettingOptionValueUsers } from '../../actions/dashboardFeedTypeSettingOptionValueUserActions';
import { getDashboardFeedTypeSettingOptionValueUserRoles } from '../../actions/dashboardFeedTypeSettingOptionValueUserRoleActions';
import { getDashboardFeedTypeSettingOptionValueUserPermissions } from '../../actions/dashboardFeedTypeSettingOptionValueUserPermissionActions';
import { getDashboardFeedTypeSettingOptionValueRoles } from '../../actions/dashboardFeedTypeSettingOptionValueRoleActions';
import { getDashboardFeedTypeSettingOptionValueRolePermissions } from '../../actions/dashboardFeedTypeSettingOptionValueRolePermissionActions';
import { getDashboardFeedTypeSettingOptionValuePermissions } from '../../actions/dashboardFeedTypeSettingOptionValuePermissionActions';
import { getDashboardFeedTypeSettingOptionValuePermissionUsers } from '../../actions/dashboardFeedTypeSettingOptionValuePermissionUserActions';
import { getDashboardFeedTypeSettingOptionValuePermissionUserRoles } from '../../actions/dashboardFeedTypeSettingOptionValuePermissionUserRoleActions';
import { getDashboardFeedTypeSettingOptionValuePermissionUserPermissions } from '../../actions/dashboardFeedTypeSettingOptionValuePermissionUserPermissionActions';
import { getDashboardFeedTypeSettingOptionValuePermissionRoles } from '../../actions/dashboardFeedTypeSettingOptionValuePermissionRoleActions';
import { getDashboardFeedTypeSettingOptionValuePermissionRolePermissions } from '../../actions/dashboardFeedTypeSettingOptionValuePermissionRolePermissionActions';


class DashboardFeedSettingCreate extends Component {
    
      constructor(props) {
     super(props);
     this.state = {
        dashboard_feed_id: '',
        dashboard_feed_type_setting_id: '',
        dashboard_feed_type_setting_option_value_id: '',
        value: '',
        errors: {}
     };
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
      }
    
      componentDidMount() {
     this.props.getDashboardFeedSettings();
     this.props.getDashboardFeeds();
     this.props.getDashboardFeedTypes();
     this.props.getDashboardFeedTypeSettings();
     this.props.getDashboardFeedTypeSettingOptions();
     this.props.getDashboardFeedTypeSettingOptionValues();
     this.props.getDashboardFeedTypeSettingOptionValueUsers();
     this.props.getDashboardFeedTypeSettingOptionValueUserRoles();
     this.props.getDashboardFeedTypeSettingOptionValueUserPermissions();
     this.props.getDashboardFeedTypeSettingOptionValueRoles();
     this.props.getDashboardFeedTypeSettingOptionValueRolePermissions();
     this.props.getDashboardFeedTypeSettingOptionValuePermissions();
     this.props.getDashboardFeedTypeSettingOptionValuePermissionUsers();
     this.props.getDashboardFeedTypeSettingOptionValuePermissionUserRoles();
     this.props.getDashboardFeedTypeSettingOptionValuePermissionUserPermissions();
     this.props.getDashboardFeedTypeSettingOptionValuePermissionRoles();
     this.props.getDashboardFeedTypeSettingOptionValuePermissionRolePermissions();
      }
    
      componentWillReceiveProps(nextProps) {
     if(nextProps.errors) {
        this.setState({errors: nextProps.errors});
     }
      }
    
      onChange(e) {
     this.setState({[e.target.name]: e.target.value});
      }
    
      onSubmit(e) {
     e.preventDefault();
    
     const newDashboardFeedSetting = {
        dashboard_feed_id: this.state.dashboard_feed_id,
        dashboard_feed_type_setting_id: this.state.dashboard_feed_type_setting_id,
        dashboard_feed_type_setting_option_value_id: this.state.dashboard_feed_type_setting_option_value_id,
        value: this.state.value
     };
    
     this.props.createDashboardFeedSetting(newDashboardFeedSetting, this.props.history);
      }
    
      render() {
     const { errors } = this.state;
    
     const { dashboardFeedSettings } = this.props.dashboardFeedSetting;
     const { dashboardFeeds } = this.props.dashboardFeed;
     const { dashboardFeedTypes } = this.props.dashboardFeedType;
     const { dashboardFeedTypeSettings } = this.props.dashboardFeedTypeSetting;
     const { dashboardFeedTypeSettingOptions } = this.props.dashboardFeedTypeSettingOption;
     const { dashboardFeedTypeSettingOptionValues } = this.props.dashboardFeedTypeSettingOptionValue;
        const { dashboardFeedTypeSettingOptionValueUsers } = this.props.dashboardFeedTypeSettingOptionValueUser;
        const { dashboardFeedTypeSettingOptionValueUserRoles } = this.props.dashboardFeedTypeSettingOptionValueUserRole;
        const { dashboardFeedTypeSettingOptionValueUserPermissions } = this.props.dashboardFeedTypeSettingOptionValueUserPermission;
        const { dashboardFeedTypeSettingOptionValueRoles } = this.props.dashboardFeedTypeSettingOptionValueRole;
        const { dashboardFeedTypeSettingOptionValueRolePermissions } = this.props.dashboardFeedTypeSettingOptionValueRolePermission;
        const { dashboardFeedTypeSettingOptionValuePermissions } = this.props.dashboardFeedTypeSettingOptionValuePermission;
        const { dashboardFeedTypeSettingOptionValuePermissionUsers } = this.props.dashboardFeedTypeSettingOptionValuePermissionUser;
        const { dashboardFeedTypeSettingOptionValuePermissionUserRoles } = this.props.dashboardFeedTypeSettingOptionValuePermissionUserRole;
        const { dashboardFeedTypeSettingOptionValuePermissionUserPermissions } = this.props.dashboardFeedTypeSettingOptionValuePermissionUserPermission;
        const { dashboardFeedTypeSettingOptionValuePermissionRoles } = this.props.dashboardFeedTypeSettingOptionValuePermissionRole;
        const { dashboardFeedTypeSettingOptionValuePermissionRolePermissions } = this.props.dashboardFeedTypeSettingOptionValuePermissionRolePermission;

        let dashboardFeedSettingItems;

        if(dashboardFeedSettings === null) {
        dashboardFeedSettingItems = "there are no dashboard feed settings";
        }
        else {
        dashboardFeedSettingItems = dashboardFeedSettings.map(dashboardFeedSetting => (
        <option key={dashboardFeedSetting.id} value={dashboardFeedSetting.id}>{dashboardFeedSetting.id}</option>
        ));
        }

        let dashboardFeedItems;

        if(dashboardFeeds === null) {
        dashboardFeedItems = "there are no dashboard feeds";
        }
        else {
        dashboardFeedItems = dashboardFeeds.map(dashboardFeed => (
        <option key={dashboardFeed.id} value={dashboardFeed.id}>{dashboardFeed.id}</option>
        ));
        }

        let dashboardFeedTypeItems;

        if(dashboardFeedTypes === null) {
        dashboardFeedTypeItems = "there are no dashboard feed types";
        }
        else {
        dashboardFeedTypeItems = dashboardFeedTypes.map(dashboardFeedType => (
        <option key={dashboardFeedType.id} value={dashboardFeedType.id}>{dashboardFeedType.id}</option>
        ));
        }

        let dashboardFeedTypeSettingItems;

        if(dashboardFeedTypeSettings === null) {
        dashboardFeedTypeSettingItems = "there are no dashboard feed type settings";
        }
        else {
        dashboardFeedTypeSettingItems = dashboardFeedTypeSettings.map(dashboardFeedTypeSetting => (
        <option key={dashboardFeedTypeSetting.id} value={dashboardFeedTypeSetting.id}>{dashboardFeedTypeSetting.id}</option>
        ));
        }

        let dashboardFeedTypeSettingOptionItems;

        if(dashboardFeedTypeSettingOptions === null) {
        dashboardFeedTypeSettingOptionItems = "there are no dashboard feed type setting options";
        }
        else {
        dashboardFeedTypeSettingOptionItems = dashboardFeedTypeSettingOptions.map(dashboardFeedTypeSettingOption => (
        <option key={dashboardFeedTypeSettingOption.id} value={dashboardFeedTypeSettingOption.id}>{dashboardFeedTypeSettingOption.id}</option>
        ));
        }

        let dashboardFeedTypeSettingOptionValueItems;

        if(dashboardFeedTypeSettingOptionValues === null) {
        dashboardFeedTypeSettingOptionValueItems = "there are no dashboard feed type setting option values";
        }
        else {
        dashboardFeedTypeSettingOptionValueItems = dashboardFeedTypeSettingOptionValues.map(dashboardFeedTypeSettingOptionValue => (
        <option key={dashboardFeedTypeSettingOptionValue.id} value={dashboardFeedTypeSettingOptionValue.id}>{dashboardFeedTypeSettingOptionValue.id}</option>
        ));
        }

        let dashboardFeedTypeSettingOptionValueUserItems;

        if(dashboardFeedTypeSettingOptionValueUsers === null) {
        dashboardFeedTypeSettingOptionValueUserItems = "there are no dashboard feed type setting option value users";
        }
        else {
        dashboardFeedTypeSettingOptionValueUserItems = dashboardFeedTypeSettingOptionValueUsers.map(dashboardFeedTypeSettingOptionValueUser => (
        <option key={dashboardFeedTypeSettingOptionValueUser.id} value={dashboardFeedTypeSettingOptionValueUser.id}>{dashboardFeedTypeSettingOptionValueUser.id}</option>
        ));
        }

        let dashboardFeedTypeSettingOptionValueUserRoleItems;

        if(dashboardFeedTypeSettingOptionValueUserRoles === null) {
        dashboardFeedTypeSettingOptionValueUserRoleItems = "there are no dashboard feed type setting option value user roles";
        }
        else {
        dashboardFeedTypeSettingOptionValueUserRoleItems = dashboardFeedTypeSettingOptionValueUserRoles.map(dashboardFeedTypeSettingOptionValueUserRole => (
        <option key={dashboardFeedTypeSettingOptionValueUserRole.id} value={dashboardFeedTypeSettingOptionValueUserRole.id}>{dashboardFeedTypeSettingOptionValueUserRole.id}</option>
        ));
        }

        let dashboardFeedTypeSettingOptionValueUserPermissionItems;

        if(dashboardFeedTypeSettingOptionValueUserPermissions === null) {
        dashboardFeedTypeSettingOptionValueUserPermissionItems = "there are no dashboard feed type setting option value user permissions";
        }
        else {
        dashboardFeedTypeSettingOptionValueUserPermissionItems = dashboardFeedTypeSettingOptionValueUserPermissions.map(dashboardFeedTypeSettingOptionValueUserPermission => (
        <option key={dashboardFeedTypeSettingOptionValueUserPermission.id} value={dashboardFeedTypeSettingOptionValueUserPermission.id}>{dashboardFeedTypeSettingOptionValueUserPermission.id}</option>
        ));
        }

        let dashboardFeedTypeSettingOptionValueRoleItems;

        if(dashboardFeedTypeSettingOptionValueRoles === null) {
        dashboardFeedTypeSettingOptionValueRoleItems = "there are no dashboard feed type setting option value roles";
        }
        else {
        dashboardFeedTypeSettingOptionValueRoleItems = dashboardFeedTypeSettingOptionValueRoles.map(dashboardFeedTypeSettingOptionValueRole => (
        <option key={dashboardFeedTypeSettingOptionValueRole.id} value={dashboardFeedTypeSettingOptionValueRole.id}>{dashboardFeedTypeSettingOptionValueRole.id}</option>
        ));

        }

        let dashboardFeedTypeSettingOptionValueRolePermissionItems;

        if(dashboardFeedTypeSettingOptionValueRolePermissions === null) {
        dashboardFeedTypeSettingOptionValueRolePermissionItems = "there are no dashboard feed type setting option value role permissions";
        }
        else {
        dashboardFeedTypeSettingOptionValueRolePermissionItems = dashboardFeedTypeSettingOptionValueRolePermissions.map(dashboardFeedTypeSettingOptionValueRolePermission => (
        <option key={dashboardFeedTypeSettingOptionValueRolePermission.id} value={dashboardFeedTypeSettingOptionValueRolePermission.id}>{dashboardFeedTypeSettingOptionValueRolePermission.id}</option>
        ));
        }

        let dashboardFeedTypeSettingOptionValuePermissionItems;

        if(dashboardFeedTypeSettingOptionValuePermissions === null) {
        dashboardFeedTypeSettingOptionValuePermissionItems = "there are no dashboard feed type setting option value permissions";
        }
        else {
        dashboardFeedTypeSettingOptionValuePermissionItems = dashboardFeedTypeSettingOptionValuePermissions.map(dashboardFeedTypeSettingOptionValuePermission => (
        <option key={dashboardFeedTypeSettingOptionValuePermission.id} value={dashboardFeedTypeSettingOptionValuePermission.id}>{dashboardFeedTypeSettingOptionValuePermission.id}</option>
        ));
        }

        return (
        <div className="dashboard-feed-type-setting-option-value-permissions">
            <div className="row">
            <div className="col-md-12">
                <div className="card">
                <div className="card-header card-header-primary">
                    <h4 className="card-title ">Dashboard Feed Type Setting Option Value Permissions</h4>
                    <p className="card-category"> List of Dashboard Feed Type Setting Option Value Permissions</p>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                    <table className="table">
                        <thead className=" text-primary">
                        <tr><th>ID</th>
                        <th>Dashboard Feed Setting</th>
                        <th>Dashboard Feed</th>
                        <th>Dashboard Feed Type</th>
                        <th>Dashboard Feed Type Setting</th>
                        <th>Dashboard Feed Type Setting Option</th>
                        <th>Dashboard Feed Type Setting Option Value</th>
                        <th>Dashboard Feed Type Setting Option Value User</th>
                        <th>Dashboard Feed Type Setting Option Value User Role</th>
                        <th>Dashboard Feed Type Setting Option Value User Permission</th>
                        <th>Dashboard Feed Type Setting Option Value Role</th>
                        <th>Dashboard Feed Type Setting Option Value Role Permission</th>
                        <th>Dashboard Feed Type Setting Option Value Permission</th>
                        <th>Actions</th>
                        </tr></thead>
                        <tbody>
                        {dashboardFeedTypeSettingOptionValuePermissionItems}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default DashboardFeedTypeSettingOptionValuePermissionList;

DashboardFeedTypeSettingOptionValuePermissionList.propTypes = {
    getDashboardFeedTypeSettingOptionValuePermissions: PropTypes.func.isRequired,
    getDashboardFeedTypeSettingOptionValuePermission: PropTypes.func.isRequired,
    deleteDashboardFeedTypeSettingOptionValuePermission: PropTypes.func.isRequired,
    dashboardFeedTypeSettingOptionValuePermissions: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValuePermission: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValueUsers: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValueUserRoles: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValueUserPermissions: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValueRoles: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValueRolePermissions: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValuePermissions: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValues: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptions: PropTypes.object.isRequired,
    dashboardFeedTypeSettings: PropTypes.object.isRequired,
    dashboardFeedTypes: PropTypes.object.isRequired,
    dashboardFeeds: PropTypes.object.isRequired,
    dashboardFeedSettings: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValueUser: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValueUserRole: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValueUserPermission: PropTypes.object.isRequired,
    
    dashboardFeedTypeSettingOptionValueRole: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValueRolePermission: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValuePermission: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOptionValue: PropTypes.object.isRequired,
    dashboardFeedTypeSettingOption: PropTypes.object.isRequired,
    dashboardFeedTypeSetting: PropTypes.object.isRequired,
    dashboardFeedType: PropTypes.object.isRequired,
    dashboardFeed: PropTypes.object.isRequired,
    dashboardFeedSetting: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    dashboardFeedTypeSettingOptionValuePermissions: state.dashboardFeedTypeSettingOptionValuePermissions,
    dashboardFeedTypeSettingOptionValuePermission: state.dashboardFeedTypeSettingOptionValuePermission,
    dashboardFeedTypeSettingOptionValueUsers: state.dashboardFeedTypeSettingOptionValueUsers,
    dashboardFeedTypeSettingOptionValueUserRoles: state.dashboardFeedTypeSettingOptionValueUserRoles,
    dashboardFeedTypeSettingOptionValueUserPermissions: state.dashboardFeedTypeSettingOptionValueUserPermissions,
    dashboardFeedTypeSettingOptionValueRoles: state.dashboardFeedTypeSettingOptionValueRoles,
    dashboardFeedTypeSettingOptionValueRolePermissions: state.dashboardFeedTypeSettingOptionValueRolePermissions,
    dashboardFeedTypeSettingOptionValuePermissions: state.dashboardFeedTypeSettingOptionValuePermissions,
    dashboardFeedTypeSettingOptionValues: state.dashboardFeedTypeSettingOptionValues,
    dashboardFeedTypeSettingOptions: state.dashboardFeedTypeSettingOptions,
    dashboardFeedTypeSettings: state.dashboardFeedTypeSettings,
    dashboardFeedTypes: state.dashboardFeedTypes,
    dashboardFeeds: state.dashboardFeeds,
    dashboardFeedSettings: state.dashboardFeedSettings,
    dashboardFeedTypeSettingOptionValueUser: state.dashboardFeedTypeSettingOptionValueUser,
    dashboardFeedTypeSettingOptionValueUserRole: state.dashboardFeedTypeSettingOptionValueUserRole,
    dashboardFeedTypeSettingOptionValueUserPermission: state.dashboardFeedTypeSettingOptionValueUserPermission,

    dashboardFeedTypeSettingOptionValueRole: state.dashboardFeedTypeSettingOptionValueRole,
    dashboardFeedTypeSettingOptionValueRolePermission: state.dashboardFeedTypeSettingOptionValueRolePermission,
    dashboardFeedTypeSettingOptionValuePermission: state.dashboardFeedTypeSettingOptionValuePermission,
    dashboardFeedTypeSettingOptionValue: state.dashboardFeedTypeSettingOptionValue,
    dashboardFeedTypeSettingOption: state.dashboardFeedTypeSettingOption,
    dashboardFeedTypeSetting: state.dashboardFeedTypeSetting,
    dashboardFeedType: state.dashboardFeedType,
    dashboardFeed: state.dashboardFeed,
    dashboardFeedSetting: state.dashboardFeedSetting,
    errors: state.errors
});
