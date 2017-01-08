(function () {
'use strict';

angular.module('CheckLunch', [])
.controller('LunchCheck', function ($scope) {
		
		$scope.lunchRequest = ""
		$scope.tooMuch = "";
	
		/*	FROM THE INSTRUCTIONS:
			If the number of items in the textbox is less than or equal to 3 (e.g., 1, 2, or 3), a message should
			show up under to the textbox saying "Enjoy!". If the number of items is greater than 3 (4, 5, and above),
			the message "Too much!" should show up under the textbox.
			(Hint: To implement this behavior you can utilize the split method. See documentation for that method)
		*/
		$scope.howMuch = function () {		

			if ($scope.lunchRequest == "" ) {
				$scope.tooMuch = "Please enter data first"
			}
			else {
				var count = checkIfTooMuch($scope.lunchRequest);				 
				if(count < 4) {
					$scope.tooMuch = "Enjoy!";
				}
				if(count >= 4) {
					$scope.tooMuch = "Too much!";
				}
			}
		};

		// Do the calculation
		function checkIfTooMuch(string) {
			
			// $scope.tooMuch = "test";
			var lunchCount = 0;
			// break the string down into the various menu items
			var lunchItems = string.split(',');
			lunchCount = lunchItems.length;

			//$scope.tooMuch = lunchItems
			return lunchCount;
		}

	});
})();
