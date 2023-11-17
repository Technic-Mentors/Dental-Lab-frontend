import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import CallAction from "./components/callAction";
import Contact from "./components/contact";
import About from "./components/about";
import Appointment from "./components/appointment";
import ScrollToTop from "./components/scrollToTop";
import DigitalDentistry from "./components/digitalDentistry";
import Products from "./components/products";
import Shipping from "./components/shipping";
import Price from "./components/price";
import Rxforms from "./components/Rxforms";
import NotFound from "./components/notFound";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Signin from "./components/Signin";
import Blogcategory from "./components/Blogcategory";
import Allcategory from "./components/Allcategory";
import Addcategory from "./components/Addcategory";
import Allposts from "./components/Allposts";
import Signlogin from "./components/Signlogin";
import Board from "./components/Board";
import Blog from "./components/Blog";
import Blogcat from "./components/Blogcat";
function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/price" element={<Price />} />
          <Route path="/rxforms" element={<Rxforms />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/digitaldentistry" element={<DigitalDentistry />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/products" element={<Products />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/signin" element={<Signlogin/>} />
          <Route path="/signupuser" element={<Signin/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:postSlug" element={<Blogcat />} />
          

          <Route path="/admin" element={<Admin/>}>
            <Route index element={<Navigate to="addblog"/>}/>
          <Route path="addblog" element={<Blogcategory/>} />
          <Route path="addcategory" element={<Addcategory/>} />
          <Route path="allcategory" element={<Allcategory/>} />
          <Route path="allposts" element={<Allposts/>} />
          <Route path="board" element={<Board/>} />
          </Route>

          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
          
        </Routes>
        <CallAction />
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
