import "../productList/productList.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
const ProductList = () => {
  const images = [
    {
      original: "../img/panel_admin_1.png",
      thumbnail: "../img/panel_admin_1.png",
    },
    {
      original: "../img/panel_admin_2.png",
      thumbnail: "../img/panel_admin_2.png",
    },
    {
      original: "../img/panel_admin_3.png",
      thumbnail: "../img/panel_admin_3.png",
    },
  ];
  return (
    <div className="pl">
      <div className="pl-texts">
        <div className="pl-title-container">
          <h3 className="pl-title">Szybkauprawa.pl</h3>
        </div>

        <a href="https://www.szybkauprawa.pl/" target="_blank">
          <div className="link-container link-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-browser-edge"
              viewBox="0 0 16 16"
              className="boostrap-icons"
            >
              <path d="M9.482 9.341c-.069.062-.17.153-.17.309 0 .162.107.325.3.456.877.613 2.521.54 2.592.538h.002c.667 0 1.32-.18 1.894-.519A3.838 3.838 0 0 0 16 6.819c.018-1.316-.44-2.218-.666-2.664l-.04-.08C13.963 1.487 11.106 0 8 0A8 8 0 0 0 .473 5.29C1.488 4.048 3.183 3.262 5 3.262c2.83 0 5.01 1.885 5.01 4.797h-.004v.002c0 .338-.168.832-.487 1.244l.006-.006a.594.594 0 0 1-.043.041Z" />
              <path d="M.01 7.753a8.137 8.137 0 0 0 .753 3.641 8 8 0 0 0 6.495 4.564 5.21 5.21 0 0 1-.785-.377h-.01l-.12-.075a5.45 5.45 0 0 1-1.56-1.463A5.543 5.543 0 0 1 6.81 5.8l.01-.004.025-.012c.208-.098.62-.292 1.167-.285.129.001.257.012.384.033a4.037 4.037 0 0 0-.993-.698l-.01-.005C6.348 4.282 5.199 4.263 5 4.263c-2.44 0-4.824 1.634-4.99 3.49Zm10.263 7.912c.088-.027.177-.054.265-.084-.102.032-.204.06-.307.086l.042-.002Z" />
              <path d="M10.228 15.667a5.21 5.21 0 0 0 .303-.086l.082-.025a8.019 8.019 0 0 0 4.162-3.3.25.25 0 0 0-.331-.35c-.215.112-.436.21-.663.294a6.367 6.367 0 0 1-2.243.4c-2.957 0-5.532-2.031-5.532-4.644.002-.135.017-.268.046-.399a4.543 4.543 0 0 0-.46 5.898l.003.005c.315.441.707.821 1.158 1.121h.003l.144.09c.877.55 1.721 1.078 3.328.996Z" />
            </svg>
            <div className="link">Wersja online strony</div>
          </div>
        </a>

        <div className="tech-container">
          <div className="tech-title">Technologie użyte:</div>
          <div className="tech-list">
            <div>
              <img src="../img/html.png" alt="" className="pr-img" />
            </div>
            <div>
              <img src="../img/css.png" alt="" className="pr-img" />
            </div>
            <div>
              <img src="../img/js.png" alt="" className="pr-img" />
            </div>
            <div>
              <img src="../img/react.png" alt="" className="pr-img" />
            </div>
            <div>
              <img src="../img/firebase.png" alt="" className="pr-img" />
            </div>
          </div>
          <div className="copy"> Wykonane dla: PLANNING ACADEMY SP. Z O.O.</div>
        </div>

        <div className="target-container">
          <span className="target-web">Cel strony :</span> Uzupełninie
          instrukcji papierowych o wersje online
        </div>

        <p className="pl-desc">
          Po zakupie zestawu do uprawy klient może za pomocą kodu qr z pudełka
          przenieść się na stronę główną i skorzystać z instrukcji uprawy.
          Projekt jest dostosowany do urządzeń mobilnych.
        </p>
      </div>

      <div className="design">
        <div>
          <div className="p">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <a
              href="https://www.szybkauprawa.pl"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../img/full-screen.png" alt="" className="p-img" />
            </a>
          </div>
        </div>

        <div>
          <div className="p-mobile">
            <a
              href="https://www.szybkauprawa.pl"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../img/mobile-screen.png" alt="" className="p-img" />
            </a>
          </div>
        </div>
      </div>
      <section className="pl admin-main-container">
        <div className="pl-texts ">
          <h3 className="pl-title-h2">Panel Administracyjny</h3>
          <p className="pl-desc">
            Panel administracyjny składa się z 4 zakładek, główną
            funkcjonalnością strony jest dodawanie nowych instrukcji z opisami i
            zdjęciami na poszczególnych etapach rozwoju rośliny, oprócz tego
            mamy również możliwość edycji instrukcji i listę wszystkich
            dostępnych instrukcji z paginacją i możliwością usuwania instrukcji.
            Główny Panel wyświetla ilość obecnych instrukcji dla poszczególnych
            kategorii.
          </p>
          <hr class="hr-primary" />
        </div>
      </section>
      <div class="admin-img-main-container">
        <ImageGallery items={images} />
      </div>

      <section className="pl admin-main-container">
        <div className="pl-texts ">
          <h3 className="pl-title-h2">Szybkie filtrowanie i paginacja</h3>
          <p className="pl-desc">
            Każdy klient ma możliwość szybkiego znalezienia swojej instrukcji za
            pomocą wyszukiwarki lub bezpośrednio przeszukując interesujące go
            kategorie. Po wybraniu instrukcji dla każdego zestawu przechodzimy
            do podstrony z instrukcją uprawy i dodatkowymi zdjęciami z
            poszczególnych etapów hodowli.
          </p>
          <hr class="hr-primary" />
        </div>
      </section>
      <div className="img-product-container">
        <img
          src="../img/product_list_1.png"
          alt=""
          className="img-product-list"
        />
      </div>
      <div className="img-product-container-small">
        <img
          src="../img/product_list_2.png"
          alt=""
          className="img-product-list-small"
        />
      </div>

      <div className="pl-texts ">
        <div className="pl-title-container">
          <h3 className="pl-title">sklep.szybkauprawa.pl</h3>
        </div>
        <div className="tech-container">
          <div className="tech-title">Technologie użyte:</div>
          <div className="tech-list">
            <div>
              <img src="../img/html.png" alt="" className="pr-img" />
            </div>
            <div>
              <img src="../img/css.png" alt="" className="pr-img" />
            </div>
            <div>
              <img src="../img/js.png" alt="" className="pr-img" />
            </div>
            <div>
              <img src="../img/react.png" alt="" className="pr-img" />
            </div>
            <div>
              <img src="../img/firebase.png" alt="" className="pr-img" />
            </div>
            <div>
              <img src="../img/node.png" alt="" className="pr-img" />
            </div>
            <div>
              <img src="../img/mongodb.png" alt="" className="pr-img-long" />
            </div>
          </div>
          <div className="copy"> Projekt nie został jeszcze ukończony</div>
        </div>
        <div className="target-container">
          <span className="target-web">Cel strony :</span> sprzedaż produktów
          firmy dla klientów B2C
        </div>

        <p className="pl-desc">
          Frond-end został wykonany w react.js, styled components, Back-end
          został wykonany w node.js (express.js), firebase użyłem do
          przechowywania zdjęć produktów, monodb przechowuje dane użytkowników,
          wszystkie produkty i zawartość koszyka dla każdego klienta.
        </p>
      </div>

      <div className="img-sklep-container">
        <img src="../img/home.png" alt="" className="img-product-list" />
      </div>

      <section className="pl admin-main-container">
        <div className="pl-texts ">
          <h3 className="pl-title-h2">Listing produktów</h3>
          <p className="pl-desc">
            React pobiera wszystkie produkty z back-endu za pomocą api i bazy
            danych mongo db, wszystkie produkty są dodawane bezpośrednio w
            panelu administracyjnym.
          </p>
          <hr class="hr-primary" />
        </div>
      </section>
      <div className="img-sklep-container">
        <img
          src="../img/product_list.png"
          alt=""
          className="img-product-list"
        />
      </div>
      <section className="pl admin-main-container">
        <div className="pl-texts ">
          <h3 className="pl-title-h2">Szczegóły produktu</h3>
          <p className="pl-desc">
            Obecnie każdy produkt posiada tylko 1 zdjęcie (domyślnie będzie to
            do 12 zdjęć) istnieje już możliwość dodania produktu do koszyka, za
            stan koszyka i jego wartość odpowiada Redux.
          </p>
          <hr class="hr-primary" />
        </div>
      </section>
      <div className="img-sklep-container">
        <img
          src="../img/detail_product.png"
          alt=""
          className="img-product-list"
        />
      </div>
      <section className="pl admin-main-container">
        <div className="pl-texts ">
          <h3 className="pl-title-h2">Koszyk produktu</h3>
          <p className="pl-desc">
            Koszyk produktu wyświetla wszystkie dodane produkty, łącznie z kwotą
            i łączną sumą do zapłaty.
          </p>
          <hr class="hr-primary" />
        </div>
      </section>
      <div className="img-sklep-container">
        <img src="../img/cart.png" alt="" className="img-product-list" />
      </div>
      <section className="pl admin-main-container">
        <div className="pl-texts ">
          <h3 className="pl-title-h2">Panel klienta i Panel administracyjny</h3>
          <p className="pl-desc">
            Niestety z uwagi na dane poufne nie mogę pokazać panelu klienta i
            panelu administracyjnego na screenach. Panel administracyjny obecnie
            pobiera z back-endu informacje o nowo zarejestrowanych
            użytkownikach, o najnowszych transakcjach które miały miejsce,
            wyświetla listę produktów w sklepie i daje możliwość dodania
            produktu do sklepu.
          </p>
          <hr class="hr-primary" />
        </div>
      </section>
    </div>
  );
};

export default ProductList;
