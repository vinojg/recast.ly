var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => 
      <VideoListEntry video={video} onClickFunction ={props.onClickFunction} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


// new VideoList('thing.mp4')
 
// class VideoList extends React.Compenent {
//   constructor () {
    
//   }
  
//   // render () {
//     // const entry = this.props.entry
// //     return (
// //   <div className="video-list">
// //     <div><h5><em>videoListEntry</em> view goes here</h5></div>
// //     <div><h5><em>videoListEntry</em> view goes here</h5></div>
// //     <div><h5><em>videoListEntry</em> view goes here</h5></div>
// //     <div><h5><em>videoListEntry</em> view goes here</h5></div>
// //     <div><h5><em>videoListEntry</em> view goes here</h5></div>
// //   </div>
// // );
//   }
// }