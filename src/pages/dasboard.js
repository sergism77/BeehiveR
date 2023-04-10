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

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {getDashboard} from '../actions/dashboardActions';
import {getSettings} from '../actions/settingsActions';
import {getProfile} from '../actions/profileActions';
import { getFeed } from '../../redux/actions/feedActions';
import { getData } from '../../redux/actions/dataActions';
import { getCharts } from '../../redux/actions/chartsActions';
import { getGraphs } from '../../redux/actions/graphsActions';
import { getTables } from '../../redux/actions/tablesActions';
import { getNotifications } from '../../redux/actions/notificationsActions';
import { getMessages } from '../../redux/actions/messagesActions';
import { getComments } from '../../redux/actions/commentsActions';
import { getQuestions } from '../../redux/actions/questionsActions';
import { getAnswers } from '../../redux/actions/answersActions';
import { getEvents } from '../../redux/actions/eventsActions';
import { getTasks } from '../../redux/actions/tasksActions';
import { getProjects } from '../../redux/actions/projectsActions';
import { getJobs } from '../../redux/actions/jobsActions';
import { getOpportunities } from '../../redux/actions/opportunitiesActions';
import { getFriends } from '../../redux/actions/friendsActions';
import { getFollowers } from '../../redux/actions/followersActions';
import { getConnections } from '../../redux/actions/connectionsActions';
import { getContacts } from '../../redux/actions/contactsActions';
import { getPeople } from '../../redux/actions/peopleActions';
import { getApiaries } from '../../redux/actions/apiariesActions';
import { getBeehives } from '../../redux/actions/beehivesActions';
import { getHoney } from '../../redux/actions/honeyActions';
import { getEquipment } from '../../redux/actions/equipmentActions';
import { getSensors } from '../../redux/actions/sensorsActions';
import { getWeather } from '../../redux/actions/weatherActions';
import { getHoneySales } from '../../redux/actions/honeySalesActions';
import { getPurchasedMaterial } from '../../redux/actions/purchasedMaterialActions';
import { getBeekeepingExpenses } from '../../redux/actions/beekeepingExpensesActions';
import { getBeekeepingIncome } from '../../redux/actions/beekeepingIncomeActions';
import { getBeekeepingProfit } from '../../redux/actions/beekeepingProfitActions';
import { getBeekeepingLoss } from '../../redux/actions/beekeepingLossActions';
import { getBeekeepingDebt } from '../../redux/actions/beekeepingDebtActions';
import { getSettings } from '../../redux/actions/settingsActions';
import { getProfile } from '../../redux/actions/profileActions';
import { getLiveFeed } from '../../redux/actions/liveFeedActions';
import { getLiveData } from '../../redux/actions/liveDataActions';
import { getLiveCharts } from '../../redux/actions/liveChartsActions';
import { getLiveGraphs } from '../../redux/actions/liveGraphsActions';
import { getLiveTables } from '../../redux/actions/liveTablesActions';
import { getLiveNotifications } from '../../redux/actions/liveNotificationsActions';
import { getLiveMessages } from '../../redux/actions/liveMessagesActions';
import { getLiveComments } from '../../redux/actions/liveCommentsActions';
import { getLiveQuestions } from '../../redux/actions/liveQuestionsActions';
import { getLiveAnswers } from '../../redux/actions/liveAnswersActions';
import { getLiveEvents } from '../../redux/actions/liveEventsActions';
import { getLiveTasks } from '../../redux/actions/liveTasksActions';
import { getLiveProjects } from '../../redux/actions/liveProjectsActions';
import { getLiveJobs } from '../../redux/actions/liveJobsActions';
import { getLiveOpportunities } from '../../redux/actions/liveOpportunitiesActions';
import { getLiveFriends } from '../../redux/actions/liveFriendsActions';
import { getLiveFollowers } from '../../redux/actions/liveFollowersActions';
import { getLiveConnections } from '../../redux/actions/liveConnectionsActions';
import { getLiveContacts } from '../../redux/actions/liveContactsActions';
import { getLivePeople } from '../../redux/actions/livePeopleActions';
import { getLiveApiaries } from '../../redux/actions/liveApiariesActions';
import { getLiveBeehives } from '../../redux/actions/liveBeehivesActions';
import { getLiveHoney } from '../../redux/actions/liveHoneyActions';
import { getLiveEquipment } from '../../redux/actions/liveEquipmentActions';
import { getLiveSensors } from '../../redux/actions/liveSensorsActions';
import { getLiveWeather } from '../../redux/actions/liveWeatherActions';
import { getLiveHoneySales } from '../../redux/actions/liveHoneySalesActions';
import { getLivePurchasedMaterial } from '../../redux/actions/livePurchasedMaterialActions';
import { getLiveBeekeepingExpenses } from '../../redux/actions/liveBeekeepingExpensesActions';
import { getLiveBeekeepingIncome } from '../../redux/actions/liveBeekeepingIncomeActions';
import { getLiveBeekeepingProfit } from '../../redux/actions/liveBeekeepingProfitActions';
import { getLiveBeekeepingLoss } from '../../redux/actions/liveBeekeepingLossActions';
import { getLiveBeekeepingDebt } from '../../redux/actions/liveBeekeepingDebtActions';
import { getLiveSettings } from '../../redux/actions/liveSettingsActions';
import { getLiveProfile } from '../../redux/actions/liveProfileActions';
import { getLiveWeatherAdvisories } from '../../redux/actions/liveWeatherAdvisoriesActions';
import { getLiveWeatherWarnings } from '../../redux/actions/liveWeatherWarningsActions';
import { getLiveWeatherWatch } from '../../redux/actions/liveWeatherWatchActions';
import { getLiveWeatherForecast } from '../../redux/actions/liveWeatherForecastActions';
import { getLiveWeatherCurrent } from '../../redux/actions/liveWeatherCurrentActions';
import { getLiveWeatherHourly } from '../../redux/actions/liveWeatherHourlyActions';
import { getLiveWeatherDaily } from '../../redux/actions/liveWeatherDailyActions';
import { getLiveWeatherAlerts } from '../../redux/actions/liveWeatherAlertsActions';
import { getLiveWeatherAlertsActive } from '../../redux/actions/liveWeatherAlertsActiveActions';
import { getLiveWeatherAlertsExpired } from '../../redux/actions/liveWeatherAlertsExpiredActions';
import { getLiveWeatherAlertsUpcoming } from '../../redux/actions/liveWeatherAlertsUpcomingActions';
import { getLiveWeatherAlertsToday } from '../../redux/actions/liveWeatherAlertsTodayActions';
import { getLiveWeatherAlertsTomorrow } from '../../redux/actions/liveWeatherAlertsTomorrowActions';
import { getLiveWeatherAlertsThisWeek } from '../../redux/actions/liveWeatherAlertsThisWeekActions';
import { getLiveWeatherAlertsThisWeekend } from '../../redux/actions/liveWeatherAlertsThisWeekendActions';
import { getLiveWeatherAlertsThisMonth } from '../../redux/actions/liveWeatherAlertsThisMonthActions';


