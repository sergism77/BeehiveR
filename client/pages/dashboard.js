//this is the dashboard.js file in the pages folder
//here we will render and update the dashboard
//logged in users can manage all their data from here
//logged in users can see graphs and charts from their data here
//logged in users will receive notifications of new messages, comments, questions, answers, etc.
//logged in users will receive notifications of new events, new tasks, new projects, new tasks, new jobs, new opportunities, etc.
//logged in users will receive notifications of new friends, new followers, new connections, new contacts, new people, etc.
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
//the dashboard will be easy to add new middelewares
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
//the dashboard will use a default template for the layout
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

//the dashboard will use a default template for the layout
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

//users will be able to see all their apiaries from the dashboard
//users will be able to see all their beehives from the dashboard
//users will be able to see all their honey from the dashboard
//users will be able to see all their equipment from the dashboard
//users will be able to see all their sensors from the dashboard
//users will be able to see all their weather data from the dashboard
//users will be able to see all their weather forecasts from the dashboard
//users will be able to see all their weather alerts from the dashboard
//users will be able to see all their weather warnings from the dashboard
//users will be able to see all their weather advisories from the dashboard
//users will be able to see all their live feed from the dashboard
//users will be able to see all their live data from the dashboard
//users will be able to see all their live charts from the dashboard
//users will be able to see all their live graphs from the dashboard
//users will be able to see all their live tables from the dashboard
//users will be able to see all their live notifications from the dashboard
//users will be able to see all their live messages from the dashboard


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { User } from '../user';
import { Apiary } from '../apiary';
import { Beehive } from '../beehive';
import { Honey } from '../honey';
import { Equipment } from '../equipment';
import { Sensor } from '../sensor';
import { WeatherData } from '../weather-data';
import { WeatherForecast } from '../weather-forecast';
import { WeatherAlert } from '../weather-alert';
import { WeatherWarning } from '../weather-warning';
import { WeatherAdvisory } from '../weather-advisory';
import { LiveFeed } from '../live-feed';
import { LiveData } from '../live-data';
import { LiveChart } from '../live-chart';
import { LiveGraph } from '../live-graph';
import { LiveTable } from '../live-table';
import { LiveNotification } from '../live-notification';
import { LiveMessage } from '../live-message';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
        user: User = new User();
        apiaries: Apiary[] = [];
        beehives: Beehive[] = [];
        honeys: Honey[] = [];
        equipments: Equipment[] = [];
        sensors: Sensor[] = [];
        weatherDatas: WeatherData[] = [];
        weatherForecasts: WeatherForecast[] = [];
        weatherAlerts: WeatherAlert[] = [];
        weatherWarnings: WeatherWarning[] = [];
        weatherAdvisories: WeatherAdvisory[] = [];
        liveFeeds: LiveFeed[] = [];
        liveDatas: LiveData[] = [];
        liveCharts: LiveChart[] = [];
        liveGraphs: LiveGraph[] = [];
        liveTables: LiveTable[] = [];
        liveNotifications: LiveNotification[] = [];
        liveMessages: LiveMessage[] = [];
    
        constructor(
            private _authService: AuthService,
            private _apiService: ApiService,
            private _router: Router
        ) { }
    
        ngOnInit() {
            this._authService.checkStatus()
                .then((user) => {
                    this.user = user;
                    this._apiService.getApiaries()
                        .then((apiaries) => {
                            this.apiaries = apiaries;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    this._apiService.getBeehives()
                        .then((beehives) => {
                            this.beehives = beehives;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    this._apiService.getHoneys()
                        .then((honeys) => {
                            this.honeys = honeys;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    this._apiService.getEquipments()
                        .then((equipments) => {
                            this.equipments = equipments;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    this._apiService.getSensors()
                        .then((sensors) => {
                            this.sensors = sensors;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    this._apiService.getWeatherDatas()
                        .then((weatherDatas) => {
                            this.weatherDatas = weatherDatas;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    this._apiService.getWeatherForecasts()
                        .then((weatherForecasts) => {
                            this.weatherForecasts = weatherForecasts;
                        }

                        .catch((err) => {
                            console.log(err);
                        }
                        );
                    this._apiService.getWeatherAlerts()
                        .then((weatherAlerts) => {
                            this.weatherAlerts = weatherAlerts;
                        }
                        .catch((err) => {
                            console.log(err);
                        }
                        );
                    this._apiService.getWeatherWarnings()
                        .then((weatherWarnings) => {
                            this.weatherWarnings = weatherWarnings;
                        }
                        .catch((err) => {
                            console.log(err);
                        }
                        );
                    this._apiService.getWeatherAdvisories()
                        .then((weatherAdvisories) => {
                            this.weatherAdvisories = weatherAdvisories;
                        }
                        .catch((err) => {
                            console.log(err);
                        }
                        );
                    this._apiService.getLiveFeeds()
                        .then((liveFeeds) => {
                            this.liveFeeds = liveFeeds;
                        }
                        .catch((err) => {
                            console.log(err);
                        }
                        );
                    this._apiService.getLiveDatas()
                        .then((liveDatas) => {
                            this.liveDatas = liveDatas;
                        }
                        .catch((err) => {
                            console.log(err);
                        }
                        );
                    this._apiService.getLiveCharts()
                        .then((liveCharts) => {
                            this.liveCharts = liveCharts;
                        }
                        .catch((err) => {
                            console.log(err);
                        }
                        );
                    this._apiService.getLiveGraphs()
                        .then((liveGraphs) => {
                            this.liveGraphs = liveGraphs;
                        }
                        .catch((err) => {
                            console.log(err);
                        }
                        );
                    this._apiService.getLiveTables()
                        .then((liveTables) => {
                            this.liveTables = liveTables;
                        }
                        .catch((err) => {
                            console.log(err);
                        }
                        );
                    this._apiService.getLiveNotifications()
                        .then((liveNotifications) => {
                            this.liveNotifications = liveNotifications;
                        }
                        .catch((err) => {
                            console.log(err);
                        }
                        );
                    this._apiService.getLiveMessages()
                        .then((liveMessages) => {
                            this.liveMessages = liveMessages;
                        }
                        .catch((err) => {
                            console.log(err);
                        }
                        );
                })
                .catch((err) => {
                    console.log(err);
                    this._router.navigate(['/login']);
                }
                );
        }

    }

}

