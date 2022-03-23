import React, { useEffect, Component } from "react";

import * as pongGame from "../../utils/pongGame.js";
import * as pg from "../../utils/pyjsdl.js";
import { WebPaddleAgent } from "../../utils/WebPaddleAgent.js";


export default class Pong extends Component{
  componentDidMount () {
    // var game = pongGame.Game();
    // game.PLAY_SOUND = false;
    // var agent = WebPaddleAgent(pongGame.LEFT, game);
    // game.set_left_paddle(agent);
    // pg.setup(game);
  }
  render () {

    return <div id="__panel__"></div>;
  } 
};

