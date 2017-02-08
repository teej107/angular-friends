angular.module('angularFriends').controller('FriendController', function ($scope)
{
    $scope.friends = [];
    loadData(function (response)
    {
        $scope.friends = JSON.parse(response);
        $scope.$apply();
    });
});

function loadData(callback)
{
    var request = new XMLHttpRequest();
    request.overrideMimeType('application/json');
    request.open('GET', 'friend-data.json', true);
    request.onreadystatechange = function ()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            callback(request.responseText);
        }
    }
    request.send();
}
