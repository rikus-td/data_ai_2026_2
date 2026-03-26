const speakerData = {
  paris: { name: "Paris", company: "ThinkingData CEO", img: "image/paris.webp", bio: "ThinkingData創設者。1500社以上の分析手法を熟知し、AI時代を切り拓くビジョナリー。" },
  shiraishi: { name: "白石 陸", company: "ThinkingAI Data Analyst", img: "image/shiraishi.webp", bio: "2022年から現職。執筆協力に『1冊目に読みたい DXの教科書』など。" },
  mino: { name: "美濃 龍之介", company: "ThinkingAI Customer Success", img: "image/mino.webp", bio: "シンキングデータ株式会社で1人目のCSMとして日本国内の全てのお客様を担当。" },
  matsuura: { name: "松浦 遼", company: "株式会社バンダイナムコネクサス", img: "image/matsuura.webp", bio: "データ戦略部を立ち上げ、グループ横断データ活用プロジェクトを推進。" },
  kitamura: { name: "北村 有吾", company: "株式会社MIXI", img: "image/kitamura.webp", bio: "MIXIのグローバル展開をデータ面から支えるスペシャリスト。" },
  nakamura: { name: "中村 慶光", company: "AppMagic", img: "image/nakamura.webp", bio: "現在はAppMagic韓国事業部長として日本から韓国事業を開拓中。" },
  katou: { name: "加藤 雅大", company: "ワンダープラネット株式会社", img: "image/katou.webp", bio: "プロダクトへのAI実装を技術・組織の両面からリード。" },
  goda: { name: "郷田 努", company: "株式会社ビジュアルアーツ", img: "image/goda.webp", bio: "クリエイティブとAIの融合を追求し、効率化を探求している。" },
  hosoda: { name: "細田 誠司", company: "澪標アナリティクス", img: "image/hosoda.webp", bio: "2026/4～TIS株式会社でマネジメント業務を担当。" },
  nishikata: { name: "西方 智晃", company: "株式会社リーン-ニシカタ", img: "image/nishikata.webp", bio: "DeNA等を経て創業。モバイルアプリへのグロースハックを日本に浸透させる。" },
  minimax: { name: "MiniMax 登壇者", company: "MiniMax", img: "image/minimax.png", bio: "中国発、世界をリードする大規模言語モデル（LLM）とAIエージェントの開発チーム。" }
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
