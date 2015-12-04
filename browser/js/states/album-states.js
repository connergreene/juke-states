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
     	controller: 'ArtistsCtrl'
    })
	.state('album', {
		url: '/album/{albumID}', //single album
		templateUrl: '/singleAlbum-template.html',
   		controller: 'AlbumCtrl'
	}).state('artist', {
		url: '/artist/{artistID}', //single album
		templateUrl: '/singleArtist-template.html',
   		controller: 'ArtistCtrl'
	})	
});
