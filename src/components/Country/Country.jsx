import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country)
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }


    return (
        <div className={visited ? 'country' : 'visited'}>
            <h3 style={{ color: visited ? 'Purple' : 'white' }}>name : {name?.common}</h3>
            <img src={flags.png} alt='' />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={() => handleVisited(country)}>{visited ? 'Visited' : "Going"}</button>
            {visited ? "i have visited this country" : " i want to visited"}
        </div>
    );
};

export default Country;