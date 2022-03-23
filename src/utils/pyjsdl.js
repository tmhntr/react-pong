// Transcrypt'ed from Python, 2022-03-22 14:43:47
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {ACTIVEEVENT, DOUBLEBUF, FULLSCREEN, HWACCEL, HWPALETTE, HWSURFACE, KEYDOWN, KEYUP, KMOD_ALT, KMOD_CAPS, KMOD_CTRL, KMOD_LALT, KMOD_LCTRL, KMOD_LMETA, KMOD_LSHIFT, KMOD_META, KMOD_MODE, KMOD_NONE, KMOD_NUM, KMOD_RALT, KMOD_RCTRL, KMOD_RMETA, KMOD_RSHIFT, KMOD_SHIFT, K_0, K_1, K_2, K_3, K_4, K_5, K_6, K_7, K_8, K_9, K_ALT, K_AMPERSAND, K_ASTERISK, K_AT, K_BACKQUOTE, K_BACKSLASH, K_BACKSPACE, K_BREAK, K_CAPSLOCK, K_CARET, K_CLEAR, K_COLON, K_COMMA, K_CTRL, K_DELETE, K_DOLLAR, K_DOWN, K_END, K_EQUALS, K_ESCAPE, K_EURO, K_EXCLAIM, K_F1, K_F10, K_F11, K_F12, K_F13, K_F14, K_F15, K_F2, K_F3, K_F4, K_F5, K_F6, K_F7, K_F8, K_F9, K_GREATER, K_HASH, K_HELP, K_HOME, K_INSERT, K_KP0, K_KP1, K_KP2, K_KP3, K_KP4, K_KP5, K_KP6, K_KP7, K_KP8, K_KP9, K_KP_DIVIDE, K_KP_ENTER, K_KP_EQUALS, K_KP_MINUS, K_KP_MULTIPLY, K_KP_PERIOD, K_KP_PLUS, K_LALT, K_LCTRL, K_LEFT, K_LEFTBRACKET, K_LEFTPAREN, K_LESS, K_LMETA, K_LSHIFT, K_LSUPER, K_MENU, K_MINUS, K_MODE, K_NUMLOCK, K_PAGEDOWN, K_PAGEUP, K_PAUSE, K_PERIOD, K_PLUS, K_POWER, K_PRINT, K_QUESTION, K_QUOTE, K_QUOTEDBL, K_RALT, K_RCTRL, K_RETURN, K_RIGHT, K_RIGHTBRACKET, K_RIGHTPAREN, K_RMETA, K_RSHIFT, K_RSUPER, K_SCROLLLOCK, K_SCROLLOCK, K_SEMICOLON, K_SHIFT, K_SLASH, K_SPACE, K_SYSREQ, K_TAB, K_UNDERSCORE, K_UNKNOWN, K_UP, K_a, K_b, K_c, K_d, K_e, K_f, K_g, K_h, K_i, K_j, K_k, K_l, K_m, K_n, K_o, K_p, K_q, K_r, K_s, K_t, K_u, K_v, K_w, K_x, K_y, K_z, MOUSEBUTTONDOWN, MOUSEBUTTONUP, MOUSEMOTION, NOEVENT, NOFRAME, NUMEVENTS, OPENGL, QUIT, RESIZABLE, RLEACCEL, RLEACCELOK, SRCALPHA, SRCCOLORKEY, SWSURFACE, SYSWMEVENT, USEREVENT} from './pyjsdl.constants.js';
import * as cursors from './pyjsdl.cursors.js';
import * as sprite from './pyjsdl.sprite.js';
import * as font from './pyjsdl.font.js';
import * as mask from './pyjsdl.mask.js';
import * as surfarray from './pyjsdl.surfarray.js';
import * as surface from './pyjsdl.surface.js';
import * as transform from './pyjsdl.transform.js';
import * as draw from './pyjsdl.draw.js';
import {Vector2} from './pyjsdl.vector.js';
import {Time} from './pyjsdl.time.js';
import {Mixer} from './pyjsdl.mixer.js';
import {Color} from './pyjsdl.color.js';
import {Mouse} from './pyjsdl.mouse.js';
import {Key} from './pyjsdl.key.js';
import {Event} from './pyjsdl.event.js';
import {Image} from './pyjsdl.image.js';
import {Rect} from './pyjsdl.rect.js';
import {Surface} from './pyjsdl.surface.js';
import {Display} from './pyjsdl.display.js';
import * as util from './pyjsdl.util.js';
import * as env from './pyjsdl.env.js';
export {KMOD_ALT, K_COMMA, K_CARET, K_KP8, K_EURO, K_s, K_RETURN, SWSURFACE, K_KP7, HWPALETTE, K_i, K_UP, K_RIGHTBRACKET, HWSURFACE, K_ALT, K_PAGEUP, K_v, K_SHIFT, K_LSHIFT, K_PAGEDOWN, K_f, SRCCOLORKEY, K_GREATER, draw, K_2, K_CTRL, K_PRINT, Display, K_q, KMOD_META, K_CLEAR, K_MENU, K_r, K_INSERT, Color, K_RIGHT, K_KP_ENTER, Event, K_LSUPER, K_d, Mouse, K_SEMICOLON, K_F11, K_t, K_UNDERSCORE, K_8, NOEVENT, K_KP1, OPENGL, K_EXCLAIM, K_o, K_SYSREQ, K_c, KEYUP, K_3, K_UNKNOWN, K_RMETA, K_LESS, K_F12, K_COLON, K_KP2, K_F1, K_g, K_KP9, HWACCEL, K_DELETE, K_F6, K_KP_EQUALS, K_BACKSLASH, K_HASH, K_4, K_LEFT, NUMEVENTS, K_NUMLOCK, K_POWER, K_F14, K_KP4, QUIT, KMOD_NUM, K_PAUSE, K_PLUS, K_RSUPER, K_EQUALS, K_BACKQUOTE, KMOD_LALT, K_0, Mixer, K_HELP, K_F15, KMOD_RCTRL, K_ESCAPE, K_MINUS, K_z, K_TAB, K_RIGHTPAREN, surfarray, KMOD_RMETA, K_RCTRL, MOUSEBUTTONDOWN, mask, KMOD_NONE, K_5, K_DOLLAR, K_6, RESIZABLE, K_n, K_QUESTION, KMOD_LSHIFT, KMOD_CAPS, KEYDOWN, cursors, K_b, K_KP_MINUS, RLEACCEL, K_KP_PERIOD, K_QUOTE, NOFRAME, K_LEFTBRACKET, K_KP3, K_F4, K_h, Surface, K_AT, K_LCTRL, K_SCROLLLOCK, K_F2, KMOD_MODE, K_CAPSLOCK, K_SPACE, FULLSCREEN, Key, env, K_F10, Image, K_F8, KMOD_LMETA, K_j, K_k, K_1, K_F9, K_a, K_KP5, K_DOWN, K_KP_MULTIPLY, K_ASTERISK, K_LALT, K_RALT, K_QUOTEDBL, K_BACKSPACE, K_KP_DIVIDE, KMOD_SHIFT, RLEACCELOK, K_x, K_w, K_KP_PLUS, USEREVENT, DOUBLEBUF, K_SLASH, surface, K_p, K_e, K_SCROLLOCK, util, ACTIVEEVENT, K_END, KMOD_LCTRL, K_LEFTPAREN, K_y, K_BREAK, K_LMETA, Vector2, K_KP6, K_HOME, MOUSEBUTTONUP, sprite, MOUSEMOTION, transform, KMOD_RALT, K_u, font, K_AMPERSAND, SRCALPHA, KMOD_CTRL, KMOD_RSHIFT, K_MODE, K_F3, K_l, K_RSHIFT, K_F5, K_KP0, SYSWMEVENT, Rect, K_PERIOD, K_F7, K_m, K_7, K_9, Time, K_F13};
var __name__ = 'pyjsdl';
var __left0__ = null;
export var time = __left0__;
export var display = __left0__;
export var image = __left0__;
export var event = __left0__;
export var key = __left0__;
export var mouse = __left0__;
export var mixer = __left0__;
export var _initialized = false;
export var init = function () {
	if (_initialized) {
		return ;
	}
	else {
		_initialized = true;
	}
	event = Event ();
	env.set_env ('event', event);
	time = Time ();
	display = Display ();
	image = Image ();
	mixer = Mixer ();
	mouse = Mouse ();
	key = Key ();
};
init ();
export var setup = function (callback, images) {
	if (typeof images == 'undefined' || (images != null && images.hasOwnProperty ("__kwargtrans__"))) {;
		var images = null;
	};
	display.setup (callback, images);
};
export var set_callback = function (callback) {
	display.set_callback (callback);
};
export var setup_images = function (images) {
	display.set_images (images);
};
export var quit = function () {
	var canvas = display.get_canvas ();
	canvas.stop ();
	mixer.quit ();
	time._stop_timers ();
};
export var error =  __class__ ('error', [Exception], {
	__module__: __name__,
});
export var bounding_rect_return = function (setting) {
	surface.bounding_rect_return (setting);
	draw.bounding_rect_return (setting);
};

//# sourceMappingURL=pyjsdl.map