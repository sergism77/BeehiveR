//this is the weather.js file in the weather folder
//this is the weather component
//this is the component that will display the weather
//we use OpenWeatherMap API to get the weather data
//the OpenWeatherMap API requires an API key
//the API key is stored in the .env file
//the API key is stored in the .env.development file
//the API key is stored in the .env.production file


import React, { useState, useEffect } from "react"
import axios from "axios"
import { useStaticQuery, graphql } from "gatsby"
import { FaCloud, FaCloudRain, FaCloudShowersHeavy, FaSun, FaSnowflake, FaSmog, FaBolt } from "react-icons/fa"
require("dotenv").config()




const Weather = () => {
    const [weather, setWeather] = useState([])
    const [city, setCity] = useState("")

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    weather {
                        apiKey
                        city
                    }
                }
            }
        }
    `)

    const apiKey = data.site.siteMetadata.weather.apiKey
    const city = data.site.siteMetadata.weather.city

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
            .then(res => {
                setWeather(res.data)
                setCity(res.data.name)
            })
            .catch(err => console.log(err))
    }, [])

    const getIcon = () => {
        const id = weather.weather[0].id
        if (id < 300) {
            return <FaBolt />
        } else if (id < 400) {
            return <FaCloudRain />
        } else if (id < 600) {
            return <FaCloudShowersHeavy />
        } else if (id < 700) {
            return <FaSnowflake />
        } else if (id === 800) {
            return <FaSun />
        } else if (id > 800) {
            return <FaCloud />
        } else {
            return <FaSmog />
        }
    }

    return (
        <div>
            <h3>{city}</h3>
            <div>{getIcon()}</div>
            <p>{Math.round(weather.main.temp)}&deg;</p>
        </div>
    )
}

export default Weather


