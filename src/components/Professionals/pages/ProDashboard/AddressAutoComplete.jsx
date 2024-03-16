import React, { useState } from 'react'
import PlacesAutocomplete , {
    geocodeByAddress,
    getLatLng,
  } from "react-places-autocomplete";

function AddressAutoComplete(props) {

    const [address,setaddress] = useState("")
    const handleChange = address => {
       setaddress(address);
       
     };
    
    const handleSelect = address => {
        props.onSelect(address)
       geocodeByAddress(address)
         .then(results => getLatLng(results[0]))
         .then(latLng => console.log('Success', latLng))
         .catch(error => console.error('Error', error));
     };
  return (
    <div>

<PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <textarea
              {...getInputProps({
                placeholder:"Address",
              type:"text",
              className:"outline-none p-2 border rounded-md border-borde placeholder:text-placeholderText my-2 sm:w-[95%] w-[100%]"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
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
  </div>
  )
}

export default AddressAutoComplete