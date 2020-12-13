import React from "react";
import "./styles.css";
import { useState } from "react";

let array = [];

var items = {
  DIY: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/Mark_Rober_2020.jpg",
      channel: "Channel Name: Mark Rober",
      subscribers: "Subscribers: 15.1 M",
      link: "https://www.youtube.com/user/onemeeeliondollars"
    },
    {
      image:
        "https://influencermatchmaker.co.uk/sites/default/files/2020-02/how-ridic-2.PNG",
      channel: "Channel Name: How Ridiculous",
      subscribers: "Subscribers: 6.1 M",
      link: "https://www.youtube.com/user/whoisjimmy"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysoM1F4alPYfUtGerHP5osMFB2oknYRc98g&usqp=CAU",
      channel: "Channel Name: 5 - Minute Craft",
      subscribers: "Subscribers: 69M",
      link: "https://www.youtube.com/channel/UC295-Dw_tDNtZXFeAPAW6Aw"
    },
    {
      image:
        "https://yt3.ggpht.com/ytc/AAUvwngolDqg2oJlM3VPzCqfjAfXES1BTf2WxIutTogi4g=s900-c-k-c0x00ffffff-no-rj",
      channel: "Channel Name: Mad Stuff with Rob",
      subscribers: "Subscribers: 2.2M",
      link: "https://www.youtube.com/user/MadStuffWithRob"
    }
  ],
  Tech: [
    {
      image:
        "https://yt3.ggpht.com/ytc/AAUvwnhoa6jtz7ccGj30Al2Ha8t4ImDVW2U98STxoLXp=s900-c-k-c0x00ffffff-no-rj",
      channel: "Channel Name: Marques Brownlee",
      subscribers: "Subscribers: 13.1 M",
      link: "https://www.youtube.com/user/marquesbrownlee"
    },
    {
      image:
        "https://ih1.redbubble.net/image.658202680.0779/st,small,507x507-pad,600x600,f8f8f8.u1.jpg",
      channel: "Channel Name: Linus Tech Tips",
      subscribers: "Subscribers: 12.5 M",
      link: "https://www.youtube.com/user/LinusTechTips"
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1301547742519492608/BNRi-te2_400x400.jpg",
      channel: "Channel Name: Mrwhosetheboss",
      subscribers: "Subscribers: 5.9 M",
      link: "https://www.youtube.com/user/Mrwhosetheboss"
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/829690967733178372/GRixf41_.jpg",
      channel: "Channel Name: Geeky Ranjit",
      subscribers: "Subscribers: 3.1 M",
      link: "https://www.youtube.com/user/geekyranjit"
    }
  ],
  Science: [
    {
      image:
        "https://static.skillshare.com/uploads/video/thumbnails/5679987092001/1280-720",
      channel: "Channel Name: Kurzgesagt – In a Nutshell",
      subscribers: "Subscribers: 13.6 M",
      link: "https://www.youtube.com/user/Kurzgesagt"
    },
    {
      image:
        "https://yt3.ggpht.com/ytc/AAUvwnjBJR7xS-yf4Mwz7GJ4y6rWceVa1LkGQpPnaTyyCw=s900-c-k-c0x00ffffff-no-rj",
      channel: "Channel Name: Veritasium",
      subscribers: "Subscribers: 7.9 M",
      link: "https://www.youtube.com/user/1veritasium"
    },
    {
      image:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSxkkfR7nu0oLGoowAeEOf1zA3jz4PQnJOjpqsPy7bF4-JTHjcggZe4DBNMuNfl",
      channel: "Channel Name: Vsauce ",
      subscribers: "Subscribers: 16.3 M",
      link: "https://www.youtube.com/user/Vsauce"
    },
    {
      image:
        "https://yt3.ggpht.com/ytc/AAUvwngXiNnTuCxyOLBD57TLgiM9f3cRd3zxUY0UorzVHQ=s900-c-k-c0x00ffffff-no-rj",
      channel: "Channel Name: SmarterEveryDay",
      subscribers: "Subscribers: 9.2 M",
      link: "https://www.youtube.com/user/destinws2"
    }
  ]
};

var arrayitems = Object.keys(items);

export default function App() {
  var [state, current] = useState([]);

  function check(suggestions) {
    current(items[suggestions]);
  }

  return (
    <div className="App">
      <h1>Youtube Suggestions</h1>
      <div class="suggestions">
        <ul className="lists">
          {arrayitems.map(function (suggestions) {
            return (
              <li className="list-items" onClick={() => check(suggestions)}>
                {suggestions}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="output">
        {state.map(function (value) {
          return (
            <div>
              {/* <h5>{value["link"]}</h5> */}
              <img src={value["image"]}></img>
              <h4>{value["channel"]}</h4>
              <strong style={{ display: "block" }}>
                {value["subscribers"]}
              </strong>
              <button>
                <a href={value["link"]} target="_blank">
                  Visit
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
