namespace taketwo.Controllers {

  export class ArtistController {
    public search;
    public artists;

    static $inject = ['artistService'];

    constructor(private artistService) {}

    public doSearch() {
      this.artists = this.artistService.getArtist(this.search);
    }
  }

}
