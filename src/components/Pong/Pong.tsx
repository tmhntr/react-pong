import React, { useEffect, Component } from "react";

import * as pongGame from "../../utils/pongGame.js";
import * as pg from "../../utils/pyjsdl.js";
import { WebPaddleAgent } from "../../utils/WebPaddleAgent.js";

export type PongProps = { wsAddress: string };

export default class Pong extends Component<PongProps>{
  componentDidMount () {
    // console.log(this.props)
    var game = pongGame.Game();
    const { wsAddress} = this.props
    if (wsAddress) {
      // console.log(wsAddress)
      const agent = WebPaddleAgent(pongGame.LEFT, game, wsAddress);
      game.set_left_paddle(agent);
    } 
    game.PLAY_SOUND = false;
    pg.setup(game);
  }
  render () {

    return <div id="__panel__"></div>;
  } 
};

