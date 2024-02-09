import React from 'react';
import axios from 'axios';

import { List, ListItem, BottomBorderSpan, PaddedDiv2 } from '../assets/styles';
import { baseAPIURL } from '../assets/api_url';

const RenderCountryDetails = ({token, country, setCountries, setShowDetails, setSearchValue}) => {

  const addToCountryList = async (jwt, officialName, population, currenciesArray) => {
    const currencies = []
    Object.keys(currenciesArray).map((key, i) => currencies.push(key))
    try {
      const response = await axios.post(`${baseAPIURL}/country`, {"name": officialName, population, currencies}, {headers:{"Authorization": "Bearer " + jwt.token}})
      setCountries(response.data)
      setSearchValue("")
      setShowDetails(false)
    } catch (error) {
      console.error('Error adding country:', error)
    }
  }

  const cancel = () => {
    setSearchValue("")
    setShowDetails(false)
  }

  return (
    <>
      {country.length > 0 ?
        <>
          {country.map((c, i) => (
            <List key={i}>
              <ListItem key={i}>
                <div>
                  <BottomBorderSpan>{c.name.official}</BottomBorderSpan>
                </div>
                <PaddedDiv2> Population: {c.population} </PaddedDiv2> 
                <div> Currencies: {Object.keys(c.currencies).map((key, i) => (<React.Fragment key={i}>{key}</React.Fragment>))} </div>
                <PaddedDiv2> 
                  <input type="button" onClick={() => cancel()} value={"back"} />
                  <input type="button" onClick={() => addToCountryList(token, c.name.official, c.population, c.currencies)} value={"add to List"} />
                </PaddedDiv2>
              </ListItem>
            </List>
          ))}
        </>
      :
        <>
          No results <input type="button" onClick={() => cancel()} value={"back"} />
        </>
      }
    </>
  )
}

export default RenderCountryDetails;