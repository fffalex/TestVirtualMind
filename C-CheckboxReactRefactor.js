// This is a react component that is technically functional,
// but would be very hard to maintain because of it's size.

// It's easier to write tests for smaller components that pass
// data between them. Rewrite this component so that it could be
// rendered from somewhere else by using these lines.

// const checkboxes = [0, 1, 2];

// <Form>
// 	checkboxes.map(id =>
// 		<Checkbox key={id} id={id}/>
// 	)
// </Form>

// or (easier but less impresive)

// <Form checkboxes={checkboxes} />

// If you decide to do the second option you MUST STILL create and
// render a Checkbox Component inside the Form Component

class BigForm extends React.Component {
    constructor() {
        super();
    }

    renderCheckboxes(checkboxes) {
        return checkboxes.map((id) => (<Checkbox key={id} id={id} label={`checkbox ${id}`} />));
    }

    render() {
        return (
            <div className="form">
                <span>{title}</span>
                {this.renderCheckboxes(checkboxes)}
            </div>
        )
    }

}

class Checkbox extends React.Component {
    constructor() {
        super();
        this.state = { isChecked: false };
    }

    onChange = () => {
        this.setState(({ isChecked }) => ({ isChecked: !isChecked }));
    }

    render() {
        const label = this.props.label;
        const isChecked = this.state.isChecked;

        return (
            <div className="checkbox-wrapper">
                <span>{label}</span>
                <input value={isChecked} onChange={this.onChange} type="checkbox" />
            </div>
        );
    }
}

const checkboxes = [0, 1, 2];
const title = 'Checked boxes';

ReactDOM.render(
    <BigForm checkboxes={checkboxes} title={title} />,
    document.getElementById('container')
);