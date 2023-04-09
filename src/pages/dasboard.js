//this is the dasboard page
//here we will render and update the dashboard
//logged in users can manage all their data from here
//logged in users can see graphs and charts from their data here
//logged in users will recieve notifications of new messages, comments, questions, answers, etc.
//logged in users will recieve notifications of new events, new tasks, new projects, new tasks, new jobs, new opportunities, etc.
//logged in users will recieve notifications of new friends, new followers, new connections, new contacts, new people, etc.
//users will be able to choose what they want to see in the dashboard
//all visualisation options will be available from the settings page
////the dashboard will be the first page that users will see when they log in
// the dashboard layout template will be used here but is in the layouts folder
//the dashboard will be reactive and responsive
//the dashboard will be easy to use and easy to understand
//the dashboard will be easy to maintain
//the dashboard will be easy to add new features
//the dashboard will be easy to add new pages
//the dashboard will be easy to add new components
//the dashboard will be easy to add new actions
//the dashboard will be easy to add new reducers
//the dashboard will be easy to add new services
//the dashboard will be easy to add new middlewares
//the dashboard will be easy to add new helpers
//since there will be a lot of different types of data to be shown, users will be able to save different dashboards and give the dashboards a unique name
//saved dashboards will be available from the settings page
//users will lbe able to choose which dashboard to show when they log in
//users will be able to navigate between dashboards from a sidebar in the dashboard page
//users will be able to track their apiaries and hives from the dashboard
//users will be able to track their beehives health from the dashboard
//users will be able to track their honey production from the dashboard
//users will be able to track their honey sales from the dashboard
//users will be able to track purchased material for their beekeeping from the dashboard
//users will be able to track their beekeeping expenses from the dashboard
//users will be able to track their beekeeping income from the dashboard
//users will be able to track their beekeeping profit from the dashboard
//users will be able to track their beekeeping loss from the dashboard
//users will be able to track their beekeeping debt from the dashboard
//users will be able to see all their equipment from the dashboard
//users will be able to see weather data from the dashboard
//users will be able to see weather forecasts from the dashboard
//users will be able to see weather alerts from the dashboard
//users will be able to see weather warnings from the dashboard
//users will be able to see weather advisories from the dashboard
//users will be able to connect external sensors to the dashboard so they can get a live feed of the data from the sensors in the dashboard
//the dasboard will use a default template for the layout
//the dashboard will use a default template for the charts
//the dashboard will use a default template for the graphs
//the dashboard will use a default template for the tables
//the dashboard will use a default template for the notifications
//the dashboard will use a default template for the messages
//the dashboard will use a default template for the comments
//the dashboard will use a default template for the questions
//the dashboard will use a default template for the answers
//the dashboard will use a default template for the events
//the dashboard will use a default template for the tasks
//the dashboard will use a default template for the projects
//the dashboard will use a default template for the jobs
//the dashboard will use a default template for the opportunities
//the dashboard will use a default template for the friends
//the dashboard will use a default template for the followers
//the dashboard will use a default template for the connections
//the dashboard will use a default template for the contacts
//the dashboard will use a default template for the people
//the dashboard will use a default template for the apiaries
//the dashboard will use a default template for the hives
//the dashboard will use a default template for the beehives
//the dashboard will use a default template for the honey
//the dashboard will use a default template for the honey sales
//the dashboard will use a default template for the purchased material
//the dashboard will use a default template for the beekeeping expenses
//the dashboard will use a default template for the beekeeping income
//the dashboard will use a default template for the beekeeping profit
//the dashboard will use a default template for the beekeeping loss
//the dashboard will use a default template for the beekeeping debt
//the dashboard will use a default template for the equipment
//the dashboard will use a default template for the sensors
//the dashboard will use a default template for the weather data
//the dashboard will use a default template for the weather forecasts
//the dashboard will use a default template for the weather alerts
//the dashboard will use a default template for the weather warnings
//the dashboard will use a default template for the weather advisories
//the dashboard will use a default template for the live feed
//the dashboard will use a default template for the live data
//the dashboard will use a default template for the live charts
//the dashboard will use a default template for the live graphs
//the dashboard will use a default template for the live tables
//the dashboard will use a default template for the live notifications
//the dashboard will use a default template for the live messages
//from the dashboard users will be able to navigate to the settings page
//from the dashboard users will be able to navigate to the profile page
//from the dashboard users will be able to navigate to the apiaries page
//from the dashboard users will be able to navigate to the beehives page
//from the dashboard users will be able to navigate to the honey page
//from the dashboard users will be able to navigate to the equipment page
//from the dashboard users will be able to navigate to the sensors page
//from the dashboard users will be able to navigate to the weather page
//from the dashboard users will be able to navigate to the live feed page
//from the dashboard users will be able to navigate to the live data page
//from the dashboard users will be able to navigate to the live charts page
//from the dashboard users will be able to navigate to the live graphs page
//from the dashboard users will be able to navigate to the live tables page
//from the dashboard users will be able to navigate to the live notifications page
//from the dashboard users will be able to navigate to the live messages page
//from the dashboard users will be able to navigate to the live comments page



