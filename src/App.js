import "./scss/App.scss";
import cards from "./cards.json";
console.log(cards);
function App() {
  return (
    <div className="App">
      <div className="fraction-selection">
        <div className="prev-fraction">
          <div className="prev-fraction-name">Чудовища</div>
          <div className="arrow-prev-fraction">
            <img src={"./img/arrow-prev.png"} alt={""} />
          </div>
        </div>

        <div className="current-fraction">
          <div className="current-fraction-icon">
            <img src={"./img/Nilf.png"} alt={""} />
          </div>
          <div className="current-fraction-name">Нильфгаард</div>
        </div>
        <div className="next-fraction">
          <div className="arrow-next-fraction">
            <img src={"./img/arrow-next.png"} alt={""} />
          </div>
          <div className="next-fraction-name">Королевства севера</div>
        </div>
      </div>
      <div className="cards-container">
        <div className="left-block">
          <div className="deck">Карты колод</div>
          <div className="cards-type">ГЕРОИ</div>
          <div className="list-card-types">
            <div className="card-type all">
              <img src={"./img/All.png"} alt={""} />
            </div>
            <div className="card-type meelee">
              <img src={"./img/Meelee.png"} alt={""} />
            </div>
            <div className="card-type archer">
              <img src={"./img/Archers.png"} alt={""} />
            </div>
            <div className="card-type cata">
              <img src={"./img/Cata.png"} alt={""} />
            </div>
            <div className="card-type heroes">
              <img src={"./img/Heroes.png"} alt={""} />
            </div>
            <div className="card-type whether">
              <img src={"./img/Whether.png"} alt={""} />
            </div>
            <div className="card-type special">
              <img src={"./img/Special.png"} alt={""} />
            </div>
          </div>
          <div className="deck-cards">
            <div className="card">
              <div className="card-info">
                <img
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className="card-power">10</div>
                <div className="card-classification">
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className="card-ability">
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className="card-description">Геральт из Ривии</div>
            </div>
            <div className="card">
              <div className="card-info">
                <img
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className="card-power">10</div>
                <div className="card-classification">
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className="card-ability">
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className="card-description">Геральт из Ривии</div>
            </div>
            <div className="card">
              <div className="card-info">
                <img
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className="card-power">10</div>
                <div className="card-classification">
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className="card-ability">
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className="card-description">Геральт из Ривии</div>
            </div>
            <div className="card">
              <div className="card-info">
                <img
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className="card-power">10</div>
                <div className="card-classification">
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className="card-ability">
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className="card-description">Геральт из Ривии</div>
            </div>
            <div className="card">
              <div className="card-info">
                <img
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className="card-power">10</div>
                <div className="card-classification">
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className="card-ability">
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className="card-description">Геральт из Ривии</div>
            </div>
            <div className="card">
              <div className="card-info">
                <img
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className="card-power">10</div>
                <div className="card-classification">
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className="card-ability">
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className="card-description">Геральт из Ривии</div>
            </div>
            <div className="card">
              <div className="card-info">
                <img
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className="card-power">10</div>
                <div className="card-classification">
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className="card-ability">
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className="card-description">Геральт из Ривии</div>
            </div>
            <div className="card">
              <div className="card-info">
                <img
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className="card-power">10</div>
                <div className="card-classification">
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className="card-ability">
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className="card-description">Геральт из Ривии</div>
            </div>
            <div className="card">
              <div className="card-info">
                <img
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className="card-power">10</div>
                <div className="card-classification">
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className="card-ability">
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className="card-description">Геральт из Ривии</div>
            </div>
            <div className="card">
              <div className="card-info">
                <img
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className="card-power">10</div>
                <div className="card-classification">
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className="card-ability">
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className="card-description">Геральт из Ривии</div>
            </div>
          </div>
        </div>
        <div className="center-block">
          <div className="current-fraction-description">
            Нильфгаард побеждает в случае ничьей
          </div>
          <div className="current-fraction-leader">Лидер</div>
          <div className="leader-card-container">
            <div className="leader-card">
              <img
                src={
                  "./img/cards/Tw3_cardart_nilfgaard_leader_emhyr_silver.webp"
                }
                alt={""}
              />
              <div className="leader-card-info">
                <div className="leader-card-name">Эмгыр Ван Эмрейс</div>
                <div className="leader-card-description">Властелин юга</div>
              </div>
            </div>
          </div>
          <div className="cards-information">
            <div className="all-cards-container">
              <div className="cards-information">Карты в колоде</div>
              <div className="all-cards">
                <div className="all-cards-icon">
                  <img src={"./img/all-cards.png"} alt={""} />
                </div>
                <div className="all-cards-value">0</div>
              </div>
            </div>
            <div className="units-cards-container">
              <div className="cards-information">Карты отрядов</div>
              <div className="units-cards">
                <div className="units-cards-icon">
                  <img src={"./img/units-cards.png"} alt={""} />
                </div>
                <div className="units-cards-value">0/22</div>
              </div>
            </div>
            <div className="special-cards-container">
              <div className="cards-information">Специальные карты</div>
              <div className="special-cards">
                <div className="special-cards-icon">
                  <img src={"./img/special-cards.png"} alt={""} />
                </div>
                <div className="special-cards-value">0/10</div>
              </div>
            </div>
            <div className="power-cards-container">
              <div className="cards-information">Общая сила карт отрядов</div>
              <div className="power-cards">
                <div className="power-cards-icon">
                  <img src={"./img/power-cards.png"} alt={""} />
                </div>
                <div className="power-cards-value">0</div>
              </div>
            </div>
            <div className="heroes-cards-container">
              <div className="cards-information">Герои</div>
              <div className="heroes-cards">
                <div className="heroes-cards-icon">
                  <img src={"./img/heroes-cards.png"} alt={""} />
                </div>
                <div className="heroes-cards-value">0</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-block">
          <div className="collection">Карты коллекции</div>
          <div className="cards-type">ГЕРОИ</div>
          <div className="list-card-types">
            <div className="card-type all">
              <img src={"./img/All.png"} alt={""} />
            </div>
            <div className="card-type meelee">
              <img src={"./img/Meelee.png"} alt={""} />
            </div>
            <div className="card-type archer">
              <img src={"./img/Archers.png"} alt={""} />
            </div>
            <div className="card-type cata">
              <img src={"./img/Cata.png"} alt={""} />
            </div>
            <div className="card-type heroes">
              <img src={"./img/Heroes.png"} alt={""} />
            </div>
            <div className="card-type whether">
              <img src={"./img/Whether.png"} alt={""} />
            </div>
            <div className="card-type special">
              <img src={"./img/Special.png"} alt={""} />
            </div>
          </div>
          <div className="collection-cards"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
