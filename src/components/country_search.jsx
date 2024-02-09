import React, { useState } from 'react';
import axios from 'axios';

import RenderCountryDetails from './country_details';
import RenderCountryResponsiveList from './country_list';
import { CenteredContainer, PaddedDiv5 } from '../assets/styles';
import { baseAPIURL } from '../assets/api_url';

const CountrySearch = () => {
  const [token, setToken] = useState("")
  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [country, setCountry] = useState([])
  const [showDetails, setShowDetails] = useState(false)

  const login = () => {
    const fetchToken = async () => {
      try {
        const response = await axios.post(`${baseAPIURL}/login`, { username: 'player_one', password: 'password_one' })
        setToken(response.data)
        getCountries(response.data)
      } catch (error) {
        console.error('Error fetching token:', error)
      }
    }

    fetchToken()
  }

  const getCountries = async (jwt) => {
    try {
      const response = await axios.get(`${baseAPIURL}/countries_list`, {headers:{"Authorization": "Bearer " + jwt.token}})
      setCountries(response.data)
    } catch (error) {
      console.error('Error get countries:', error)
    }
  }

  const getCountry = async (jwt, country) => {
    if (country.length > 1) {
      try {
        const response = await axios.get(`${baseAPIURL}/country/${country}`, {headers:{"Authorization": "Bearer " + jwt.token}})
        setCountry(response.data)
        setShowDetails(true)
      } catch (error) {
        setSearchValue("")
        console.error('Error fetching country:', error)
      }
    } else {
      setSearchValue("")
    }
  }

  const handleSetSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <CenteredContainer>
        {token == "" 
            ? 
              <>
                <input type="button" onClick={login} value={"Log in"} />
              </>
            :
                <>
                  <div>
                    {showDetails && country.length != 0 ?
                        <RenderCountryDetails 
                          token={token} 
                          country={country} 
                          setCountries={setCountries} 
                          setShowDetails={setShowDetails} 
                          setSearchValue={setSearchValue}/>
                      :
                      <>
                        <div>
                          <input type="text" value={searchValue} onChange={handleSetSearchValue} placeholder="search for country..."/>
                          <button onClick={() => getCountry(token, searchValue)}>search</button>
                        </div>
                        <PaddedDiv5>
                          <RenderCountryResponsiveList countries={countries}/>
                        </PaddedDiv5>
                      </>
                    }
                  </div>
                </>
        }
    </CenteredContainer>
  )
}

export default CountrySearch;