import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { getDashboard } from '../actions/dashboardActions';
import { getApiaries } from '../actions/apiaryActions';
import { getBeehives } from '../actions/beehiveActions';
import { getHoney } from '../actions/honeyActions';
import { getEquipment } from '../actions/equipmentActions';
import { getSensors } from '../actions/sensorActions';
import { getWeather } from '../actions/weatherActions';
import { getLiveFeed } from '../actions/liveFeedActions';
import { getLiveData } from '../actions/liveDataActions';
import { getLiveCharts } from '../actions/liveChartsActions';
import { getLiveGraphs } from '../actions/liveGraphsActions';
import { getLiveTables } from '../actions/liveTablesActions';
import { getLiveNotifications } from '../actions/liveNotificationsActions';
import { getLiveMessages } from '../actions/liveMessagesActions';
import { getLiveComments } from '../actions/liveCommentsActions';
import { getLiveQuestions } from '../actions/liveQuestionsActions';
import { getLiveAnswers } from '../actions/liveAnswersActions';
import { getLiveEvents } from '../actions/liveEventsActions';
import { getLiveTasks } from '../actions/liveTasksActions';
import { getLiveProjects } from '../actions/liveProjectsActions';
import { getLiveJobs } from '../actions/liveJobsActions';
import { getLiveOpportunities } from '../actions/liveOpportunitiesActions';
import { getLiveFriends } from '../actions/liveFriendsActions';
import { getLiveFollowers } from '../actions/liveFollowersActions';
import { getLiveConnections } from '../actions/liveConnectionsActions';
import { getLiveContacts } from '../actions/liveContactsActions';
import { getLivePeople } from '../actions/livePeopleActions';
import { getLiveApiaries } from '../actions/liveApiariesActions';
import { getLiveBeehives } from '../actions/liveBeehivesActions';
import { getLiveHoney } from '../actions/liveHoneyActions';
import { getLiveEquipment } from '../actions/liveEquipmentActions';
import { getLiveSensors } from '../actions/liveSensorsActions';
import { getLiveWeather } from '../actions/liveWeatherActions';
import { getLiveWeatherData } from '../actions/liveWeatherDataActions';
import { getLiveWeatherForecasts } from '../actions/liveWeatherForecastsActions';
import { getLiveWeatherAlerts } from '../actions/liveWeatherAlertsActions';
import { getLiveWeatherWarnings } from '../actions/liveWeatherWarningsActions';
import { getLiveWeatherAdvisories } from '../actions/liveWeatherAdvisoriesActions';
import { getLiveHoneySales } from '../actions/liveHoneySalesActions';
import { getLivePurchasedMaterial } from '../actions/livePurchasedMaterialActions';
import { getLiveBeekeepingExpenses } from '../actions/liveBeekeepingExpensesActions';
import { getLiveBeekeepingIncome } from '../actions/liveBeekeepingIncomeActions';
import { getLiveBeekeepingProfit } from '../actions/liveBeekeepingProfitActions';
import { getLiveBeekeepingLoss } from '../actions/liveBeekeepingLossActions';
import { getLiveBeekeepingDebt } from '../actions/liveBeekeepingDebtActions';
import { getSettings } from '../actions/settingsActions';
import { getProfile } from '../actions/profileActions';
import { getApiaries } from '../actions/apiaryActions';
import { getBeehives } from '../actions/beehiveActions';
import { getHoney } from '../actions/honeyActions';
import { getEquipment } from '../actions/equipmentActions';
import { getSensors } from '../actions/sensorActions';
import { getWeather } from '../actions/weatherActions';
import { getLiveFeed } from '../actions/liveFeedActions';
import { getLiveData } from '../actions/liveDataActions';
import { getLiveCharts } from '../actions/liveChartsActions';
import { getLiveGraphs } from '../actions/liveGraphsActions';
import { getLiveTables } from '../actions/liveTablesActions';
import { getLiveNotifications } from '../actions/liveNotificationsActions';
import { getLiveMessages } from '../actions/liveMessagesActions';
import { getLiveComments } from '../actions/liveCommentsActions';
import { getLiveQuestions } from '../actions/liveQuestionsActions';
import { getLiveAnswers } from '../actions/liveAnswersActions';
import { getLiveEvents } from '../actions/liveEventsActions';
import { getLiveTasks } from '../actions/liveTasksActions';
import { getLiveProjects } from '../actions/liveProjectsActions';
import { getLiveJobs } from '../actions/liveJobsActions';
import { getLiveOpportunities } from '../actions/liveOpportunitiesActions';
import { getLiveFriends } from '../actions/liveFriendsActions';
import { getLiveFollowers } from '../actions/liveFollowersActions';
import { getLiveConnections } from '../actions/liveConnectionsActions';
import { getLiveContacts } from '../actions/liveContactsActions';
import { getLivePeople } from '../actions/livePeopleActions';
import { getLiveApiaries } from '../actions/liveApiariesActions';
import { getLiveBeehives } from '../actions/liveBeehivesActions';
import { getLiveHoney } from '../actions/liveHoneyActions';
import { getLiveEquipment } from '../actions/liveEquipmentActions';
import { getLiveSensors } from '../actions/liveSensorsActions';
import { getLiveWeather } from '../actions/liveWeatherActions';
import { getLiveWeatherData } from '../actions/liveWeatherDataActions';
import { getLiveWeatherForecasts } from '../actions/liveWeatherForecastsActions';
import { getLiveWeatherAlerts } from '../actions/liveWeatherAlertsActions';
import { getLiveWeatherWarnings } from '../actions/liveWeatherWarningsActions';
import { getLiveWeatherAdvisories } from '../actions/liveWeatherAdvisoriesActions';
import { getLiveHoneySales } from '../actions/liveHoneySalesActions';
import { getLivePurchasedMaterial } from '../actions/livePurchasedMaterialActions';

