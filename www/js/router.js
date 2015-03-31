app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: 'templates/home.html',
      controller : 'HomeCtrl'
    })
    .state('nav-hotel', {
      url: "/hotel",
      abstract : true,
      templateUrl: 'templates/nav-hotel.html',
      controller : 'HomeCtrl'
    })
    .state('nav-hotel.hotel', {
      url: '/:hotel',
      views: {
        'hotel-tab':{
          templateUrl: 'templates/hotel.html',
          controller : 'HotelCtrl'
        }
      }
    })
    .state('nav-hotel.hotel-map', {
      url: '/map',
      views: {
        'hotel-tab':{
          templateUrl: 'templates/hotel-map.html',
          controller : 'HotelsMapCtrl'
        }
      }
    })
    .state('nav-hotel.hotel-room', {
      url: '/room',
      views: {
        'hotel-tab':{
          templateUrl: 'templates/hotel-room.html',
          controller : 'HotelsRoomCtrl'
        }
      }
    })
    .state('nav-hotel.hotel-gallery', {
      url: '/gallery',
      views: {
        'hotel-tab':{
          templateUrl: 'templates/hotel-gallery.html',
          controller : 'HotelsGalleryCtrl'
        }
      }
    })
});
