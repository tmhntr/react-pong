import React, { useEffect } from "react";

import * as pongGame from "../../utils/pongGame.js";
import * as pg from "../../utils/pyjsdl.js";
import { WebPaddleAgent } from "../../utils/WebPaddleAgent.js";


const Pong = () => {
  const game = pongGame.Game();
  game.PLAY_SOUND = false;
  useEffect(() => {
    const agent = WebPaddleAgent(pongGame.LEFT, game);
    game.set_left_paddle(agent);
    pg.setup(game);
  }, []);
  return <div id="__panel__"></div>;
};

export default Pong