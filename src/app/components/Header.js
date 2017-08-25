import React from "react";

export const Header = (props) => {
    var headerContent = {
      title: "Random Assortment of Things and Stuff",
      nav: [
        {name: "Home",
          link: "#"
        },
        {name: "D&D",
          link: "http://dnd.wizards.com/"
        },
        {name: "MTG",
          link: "http://magic.wizards.com/"
        },
        {name: "Other",
          link: "http://google.com"
        }
      ]
    };
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <h2>{headerContent.title}</h2>
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              {headerContent.nav.map((item, i) => <li key={i}><a href={item.link}>{item.name}</a></li>)}
            </ul>
          </div>
        </div>
      </nav>
    );

};
