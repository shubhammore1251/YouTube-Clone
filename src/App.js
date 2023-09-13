import { Container } from 'react-bootstrap';
import './_App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeScreen from './Screens/HomeScreen';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import WatchScreen from './Screens/WatchScreen';
import SearchScreen from './Screens/SearchScreen';
import ChannelScreen from './Screens/ChannelScreen';
// import SubsciptionScreen from './Screens/SubsciptionScreen';
// import LikedVideosScreen from './Screens/LikedVideosScreen';

const Layout = ({ children }) => {

  const [sidebar, setSidebar] = useState(false);

  const handleToggle = () => setSidebar(value => !value);

  return (
    <>
      
      <Header handleToggle={handleToggle} />

      <div className="app-container">
        <Sidebar sidebar={sidebar} handleToggle={handleToggle} />

        <Container fluid className='app-main'>
          {children}
        </Container>
 
      </div>
  
    </>
  )
}


function App() {

  return (
    <>
      <Routes>

        <Route exact path="/"
          element={
            <Layout>
              <HomeScreen/>
            </Layout>
          }
        />

      
        <Route exact path="/search/:query"
          element={
            <Layout>
              <SearchScreen />
            </Layout>
          }
        />

        <Route exact path="/watch/:id"
          element={
            <Layout>
              <WatchScreen />
            </Layout>
          }
        />

        {/* <Route exact path="/feed/subscriptions"
          element={
            <Layout>
              <SubsciptionScreen />
            </Layout>
          }
        /> */}

        <Route exact path="/channel/:channelId"
          element={
            <Layout>
              <ChannelScreen/>
            </Layout>
          }
        />

        {/* <Route exact path="/yourlikedvideos"
          element={
            <Layout>
              <LikedVideosScreen/>
            </Layout>
          }
        /> */}

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