import { getLiveBeekeepingExpenses } from '../actions/liveBeekeepingExpensesActions';
import { getLiveBeekeepingIncome } from '../actions/liveBeekeepingIncomeActions';
import { getLiveBeekeepingProfit } from '../actions/liveBeekeepingProfitActions';
import { getLiveBeekeepingLoss } from '../actions/liveBeekeepingLossActions';
import { getLiveBeekeepingDebt } from '../actions/liveBeekeepingDebtActions';
import { getSettings } from '../actions/settingsActions';
import { getProfile } from '../actions/profileActions';


const mapStateToProps = state => ({
    dashboard: state.dashboard,
    feed: state.feed,
    data: state.data,
    charts: state.charts,
    graphs: state.graphs,
    tables: state.tables,
    notifications: state.notifications,
    messages: state.messages,
    comments: state.comments,
    questions: state.questions,
    answers: state.answers,
    events: state.events,
    tasks: state.tasks,
    projects: state.projects,
    jobs: state.jobs,
    opportunities: state.opportunities,
    friends: state.friends,
    followers: state.followers,
    connections: state.connections,
    contacts: state.contacts,
    people: state.people,
    apiaries: state.apiaries,
    beehives: state.beehives,
    honey: state.honey,
    equipment: state.equipment,
    sensors: state.sensors,
    weather: state.weather,
    honeySales: state.honeySales,
    purchasedMaterial: state.purchasedMaterial,
    beekeepingExpenses: state.beekeepingExpenses,
    beekeepingIncome: state.beekeepingIncome,
    beekeepingProfit: state.beekeepingProfit,
    beekeepingLoss: state.beekeepingLoss,
    beekeepingDebt: state.beekeepingDebt,
    settings: state.settings,
    profile: state.profile,
    liveFeed: state.liveFeed,
    liveData: state.liveData,
    liveCharts: state.liveCharts,
    liveGraphs: state.liveGraphs,
    liveTables: state.liveTables,
    liveNotifications: state.liveNotifications,
    liveMessages: state.liveMessages,
    liveComments: state.liveComments,
    liveQuestions: state.liveQuestions,
    liveAnswers: state.liveAnswers,
    liveEvents: state.liveEvents,
    liveTasks: state.liveTasks,
    liveProjects: state.liveProjects,
    liveJobs: state.liveJobs,
    liveOpportunities: state.liveOpportunities,
    liveFriends: state.liveFriends,
    liveFollowers: state.liveFollowers,
    liveConnections: state.liveConnections,
    liveContacts: state.liveContacts,
    livePeople: state.livePeople,
    liveApiaries: state.liveApiaries,
    liveBeehives: state.liveBeehives,
    liveHoney: state.liveHoney,
    liveEquipment: state.liveEquipment,
    liveSensors: state.liveSensors,
    liveWeather: state.liveWeather,
    liveWeatherData: state.liveWeatherData,
    liveWeatherForecasts: state.liveWeatherForecasts,
    liveWeatherAlerts: state.liveWeatherAlerts,
    liveWeatherWarnings: state.liveWeatherWarnings,
    liveWeatherAdvisories: state.liveWeatherAdvisories,
    liveHoneySales: state.liveHoneySales,
    livePurchasedMaterial: state.livePurchasedMaterial,
    liveBeekeepingExpenses: state.liveBeekeepingExpenses,
    liveBeekeepingIncome: state.liveBeekeepingIncome,
    liveBeekeepingProfit: state.liveBeekeepingProfit,
    liveBeekeepingLoss: state.liveBeekeepingLoss,
    liveBeekeepingDebt: state.liveBeekeepingDebt,
});