const mapStateToProps = state => ({
    notifications: state.notifications.notifications,
    messages: state.messages.messages,
    comments: state.comments.comments,
    questions: state.questions.questions,
    answers: state.answers.answers,
    events: state.events.events,
    tasks: state.tasks.tasks,
    projects: state.projects.projects,
    jobs: state.jobs.jobs,
    opportunities: state.opportunities.opportunities,
    friends: state.friends.friends,
    followers: state.followers.followers,
    connections: state.connections.connections,
    contacts: state.contacts.contacts,
    people: state.people.people,
    apiaries: state.apiaries.apiaries,
    beehives: state.beehives.beehives,
    honey: state.honey.honey,
    equipment: state.equipment.equipment,
    sensors: state.sensors.sensors,
    weather: state.weather.weather,
    honeySales: state.honeySales.honeySales,
    purchasedMaterial: state.purchasedMaterial.purchasedMaterial,
    beekeepingExpenses: state.beekeepingExpenses.beekeepingExpenses,
    beekeepingIncome: state.beekeepingIncome.beekeepingIncome,
    beekeepingProfit: state.beekeepingProfit.beekeepingProfit,
    beekeepingLoss: state.beekeepingLoss.beekeepingLoss,
    beekeepingDebt: state.beekeepingDebt.beekeepingDebt,
    settings: state.settings.settings,
    profile: state.profile.profile,
    weatherAdvisories: state.weatherAdvisories.weatherAdvisories,
    weatherWarnings: state.weatherWarnings.weatherWarnings,
    weatherWatch: state.weatherWatch.weatherWatch,
    weatherForecast: state.weatherForecast.weatherForecast,
    weatherCurrent: state.weatherCurrent.weatherCurrent,
    weatherHourly: state.weatherHourly.weatherHourly,
    weatherDaily: state.weatherDaily.weatherDaily,
    weatherAlerts: state.weatherAlerts.weatherAlerts,
    weatherAlertsActive: state.weatherAlertsActive.weatherAlertsActive,
    weatherAlertsExpired: state.weatherAlertsExpired.weatherAlertsExpired,
    weatherAlertsUpcoming: state.weatherAlertsUpcoming.weatherAlertsUpcoming,
    weatherAlertsToday: state.weatherAlertsToday.weatherAlertsToday,
    weatherAlertsTomorrow: state.weatherAlertsTomorrow.weatherAlertsTomorrow,
    weatherAlertsThisWeek: state.weatherAlertsThisWeek.weatherAlertsThisWeek,
    weatherAlertsThisWeekend: state.weatherAlertsThisWeekend.weatherAlertsThisWeekend,
    weatherAlertsThisMonth: state.weatherAlertsThisMonth.weatherAlertsThisMonth,
});

