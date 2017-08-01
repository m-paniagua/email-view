app.factory('emails', function($http) {
    return $http.get('emails.json')
    .success(function(data) {
        return data;
    })
    .error(function(err) {
        alert("Failed to load JSON");
        return err;
    });
})