const mapDispatchToProps = dispatch => ({
    getFeed: () => dispatch(getFeed()),
    getData: () => dispatch(getData()),
    getCharts: () => dispatch(getCharts()),
    getGraphs: () => dispatch(getGraphs()),
    getTables: () => dispatch(getTables()),
    getNotifications: () => dispatch(getNotifications()),
    getMessages: () => dispatch(getMessages()),
    getComments: () => dispatch(getComments()),
    getQuestions: () => dispatch(getQuestions()),
    getAnswers: () => dispatch(getAnswers()),
    getEvents: () => dispatch(getEvents()),
    getTasks: () => dispatch(getTasks()),
    getProjects: () => dispatch(getProjects()),
    getJobs: () => dispatch(getJobs()),
    getOpportunities: () => dispatch(getOpportunities()),
    getFriends: () => dispatch(getFriends()),
    getFollowers: () => dispatch(getFollowers()),
    getConnections: () => dispatch(getConnections()),
    getContacts: () => dispatch(getContacts()),
    getPeople: () => dispatch(getPeople()),
    getApiaries: () => dispatch(getApiaries()),
    getBeehives: () => dispatch(getBeehives()),
    getHoney: () => dispatch(getHoney()),
    getEquipment: () => dispatch(getEquipment()),
    getSensors: () => dispatch(getSensors()),
    getWeather: () => dispatch(getWeather()),
    getHoneySales: () => dispatch(getHoneySales()),
    getPurchasedMaterial: () => dispatch(getPurchasedMaterial()),
    getBeekeepingExpenses: () => dispatch(getBeekeepingExpenses()),
    getBeekeepingIncome: () => dispatch(getBeekeepingIncome()),
    getBeekeepingProfit: () => dispatch(getBeekeepingProfit()),
    getBeekeepingLoss: () => dispatch(getBeekeepingLoss()),
    getBeekeepingDebt: () => dispatch(getBeekeepingDebt()),
    getSettings: () => dispatch(getSettings()),
    getProfile: () => dispatch(getProfile()),
    getLiveFeed: () => dispatch(getLiveFeed()),
    getLiveData: () => dispatch(getLiveData()),
    getLiveCharts: () => dispatch(getLiveCharts()),
    getLiveGraphs: () => dispatch(getLiveGraphs()),
    getLiveTables: () => dispatch(getLiveTables()),
    getLiveNotifications: () => dispatch(getLiveNotifications()),
    getLiveMessages: () => dispatch(getLiveMessages()),
    getLiveComments: () => dispatch(getLiveComments()),
    getLiveQuestions: () => dispatch(getLiveQuestions()),
    getLiveAnswers: () => dispatch(getLiveAnswers()),
    getLiveEvents: () => dispatch(getLiveEvents()),
    getLiveTasks: () => dispatch(getLiveTasks()),
    getLiveProjects: () => dispatch(getLiveProjects()),
    getLiveJobs: () => dispatch(getLiveJobs()),
    getLiveOpportunities: () => dispatch(getLiveOpportunities()),
    getLiveFriends: () => dispatch(getLiveFriends()),
    getLiveFollowers: () => dispatch(getLiveFollowers()),
    getLiveConnections: () => dispatch(getLiveConnections()),
    getLiveContacts: () => dispatch(getLiveContacts()),
    getLivePeople: () => dispatch(getLivePeople()),
    getLiveApiaries: () => dispatch(getLiveApiaries()),
    getLiveBeehives: () => dispatch(getLiveBeehives()),
    getLiveHoney: () => dispatch(getLiveHoney()),
    getLiveEquipment: () => dispatch(getLiveEquipment()),
    getLiveSensors: () => dispatch(getLiveSensors()),
    getLiveWeather: () => dispatch(getLiveWeather()),
    getLiveWeatherData: () => dispatch(getLiveWeatherData()),
    getLiveWeatherForecasts: () => dispatch(getLiveWeatherForecasts()),
    getLiveWeatherAlerts: () => dispatch(getLiveWeatherAlerts()),
    getLiveWeatherWarnings: () => dispatch(getLiveWeatherWarnings()),
    getLiveWeatherAdvisories: () => dispatch(getLiveWeatherAdvisories()),
    getLiveHoneySales: () => dispatch(getLiveHoneySales()),
    getLivePurchasedMaterial: () => dispatch(getLivePurchasedMaterial()),
    getLiveBeekeepingExpenses: () => dispatch(getLiveBeekeepingExpenses()),
    getLiveBeekeepingIncome: () => dispatch(getLiveBeekeepingIncome()),
    getLiveBeekeepingProfit: () => dispatch(getLiveBeekeepingProfit()),
    getLiveBeekeepingLoss: () => dispatch(getLiveBeekeepingLoss()),
    getLiveBeekeepingDebt: () => dispatch(getLiveBeekeepingDebt()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

