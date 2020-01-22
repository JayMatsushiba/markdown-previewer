'use strict';

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
    breaks: true,
  });
  
// idk what this does but seems necessary for code to work
const renderer = new marked.Renderer();

const e = React.createElement;



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: placeholder
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({markdown: event.target.value});
      }

    render() {
        return (
            <div className="container">
                <div className="row pt-4">
                    <h3>Editor</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <Editor markdown={this.state.markdown} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row pt-4">
                    <h3>Previewer</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <Preview markdown={this.state.markdown}/>
                    </div>
                </div>
            </div>
        );
    }
};

const Editor = (props) => {
    return (
        <textarea id="editor"
            className="border rounded"
            value={props.markdown}
            onChange={props.onChange}
            rows="10"
            type="text" />
    )
}

const Preview = (props) => {
    return (
        <div id='preview' 
        className="border border-success p-2 rounded"
        // idk what the renderer does but seems necessary 
        dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}} />
    )
}

const placeholder = 
`# Welcome to my Markdown Previewer 
## I built this app with React for FreeCodeCamp

You can use backticks to insert code into the previewer! \`<div></div>\`
Pretty cool right?

You can even put in **multiple** lines with triple back ticks:
\`\`\` 
<!DOCTYPE html>
<head>
    <title>Markdown Previewer</title>
</head>
<body>
    <p>Welcome!</p>
</body>
\`\`\` 

> Block quotes are also pretty cool 
[Links](https://www.freecodecamp.com) are lit too! 

1. First
2. Second
3. Third
4. Fourth

Also get some images in here!
![Red toyota supra](https://cnet4.cbsistatic.com/img/HU43bEYUGuUv6pQ63m2pERjhBfQ=/980x551/2019/08/20/d774d1cc-b665-4f86-a50a-e336b0120e04/2020-toyota-supra-1.jpg)
`

const domContainer = document.querySelector('#container');
ReactDOM.render(e(App), domContainer);