import { Modal } from "./Modal";

function App() {
  return (
    <main className="mt-5 bg-image bg-color container-height p-0 mx-auto width-1440">
      <div className="row row-cols-auto gx-0 container-height">
        <div className="col p-0 position-relative bag-container">
          <img
            src={"school-bag 1.svg"}
            alt=""
            className="position-absolute bag-position"
          />
        </div>
        <div className="col first-text-container p-0">
          <div className="width-1 mt-2 mb-2">
            <p className="fw-bold mb-0">
              Мы знаем, как закончить школу{" "}
              <span className="text-primary">за 10 месяцев!</span>
            </p>
          </div>
          <p className="text-small mb-0">
            А потом устроиться на любимую работу
          </p>
        </div>
        <div className="col p-0 position-relative first-arrow-container">
          <img
            src={"arrows-04 1.svg"}
            alt=""
            className="position-absolute first-arrow-position"
          />
        </div>
        <div className="col p-0 second-text-container">
          <p className="text-small mt-2 mb-2">
            Хотите также? Приходите учиться в Хекслет!
          </p>
          <p className="mb-0 fw-bold">
            <span className="text-primary">До 1 сентября</span> оставьте заявку
            на любую профессию,
            <br />а мы подарим классные{" "}
            <span className="text-primary">бонусы</span> для воодушевляющего
            старта
          </p>
        </div>
        <div className="col p-0 position-relative second-arrow-container">
          <img
            src={"arrows-04 2.svg"}
            alt=""
            className="position-absolute second-arrow-position"
          />
        </div>
        <div className="col p-0 d-flex align-items-center">
          <button
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="btn btn-primary px-4"
          >
            А что подарите?
          </button>
        </div>
        <div className="col p-0 position-relative computer-container">
          <img
            src={"computer 1.svg"}
            alt=""
            className="position-absolute computer-position"
          />
        </div>
      </div>
      <Modal />
    </main>
  );
}
export default App;
