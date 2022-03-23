import React, { useEffect, Component } from "react";

import * as pongGame from "../../utils/pongGame.js";
import * as pg from "../../utils/pyjsdl.js";
import { WebPaddleAgent } from "../../utils/WebPaddleAgent.js";


const Pong = ({wsAddress}) => {
  // var game: any, agent: any
  useEffect(() => {
    var game = pongGame.Game();
    game.PLAY_SOUND = false;
    var agent = WebPaddleAgent(pongGame.LEFT, game, wsAddress);
    game.set_left_paddle(agent);
    pg.setup(game);
  }, [])

  return <div id="__panel__"></div>;
  
};

export default Pong
