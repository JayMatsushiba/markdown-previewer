'use strict';

// ALLOWS LINE BREAKS WITH RETURN BUTTON

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

marked.setOptions({
    breaks: true
});

// idk what this does but seems necessary for code to work
var renderer = new marked.Renderer();

var e = React.createElement;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            markdown: placeholder
        };

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.setState({ markdown: event.target.value });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row pt-4" },
                    React.createElement(
                        "h3",
                        null,
                        "Editor"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col" },
                        React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row pt-4" },
                    React.createElement(
                        "h3",
                        null,
                        "Previewer"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col" },
                        React.createElement(Preview, { markdown: this.state.markdown })
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

;

var Editor = function Editor(props) {
    return React.createElement("textarea", { id: "editor",
        className: "border rounded",
        value: props.markdown,
        onChange: props.onChange,
        rows: "10",
        type: "text" });
};

var Preview = function Preview(props) {
    return React.createElement("div", { id: "preview",
        className: "border border-success p-2 rounded"
        // idk what the renderer does but seems necessary 
        , dangerouslySetInnerHTML: { __html: marked(props.markdown, { renderer: renderer }) } });
};

var placeholder = "# Welcome to my Markdown Previewer \n## I built this app with React for FreeCodeCamp\n\nYou can use backticks to insert code into the previewer! `<div></div>`\nPretty cool right?\n\nYou can even put in **multiple** lines with triple back ticks:\n``` \n<!DOCTYPE html>\n<head>\n    <title>Markdown Previewer</title>\n</head>\n<body>\n    <p>Welcome!</p>\n</body>\n``` \n\n> Block quotes are also pretty cool \n[Links](https://www.freecodecamp.com) are lit too! \n\n1. First\n2. Second\n3. Third\n4. Fourth\n\nAlso get some images in here!\n![Red toyota supra](https://cnet4.cbsistatic.com/img/HU43bEYUGuUv6pQ63m2pERjhBfQ=/980x551/2019/08/20/d774d1cc-b665-4f86-a50a-e336b0120e04/2020-toyota-supra-1.jpg)\n";

var domContainer = document.querySelector('#container');
ReactDOM.render(e(App), domContainer);