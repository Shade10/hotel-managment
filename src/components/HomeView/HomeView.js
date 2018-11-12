import React, { Component } from "react";

import "./HomeView.css";

class HomeView extends Component {
  render() {
    return (
      <div className="HomeView">
        <p>Witaj w aplikacji do zarządzania hotelem</p>
        <p>
          w aplikacje tej będzie można zarządzać pokojami hotelowymi,
          pracownikami
        </p>
        <p>
          {" "}
          a także obsługą gości i przyznawanie im spersonowanych wymagań które
          gwarantuje hotel
        </p>
        <p>
          upoważniony personel hotelowy będzie mógł dodawać nowe funkcje usług
          które hotel będzie mógł oferować swoim klientom
        </p>
        <br />
        <br />
        <br />
        <p>Aplikacja jest w fazie tworzenia </p>
      </div>
    );
  }
}

export default HomeView;
