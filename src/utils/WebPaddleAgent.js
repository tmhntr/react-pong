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
import { Paddle, LEFT, RIGHT, SCREEN_WIDTH } from "./pongGame.js";
import * as pg from "./pyjsdl.js";
var __name__ = "__main__";

export var WebPaddleAgent = __class__("WebPaddleAgent", [Paddle], {
  __module__: __name__,
  get __init__() {
    return __get__(this, function (self, player, game, wsAddress) {
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
