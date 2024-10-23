
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countrics.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountrics, setVisitedCountrics] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => setCountries(data))
    }, [])


    const handleVisitedCountry = country => {
        console.log('add this to your visited country')
        const newVisitedCountrics = [...visitedCountrics, country];
        setVisitedCountrics(newVisitedCountrics);
    }


    const handleVisitedFlags = flag => {
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag)
    }

    return (
        <div >
            <h3>countries:{countries.length}</h3>
            {/* visited country */}
            <div>
                <h5>Visited countries:{visitedCountrics.length}</h5>
                <ul>
                    {
                        visitedCountrics.map((country) => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
           <div className='flag-container'>
                 {
                    visitedFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
                 }
           </div>

             {/* display country */}
            <div className='country-container'>
               
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;