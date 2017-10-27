
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
      query: 'hack reactor allen',
      max: 5
    };
    
    this.props.searchYouTube(options, (data) => {
      this.setState({
        video: data[0],
        videos: data
      });
    });
    
  }
  
  onVideoClick (event) {
    this.setState({
      video: event
    });
  }
  
  
  onSearch (text) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: 'puppies',
      max: 5
    };
    options.query = text;
    
    searchYouTube(options, (data) => {
      this.setState({
        video: data[0],
        videos: data
      });
    });
    
    //onChange
  }
  
  
  render() {
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search onSearch={this.onSearch.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList onClickFunction={this.onVideoClick.bind(this)} videos={this.state.videos}/></div>
          </div>
        </div>
      </div>
  
    );
    
  }
  
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
