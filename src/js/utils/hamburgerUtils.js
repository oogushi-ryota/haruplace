// ▼ハンバーガーメニュー
export function initHamburgerMenu({
  navSelector = ".js-nav",
  btnSelector = ".js-nav-btn",
  extraTargets = [],
} = {}) {
  const navEls = document.querySelectorAll(navSelector);
  const btnEls = document.querySelectorAll(btnSelector);
  const body = document.body;
  const extraEls = extraTargets.flatMap(sel => Array.from(document.querySelectorAll(sel)));

  function toggleMenu(isOpen) {
    const method = isOpen ? "add" : "remove";

    navEls.forEach(nav => nav.classList[method]("is-active"));
    btnEls.forEach(btn => btn.classList[method]("is-active"));
    body.classList[method]("is-active");
    extraEls.forEach(el => el.classList[method]("is-active"));
  }

  // ハンバーガーボタンクリック
  btnEls.forEach(btn => {
    btn.addEventListener("click", () => {
      const isOpening = ![...navEls].some(nav => nav.classList.contains("is-active"));
      toggleMenu(isOpening);
    });
  });

  // メニュー内のリンククリックで閉じる
  navEls.forEach(nav => {
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        toggleMenu(false);
      }
    });
  });
}
// ▲ハンバーガーメニュー
