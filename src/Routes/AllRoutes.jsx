import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import ReturnPolicy from "../Pages/ReturnPolicy";
import Collections from "../Pages/Collections";
import Gaming from "../Pages/Gaming";
import Horror from "../Pages/Horror";
import Movies from "../Pages/Movies";
import NewReleases from "../Pages/NewReleases";
import Nostaligia from "../Pages/Nostaligia";
import TopPics from "../Pages/TopPics";
import TvShows from "../Pages/TvShows";
import Zodiac from "../Pages/Zodiac";
import WholeSale from "../Pages/WholeSale";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsAndConditions from "../Pages/TermsAndConditions";
import Affliates from "../Pages/Affliates";
import ArtistLogin from "../Pages/ArtistLogin";
import Others from "../Pages/Others";
import Account from "../Pages/Account";
import Cart from "../Pages/Cart";
import Wishlist from "../Pages/Wishlist";

function AllRoutes() {
  return (
    <Routes >
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="return-policy" element={<ReturnPolicy />} />
        <Route path="collections" element={<Collections/>}/>
        <Route path="gaming" element={<Gaming/>}/>
        <Route path="horror" element={<Horror/>}/>
        <Route path="movies" element={<Movies/>}/>
        <Route path="new-releases" element={<NewReleases/>}/>
        <Route path="nostaligia" element={<Nostaligia/>}/>
        <Route path="top-pics" element={<TopPics/>}/>
        <Route path="tv-shows" element={<TvShows/>}/>
        <Route path="zodiac" element={<Zodiac/>}/>
        <Route path="wholesale" element={<WholeSale/>}/>
        <Route path="affliates" element={<Affliates/>}/>
        <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="terms-and-consitions" element={<TermsAndConditions/>}/>
        <Route path="artist-Login" element={<ArtistLogin/>}/>
        <Route path="other" element={<Others/>}/>
        <Route path="account" element={<Account/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>


      </Route>
    </Routes>
  );
}

export default AllRoutes;
