webpackJsonp([0],{

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposeSection = function (_Component) {
  (0, _inherits3.default)(ComposeSection, _Component);

  function ComposeSection() {
    (0, _classCallCheck3.default)(this, ComposeSection);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ComposeSection.__proto__ || Object.getPrototypeOf(ComposeSection)).call(this));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ComposeSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'compose-section' },
        _react2.default.createElement('textarea', { name: 'name', rows: 8, cols: 80, defaultValue: "" }),
        _react2.default.createElement('div', { className: 'user-img' }),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(
            'div',
            { className: 'button photo-btn' },
            _react2.default.createElement('i', { className: 'fas fa-camera-retro' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'button video-btn' },
            _react2.default.createElement('i', { className: 'fas fa-video' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'button send-btn' },
            _react2.default.createElement('i', { className: 'fas fa-paper-plane' })
          )
        )
      );
    }
  }]);
  return ComposeSection;
}(_react.Component);

exports.default = ComposeSection;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingComp = function (_Component) {
  (0, _inherits3.default)(LoadingComp, _Component);

  function LoadingComp() {
    (0, _classCallCheck3.default)(this, LoadingComp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoadingComp.__proto__ || Object.getPrototypeOf(LoadingComp)).call(this));

    _this.state = {
      dropdown: false
    };
    return _this;
  }

  (0, _createClass3.default)(LoadingComp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'loading-comp', className: this.props.initialData == 'loading' ? 'active' : '' },
        _react2.default.createElement(
          'div',
          { className: 'loading-icon' },
          _react2.default.createElement(
            'div',
            { className: 'lds-css ng-scope', style: { width: '200px', height: '200px' } },
            _react2.default.createElement(
              'div',
              { style: { width: '100%', height: '100%' }, className: 'lds-rolling' },
              _react2.default.createElement('div', null)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'loading-text' },
          'Loading !'
        )
      );
    }
  }]);
  return LoadingComp;
}(_react.Component);

exports.default = LoadingComp;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messenger = function (_Component) {
  (0, _inherits3.default)(Messenger, _Component);

  function Messenger() {
    (0, _classCallCheck3.default)(this, Messenger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Messenger.__proto__ || Object.getPrototypeOf(Messenger)).call(this));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Messenger, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'messenger' },
        _react2.default.createElement(
          'div',
          { className: 'messenger-header' },
          _react2.default.createElement(
            'div',
            { className: 'messenger-icon' },
            _react2.default.createElement('i', { className: 'fas fa-comments' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'Messenger'
          ),
          _react2.default.createElement(
            'div',
            { className: 'options-icon' },
            _react2.default.createElement('i', { className: 'fas fa-ellipsis-v' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'users' },
          _react2.default.createElement(
            'div',
            { className: 'users-container' },
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active' },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/women/47.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '50%', height: 30, width: 30 } }),
              _react2.default.createElement(
                'div',
                { className: 'username' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'search' },
          _react2.default.createElement('input', { type: 'text', placeholder: 'Search' })
        )
      );
    }
  }]);
  return Messenger;
}(_react.Component);

