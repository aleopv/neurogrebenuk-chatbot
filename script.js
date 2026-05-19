const state = {
  screen: "home",
  history: [],
  name: "",
  email: "",
  phone: "",
  niche: "",
  topic: "",
  paymentMethod: "bank-card",
  paid: false,
  emailChecked: false,
  callDone: false,
};

const screens = {
  home: {
    mode: "start",
    html: () => `
      <div class="start-screen">
        <header class="start-appbar">
          <div class="start-avatar" aria-hidden="true"></div>
          <img class="start-title-logo" src="assets/pozvoni_grebenyuku_logo_transparent.png?v=2" alt="Позвони Гребенюку" />
          <button class="start-more" type="button">•••</button>
        </header>

        <div class="start-field">
          <section class="start-card">
            <div class="start-media">
              <img class="start-logo" src="assets/pozvoni_grebenyuku_logo_transparent.png?v=2" alt="Позвони Гребенюку" />
              <div class="start-person" aria-hidden="true"></div>
            </div>
            <p>
              Один звонок — и вместо хаоса появляется фокус:
              где застрял бизнес, какой ход выводит из тупика
              и что сделать первым.
            </p>
          </section>
        </div>

        <div class="start-action">
          <div class="start-annotation">Нажми кнопку Старт и перейди к оплате</div>
          <button class="start-button" type="button" data-action="go" data-target="postStart">Start</button>
        </div>
      </div>
    `,
  },
  postStart: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="bubble">
          <h2>Позвони Гребенюку</h2>
          <p>Один звонок — и вместо хаоса появляется фокус: где застрял бизнес, какой ход выводит из тупика и что сделать первым.</p>
          <span class="message-time">21:40</span>
          <div class="actions">
            <button class="primary" data-action="go" data-target="entryDetails">Супер</button>
          </div>
        </section>
      </div>
    `,
  },
  entryDetails: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="bubble">
          <h3>Что будет внутри</h3>
          <ol>
            <li>Звонок до 60 минут</li>
            <li>Разбор голосом, не анкета</li>
            <li>PDF-саммари после разговора</li>
            <li>Декларация: один следующий шаг на месяц</li>
          </ol>
          <span class="message-time">21:40</span>
          <div class="actions">
            <button class="primary" data-action="go" data-target="formIntro">Начать разбор</button>
            <button class="primary" data-action="go" data-target="examples">Послушать примеры</button>
          </div>
        </section>
      </div>
    `,
  },
  examples: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="bubble">
          <h2>Как звучит разбор</h2>
          <p>Это прототип, поэтому вместо аудио здесь показаны примеры тем, с которыми можно заходить в звонок.</p>
        </section>
        <section class="bubble">
          <h3>Примеры запросов</h3>
          <ul>
            <li>Где главный затор в продажах</li>
            <li>Как упаковать оффер на ближайший месяц</li>
            <li>Что мешает команде расти быстрее</li>
          </ul>
          <div class="actions">
            <button class="primary" data-action="go" data-target="formIntro">Начать разбор</button>
            <button class="primary" data-action="go" data-target="postStart">Назад</button>
          </div>
        </section>
      </div>
    `,
  },
  documents: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="bubble">
          <h2>Документы</h2>
          <p>В боевой версии здесь открываются оферта, политика обработки данных и согласие на запись звонка.</p>
        </section>
        <section class="bubble">
          <h3>Для прототипа</h3>
          <p>Показываем шаг, чтобы проверить место документов в сценарии до формы и оплаты.</p>
          <div class="actions">
            <button class="primary" data-action="go" data-target="formIntro">Продолжить</button>
          </div>
        </section>
      </div>
    `,
  },
  formIntro: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="bubble">
          <h2>Для продолжения нужно заполнить данные</h2>
          <p>Укажи имя, e-mail и телефон, с которого будешь звонить. Так мы привяжем оплату, звонок и будущий отчёт к одному пользователю.</p>
          <span class="message-time">21:41</span>
          <div class="actions">
            <button class="primary" data-action="go" data-target="form">Заполнить данные</button>
          </div>
        </section>
        <section class="bubble">
          <h2>Зачем телефон?</h2>
          <p>Если звонок придёт с указанного номера, система поймёт, что это твой оплаченный доступ.</p>
          <span class="message-time">21:41</span>
        </section>
      </div>
    `,
  },
  form: {
    mode: "web",
    url: "form.pozvonigrebenyuku.ru",
    html: () => `
      <div class="dark-screen">
        <div class="stack">
          <span class="pill">форма</span>
          <section>
            <h2 style="font-size:40px;line-height:1.05;margin:10px 0 8px;">Контактные данные</h2>
            <p class="hint">Заполни данные, чтобы получить ссылку на оплату и номер для звонка.</p>
          </section>
          <form class="form-card" data-form="lead">
            <div class="field">
              <label for="name">Имя</label>
              <input id="name" name="name" autocomplete="name" placeholder="Введи имя" value="${escapeHtml(state.name)}" />
            </div>
            <div class="field">
              <label for="email">E-mail</label>
              <input id="email" name="email" type="email" autocomplete="email" placeholder="Введи email" value="${escapeHtml(state.email)}" />
            </div>
            <div class="field">
              <label for="phone">Телефон для звонка</label>
              <input id="phone" name="phone" inputmode="tel" autocomplete="tel" placeholder="+7 (___) ___-__-__" value="${escapeHtml(state.phone)}" />
            </div>
            <div class="field">
              <label for="niche">Ниша бизнеса</label>
              <input id="niche" name="niche" placeholder="Например: онлайн-школа" value="${escapeHtml(state.niche)}" />
            </div>
            <div class="field">
              <label for="topic">Главный затык / запрос</label>
              <input id="topic" name="topic" placeholder="Продажи, команда, маркетинг" value="${escapeHtml(state.topic)}" />
            </div>
            <label class="checkline">
              <input name="consent" type="checkbox" checked />
              <span>Согласен с политикой и обработкой данных</span>
            </label>
            <div class="actions">
              <button class="secondary" type="submit">Продолжить</button>
            </div>
          </form>
        </div>
      </div>
    `,
  },
  formSaved: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="bubble">
          <h2>Данные из формы получены</h2>
          <p>Отлично, всё сохранили.</p>
          <span class="message-time">21:42</span>
        </section>
        <section class="bubble">
          <h2>Стоимость разбора</h2>
          <p>1 месяц — 10 000 рублей</p>
          <p>Внутри: доступ к звонку, PDF-саммари, отчёты и декларация на месяц. Автопродление происходит каждые 30 дней.</p>
          <p><em>Нажимая «Оплатить», ты соглашаешься с регулярными списаниями, обработкой персональных данных и условиями оферты.</em></p>
          <span class="message-time">21:42</span>
          <div class="actions">
            <button class="primary" data-action="go" data-target="paymentNotice">Оплатить картой РФ</button>
            <button class="primary" data-action="go" data-target="paymentNotice">Оплатить картой не РФ</button>
          </div>
        </section>
      </div>
    `,
  },
  price: {
    mode: "chat",
    html: () => screens.formSaved.html(),
  },
  paymentNotice: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="video-card payment-video-card">
          <div class="video-thumb payment-video-thumb">
            <div class="play-button">▶</div>
          </div>
          <div class="video-copy">
            <p>Перед оплатой посмотри короткое видео: что входит в доступ, как проходит звонок и когда придёт PDF-отчёт.</p>
            <p style="margin-top:14px;">После просмотра можно сразу перейти к оплате.</p>
            <span class="message-time">21:43</span>
          </div>
        </section>
        <section class="bubble">
          <h2>Перед оплатой</h2>
          <p>Сейчас откроется CloudPayments. После успешной оплаты возвращайся в бот: он подтвердит доступ и откроет номер для звонка.</p>
          <span class="message-time">21:43</span>
          <div class="actions">
            <button class="primary" data-action="go" data-target="cloudPayments">Оплатить</button>
            <button class="primary" data-action="go" data-target="paymentFailed">Проблема с оплатой?</button>
          </div>
        </section>
      </div>
    `,
  },
  cloudPayments: {
    mode: "web",
    url: "orders.cloudpayments.ru",
    html: () => `
      <div class="stack">
        <section class="payment-card">
          <h2>Оплата заказа</h2>
          <div class="amount">10 000,00 ₽</div>
          <p class="muted">Магазин: pozvoni_grebenyuku</p>
          <p class="muted">НейроГребенюк PRO. Подписка 30д.</p>
        </section>
        <section class="payment-card">
          <h2>Способы оплаты</h2>
          <div class="pay-methods">
            <button class="pay-blue" data-action="pay" data-method="bank-card">Банковская карта</button>
            <button class="pay-yellow" data-action="pay" data-method="t-pay">T-Pay</button>
            <button class="pay-purple" data-action="pay" data-method="sbp">СБП</button>
          </div>
          <form class="light-form" style="margin-top:18px;">
            <div class="field">
              <label for="receiptEmail">E-mail для квитанции</label>
              <input id="receiptEmail" value="${escapeHtml(state.email || "name@example.com")}" />
            </div>
          </form>
          <p class="amount" style="font-size:22px;margin-top:22px;">Итого: 10 000,00 ₽</p>
          <div class="actions">
            <button class="danger" data-action="go" data-target="paymentFailed">Имитировать ошибку</button>
          </div>
        </section>
      </div>
    `,
  },
  paymentSuccess: {
    mode: "web",
    url: "pay.cloudpayments.ru",
    onEnter: () => {
      state.paid = true;
    },
    html: () => `
      <div class="success-page">
        <div class="ok-mark">OK</div>
        <h2>Оплата прошла успешно</h2>
        <p class="muted">Доступ к голосовому разбору открыт.</p>
        <div class="amount">10 000,00 ₽</div>
        <button class="pay-blue" data-action="go" data-target="linkedAccount">Вернуться в бот</button>
      </div>
    `,
  },
  linkedAccount: {
    mode: "web",
    url: "pay.cloudpayments.ru",
    onEnter: () => {
      state.paid = true;
    },
    html: () => `
      <div class="linked-card">
        <div class="big-check"></div>
        <h2>Привязали счёт</h2>
        <p class="muted">pozvonigrebenyuku_bot</p>
        <button class="ghost" data-action="go" data-target="emailCheck">Обратно в приложение</button>
        <button class="primary" data-action="go" data-target="home">На главный</button>
      </div>
    `,
  },
  emailCheck: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="video-card">
          <div class="video-thumb"><div class="play-button">▶</div></div>
          <div class="video-copy">
            <p>Рады видеть тебя в «Позвони Гребенюку». Посмотри короткое видео: как устроен звонок, отчёт и декларация.</p>
            <p style="margin-top:14px;">После этого введи e-mail, который указывал при оплате.</p>
            <span class="message-time">21:45</span>
          </div>
          <div class="actions">
            <button class="primary" data-action="go" data-target="prepare">Видео не загружается</button>
          </div>
        </section>
        <section class="bubble">
          <h2>Введите почту, которую указали при оплате</h2>
          <p>Так мы найдём подписку и откроем номер НейроГребенюка.</p>
          <span class="message-time">21:46</span>
          <form class="light-form" data-form="email-check">
            <div class="field">
              <label for="emailOnly">E-mail</label>
              <input id="emailOnly" name="email" type="email" placeholder="name@example.com" value="${escapeHtml(state.email)}" />
            </div>
            <div class="actions" style="margin-top:10px;">
              <button class="primary" type="submit">Проверить подписку</button>
            </div>
          </form>
        </section>
      </div>
    `,
  },
  paymentConfirmed: {
    mode: "chat",
    onEnter: () => {
      state.paid = true;
      state.emailChecked = true;
    },
    html: () => `
      <div class="stack">
        <div class="email-reply">${escapeHtml(state.email || "name@example.com")} <span>21:47 ✓✓</span></div>
        <section class="bubble">
          <h2>Подписка найдена и активирована</h2>
          <p>Доступ открыт. Теперь можно позвонить НейроГребенюку.</p>
          <p class="muted">Чек придёт на ${escapeHtml(state.email || "email")} от CloudKassir.</p>
          <span class="message-time">21:47</span>
        </section>
        <section class="bubble">
          <h2>Номер для звонка</h2>
          <p><strong>+7 (800) 555-35-35</strong></p>
          <p>Звони с номера, который указал в форме${state.phone ? `: ${escapeHtml(state.phone)}` : ""}. Лучше быть в тихом месте и заложить до 60 минут.</p>
          <span class="message-time">21:47</span>
          <div class="actions">
            <button class="primary" data-action="go" data-target="calling">Позвонить сейчас</button>
            <button class="primary" data-action="go" data-target="prepare">Как подготовиться</button>
          </div>
        </section>
        <section class="bubble">
          <h2>Что говорить?</h2>
          <p>Расскажи, чем занимается бизнес, где сейчас затык, что уже пробовал и какой результат хочешь получить в ближайший месяц.</p>
          <span class="message-time">21:47</span>
        </section>
      </div>
    `,
  },
  callReady: {
    mode: "chat",
    html: () => screens.paymentConfirmed.html(),
  },
  prepare: {
    mode: "dark",
    html: () => `
      <div class="dark-screen">
        <div class="stack">
          <span class="pill">перед звонком</span>
          <section>
            <h2 style="font-size:38px;line-height:1.05;margin:10px 0 28px;">Как подготовиться</h2>
            <p class="hint">Не нужна презентация. Просто держи в голове несколько вещей.</p>
          </section>
          <section class="prep-list">
            <div>
              <h3>1. Что у тебя за бизнес</h3>
              <p>Ниша, продукт, клиенты, как сейчас зарабатываешь.</p>
            </div>
            <div>
              <h3>2. Где главный затык</h3>
              <p>Продажи, команда, маркетинг, финансы, хаос в процессах.</p>
            </div>
            <div>
              <h3>3. Чего хочешь за месяц</h3>
              <p>Чтобы разговор закончился конкретным шагом.</p>
            </div>
          </section>
          <div class="row-actions">
            <button class="secondary" data-action="go" data-target="calling">Позвонить сейчас</button>
            <button class="ghost" data-action="go" data-target="paymentConfirmed">Назад</button>
          </div>
        </div>
      </div>
    `,
  },
  calling: {
    mode: "dark",
    html: () => `
      <div class="dark-screen">
        <div class="stack">
          <section class="call-visual">
            <div>
              <div class="pulse">PG</div>
              <strong>Звонок идёт</strong>
              <p class="hint">Голосовой разбор до 60 минут</p>
            </div>
          </section>
          <section class="form-card">
            <h2>Во время звонка</h2>
            <p class="hint">Прототип имитирует завершение разговора. В реальном сценарии пользователь звонит сам, а отчёт появляется через 5–30 минут.</p>
            <div class="actions">
              <button class="secondary" data-action="go" data-target="callFinished">Завершить разговор</button>
            </div>
          </section>
        </div>
      </div>
    `,
  },
  callFinished: {
    mode: "chat",
    onEnter: () => {
      state.callDone = true;
    },
    html: () => `
      <div class="stack">
        <section class="bubble">
          <h2>Разговор завершён</h2>
          <p>Спасибо. Мы получили звонок и готовим твой отчёт. Он появится здесь, в этом боте.</p>
          <span class="message-time">22:36</span>
        </section>
        <section class="bubble">
          <h2>Статус разбора</h2>
          <ul class="status-list">
            <li>транскрипт получен</li>
            <li>собираем саммари</li>
            <li>выделяем ограничения и точки роста</li>
            <li>формируем декларацию</li>
          </ul>
          <span class="message-time">22:36</span>
          <div class="actions">
            <button class="primary" data-action="go" data-target="status">Проверить статус</button>
            <button class="primary" data-action="go" data-target="support">Служба заботы</button>
          </div>
        </section>
      </div>
    `,
  },
  status: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="bubble">
          <h2>Твой отчёт готов</h2>
          <p>Внутри: резюме разговора, главные ограничения, точки роста, рекомендации и один конкретный следующий шаг.</p>
          <span class="message-time">22:51</span>
        </section>
        <section class="report-card">
          <div class="report-top">
            <h2>Наш разбор<br />с тобой</h2>
            <span class="pdf-pill">PDF</span>
          </div>
          <dl>
            <div>
              <dt>Бизнес</dt>
              <dd>${escapeHtml(state.niche || "ниша, продукт, рынок")}</dd>
            </div>
            <div>
              <dt>Ограничение</dt>
              <dd>${escapeHtml(state.topic || "что реально стопорит рост")}</dd>
            </div>
            <div>
              <dt>Следующий шаг</dt>
              <dd>Один конкретный ход на ближайший месяц.</dd>
            </div>
          </dl>
        </section>
        <div class="actions">
          <button class="primary" data-action="go" data-target="report">Открыть PDF-отчёт</button>
          <button class="secondary" data-action="go" data-target="continue">Позвонить снова</button>
        </div>
      </div>
    `,
  },
  report: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="report-card">
          <div class="report-top">
            <h2>PDF-отчёт<br />после разбора</h2>
            <span class="pdf-pill">PDF</span>
          </div>
          <dl>
            <div>
              <dt>Резюме</dt>
              <dd>Бизнесу нужен один фокус на месяц, а не список из десяти параллельных задач.</dd>
            </div>
            <div>
              <dt>Точка роста</dt>
              <dd>Сузить оффер и довести первый канал продаж до повторяемого результата.</dd>
            </div>
            <div>
              <dt>Декларация</dt>
              <dd>За 30 дней собрать один измеримый результат и артефакт, который можно показать.</dd>
            </div>
          </dl>
        </section>
        <section class="bubble">
          <h2>Что дальше</h2>
          <p>Можно вернуться к разбору снова: рассказать, что изменилось, уточнить рекомендации или разобрать новый вопрос.</p>
          <div class="actions">
            <button class="primary" data-action="go" data-target="continue">Продолжить</button>
          </div>
        </section>
      </div>
    `,
  },
  continue: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="bubble">
          <h2>Хочешь продолжить?</h2>
          <p>Можно вернуться к разбору снова: рассказать, что изменилось, уточнить рекомендации или разобрать новый вопрос.</p>
        </section>
        <section class="bubble">
          <h2>Следующий звонок</h2>
          <p>НейроГребенюк будет учитывать предыдущий контекст и прошлый отчёт.</p>
          <div class="actions">
            <button class="primary" data-action="go" data-target="calling">Продолжить разбор</button>
            <button class="primary" data-action="go" data-target="report">Посмотреть прошлый отчёт</button>
            <button class="primary" data-action="go" data-target="formIntro">Разобрать новый вопрос</button>
          </div>
        </section>
      </div>
    `,
  },
  paymentFailed: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="bubble">
          <h2>Похоже, оплата не завершилась</h2>
          <p>Такое бывает: страница закрылась, банк отклонил платёж или оплата ещё обрабатывается.</p>
          <span class="message-time">21:48</span>
        </section>
        <section class="bubble">
          <h2>Что можно сделать</h2>
          <p>Попробуй оплатить ещё раз, выбери другой способ оплаты или напиши в поддержку.</p>
          <span class="message-time">21:48</span>
          <div class="actions">
            <button class="primary" data-action="go" data-target="paymentNotice">Попробовать снова</button>
            <button class="primary" data-action="go" data-target="support">Служба заботы</button>
          </div>
        </section>
      </div>
    `,
  },
  menu: {
    mode: "chat",
    html: () => `
      <div class="stack menu-sheet">
        <section class="bubble">
          <h2>Меню</h2>
          <p>Быстрые команды бота «Позвони Гребенюку».</p>
        </section>
        <div class="actions">
          <button class="primary" data-action="go" data-target="home">Главная /menu</button>
          <button class="primary" data-action="go" data-target="formIntro">Начать разбор /start</button>
          <button class="primary" data-action="go" data-target="paymentNotice">Оплатить доступ /pay</button>
          <button class="primary" data-action="go" data-target="status">Мой отчёт /report</button>
          <button class="primary" data-action="go" data-target="support">Служба заботы /help</button>
        </div>
      </div>
    `,
  },
  support: {
    mode: "chat",
    html: () => `
      <div class="stack">
        <section class="bubble">
          <h2>Служба заботы</h2>
          <p>В боевой версии здесь можно написать по оплате, отчёту, телефону или доступу.</p>
          <p>Email: help@neurogrebenuk.com<br />Telegram: @neuro_grebenyuk_support</p>
        </section>
        <section class="bubble">
          <h2>Популярные причины</h2>
          <ul>
            <li>Не получил отчёт</li>
            <li>Проблема с оплатой</li>
            <li>Нужно сменить номер</li>
          </ul>
          <div class="actions">
            <button class="primary" data-action="back">Назад</button>
          </div>
        </section>
      </div>
    `,
  },
};