const mapDispatchToProps = dispatch => ({
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
    getLiveHoneySales: () => dispatch(getLiveHoneySales()),
    getLivePurchasedMaterial: () => dispatch(getLivePurchasedMaterial()),
    getLiveBeekeepingExpenses: () => dispatch(getLiveBeekeepingExpenses()),
    getLiveBeekeepingIncome: () => dispatch(getLiveBeekeepingIncome()),
    getLiveBeekeepingProfit: () => dispatch(getLiveBeekeepingProfit()),
    getLiveBeekeepingLoss: () => dispatch(getLiveBeekeepingLoss()),
    getLiveBeekeepingDebt: () => dispatch(getLiveBeekeepingDebt()),
    getLiveSettings: () => dispatch(getLiveSettings()),
    getLiveProfile: () => dispatch(getLiveProfile()),
    getLiveWeatherAdvisories: () => dispatch(getLiveWeatherAdvisories()),
    getLiveWeatherWarnings: () => dispatch(getLiveWeatherWarnings()),
    getLiveWeatherWatch: () => dispatch(getLiveWeatherWatch()),
    getLiveWeatherForecast: () => dispatch(getLiveWeatherForecast()),
    getLiveWeatherCurrent: () => dispatch(getLiveWeatherCurrent()),
    getLiveWeatherHourly: () => dispatch(getLiveWeatherHourly()),
    getLiveWeatherDaily: () => dispatch(getLiveWeatherDaily()),
    getLiveWeatherAlerts: () => dispatch(getLiveWeatherAlerts()),
    getLiveWeatherAlertsActive: () => dispatch(getLiveWeatherAlertsActive()),
    getLiveWeatherAlertsExpired: () => dispatch(getLiveWeatherAlertsExpired()),
    getLiveWeatherAlertsUpcoming: () => dispatch(getLiveWeatherAlertsUpcoming()),
    getLiveWeatherAlertsToday: () => dispatch(getLiveWeatherAlertsToday()),
    getLiveWeatherAlertsTomorrow: () => dispatch(getLiveWeatherAlertsTomorrow()),
    getLiveWeatherAlertsThisWeek: () => dispatch(getLiveWeatherAlertsThisWeek()),
    getLiveWeatherAlertsThisWeekend: () => dispatch(getLiveWeatherAlertsThisWeekend()),
    getLiveWeatherAlertsThisMonth: () => dispatch(getLiveWeatherAlertsThisMonth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveWeatherAlertsThisWeekend);
