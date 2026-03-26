const speakerData = {
  // 修正点3: 各データにtitle（肩書き）枠を追加
  paris: { name: "Paris", company: "ThinkingData", title: "CEO", img: "image/paris.webp", bio: "かつてテンセント・ホールディングスにてデータマイニングおよびビッグデータ分析に携わり、ゲーム業界において10年以上の実務経験を有する。現在は、データドリブンな手法を通じて業界の発展に貢献している。" },
  shiraishi: { name: "白石 陸", company: "ThinkingData", title: "Data Analyst", img: "image/shiraishi.webp", bio: "2015年から国際NGO「日本リザルツ」にて国際保健に関する政策提言活動に従事。2016年からはケニアに滞在「スナノミ症対策プロジェクト」を企画・立案・運営。帰国後2019年まで，国際協力機構にて日本企業の海外展開支援に携わる2021年，株式会社デジタルトランスフォーメーション研究所の主任研究員に就任。2022年，null株式会社を設立し、複数の中小企業の経営戦略アドバイザーを務める。2022年，シンキングデータ株式会社に日本人初で入社。データアナリストとして、ゲームアプリのデータ分析およびデータドリブンな運営を支援。執筆協力に『１冊目に読みたいDXの教科書』（SBクリエイティブ）、『ゲームデータアナリティクス』（翔泳社）などがある" },
  mino: { name: "美濃 龍之介", company: "ThinkingData", title: "Customer Success", img: "image/mino.webp", bio: "新卒でパソナグループに入社し農業を経験、その後PayPay株式会社での営業・コミューン株式会社での新規事業専任のインサイドセールス職に従事。現在はシンキングデータ株式会社で1人目のCSMとして日本国内の全ての既存のお客様を担当。ゲームアプリ領域を中心に、ThinkigEngineの活用支援を行っている。" },
  matsuura: { name: "松浦 遼", company: "株式会社バンダイナムコネクサス", title: "リードデータストラテジストデータストラテジー部 ゼネラルマネージャー", img: "image/matsuura.webp", bio: "大学卒業後、データ分析系のスタートアップ企業でゲーム分析部を率いる。複数のWWモバイルゲームAAAタイトルのアナリストを歴任し、チームビルド全般にも従事。その後、ゲーム企業へ移り分析チームを立ち上げ。2019年、株式会社バンダイナムコネクサス（当時BXD）に入社。データ戦略部を立ち上げ、グループ向けのデータ活用取組の実施や、グループ横断データ活用プロジェクト『データユニバース』の推進を担当。CEDECなど、エンターテインメント系やデータ系カンファレンスへの登壇も積極的に行う。" },
  kitamura: { name: "北村 有吾", company: "株式会社MIXI", title: "", img: "image/kitamura.webp", bio: "" },
  nakamura: { name: "中村 慶光", company: "AppMagic", title: "", img: "image/nakamura.webp", bio: "日韓専門ITコンサル企業にて韓国に4年駐在後、Playwith, Wemadeの日本支社にて15年ほど事業・運営・マーケティングに従事。3年前にアカウントマネージャー、コンサルタントとして外資系Saas企業に転職し、現在はAppMagic韓国事業部長として日本から韓国事業を開拓中。" },
  katou: { name: "加藤 雅大", company: "ワンダープラネット株式会社", title: "", img: "image/katou.webp", bio: "" },
  goda: { name: "郷田 努", company: "株式会社ビジュアルアーツ", title: "", img: "image/goda.webp", bio: "" },
  hosoda: { name: "細田 誠司", company: "TIS株式会社", title: "ビジネスイノベーション事業部ストラテジー＆デジタルコンサルティング第1部　マネージャー", img: "image/hosoda.webp", bio: "澪標アナリティクス株式会社在籍時に、月売上数億円規模の運営型タイトルのアナリストを担当し、「施策のためのデータ分析」をモットーに、会社・現場、ユーザー目線といった幅広い観点とデータを繋ぐ橋渡し役として様々な施策の意思決定に寄与。その後、複数のゲームタイトル分析をサポートし、現場の課題解決を支援。2026/4～TIS株式会社でゲーム分析の品質管理・マネジメント業務を担当。" },
  nishikata: { name: "西方 智晃", company: "株式会社リーン・ニシカタ", title: "代表取締役社長", img: "image/nishikata.webp", bio: "1974年6月28日生、静岡県富士宮市出身。株式会社ディー・エヌ・エー在籍中、ソーシャルゲーム黎明期より、 分析基盤構築の傍ら、自社サービスのログを分析し、 目まぐるしく変化するソーシャルゲームのメカニズムを探求する日々の中で、 大規模データ集計、機械学習、AIといったパラダイムシフトを実務を通じて経験。2018年、分析×マーケティングを活かしたモバイルアプリへのグロースハックフレームワークを日本に浸透させるべく株式会社リーン・ニシカタを創業。" },
  minimax: { name: "Cherie Shi", company: "MiniMax", title: "Global Business Regional Manager", img: "image/minimax.png", bio: "" }
};

