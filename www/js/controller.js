app.controller('HomeCtrl', function($scope, HotelsService) {
  $scope.hotels = HotelsService.hotels;
});

app.controller('HotelCtrl', function($scope, HotelsService, $stateParams) {
  console.log('ici');
  $scope.hotel = HotelsService.getHotel($stateParams.hotel);
});

app.controller('MediaCtrl', function($scope, HotelsService, $stateParams, $ionicModal) {

  $scope.allImages = [{
		'src' : 'img/pic_01.jpg'
	}, {
		'src' : 'img/pic_02.jpg'
	}, {
		'src' : 'img/pic_03.jpg'
	}];

	$scope.showImages = function(index) {
		$scope.activeSlide = index;
		$scope.showModal('templates/image-popover.html');
	}

	$scope.showModal = function(templateUrl) {
		$ionicModal.fromTemplateUrl(templateUrl, {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
			$scope.modal.show();
		});
	}

	// Close the modal
	$scope.closeModal = function() {
		$scope.modal.hide();
		$scope.modal.remove()
	};

});

app.controller('HotelsMapCtrl', function($scope, HotelsService, $stateParams) {
  $scope.hotel = HotelsService.getHotel($stateParams.hotel);
});

app.controller('HotelsRoomCtrl', function($scope, HotelsService, $stateParams) {
  $scope.hotel = HotelsService.getHotel($stateParams.hotel);
});
