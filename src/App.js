import cards from "./cards.json";
import "./App.css";
import style from "./scss/cards.module.scss";

function FractionSelector() {
  return (
    <div className={style["fraction-selection"]}>
      <div className={style["prev-fraction"]}>
        <div className={style["prev-fraction-name"]}>Чудовища</div>
        <div className={style["arrow-prev-fraction"]}>
          <img src={"./img/arrow-prev.png"} alt={""} />
        </div>
      </div>
      <div className={style["current-fraction"]}>
        <div className={style["current-fraction-icon"]}>
          <img
            className={style["current-fraction-image"]}
            src={"./img/Nilf.png"}
            alt={""}
          />
        </div>
        <div className={style["current-fraction-name"]}>Нильфгаард</div>
      </div>
      <div className={style["next-fraction"]}>
        <div className={style["arrow-next-fraction"]}>
          <img src={"./img/arrow-next.png"} alt={""} />
        </div>
        <div className={style["next-fraction-name"]}>Королевства севера</div>
      </div>
    </div>
  );
}

function CardsCollection() {
  return <h1></h1>;
}

function CardsDeck() {
  return <h1></h1>;
}

function CardsStatistic() {
  return <h1></h1>;
}

function App() {
  return (
    <div className="App">
      <FractionSelector />
      <div className={style["cards-container"]}>
        <div className={style["left-block"]}>
          <div className={style["deck"]}>Карты колод</div>
          <div className={style["cards-type"]}>ГЕРОИ</div>
          <div className={style["list-card-types"]}>
            <div className={style["card-type all"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/All.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type meelee"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Meelee.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type archer"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Archers.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type cata"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Cata.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type heroes"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Heroes.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type whether"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Whether.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type special"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Special.png"}
                alt={""}
              />
            </div>
          </div>
          <div className={style["deck-cards"]}>
            <div className={style["card"]}>
              <div className={style["card-info"]}>
                <img
                  className={style["card-info-image"]}
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className={style["card-power"]}>10</div>
                <div className={style["card-classification"]}>
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className={style["card-ability"]}>
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className={style["card-description"]}>Геральт из Ривии</div>
            </div>
            <div className={style["card"]}>
              <div className={style["card-info"]}>
                <img
                  className={style["card-info-image"]}
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className={style["card-power"]}>10</div>
                <div className={style["card-classification"]}>
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className={style["card-ability"]}>
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className={style["card-description"]}>Геральт из Ривии</div>
            </div>
            <div className={style["card"]}>
              <div className={style["card-info"]}>
                <img
                  className={style["card-info-image"]}
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className={style["card-power"]}>10</div>
                <div className={style["card-classification"]}>
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className={style["card-ability"]}>
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className={style["card-description"]}>Геральт из Ривии</div>
            </div>
            <div className={style["card"]}>
              <div className={style["card-info"]}>
                <img
                  className={style["card-info-image"]}
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className={style["card-power"]}>10</div>
                <div className={style["card-classification"]}>
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className={style["card-ability"]}>
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className={style["card-description"]}>Геральт из Ривии</div>
            </div>
            <div className={style["card"]}>
              <div className={style["card-info"]}>
                <img
                  className={style["card-info-image"]}
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className={style["card-power"]}>10</div>
                <div className={style["card-classification"]}>
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className={style["card-ability"]}>
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className={style["card-description"]}>Геральт из Ривии</div>
            </div>
            <div className={style["card"]}>
              <div className={style["card-info"]}>
                <img
                  className={style["card-info-image"]}
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className={style["card-power"]}>10</div>
                <div className={style["card-classification"]}>
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className={style["card-ability"]}>
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className={style["card-description"]}>Геральт из Ривии</div>
            </div>
            <div className={style["card"]}>
              <div className={style["card-info"]}>
                <img
                  className={style["card-info-image"]}
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className={style["card-power"]}>10</div>
                <div className={style["card-classification"]}>
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className={style["card-ability"]}>
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className={style["card-description"]}>Геральт из Ривии</div>
            </div>
            <div className={style["card"]}>
              <div className={style["card-info"]}>
                <img
                  className={style["card-info-image"]}
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className={style["card-power"]}>10</div>
                <div className={style["card-classification"]}>
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className={style["card-ability"]}>
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className={style["card-description"]}>Геральт из Ривии</div>
            </div>
            <div className={style["card"]}>
              <div className={style["card-info"]}>
                <img
                  className={style["card-info-image"]}
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className={style["card-power"]}>10</div>
                <div className={style["card-classification"]}>
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className={style["card-ability"]}>
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className={style["card-description"]}>Геральт из Ривии</div>
            </div>
            <div className={style["card"]}>
              <div className={style["card-info"]}>
                <img
                  className={style["card-info-image"]}
                  src={"./img/cards/Tw3_cardart_monsters_fiend.webp"}
                  alt={""}
                />
                <div className={style["card-power"]}>10</div>
                <div className={style["card-classification"]}>
                  <img src={"./img/Melee.png"} alt={""} />
                </div>
                <div className={style["card-ability"]}>
                  <img src={"./img/Bond.png"} alt={""} />
                </div>
              </div>
              <div className={style["card-description"]}>Геральт из Ривии</div>
            </div>
          </div>
        </div>
        <div className={style["center-block"]}>
          <div className={style["current-fraction-description"]}>
            Нильфгаард побеждает в случае ничьей
          </div>
          <div className={style["current-fraction-leader"]}>Лидер</div>
          <div className={style["leader-card-container"]}>
            <div className={style["leader-card"]}>
              <img
                className={style["leader-card-image"]}
                src={
                  "./img/cards/Tw3_cardart_nilfgaard_leader_emhyr_silver.webp"
                }
                alt={""}
              />
              <div className={style["leader-card-info"]}>
                <div className={style["leader-card-name"]}>
                  Эмгыр Ван Эмрейс
                </div>
                <div className={style["leader-card-description"]}>
                  Властелин юга
                </div>
              </div>
            </div>
          </div>
          <div className={style["cards-information"]}>
            <div className={style["all-cards-container"]}>
              <div className={style["cards-information"]}>Карты в колоде</div>
              <div className={style["all-cards"]}>
                <div className={style["all-cards-icon"]}>
                  <img src={"./img/all-cards.png"} alt={""} />
                </div>
                <div className={style["all-cards-value"]}>0</div>
              </div>
            </div>
            <div className={style["units-cards-container"]}>
              <div className={style["cards-information"]}>Карты отрядов</div>
              <div className={style["units-cards"]}>
                <div className={style["units-cards-icon"]}>
                  <img src={"./img/units-cards.png"} alt={""} />
                </div>
                <div className={style["units-cards-value"]}>0/22</div>
              </div>
            </div>
            <div className={style["special-cards-container"]}>
              <div className={style["cards-information"]}>
                Специальные карты
              </div>
              <div className={style["special-cards"]}>
                <div className={style["special-cards-icon"]}>
                  <img src={"./img/special-cards.png"} alt={""} />
                </div>
                <div className={style["special-cards-value"]}>0/10</div>
              </div>
            </div>
            <div className={style["power-cards-container"]}>
              <div className={style["cards-information"]}>
                Общая сила карт отрядов
              </div>
              <div className={style["power-cards"]}>
                <div className={style["power-cards-icon"]}>
                  <img src={"./img/power-cards.png"} alt={""} />
                </div>
                <div className={style["power-cards-value"]}>0</div>
              </div>
            </div>
            <div className={style["heroes-cards-container"]}>
              <div className={style["cards-information"]}>Герои</div>
              <div className={style["heroes-cards"]}>
                <div className={style["heroes-cards-icon"]}>
                  <img src={"./img/heroes-cards.png"} alt={""} />
                </div>
                <div className={style["heroes-cards-value"]}>0</div>
              </div>
            </div>
          </div>
        </div>
        <div className={style["right-block"]}>
          <div className={style["collection"]}>Карты коллекции</div>
          <div className={style["cards-type"]}>ГЕРОИ</div>
          <div className={style["list-card-types"]}>
            <div className={style["card-type all"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/All.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type meelee"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Meelee.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type archer"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Archers.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type cata"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Cata.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type heroes"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Heroes.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type whether"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Whether.png"}
                alt={""}
              />
            </div>
            <div className={style["card-type special"]}>
              <img
                className={style["card-type-image"]}
                src={"./img/Special.png"}
                alt={""}
              />
            </div>
          </div>
          <div className={style["collection-cards"]}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
