import React from 'react';

export default class FormBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            textarea: '',
            checkboxLocal: false,
        }
    }

    onSubmit(event) {
        event.preventDefault()
        alert(this.state.name + ' ' + this.state.lastname)
        // if(this.state.name.length === 0) {
        //     alert('please enter your name')
        // }
    }

    render() {
        return (
            <div className="App App-header">
                <p>Forms basic</p>
                <form onSubmit={(event) => this.onSubmit(event)} >
                    <input
                        type='text'
                        placeholder='first name'
                        onChange={(event) => this.setState({
                            name: event.target.value
                        })}
                        value={this.state.name}
                    />
                    <input
                        type='text'
                        placeholder='last name'
                        onChange={(event) => this.setState({
                            lastname: event.target.value
                        })}
                        value={this.state.lastname}
                    /> <br /><br />
                    <textarea
                        onChange={(event) => this.setState({
                            textarea: event.target.value
                        })}
                        value={this.state.textarea}
                        placeholder="Please type..."
                    /> <br /><br />

                    <input
                        type='checkbox'
                        value='is Present?'
                        checked={this.state.checkboxLocal}
                        onChange={(event) => this.setState({
                            checkboxLocal: event.target.checked
                        })}
                    /> is Present?
                    <br /><br />

                    <input type='radio' name='radiobuttonlocal' value='Good' onChange={(event) => console.log(event.target.value)} /> Good
                    <input type='radio' name='radiobuttonlocal' value='Bad' onChange={(event) => console.log(event.target.value)} /> Bad


                    <input type='submit' value='SUBMIT' />
                </form>

                <p>NAME PLACEHOLDER - {this.state.name}</p>
            </div>
        )
    }
}