//this is the component that will be loaded when the user is logged in
//it will display the user's name and the default dashboard view saved by the user. If it is the first time or the user has not saved a dashboard view, it will display the default view
//it will also display the user's saved dashboard views and allow the user to select one to display
//it will also allow the user to save the current dashboard view
//it will also allow the user to delete a saved dashboard view
//it will also allow the user to edit a saved dashboard view
//it will also allow the user to create a new dashboard view
//it will also allow the user to logout

import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DashboardView } from '../dashboard-view';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
        constructor(private dashboardService: DashboardService, private router: Router, private userService: UserService) { }
    
        ngOnInit() {
            this.getDashboardViews();
            this.getCurrentUser();
        }
    
        dashboardViews: DashboardView[];
    
        currentUser: User;
    
        getDashboardViews(): void {
            this.dashboardService.getDashboardViews()
                .subscribe(dashboardViews => this.dashboardViews = dashboardViews);
        }
    
        getCurrentUser(): void {
            this.userService.getCurrentUser()
                .subscribe(currentUser => this.currentUser = currentUser);
        }
    
        logout(): void {
            this.userService.logout()
                .subscribe();
            this.router.navigate(['/login']);
        }
    
        saveDashboardView(): void {
            this.dashboardService.saveDashboardView()
                .subscribe();
        }
    
        deleteDashboardView(dashboardView: DashboardView): void {
            this.dashboardViews = this.dashboardViews.filter(d => d !== dashboardView);
            this.dashboardService.deleteDashboardView(dashboardView).subscribe();
        }
    
        editDashboardView(dashboardView: DashboardView): void {
            this.dashboardService.editDashboardView(dashboardView).subscribe();
        }
    
        createDashboardView(): void {
            this.dashboardService.createDashboardView().subscribe();
        }
    
    }
