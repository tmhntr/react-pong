// Transcrypt'ed from Python, 2022-03-22 17:33:34
var random = {};
import {
  AssertionError,
  AttributeError,
  BaseException,
  DeprecationWarning,
  Exception,
  IndexError,
  IterableError,
  KeyError,
  NotImplementedError,
  RuntimeWarning,
  StopIteration,
  UserWarning,
  ValueError,
  Warning,
  __JsIterator__,
  __PyIterator__,
  __Terminal__,
  __add__,
  __and__,
  __call__,
  __class__,
  __envir__,
  __eq__,
  __floordiv__,
  __ge__,
  __get__,
  __getcm__,
  __getitem__,
  __getslice__,
  __getsm__,
  __gt__,
  __i__,
  __iadd__,
  __iand__,
  __idiv__,
  __ijsmod__,
  __ilshift__,
  __imatmul__,
  __imod__,
  __imul__,
  __in__,
  __init__,
  __ior__,
  __ipow__,
  __irshift__,
  __isub__,
  __ixor__,
  __jsUsePyNext__,
  __jsmod__,
  __k__,
  __kwargtrans__,
  __le__,
  __lshift__,
  __lt__,
  __matmul__,
  __mergefields__,
  __mergekwargtrans__,
  __mod__,
  __mul__,
  __ne__,
  __neg__,
  __nest__,
  __or__,
  __pow__,
  __pragma__,
  __pyUseJsNext__,
  __rshift__,
  __setitem__,
  __setproperty__,
  __setslice__,
  __sort__,
  __specialattrib__,
  __sub__,
  __super__,
  __t__,
  __terminal__,
  __truediv__,
  __withblock__,
  __xor__,
  abs,
  all,
  any,
  assert,
  bool,
  bytearray,
  bytes,
  callable,
  chr,
  copy,
  deepcopy,
  delattr,
  dict,
  dir,
  divmod,
  enumerate,
  filter,
  float,
  getattr,
  hasattr,
  input,
  int,
  isinstance,
  issubclass,
  len,
  list,
  map,
  max,
  min,
  object,
  ord,
  pow,
  print,
  property,
  py_TypeError,
  py_iter,
  py_metatype,
  py_next,
  py_reversed,
  py_typeof,
  range,
  repr,
  round,
  set,
  setattr,
  sorted,
  str,
  sum,
  tuple,
  zip,
} from "./org.transcrypt.__runtime__.js";
import { os } from "./pyjsdl.pylib.js";
import {
  KEYDOWN,
  KEYUP,
  K_DOWN,
  K_ESCAPE,
  K_UP,
  K_s,
  K_w,
  QUIT,
} from "./pyjsdl.js";
import * as pg from "./pyjsdl.js";
import * as __module_random__ from "./random.js";
__nest__(random, "", __module_random__);
var __name__ = "__main__";
export var platform = null;
if (platform === null) {
  var platform = "js";
}
export var LEFT = 0;
export var RIGHT = 1;
export var TOP = 2;
export var BOTTOM = 3;
pg.init();
export var BOUNCE = 32851;
export var SCREEN_WIDTH = 800;
export var SCREEN_HEIGHT = 600;
export var Paddle = __class__("Paddle", [pg.sprite.Sprite], {
  __module__: __name__,
  width: 10,
  height: 100,
  get __init__() {
    return __get__(this, function (self, player, up_key, down_key) {
      __super__(Paddle, "__init__")(self);
      self.player = player;
      self.yspeed = 5;
      self.surf = pg.Surface(tuple([self.width, self.height]));
      self.surf.fill(tuple([0, 0, 0]));
      var x = player == LEFT ? self.width / 2 : SCREEN_WIDTH - self.width / 2;
      self.rect = self.surf.get_rect(
        __kwargtrans__({
          center: tuple([x, (SCREEN_HEIGHT + self.height) / 2]),
        })
      );
      self.wins = 0;
      self.losses = 0;
      self.up_key = up_key;
      self.down_key = down_key;
    });
  },
  get get_up_key() {
    return __get__(this, function (self) {
      return self.up_key;
    });
  },
  get get_down_key() {
    return __get__(this, function (self) {
      return self.down_key;
    });
  },
  get move_up() {
    return __get__(this, function (self) {
      self.rect.move_ip(0, -1 * self.yspeed);
    });
  },
  get move_down() {
    return __get__(this, function (self) {
      self.rect.move_ip(0, 1 * self.yspeed);
    });
  },
  get py_update() {
    return __get__(this, function (self, key) {
      if (
        typeof key == "undefined" ||
        (key != null && key.hasOwnProperty("__kwargtrans__"))
      ) {
        var key = null;
      }
      if (key) {
        if (key["up"]) {
          self.move_up();
        }
        if (key["down"]) {
          self.move_down();
        }
      }
      if (self.rect.bottom > SCREEN_HEIGHT) {
        self.rect.bottom = SCREEN_HEIGHT;
      }
      if (self.rect.top < 0) {
        self.rect.top = 0;
      }
    });
  },
});
export var Ball = __class__("Ball", [pg.sprite.Sprite], {
  __module__: __name__,
  width: 8,
  height: 8,
  MAX_X_VELOCITY: 3,
  MAX_Y_VELOCITY: 8,
  get __init__() {
    return __get__(this, function (self) {
      __super__(Ball, "__init__")(self);
      self.xspeed = random.choice([-self.MAX_X_VELOCITY, self.MAX_X_VELOCITY]);
      self.yspeed = random.randint(-5, 5);
      self.surf = pg.Surface(tuple([self.width, self.height]));
      self.surf.fill(tuple([0, 0, 255]));
      self.rect = self.surf.get_rect(
        __kwargtrans__({ center: tuple([SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2]) })
      );
    });
  },
  get bounce() {
    return __get__(this, function (self, side) {
      if (side == RIGHT) {
        self.xspeed = -abs(self.xspeed);
      }
      if (side == LEFT) {
        self.xspeed = abs(self.xspeed);
      }
      self.yspeed = random.randint(
        max(-self.MAX_Y_VELOCITY, self.yspeed - 4),
        min(self.MAX_Y_VELOCITY, self.yspeed + 4)
      );
    });
  },
  get py_update() {
    return __get__(this, function (self) {
      if (self.rect.bottom > SCREEN_HEIGHT) {
        self.rect.bottom = SCREEN_HEIGHT;
        self.yspeed = -self.yspeed;
        pg.event.post(pg.event.Event(BOUNCE, dict({ side: BOTTOM })));
      }
      if (self.rect.top < 0) {
        self.rect.top = 0;
        self.yspeed = -self.yspeed;
        pg.event.post(pg.event.Event(BOUNCE, dict({ side: TOP })));
      }
      self.rect.move_ip(self.xspeed, self.yspeed);
    });
  },
});
export var Game = __class__("Game", [object], {
  __module__: __name__,
  get __init__() {
    return __get__(this, function (self, left_paddle, right_paddle) {
      if (
        typeof left_paddle == "undefined" ||
        (left_paddle != null && left_paddle.hasOwnProperty("__kwargtrans__"))
      ) {
        var left_paddle = null;
      }
      if (
        typeof right_paddle == "undefined" ||
        (right_paddle != null && right_paddle.hasOwnProperty("__kwargtrans__"))
      ) {
        var right_paddle = null;
      }
      if (left_paddle) {
        self.left = left_paddle;
      } else {
        self.left = Paddle(LEFT, K_w, K_s);
      }
      if (right_paddle) {
        self.right = right_paddle;
      } else {
        self.right = Paddle(RIGHT, K_UP, K_DOWN);
      }
      self.left_move = dict({ up: false, down: false });
      self.right_move = dict({ up: false, down: false });
      self.ball = Ball();
      self.all_sprites = pg.sprite.Group([self.left, self.right, self.ball]);
      self.paddles = pg.sprite.Group([self.left, self.right]);
      self.clock = pg.time.Clock();
      self.screen = pg.display.set_mode(tuple([SCREEN_WIDTH, SCREEN_HEIGHT]));
      pg.display.set_caption("Pong");
      self.font = pg.font.Font("assets/OpenSans.ttf", 32);
      self.ball_sound = pg.mixer.Sound("assets/tennis-ball-bounce.mp3");
      self.paddle_sound = pg.mixer.Sound("assets/tennis-ball-bounce.mp3");
      self.DISPLAY_SCORE = true;
      self.PLAY_SOUND = true;
    });
  },
  get set_left_paddle() {
    return __get__(this, function (self, left) {
      self.left.kill();
      self.left = left;
      self.all_sprites.add(self.left);
      self.paddles.add(self.left);
    });
  },
  get set_right_paddle() {
    return __get__(this, function (self, right) {
      self.right.kill();
      self.right = right;
      self.all_sprites.add(self.right);
      self.paddles.add(self.right);
    });
  },
  get render() {
    return __get__(this, function (self) {
      self.screen.fill(tuple([255, 255, 255]));
      if (self.DISPLAY_SCORE) {
        var lscore = self.font.render(
          str(self.left.wins),
          true,
          tuple([0, 0, 0]),
          tuple([255, 255, 255])
        );
        var rscore = self.font.render(
          str(self.right.wins),
          true,
          tuple([0, 0, 0]),
          tuple([255, 255, 255])
        );
        self.screen.blit(
          lscore,
          tuple([
            Math.floor((SCREEN_WIDTH * 1) / 4),
            Math.floor(SCREEN_HEIGHT / 6),
          ])
        );
        self.screen.blit(
          rscore,
          tuple([
            Math.floor((SCREEN_WIDTH * 3) / 4),
            Math.floor(SCREEN_HEIGHT / 6),
          ])
        );
      }
      if (self.PLAY_SOUND) {
        if (pg.event.peek(BOUNCE)) {
          self.paddle_sound.play(__kwargtrans__({ maxtime: 1000 }));
        }
      }
      for (var entity of self.all_sprites) {
        self.screen.blit(entity.surf, entity.rect);
      }
      pg.display.flip();
      self.clock.tick(60);
    });
  },
  get reset() {
    return __get__(this, function (self) {
      self.left.wins = 0;
      self.left.losses = 0;
      self.right.wins = 0;
      self.right.losses = 0;
      self.clock = pg.time.Clock();
      self.ball.kill();
      self.ball = Ball();
      self.all_sprites.add(self.ball);
    });
  },
  get step() {
    return __get__(this, function (self) {
      var current_events = pg.event.py_get();
      for (var event of current_events) {
        if (event.py_metatype == KEYDOWN) {
          if (event.key == K_ESCAPE) {
            self.running = false;
          }
          if (event.key == self.left.get_up_key()) {
            self.left_move["up"] = true;
          }
          if (event.key == self.left.get_down_key()) {
            self.left_move["down"] = true;
          }
          if (event.key == self.right.get_up_key()) {
            self.right_move["up"] = true;
          }
          if (event.key == self.right.get_down_key()) {
            self.right_move["down"] = true;
          }
        }
        if (event.py_metatype == KEYUP) {
          if (event.key == self.left.get_up_key()) {
            self.left_move["up"] = false;
          }
          if (event.key == self.left.get_down_key()) {
            self.left_move["down"] = false;
          }
          if (event.key == self.right.get_up_key()) {
            self.right_move["up"] = false;
          }
          if (event.key == self.right.get_down_key()) {
            self.right_move["down"] = false;
          }
        } else if (event.py_metatype == QUIT) {
          self.running = false;
        }
      }
      for (var [entity, move] of zip(
        [self.left, self.right],
        [self.left_move, self.right_move]
      )) {
        entity.py_update(move);
      }
      var ball_collision = pg.sprite.spritecollide(
        self.ball,
        self.paddles,
        false
      );
      if (ball_collision) {
        if (ball_collision[0] === self.left) {
          self.ball.bounce(LEFT);
          pg.event.post(pg.event.Event(BOUNCE, dict({ side: LEFT })));
        } else if (ball_collision[0] == self.right) {
          self.ball.bounce(RIGHT);
          pg.event.post(pg.event.Event(BOUNCE, dict({ side: RIGHT })));
        }
      }
      self.ball.py_update();
      if (self.ball.rect.right < 0) {
        self.ball.kill();
        self.ball = Ball();
        self.all_sprites.add(self.ball);
        self.right.wins++;
        self.left.losses++;
      }
      if (self.ball.rect.left > SCREEN_WIDTH) {
        self.ball.kill();
        self.ball = Ball();
        self.all_sprites.add(self.ball);
        self.left.wins++;
        self.right.losses++;
      }
    });
  },
  get run() {
    return __get__(this, function (self) {
      self.step();
      self.render();
    });
  },
  get play() {
    return __get__(this, function (self) {
      self.running = true;
      while (self.running) {
        self.step();
        self.render();
      }
      pg.quit();
    });
  },
});
export var WebPaddleAgent = __class__("WebPaddleAgent", [Paddle], {
  __module__: __name__,
  get __init__() {
    return __get__(this, function (self, player, game) {
      __super__(WebPaddleAgent, "__init__")(self, player, pg.K_w, pg.K_s);
      self.side = player;
      self.nextmove = 1;
      self.game = game;
      window.addEventListener("DOMContentLoaded", () => {
        // Open the WebSocket connection and register event handlers.
        const websocket = new WebSocket("ws://localhost:8001/");
        websocket.addEventListener("message", ({ data }) => {
          const event = JSON.parse(data);
          self.set_nextmove(event.action);
          let response = {
            observation: self.observe(),
          };
          websocket.send(JSON.stringify(response));
        });
        let response = {
          observation: self.observe(),
        };
        setTimeout(() => {
          websocket.send(JSON.stringify(response));
        }, 2000);
      });
    });
  },
  get set_nextmove() {
    return __get__(this, function (self, nextmove) {
      self.nextmove = nextmove;
    });
  },
  get observe() {
    return __get__(this, function (self) {
      if (!self.game) {
        var __except0__ = ValueError("Game must be set");
        __except0__.__cause__ = null;
        throw __except0__;
      } else if (self.side == LEFT) {
        return [
          self.game.ball.rect.centerx,
          self.game.ball.rect.centery,
          self.game.ball.xspeed,
          self.game.ball.yspeed,
          self.rect.centery,
        ];
      } else if (self.side == RIGHT) {
        return [
          SCREEN_WIDTH - self.game.ball.rect.centerx,
          self.game.ball.rect.centery,
          -self.game.ball.xspeed,
          self.game.ball.yspeed,
          self.rect.centery,
        ];
      }
    });
  },
  get set_game() {
    return __get__(this, function (self, game) {
      self.game = game;
    });
  },
  get py_update() {
    return __get__(this, function (self, key) {
      if (
        typeof key == "undefined" ||
        (key != null && key.hasOwnProperty("__kwargtrans__"))
      ) {
        var key = null;
      }
      if (self.nextmove == 0) {
        self.move_down();
      } else if (self.nextmove == 2) {
        self.move_up();
      }

      __super__(WebPaddleAgent, "py_update")(self);
    });
  },
});
// export var main = function () {
//   var game = Game();
//   game.play();
// };
// export var main_js = function () {
//   var game = Game();
//   game.PLAY_SOUND = false;
//   pg.setup(game);
// };
// if (__name__ == "__main__") {
//   if (__in__(platform, tuple(["pc", "jvm"]))) {
//     main();
//   } else if (platform == "js") {
//     main_js();
//   }
// }

//# sourceMappingURL=pongGame.map
