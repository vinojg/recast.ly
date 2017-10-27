
class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      // video: this.props.videos[0],
      // videos: this.props.videos
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
  }
  
  componentDidMount() {
    var options = {
      key: YOUTUBE_API_KEY,
      query: 'kitties',
      max: 5
    };
    // var searchVideos = 'before';
    // searchYouTube(options, (data) => { searchVideos = data; });
    // setTimeout(() => { console.log(searchVideos); }, 1000);
    
    
    searchYouTube(options, (data) => {
      this.setState({
        video: data[0],
        videos: data
      });
    });
    
  }
  
  /*
  through built in function of App
  //invoke search youtube
  */
  
  // this.setState({
  //   video: w.e
  // })
  
  // setVideo () {
  //   this.setState({
  //     video: options
  //   });
  // }

  
  onVideoClick (event) {
    this.setState({
      video: event
    });
  }
  
  render() {
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5> <Search/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.video}/> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5> <VideoList onClickFunction={this.onVideoClick.bind(this)} videos={this.state.videos}/> </h5></div>
          </div>
        </div>
      </div>
  
    );
    
  }
  
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
