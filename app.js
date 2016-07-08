var app = angular.module('attendanceApp', ['ui.router', 'satellizer','react']);
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/Login');
        $stateProvider
            .state('Login', {
                url: '/Login',
                views: {
                    content: {
                        templateUrl: 'pages/login.html'
                    }
                }
            })
            .state('OTP', {
                url: '/OTP',
                views: {
                    content: {
                        templateUrl: 'pages/otp.html'
                    }
                }
            })
            .state('Attendance', {
                url: '/AttendanceReact',
                views: {
                    content: {
                        templateUrl: 'pages/attendance.html'
                    }
                },
                controller: 'attendanceCtrl'
            })
            .state('Records', {
                url: '/Records',
                views: {
                    content: {
                        templateUrl: 'pages/record.html'
                    }
                }

            })

    });

