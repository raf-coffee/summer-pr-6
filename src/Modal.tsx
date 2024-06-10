export function Modal() {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-image bg-color">
          <div className="modal-header">
            <button className="btn ms-auto" data-bs-dismiss="modal">
              <img src={"Close.svg"} alt="" className="fs-1" />
            </button>
          </div>
          <div className="modal-body modal-padding">
            <div className="row">
              <div className="col-8">
                <h2
                  className="modal-title text-primary pb-3"
                  id="staticBackdropLabel"
                >
                  Хочу стать разработчиком!
                </h2>
                <p className="fw-bold">И получить один из трех подарков</p>
                <div className="row mb-3">
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <img src={"revenue 1 1.svg"} alt="" className="fs-1" />
                  </div>
                  <div className="col-10">
                    <p className="mb-0 lh-sm">
                      <span className="fw-bold">Именной депозит на 20к.</span>{" "}
                      Будет доступен после покупки профессии, им можно
                      оплачивать дальнейшее обучение в Хекслете
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <img src={"online-chat 1.svg"} alt="" />
                  </div>
                  <div className="col-10">
                    <p className="mb-0 lh-sm">
                      <span className="fw-bold">
                        Консультация с карьерным экспертом в IT.
                      </span>{" "}
                      Прояснит вопросы будущего трудоустройства: от поиска
                      первой работы до развития карьеры
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <img src={"notes 1.svg"} alt="" />
                  </div>
                  <div className="col-10">
                    <p className="mb-0 lh-sm">
                      <span className="fw-bold">
                        Возможность заморозить обучение на 2 месяца.
                      </span>{" "}
                      Перерыв, если нужно будет восстановить силы и не учиться
                    </p>
                  </div>
                </div>
                <div className="row">
                  <p className="text-small">
                    *Подарок определит сотрудник Хекслета после беседы. Мы
                    уточним ваши намерения, поможем с выбором, а если поймем,
                    что программирование – это не ваше, честно отговорим от
                    обучения
                  </p>
                </div>
              </div>
              <div className="col-4">
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Имя"
                    />
                    <label htmlFor="name">Имя</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="example@gmail.com"
                    />
                    <label htmlFor="email">Эл. почта</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Номер телефона"
                    />
                    <label htmlFor="phone">Номер телефона</label>
                  </div>
                  <select
                    className="form-select mb-3 py-3"
                    aria-label="Хочу на факультет"
                  >
                    <option selected>Хочу на факультет</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Жду звонка
                    </button>
                  </div>
                  <p className="text-xs mb-0 mt-2">
                    Даю согласие на обработку персональных данных, соглашаюсь с
                    «Политикой конфиденциальности» и «Условиями оказания услуг»
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
