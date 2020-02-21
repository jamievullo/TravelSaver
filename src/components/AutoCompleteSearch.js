import React from 'react'
import Form from 'react-bootstrap/Form';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
    } from 'react-places-autocomplete';

export default class AutoCompleteSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <Form.Control
                        {...getInputProps({
                            // placeholder: 'Search Places ...',
                            className: 'location-search-input',
                        })}
                    />
                    <div className="autocomplete-dropdown-container" style={{color: "#212747"}}>
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                        const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                        const style = suggestion.active ? { backgroundColor: '#fafafa', cursor: 'pointer' } : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                                );
                            })}
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
        );
    }
}
