import React, { useEffect, Component } from "react";

import * as pongGame from "../../utils/pongGame.js";
import * as pg from "../../utils/pyjsdl.js";
import { WebPaddleAgent } from "../../utils/WebPaddleAgent.js";

export type PongProps = { wsAddress?: string };

export default class Pong extends Component<PongProps>{
  // constructor(props) {
  //   super(props);
  //   // Don't call this.setState() here!
  //   this.state = { counter: 0 };
  // }
  componentDidMount () {
    var game = pongGame.Game();
    game.PLAY_SOUND = false;
    if (this.props.wsAddress) {
      var agent = WebPaddleAgent(pongGame.LEFT, game, this.props.wsAddress);
      game.set_left_paddle(agent);
    } 
    pg.setup(game);
  }
  render () {

    return <div id="__panel__"></div>;
  } 
};

