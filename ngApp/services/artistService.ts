namespace taketwo.Services {

  export class ArtistService {
    private ARTIST_RESOURCE = this.$resource('https://api.spotify.com/v1/search?type=artist&q=:name');

    static $inject = ['$resource'];

    constructor(private $resource) {}

    public getArtist(name) {
      return this.ARTIST_RESOURCE.get({name: name});
    }
  }

angular.module('taketwo').service('artistService', ArtistService);
}
