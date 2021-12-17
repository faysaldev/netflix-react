import React from 'react'
import './Home.css'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Row from '../components/Row'
import request from '../Request'


function Home() {
    return (
        <div className="home">
            <Nav />
            <Banner />
            <Row title="Trending Now" fetchUrl={request.fetchTrending} itsLarge/>
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={request.fetchActionMovices} />
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovices} />
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovices} />
            <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovices} />
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
        </div>
    )
}

export default Home
