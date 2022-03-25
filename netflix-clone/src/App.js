import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner';
function App() {
  return (
    <div className="app">
      {/* banner */}
      <Banner />
      <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrignals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending} /> */}
    </div>
  );
}

export default App;
