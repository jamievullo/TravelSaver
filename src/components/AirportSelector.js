import React from 'react'
import ReactAutocomplete from 'react-autocomplete'

export default class AirportSelector extends React.Component {

    state = {
        value: '',
    }



    render() {
        return (
            <ReactAutocomplete
                items={[
                    { id: 'foo', label: 'foo' },
                    { id: 'bar', label: 'bar' },
                    { id: 'baz', label: 'baz' },
                    { id: 'AVP', label: 'avv' }
                ]}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            renderItem={(item, highlighted) =>
            <div
                key={item.id}
                style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
            >
                {item.label}
            </div>
            }
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={value => this.setState({ value })}
            />
        )
    }
}