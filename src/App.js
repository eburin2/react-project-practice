import React, { Component } from 'react';
import './App.css';
import Album from './Album/Album';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    albums: [
      { id: 1, name: 'Wigwam', title: 'Being', year: 1974, img:'https://img.discogs.com/13ZTJqYkr4rrpdQXvmuOTulVqK0=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-763391-1417955555-2198.jpeg.jpg' },
      { id: 2, name: 'Mooseheart Faith', title: 'Mooseheart Faith', year: 1988, img: 'https://img.discogs.com/_2jM-Kj11LeaOrerxafUKVwZhns=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3385497-1356203200-5557.jpeg.jpg' },
      { id: 3, name: 'Casino Shanghai', title: 'Film', year: 1985, img:'https://img.discogs.com/r5xclqW7v5rV79nicAXAvdJ31jk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2567423-1290836525.png.jpg' }
    ],
    showAlbums: false
  }



  deleteAlbumHandler = (albumIndex) => {
    // const persons = this.state.persons.slice();
    const albums = [...this.state.albums];
    albums.splice(albumIndex, 1);
    this.setState({albums: albums})
  }


  toggleAlbumHandler = () => {
    const doesShow = this.state.showAlbums;
    this.setState({showAlbums: !doesShow});
  }


  render() {
    const style = {
      backgroundColor: 'green',
      text: 'white',
      font: 'inherit',
      border: '2px solid hotpink',
      padding: '8px',
      color: '#fff',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: '#000'
      }
    };

    let albums = null;

    if (this.state.showAlbums) {
      albums = (
        <div>
          {this.state.albums.map((album, index) => {
            return <Album
                    click={() => this.deleteAlbumHandler(index)}
                    name={album.name}
                    title={album.title}
                    year={album.year}
                    image={album.img}
                    key={album.id}
                    />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: '#000'
      }
    }

    const classes = [];

    if (this.state.albums.length <= 2) {
       classes.push('red');
    }

    if (this.state.albums.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <div className="mutant">
          <div class="sounds">
            <h1>Mutant Sounds</h1>
          </div>
        </div>
        <p className={classes.join(' ')}>OHO</p>
        <button
          style={style}
          onClick={this.toggleAlbumHandler}>2007</button>
          {albums}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
