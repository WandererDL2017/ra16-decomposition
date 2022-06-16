import React from "react";
import moment from "moment";
import WidgetWeather from "./components/widgets/WidgetWeather";
import WidgetPopular from "./components/widgets/WidgetPopular";
import WidgetMap from "./components/widgets/WidgetMap";
import WidgetRadio from "./components/widgets/WidgetRadio";
import WidgetTV from "./components/widgets/WidgetTV";
import SearchBar from "./components/search/SearchBar";
import TopicsList from "./components/TopicsList";
import NewsList from "./components/NewsList";
import RatesList from "./components/RatesList";
import Banner from "./components/Banner";
import Date from "./components/Date";
import Promo from "./components/Promo";
import * as data from "./data/data";
const today = moment();

function App() {
  return (
    <div className="App">
      <div className="ui relaxed grid">
        <div className="twelve wide column">
          <div className="ui horizontal segments">
            <div className="ui segment">
              <TopicsList topics={data.mainLinks} />
            </div>
            <div className="ui segment">
              <Date date={today} />
            </div>
          </div>
          <div className="ui segment">
            <NewsList news={data.news} />
            <RatesList rates={data.rates} />
          </div>
        </div>
        <div className="four wide column">
          <Promo item={data.promoItem} />
        </div>
      </div>
      <div className="ui segments">
        <div className="ui segment">
          <SearchBar example={data.searchExample} links={data.searchLinks} />
        </div>
        <div className="ui segment">
          <Banner />
        </div>
        <div className="ui horizontal segments">
          <div className="ui segment">
            <WidgetWeather weather={data.currentWeather} moment={today} />
            <WidgetPopular popular={data.popular} />
          </div>
          <div className="ui segment">
            <WidgetMap />
            <WidgetTV tv={data.tv} />
          </div>
          <div className="ui segment">
            <WidgetRadio podcasts={data.podcasts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