const HUBSPOT_FORM_CONFIG = {
  region: "na2",
  portalId: "22367406",
  formId: "954f622e-147b-4460-b60f-8cc6bde52a23",
  target: "#hubspot-form"
};

const SOURCE_FIELD_NAME_CANDIDATES = [
  "ryuunyuupeji",
  "liuru_page",
  "liurupeji",
  "ryuunyu_page",
  "ryuunyupeji",
  "ryunyu_page",
  "ryunyupeji",
  "inflow_page",
  "page_url",
  "entry_source",
  "source",
  "lead_source"
];
const SOURCE_LABEL_TEXT = "流入ページ";
const CONSENT_CHECKBOX_ID = "privacy-consent-checkbox";
const CONSENT_ERROR_ID = "form-consent-error";
const CONSENT_REQUIRED_MESSAGE = "個人情報の取り扱いへの同意が必要です。";

function openModal(id) {
  const data = speakerData[id];
  if (!data) return;
  document.getElementById('modal-name').innerText = data.name;
  document.getElementById('modal-company').innerText = data.company;
  // 修正点3: 肩書きの反映
  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-img').src = data.img;
  document.getElementById('modal-bio').innerText = data.bio;
  document.getElementById('speaker-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('speaker-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// FAQ Accordion
document.querySelectorAll('.faq-q').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const answer = button.nextElementSibling;
    const isActive = faqItem.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
      const a = item.querySelector('.faq-a');
      if (a) a.style.display = 'none';
    });
    if (!isActive) {
      faqItem.classList.add('active');
      answer.style.display = 'block';
    }
  });
});

// Scroll Effects
const styleEl = document.createElement('style');
document.head.appendChild(styleEl);

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const triggerPoint = windowHeight * 0.6;

  // Header
  const header = document.querySelector('.glass-header');
  if (header) {
    header.style.padding = scrollY > 50 ? '8px 0' : '20px 0';
  }

  // Sticky Button
  const stickyBtn = document.getElementById('sticky-btn');
  const scheduleSection = document.getElementById('schedule');
  if (stickyBtn && scheduleSection) {
    if (scrollY > scheduleSection.offsetTop - 200) {
      stickyBtn.classList.add('show');
    } else {
      stickyBtn.classList.remove('show');
    }
  }

  // Timeline Dynamic Line
  const timeline = document.querySelector('.timeline');
  const items = document.querySelectorAll('.timeline-item');
  if (timeline) {
    const rect = timeline.getBoundingClientRect();
    let progress = 0;
    if (rect.top < triggerPoint) {
      progress = Math.min(100, Math.max(0, ((triggerPoint - rect.top) / rect.height) * 100));
    }
    styleEl.innerHTML = `.timeline::after { height: ${progress}%; }`;

    items.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < triggerPoint) item.classList.add('active');
      else item.classList.remove('active');
    });
  }
});

