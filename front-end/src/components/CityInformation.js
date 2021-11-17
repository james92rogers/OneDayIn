import React, { useState, useEffect } from 'react'
import Hotspot from './Hotspot'
import HotspotNoCoins from './HotspotNoCoins'
import SingleHotspot from './SingleHotspot'
import { Link } from 'react-router-dom'
import { getToken } from '../helpers/auth'

const CityInformation = ({
  _id,
  name,
  country,
  languagecode,
  overview,
  bannerImage,
  eat,
  drink,
  see,
  stay,
  walk,
  secret
}) => {

  console.log(_id)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // We consider the user "logged in" whenever the token is present…
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  

  return (
    <div className='CityInformation'>
      <div className='top-section' style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2>{name} </h2>
        <h3>{country}</h3>
      </div>
      <div className='info-section'>
        <p>{overview}</p>
        <p>Stuck for something to say? <a href={`https://www.duolingo.com/dictionary/${languagecode}`} target='_blank' rel='noreferrer'>Try this</a></p>
      </div>
      <div className='hotspot-section'>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-utensils"></i>
          </div>
          <Hotspot arr={eat} />
        </div>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-glass-cheers"></i>
          </div>
          <Hotspot arr={drink} />
        </div>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-bed"></i>
          </div>
          <Hotspot arr={stay} />
        </div>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-binoculars"></i>
          </div>
          <HotspotNoCoins arr={see} />
        </div>
        <div className='hotspot-single'>
          <div className='hotspot'>
            <div className='hotspot-icon'>
              <i className="fas fa-hiking"></i>
            </div>
            <SingleHotspot arr={walk} />
          </div>
          <div className='hotspot'>
            <div className='hotspot-icon'>
              <i className="fas fa-user-secret"></i>
            </div>
            <SingleHotspot arr={secret} />
          </div>
        </div>
      </div>
      <div className='user-suggestion-section'>
        <div className='user-suggestion'>
          <div className='user-top-row'>
            <h3>User Suggestions:</h3>
          </div>
          <div className='user-bottom-row'>
            <Link to={`/cities/${_id}/recommendations/eat`}><i className="fas fa-utensils"></i></Link>
            <Link to={`/cities/${_id}/recommendations/drink`}><i className="fas fa-glass-cheers"></i></Link>
            <Link to={`/cities/${_id}/recommendations/stay`}><i className="fas fa-bed"></i></Link>
            <Link to={`/cities/${_id}/recommendations/see`}><i className="fas fa-binoculars"></i></Link>
            <Link to={`/cities/${_id}/recommendations/walk`}><i className="fas fa-hiking"></i></Link>
            <Link to={`/cities/${_id}/recommendations/secret`}><i className="fas fa-user-secret"></i></Link>
          </div>  
        </div>
        {isLoggedIn ?
          <div className='add-suggestion'>
            <h4>Got a recommendation? <Link to={`/cities/${_id}/recommendations`}>Add it here</Link> </h4>
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default CityInformation