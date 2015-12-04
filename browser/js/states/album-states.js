app.config(function ($stateProvider) {
    $stateProvider
    .state('albumList', {
        url: '/albums',
        templateUrl: '/album-template.html',
        controller: 'AlbumsCtrl'
    })
    .state('artistList', {
    	url: '/artists',
    	templateUrl: '/artist-template.html',
    	controller: 'ArtistCtrl'
    })
});