exports.default = Messenger;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Posts = function (_Component) {
  (0, _inherits3.default)(Posts, _Component);

  function Posts() {
    (0, _classCallCheck3.default)(this, Posts);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Posts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'posts' },
        _react2.default.createElement(
          'div',
          { className: 'update-container' },
          _react2.default.createElement(
            'div',
            { className: 'author-info' },
            _react2.default.createElement('a', { href: '#', className: 'user-img' }),
            _react2.default.createElement(
              'div',
              { className: 'info' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'James Doe'
              ),
              'shared a',
              _react2.default.createElement(
                'a',
                { href: '#' },
                'story'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'media' },
            _react2.default.createElement('div', { className: 'image', style: {
                background: 'url("http://www.lovethispic.com/uploaded_images/192648-Be-Your-Own-Inspiration.png")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'padding-container' },
            _react2.default.createElement(
              'div',
              { className: 'grey-container' },
              _react2.default.createElement(
                'div',
                { className: 'update-info' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'How to become a developer'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'update-stats' },
                _react2.default.createElement(
                  'div',
                  { className: 'icon-section' },
                  _react2.default.createElement(
                    'div',
                    { className: 'like-circle' },
                    _react2.default.createElement('i', { className: 'fas fa-thumbs-up' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'other-users' },
                  'Sarah Rssel and 23 others liked update'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'comments-stats' },
                  '4 Comments'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'compose-comment' },
                _react2.default.createElement('textarea', { name: 'name', rows: 8, cols: 80, defaultValue: "" }),
                _react2.default.createElement(
                  'div',
                  { className: 'buttons' },
                  _react2.default.createElement(
                    'div',
                    { className: 'repost-btn' },
                    _react2.default.createElement('i', { className: 'fas fa-redo' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'like-btn' },
                    _react2.default.createElement('i', { className: 'fas fa-thumbs-up' })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'update-container' },
          _react2.default.createElement(
            'div',
            { className: 'author-info' },
            _react2.default.createElement('a', { href: '#', className: 'user-img' }),
            _react2.default.createElement(
              'div',
              { className: 'info' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'James Doe'
              ),
              'shared a',
              _react2.default.createElement(
                'a',
                { href: '#' },
                'story'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'media' },
            _react2.default.createElement('div', { className: 'image', style: {
                background: 'url("http://www.lovethispic.com/uploaded_images/192648-Be-Your-Own-Inspiration.png")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'padding-container' },
            _react2.default.createElement(
              'div',
              { className: 'grey-container' },
              _react2.default.createElement(
                'div',
                { className: 'update-info' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'How to become a developer'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'update-stats' },
                _react2.default.createElement(
                  'div',
                  { className: 'icon-section' },
                  _react2.default.createElement(
                    'div',
                    { className: 'like-circle' },
                    _react2.default.createElement('i', { className: 'fas fa-thumbs-up' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'other-users' },
                  'Sarah Rssel and 23 others liked update'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'comments-stats' },
                  '4 Comments'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'compose-comment' },
                _react2.default.createElement('textarea', { name: 'name', rows: 8, cols: 80, defaultValue: "" }),
                _react2.default.createElement(
                  'div',
                  { className: 'buttons' },
                  _react2.default.createElement(
                    'div',
                    { className: 'repost-btn' },
                    _react2.default.createElement('i', { className: 'fas fa-redo' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'like-btn' },
                    _react2.default.createElement('i', { className: 'fas fa-thumbs-up' })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'update-container' },
          _react2.default.createElement(
            'div',
            { className: 'author-info' },
            _react2.default.createElement('a', { href: '#', className: 'user-img' }),
            _react2.default.createElement(
              'div',
              { className: 'info' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'James Doe'
              ),
              'shared a',
              _react2.default.createElement(
                'a',
                { href: '#' },
                'story'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'media' },
            _react2.default.createElement('div', { className: 'image', style: {
                background: 'url("http://www.lovethispic.com/uploaded_images/192648-Be-Your-Own-Inspiration.png")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'padding-container' },
            _react2.default.createElement(
              'div',
              { className: 'grey-container' },
              _react2.default.createElement(
                'div',
                { className: 'update-info' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'How to become a developer'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'update-stats' },
                _react2.default.createElement(
                  'div',
                  { className: 'icon-section' },
                  _react2.default.createElement(
                    'div',
                    { className: 'like-circle' },
                    _react2.default.createElement('i', { className: 'fas fa-thumbs-up' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'other-users' },
                  'Sarah Rssel and 23 others liked update'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'comments-stats' },
                  '4 Comments'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'compose-comment' },
                _react2.default.createElement('textarea', { name: 'name', rows: 8, cols: 80, defaultValue: "" }),
                _react2.default.createElement(
                  'div',
                  { className: 'buttons' },
                  _react2.default.createElement(
                    'div',
                    { className: 'repost-btn' },
                    _react2.default.createElement('i', { className: 'fas fa-redo' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'like-btn' },
                    _react2.default.createElement('i', { className: 'fas fa-thumbs-up' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Posts;
}(_react.Component);

exports.default = Posts;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchHeader = function (_Component) {
  (0, _inherits3.default)(SearchHeader, _Component);

  function SearchHeader() {
    (0, _classCallCheck3.default)(this, SearchHeader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).call(this));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(SearchHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'search-header' },
        _react2.default.createElement(
          'div',
          { className: 'search-box' },
          _react2.default.createElement('input', { type: 'text', name: true, defaultValue: true }),
          _react2.default.createElement(
            'div',
            { className: 'icon-section' },
            _react2.default.createElement(
              'div',
              { className: 'noti' },
              _react2.default.createElement('i', { className: 'fas fa-bell' }),
              _react2.default.createElement(
                'div',
                { className: 'noti-number ' },
                '9+'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'comments' },
              _react2.default.createElement('i', { className: 'fas fa-comment' }),
              _react2.default.createElement(
                'div',
                { className: 'noti-number' },
                '3'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('i', { className: 'fas fa-user' }),
              _react2.default.createElement(
                'div',
                { className: 'noti-number active' },
                '3'
              )
            )
          )
        )
      );
    }
  }]);
  return SearchHeader;
}(_react.Component);

exports.default = SearchHeader;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftMenu = function (_Component) {
  (0, _inherits3.default)(LeftMenu, _Component);

  function LeftMenu() {
    (0, _classCallCheck3.default)(this, LeftMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this));

    _this.clickedDropDown = function () {
      _this.setState({
        dropdown: !_this.state.dropdown
      });
    };

    _this.state = {
      dropdown: false
    };
    return _this;
  }

  (0, _createClass3.default)(LeftMenu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'left-menu' },
        _react2.default.createElement(
          'div',
          { className: 'account-dropdown' },
          _react2.default.createElement(
            'div',
            { className: 'logo' },
            _react2.default.createElement('i', { className: 'fab fa-typo3' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'name', onClick: this.clickedDropDown },
            this.props.initialData.first_name + ' ' + this.props.initialData.last_name
          ),
          _react2.default.createElement(
            'div',
            { className: 'icon', onClick: this.clickedDropDown },
            _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown ' + (this.state.dropdown ? 'active' : '') },
            _react2.default.createElement(
              'nav',
              null,
              _react2.default.createElement(
                'a',
                { href: '/account' },
                'account'
              ),
              _react2.default.createElement(
                'a',
                { href: '/logout' },
                'logout'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'groups' },
          _react2.default.createElement(
            'div',
            { className: 'group' },
            _react2.default.createElement(
              'div',
              { className: 'title' },
              'Title'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '/logout' },
                  'Logout'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                'link'
              ),
              _react2.default.createElement(
                'li',
                null,
                'link'
              )
            )
          )
        )
      );
    }
  }]);
  return LeftMenu;
}(_react.Component);

exports.default = LeftMenu;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(167);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(166);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(25);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(26);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(28);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(159);

var _axios2 = _interopRequireDefault(_axios);

var _leftMenu = __webpack_require__(165);

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _Messenger = __webpack_require__(162);

var _Messenger2 = _interopRequireDefault(_Messenger);

var _SearchHeader = __webpack_require__(164);

var _SearchHeader2 = _interopRequireDefault(_SearchHeader);

var _ComposeSection = __webpack_require__(160);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(163);

var _Posts2 = _interopRequireDefault(_Posts);

var _LoadingComp = __webpack_require__(161);

var _LoadingComp2 = _interopRequireDefault(_LoadingComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      var getInitialData = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var initialData;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _axios2.default.get('/api/initialApp');

                case 3:
                  initialData = _context.sent;


                  self.setState({
                    initialData: initialData.data
                  }, function () {
                    console.log(self.state);
                  });

                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0);

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 7]]);
        }));

        return function getInitialData() {
          return _ref.apply(this, arguments);
        };
      }();
      getInitialData();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app-container home-page' },
        _react2.default.createElement(_LoadingComp2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
        _react2.default.createElement(_leftMenu2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
        _react2.default.createElement(
          'section',
          { id: 'content-container' },
          _react2.default.createElement(_SearchHeader2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'content-area' },
            _react2.default.createElement(_ComposeSection2.default, null),
            _react2.default.createElement(_Posts2.default, null)
          )
        ),
        _react2.default.createElement(_Messenger2.default, null)
      );
    }
  }]);
  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[186]);