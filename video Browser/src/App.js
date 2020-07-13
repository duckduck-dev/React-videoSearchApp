import React from 'react';
import SearchBox from './searchBox';
import './views/main.css';
import youtube from './Api/youtube';
import VideoList from './videoList';
import VideoDetails from './videoDetails';

class App extends React.Component{
    state = {videos : [], selectedVideo : null};

    componentDidMount() {
            this.fetchData('backend');
    }

   fetchData =  async term => {
            const response = await youtube.get('/search', {
                params : { q : term, key:'AIzaSyBoQymhuio8k4zz5wanGrg61ENd1KO-zCI', part : 'snippet'}
            });
            this.setState({videos : response.data.items,
                                        selectedVideo : response.data.items[0]
            });
    };
    onVideoSelect = selectedContent => {
        this.setState({selectedVideo : selectedContent});
    }
    render() {
        return(
            <div  className="ui container">
                <SearchBox  onSubmit={this.fetchData}/>
                <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetails  video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList  selectedVideo={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}


export default App;