// Mouse Blob
const blob = document.getElementById('cursor-blob');
document.addEventListener('mousemove', (e) => {
  if (blob) {
    blob.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
  }
});

function updateSourcePageOnForm(formRoot) {
  if (!formRoot) return;
  const sourceValue = window.location.href;

  const byCandidate = SOURCE_FIELD_NAME_CANDIDATES.find((fieldName) => {
    const field = formRoot.querySelector(`[name="${fieldName}"]`);
    if (!field) return false;
    field.value = sourceValue;
    field.dispatchEvent(new Event('input', { bubbles: true }));
    field.dispatchEvent(new Event('change', { bubbles: true }));
    const fieldWrap = field.closest('.hs-form-field');
    if (fieldWrap) fieldWrap.style.display = 'none';
    return true;
  });

  if (byCandidate) return;

  const allLabels = Array.from(formRoot.querySelectorAll('label'));
  const sourceLabel = allLabels.find((label) => label.textContent && label.textContent.includes(SOURCE_LABEL_TEXT));
  if (sourceLabel) {
    const fieldWrap = sourceLabel.closest('.hs-form-field');
    const field = fieldWrap && fieldWrap.querySelector('input, select, textarea');
    if (field) {
      field.value = sourceValue;
      field.dispatchEvent(new Event('input', { bubbles: true }));
      field.dispatchEvent(new Event('change', { bubbles: true }));
      fieldWrap.style.display = 'none';
    }
  }
}

function bindConsentGuard(formRoot) {
  if (!formRoot || formRoot.dataset.consentGuardBound === '1') return;

  const consentCheckbox = document.getElementById(CONSENT_CHECKBOX_ID);
  const consentError = document.getElementById(CONSENT_ERROR_ID);
  if (!consentCheckbox) return;

  const clearError = () => {
    if (consentError) consentError.textContent = '';
  };

  formRoot.addEventListener('submit', (event) => {
    if (consentCheckbox.checked) {
      clearError();
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    if (consentError) consentError.textContent = CONSENT_REQUIRED_MESSAGE;
    consentCheckbox.focus();
  }, true);

  consentCheckbox.addEventListener('change', () => {
    if (consentCheckbox.checked) clearError();
  });

  formRoot.dataset.consentGuardBound = '1';
}

function getEmbeddedFormRoot() {
  const iframe = document.querySelector('#hubspot-form iframe');
  if (!iframe || !iframe.contentWindow || !iframe.contentWindow.document) return null;
  return iframe.contentWindow.document.querySelector('form');
}

function resolveFormRoot(formArg) {
  if (formArg && formArg[0] && formArg[0].tagName === 'FORM') return formArg[0];
  if (formArg && formArg.tagName === 'FORM') return formArg;
  return getEmbeddedFormRoot();
}

function withResolvedFormRoot(formArg, callback) {
  let attempts = 0;
  const maxAttempts = 30;

  function tryResolve() {
    const formRoot = resolveFormRoot(formArg);
    if (formRoot) {
      callback(formRoot);
      return;
    }
    if (attempts >= maxAttempts) return;
    attempts += 1;
    setTimeout(tryResolve, 120);
  }

  tryResolve();
}

function initEntryForm() {
  if (!window.hbspt || !window.hbspt.forms) return;

  window.hbspt.forms.create({
    ...HUBSPOT_FORM_CONFIG,
    onFormReady: function onFormReady($form) {
      withResolvedFormRoot($form, (formRoot) => {
        updateSourcePageOnForm(formRoot);
        bindConsentGuard(formRoot);
      });
    },
    onBeforeFormSubmit: function onBeforeFormSubmit($form) {
      const formRoot = resolveFormRoot($form);
      updateSourcePageOnForm(formRoot);
    },
    onFormSubmit: function onFormSubmit($form) {
      const formRoot = resolveFormRoot($form);
      updateSourcePageOnForm(formRoot);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEntryForm);
} else {
  initEntryForm();
}