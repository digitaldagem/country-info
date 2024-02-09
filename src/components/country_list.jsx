import React from 'react';

import { List, ListItem, BottomBorderSpan } from '../assets/styles';

const RenderCountryResponsiveList = ({countries}) => {

  return (
    <>
      {countries.length > 0 ?
        <List>
          {countries.map((country, i) => (
            <ListItem key={i}>
              <div>
                <BottomBorderSpan>
                  Name: {country.name} |
                    Population: {country.population} |
                    Currencies: {country.currencies.map((currency, i) => 
                      (<React.Fragment key={i}>{i != country.currencies.length - 1 ? <>{currency}, </>: <>{currency}</>}</React.Fragment>))}
                </BottomBorderSpan>
              </div>
            </ListItem>
          ))}
        </List>
      :
        <></>
      }
    </>
  )
}

export default RenderCountryResponsiveList;