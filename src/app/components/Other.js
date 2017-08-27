import React from "react";

export class Other extends React.Component {

  render(){
    var style = {
      light: {
        backgroundColor: '#f8f8f8',
        marginRight: '40px',
        marginTop: "2px"
      },
      light2: {
        backgroundColor: '#e7e7e7'
      },
      pad: {
        paddingLeft: '10px',
        marginBottom: '0px'
      },
      done: {
        textDecoration: "line-through",
        color: "lime"
      }
    };
    return(
      <div>

        <h2>To Do:</h2>
        <div >

            <div style={style.light2}>
              Web
                <ul>
                  <li>Routing</li>
                  <li style={style.done}>Git</li>
                  <li style={style.light}>Nav<p style={style.pad}> Add dropdown sub menu</p></li>
                  <li>Proper todo list</li>
                  <li style={style.light}>Home<p style={style.pad}>Customizable links and common stuff</p><p style={style.pad}>World clock to compare timezones</p></li>
                  <li style={style.light}>World map<p style={style.pad}>Places travled, stayed and lived</p></li>
                  <li>More stuff...</li>
                </ul>

            </div>

            <div style={style.light2}>
              D&D
                <ul>
                  <li>Character</li>
                  <li>World Building</li>
                </ul>

            </div>

            <div style={style.light2}>
              MTG
                <ul>
                  <li>Decks</li>
                  <li>Collection</li>
                </ul>

            </div>

        </div>

      </div>
    );
  }
}
