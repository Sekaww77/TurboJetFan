document.addEventListener("DOMContentLoaded", function () {
  // Модальное окно: открытие/закрытие
  const orderBtn = document.getElementById("orderBtn");
  const orderModal = document.getElementById("orderModal");
  const confirmationModal = document.getElementById("confirmationModal");
  const closeButtons = document.querySelectorAll(".modal .close");

  if (orderBtn && orderModal) {
    orderBtn.addEventListener("click", function () {
      orderModal.style.display = "block";
    });
  }

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.parentElement.parentElement.style.display = "none";
    });
  });

  window.addEventListener("click", function (e) {
    if (e.target === orderModal) orderModal.style.display = "none";
    if (e.target === confirmationModal) confirmationModal.style.display = "none";
  });

  // Отправка формы заказа через AJAX
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(orderForm);
      fetch("sendmail.php", { method: "POST", body: formData })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          orderModal.style.display = "none";
          confirmationModal.style.display = "block";
          orderForm.reset();
        })
        .catch((err) => console.error("Ошибка:", err));
    });
  }

  // Переключение языков
  const btnRu = document.getElementById("btnRu");
  const btnEn = document.getElementById("btnEn");

  const translations = {
    ru: {
      orderBtn: "Заказать",
      homeTitle: "TurboJetFan",
      homeSlogan: "Сдувает пыль, листья и заботы одним движением",
      aboutTitle: "О продукте TurboJetFan",
      specsTitle: "Характеристика TurboJetFan",
      galleryTitle: "Галерея",
      contactsTitle: "Контакты",
      footerText: "Все права защищены.",
      orderModalTitle: "Заказ TurboJetFan",
      confirmationText:
        "Ожидайте ответ от продавца. С вами свяжутся для уточнения деталей!!!",
    },
    en: {
      orderBtn: "Order",
      homeTitle: "TurboJetFan",
      homeSlogan: "Blowing away dust, leaves, and worries with one move",
      aboutTitle: "About TurboJetFan",
      specsTitle: "Specifications",
      galleryTitle: "Gallery",
      contactsTitle: "Contacts",
      footerText: "All rights reserved.",
      orderModalTitle: "Order TurboJetFan",
      confirmationText:
        "Please wait for a response. We will contact you soon to confirm the details!!!",
    },
  };

  function setLanguage(lang) {
    document.getElementById("orderBtn").innerText = translations[lang].orderBtn;
    if (document.getElementById("homeTitle"))
      document.getElementById("homeTitle").innerText =
        translations[lang].homeTitle;
    if (document.getElementById("homeSlogan"))
      document.getElementById("homeSlogan").innerText =
        translations[lang].homeSlogan;
    if (document.getElementById("aboutTitle"))
      document.getElementById("aboutTitle").innerText =
        translations[lang].aboutTitle;
    if (document.getElementById("specsTitle"))
      document.getElementById("specsTitle").innerText =
        translations[lang].specsTitle;
    if (document.getElementById("galleryTitle"))
      document.getElementById("galleryTitle").innerText =
        translations[lang].galleryTitle;
    if (document.getElementById("contactsTitle"))
      document.getElementById("contactsTitle").innerText =
        translations[lang].contactsTitle;
    if (document.getElementById("orderModalTitle"))
      document.getElementById("orderModalTitle").innerText =
        translations[lang].orderModalTitle;
    if (document.getElementById("confirmationText"))
      document.getElementById("confirmationText").innerText =
        translations[lang].confirmationText;
    if (document.querySelector("footer p"))
      document.querySelector("footer p").innerText =
        "© 2025 TurboJetFan. " + translations[lang].footerText;
    if (lang === "ru") {
      btnRu.classList.add("active");
      btnEn.classList.remove("active");
    } else {
      btnEn.classList.add("active");
      btnRu.classList.remove("active");
    }
  }

  if (btnRu && btnEn) {
    btnRu.addEventListener("click", () => setLanguage("ru"));
    btnEn.addEventListener("click", () => setLanguage("en"));
  }

  // Устанавливаем язык по умолчанию
  setLanguage("ru");

  /* Филлер-функции для увеличения объёма кода */
  function fillerFunctionA() {
    for (let i = 0; i < 50; i++) {
      console.log("Filler A " + i);
    }
  }
  function fillerFunctionB() {
    for (let j = 0; j < 50; j++) {
      console.log("Filler B " + j);
    }
  }
  fillerFunctionA();
  fillerFunctionB();
});
