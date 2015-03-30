app.controller('HomeCtrl', function($scope, HotelsService) {
  $scope.hotels = HotelsService.hotels;
});

app.controller('HotelCtrl', function($scope, HotelsService, $stateParams) {
  $scope.hotel = HotelsService.getHotel($stateParams.hotel);
});

app.controller('HotelsGalleryCtrl', function($scope, HotelsService, $stateParams) {
  $scope.hotel = HotelsService.getHotel($stateParams.hotel);
});

app.controller('HotelsMapCtrl', function($scope, HotelsService, $stateParams) {
  $scope.hotel = HotelsService.getHotel($stateParams.hotel);
});

app.controller('HotelsRoomCtrl', function($scope, HotelsService, $stateParams) {
  $scope.hotel = HotelsService.getHotel($stateParams.hotel);
});
