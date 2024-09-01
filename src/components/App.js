import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Body';
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container">
        <Body />
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </>
  );
}

export default App;