const screenEl = document.querySelector("#screen");
const phoneEl = document.querySelector(".phone");
const sideStateEl = document.querySelector("#sideState");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function setMode(mode, url = "orders.cloudpayments.ru") {
  phoneEl.classList.toggle("dark-mode", mode === "dark");
  phoneEl.classList.toggle("web-mode", mode === "web");
  phoneEl.classList.toggle("start-mode", mode === "start");
  const webUrl = document.querySelector(".web-url");
  if (webUrl) webUrl.textContent = url;
}

function go(target, push = true) {
  if (!screens[target]) return;
  if (push && state.screen !== target) state.history.push(state.screen);
  state.screen = target;
  const current = screens[target];
  current.onEnter?.();
  setMode(current.mode, current.url);
  screenEl.innerHTML = current.html();
  screenEl.scrollTop = 0;
  updateSidePanel();
}

function back() {
  const previous = state.history.pop() || "home";
  go(previous, false);
}

function updateSidePanel() {
  document.querySelectorAll(".step-nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.target === state.screen);
  });

  const formPart = state.name
    ? `${state.name}${state.phone ? `, ${state.phone}` : ""}`
    : "форма ещё не заполнена";
  const paidPart = state.paid ? "оплата подтверждена" : "оплаты пока нет";
  const callPart = state.callDone ? "звонок завершён, отчёт доступен" : "звонка ещё не было";
  sideStateEl.textContent = `${formPart}; ${paidPart}; ${callPart}.`;
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  if (action === "go") go(button.dataset.target);
  if (action === "back") back();
  if (action === "menu") go("menu");
  if (action === "pay") {
    state.paymentMethod = button.dataset.method;
    go("paymentSuccess");
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-form='lead']");
  const emailCheckForm = event.target.closest("[data-form='email-check']");
  if (!form && !emailCheckForm) return;
  event.preventDefault();

  if (form) {
    const data = new FormData(form);
    state.name = data.get("name")?.trim() || "Гость";
    state.email = data.get("email")?.trim() || "name@example.com";
    state.phone = data.get("phone")?.trim() || "+7 (495) XXX-XX-XX";
    state.niche = data.get("niche")?.trim() || "ниша бизнеса";
    state.topic = data.get("topic")?.trim() || "главный затык";
    go("formSaved");
  }

  if (emailCheckForm) {
    const data = new FormData(emailCheckForm);
    state.email = data.get("email")?.trim() || state.email || "name@example.com";
    go("paymentConfirmed");
  }
});

go("home", false);
