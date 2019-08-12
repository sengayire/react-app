import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const Home = () => (
  <div>
    <Header />
    <div id="showcase">
      <div id="home">
        <div class="container">
          <div id="slides">
            <h1>
              POLITICO is a customizable policy intelligence platform for professionals on the front
              lines of policy. Our mission is simple - help policy professionals succeed. The Pro
              platform gives you access to exclusive reporting, analysis and tools to arm you with
              the intel you need to make informed decisions, so you can stay one step ahead.
            </h1>
          </div>
          <div id="news">
            <h4>
              <u>Top News</u>
            </h4>
            <hr />
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit. Fusce non iaculis dui. Fusce
              vehicula dapibus nulla, sed congue tortor tempus a. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas. et netus et
              malesuada fames ac turpis egestas.
            </p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non iaculis dui. Fusce
              vehicula dapibus nulla, sed congue tortor tempus a. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas. et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
          <div class="home-btn">
            <button
              onclick="window.location.href='./public/signin.html'"
              type="submit"
              name="vote"
              id="vote"
            >
              Vote
            </button>

            <button
              onclick="window.location.href='./public/signin.html'"
              type="submit"
              name="view-parties"
              id="view"
            >
              View parties
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
