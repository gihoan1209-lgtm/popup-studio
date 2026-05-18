const templates = {
  migration: {
    badgeText: "NEW SITE OPEN",
    titleText: "사이트 이전 안내",
    bodyText: "더 나은 서비스 제공을 위해\n새로운 사이트로 이전합니다.\n자세한 사항은 공지사항으로\n확인 부탁드리겠습니다.",
    noteText: "※ 자세한 내용은 공지사항 및 고객센터를 확인해주세요.",
    primaryButton: "새 사이트 바로가기",
    infoItems: [
      { label: "병행 운영기간", value: "2026.05.18~31" },
      { label: "기존 사이트 종료", value: "2026.05.31" },
      { label: "신규사이트 운영일", value: "2026.06.01" },
    ],
    cardBgColor: "#080b13",
    panelBgColor: "#151126",
    accentColor: "#2ca381",
    secondaryColor: "#2348c4",
    titleColor: "#d9ccff",
    bodyColor: "#ffffff",
    itemLabelColor: "#c9c4d6",
    itemValueColor: "#ffffff",
    cardWidth: "86",
    cardHeight: "86",
    cardRadius: "22",
    cardPadding: "40",
    titleSize: "48",
    bodySize: "20",
    itemSize: "20",
    imageSize: "160",
    imageZoom: "100",
    imageOffsetX: "0",
    imageOffsetY: "0",
    imageRadius: "50",
    contentAlign: "center",
    itemAlign: "left",
    showBadge: true,
    showBody: true,
    showItems: true,
    showNote: true,
    showButton: true,
    showImage: false,
    calendarStart: "2026-09-26",
    calendarWeeks: "2",
    productImage: "",
    exportWidth: "350",
    exportHeight: "350",
  },
  holidayCalendar: {
    badgeText: "휴무일 공지",
    titleText: "추석 휴무일정",
    bodyText: "",
    noteText: "",
    primaryButton: "",
    infoItems: [
      { label: "택배사 휴무", value: "9/26~10/3", startDate: "2026-09-26", endDate: "2026-10-03", calendarText: "택배사 휴무" },
      { label: "고객센터 휴무", value: "9/27~10/2", startDate: "2026-09-27", endDate: "2026-10-02", calendarText: "고객센터 휴무" },
    ],
    cardBgColor: "#efefef",
    panelBgColor: "#ffffff",
    accentColor: "#ff62ba",
    secondaryColor: "#111111",
    titleColor: "#111111",
    bodyColor: "#111111",
    itemLabelColor: "#111111",
    itemValueColor: "#111111",
    cardWidth: "96",
    cardHeight: "96",
    cardRadius: "0",
    cardPadding: "18",
    titleSize: "34",
    bodySize: "16",
    itemSize: "18",
    imageSize: "160",
    imageZoom: "100",
    imageOffsetX: "0",
    imageOffsetY: "0",
    imageRadius: "50",
    contentAlign: "center",
    itemAlign: "center",
    showBadge: true,
    showBody: false,
    showItems: true,
    showNote: false,
    showButton: false,
    showImage: false,
    calendarStart: "2026-09-26",
    calendarWeeks: "2",
    productImage: "",
    exportWidth: "350",
    exportHeight: "350",
  },
  detailChange: {
    badgeText: "상세페이지 변경 안내",
    titleText: "0000 이미지 변경",
    bodyText: "상품번호 000",
    noteText: "",
    primaryButton: "내용 확인하기",
    infoItems: [],
    cardBgColor: "#000000",
    panelBgColor: "#111111",
    accentColor: "#ffffff",
    secondaryColor: "#555555",
    titleColor: "#ffffff",
    bodyColor: "#8f8f8f",
    itemLabelColor: "#ffffff",
    itemValueColor: "#ffffff",
    cardWidth: "90",
    cardHeight: "90",
    cardRadius: "0",
    cardPadding: "42",
    titleSize: "28",
    bodySize: "18",
    itemSize: "18",
    imageSize: "160",
    imageZoom: "100",
    imageOffsetX: "0",
    imageOffsetY: "0",
    imageRadius: "50",
    contentAlign: "center",
    itemAlign: "center",
    showBadge: true,
    showBody: true,
    showItems: false,
    showNote: false,
    showButton: true,
    showImage: false,
    calendarStart: "2026-09-26",
    calendarWeeks: "1",
    productImage: "",
    exportWidth: "350",
    exportHeight: "350",
  },
  productStop: {
    badgeText: "긴급 판매중단 공지",
    titleText: "",
    bodyText: "디자인권 이슈로 인해 판매 중지",
    noteText: "해당 제품은 현재 판매가 중지되었습니다.\n이용에 불편을 드려 죄송합니다.",
    primaryButton: "",
    infoItems: [],
    cardBgColor: "#1e3265",
    panelBgColor: "#1e3265",
    accentColor: "#ff334f",
    secondaryColor: "#ffffff",
    titleColor: "#ffffff",
    bodyColor: "#ffffff",
    itemLabelColor: "#ffffff",
    itemValueColor: "#ffffff",
    cardWidth: "96",
    cardHeight: "96",
    cardRadius: "0",
    cardPadding: "24",
    titleSize: "28",
    bodySize: "17",
    itemSize: "18",
    imageSize: "170",
    imageZoom: "100",
    imageOffsetX: "0",
    imageOffsetY: "0",
    imageRadius: "50",
    contentAlign: "center",
    itemAlign: "center",
    showBadge: true,
    showBody: true,
    showItems: false,
    showNote: true,
    showButton: false,
    showImage: true,
    calendarStart: "2026-09-26",
    calendarWeeks: "1",
    productImage: "",
    exportWidth: "350",
    exportHeight: "350",
  },
  holidayList: {
    badgeText: "",
    titleText: "0월 휴무일 안내",
    bodyText: "",
    noteText: "※휴무일에는 고객센터가 운영되지 않으니\n이용에 참고부탁드립니다.",
    primaryButton: "",
    infoItems: [
      { label: "5/1(목), 5/5~6 (월~화)", value: "전체휴무" },
      { label: "5/2(금)", value: "정상운영" },
      { label: "5/7일(수)", value: "업무재개" },
    ],
    cardBgColor: "#655bd3",
    panelBgColor: "#ffffff",
    accentColor: "#ef3b4f",
    secondaryColor: "#ffffff",
    titleColor: "#ffffff",
    bodyColor: "#ffffff",
    itemLabelColor: "#111111",
    itemValueColor: "#ef3b4f",
    cardWidth: "96",
    cardHeight: "96",
    cardRadius: "0",
    cardPadding: "34",
    titleSize: "36",
    bodySize: "17",
    itemSize: "21",
    imageSize: "160",
    imageZoom: "100",
    imageOffsetX: "0",
    imageOffsetY: "0",
    imageRadius: "50",
    contentAlign: "center",
    itemAlign: "left",
    showBadge: false,
    showBody: false,
    showItems: true,
    showNote: true,
    showButton: false,
    showImage: false,
    calendarStart: "2026-05-01",
    calendarWeeks: "1",
    productImage: "",
    exportWidth: "350",
    exportHeight: "350",
  },
};

const fields = [
  "templateType",
  "badgeText",
  "titleText",
  "bodyText",
  "noteText",
  "primaryButton",
  "calendarStart",
  "calendarWeeks",
  "cardBgColor",
  "panelBgColor",
  "accentColor",
  "secondaryColor",
  "titleColor",
  "bodyColor",
  "itemLabelColor",
  "itemValueColor",
  "cardWidth",
  "cardHeight",
  "cardRadius",
  "cardPadding",
  "titleSize",
  "bodySize",
  "itemSize",
  "imageSize",
  "imageZoom",
  "imageOffsetX",
  "imageOffsetY",
  "imageRadius",
  "contentAlign",
  "itemAlign",
  "showBadge",
  "showBody",
  "showItems",
  "showNote",
  "showButton",
  "showImage",
  "exportWidth",
  "exportHeight",
];

const storageKey = "popup-studio-template-state-v3";
let state = { templateType: "migration", ...templates.migration };

const $ = (id) => document.getElementById(id);
const card = $("popupCard");
const infoItemEditor = $("infoItemEditor");
const itemColorEditor = $("itemColorEditor");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function withTemplateDefaults(nextState) {
  const templateType = nextState.templateType || "migration";
  const template = templates[templateType] || templates.migration;
  const merged = { templateType, ...clone(template), ...nextState };
  merged.infoItems = normalizeInfoItems(merged);
  return merged;
}

function inputValue(input) {
  return input.type === "checkbox" ? input.checked : input.value;
}

function setInputValue(input, value) {
  if (!input) return;
  if (input.type === "checkbox") {
    input.checked = Boolean(value);
  } else {
    input.value = value ?? "";
  }
}

function applyVariables() {
  const vars = {
    "--accent": state.accentColor,
    "--secondary": state.secondaryColor,
    "--card-bg": state.cardBgColor,
    "--panel-bg": state.panelBgColor,
    "--title-color": state.titleColor,
    "--body-color": state.bodyColor,
    "--item-label-color": state.itemLabelColor,
    "--item-value-color": state.itemValueColor,
    "--card-width": `${state.cardWidth}%`,
    "--card-height": `${state.cardHeight}%`,
    "--card-radius": `${state.cardRadius}px`,
    "--card-padding": `${state.cardPadding}px`,
    "--title-size": `${state.titleSize}px`,
    "--body-size": `${state.bodySize}px`,
    "--item-size": `${state.itemSize}px`,
    "--image-size": `${state.imageSize}px`,
    "--image-zoom": Number(state.imageZoom || 100) / 100,
    "--image-offset-x": `${state.imageOffsetX || 0}%`,
    "--image-offset-y": `${state.imageOffsetY || 0}%`,
    "--image-radius": `${state.imageRadius || 50}%`,
  };
  Object.entries(vars).forEach(([key, value]) => document.documentElement.style.setProperty(key, String(value)));
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function visibleItems() {
  return state.infoItems.filter((item) => item.label.trim() || item.value.trim());
}

function normalizeInfoItems(nextState) {
  const items = Array.isArray(nextState.infoItems) ? nextState.infoItems : [];
  return items.map((item) => {
    const normalized = {
      label: item.label || "",
      value: item.value || "",
      color: item.color || "",
      valueColor: item.valueColor || "",
      labelSize: item.labelSize || "",
      valueSize: item.valueSize || "",
      calendarSize: item.calendarSize || "",
      startDate: item.startDate || "",
      endDate: item.endDate || "",
      calendarText: item.calendarText || "",
    };

    if (nextState.templateType === "holidayCalendar" && (!normalized.startDate || !normalized.endDate)) {
      const range = rangeFromText(`${normalized.label} ${normalized.value}`, nextState.calendarStart);
      if (range) {
        normalized.startDate ||= dateInputValue(range.from);
        normalized.endDate ||= dateInputValue(range.to);
      }
    }

    if (nextState.templateType === "holidayCalendar") {
      normalized.value = normalized.value || formatDateRange(normalized.startDate, normalized.endDate);
      normalized.calendarText = normalized.calendarText || normalized.label;
    }

    return normalized;
  });
}

function safeColor(value, fallback) {
  return /^#[0-9a-fA-F]{6}$/.test(String(value || "")) ? value : fallback;
}

function itemLabelColor(item) {
  return safeColor(item.color, state.itemLabelColor);
}

function itemContentColor(item) {
  return safeColor(item.valueColor, state.itemValueColor);
}

function safeSize(value, fallback) {
  const size = Number(value);
  return Number.isFinite(size) && size >= 6 && size <= 80 ? size : Number(fallback);
}

function itemLabelSize(item) {
  return safeSize(item.labelSize, state.itemSize);
}

function itemContentSize(item) {
  return safeSize(item.valueSize, state.itemSize);
}

function itemCalendarSize(item) {
  return safeSize(item.calendarSize, Math.max(7, Math.round(Number(state.itemSize) * 0.48)));
}

function parseMonthDayToken(value) {
  const match = String(value || "").match(/(\d{1,2})[/.](\d{1,2})/);
  if (!match) return null;
  return { month: Number(match[1]), day: Number(match[2]) };
}

function dateFromMonthDay(token, baseYear, startMonth) {
  let year = baseYear;
  if (token.month < startMonth - 6) year += 1;
  if (token.month > startMonth + 6) year -= 1;
  return new Date(year, token.month - 1, token.day);
}

function dateInputValue(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function dateLabel(value) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "";
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function formatDateRange(startDate, endDate) {
  const start = dateLabel(startDate);
  const end = dateLabel(endDate);
  if (!start && !end) return "";
  if (!end || start === end) return start;
  return `${start}~${end}`;
}

function rangeFromText(source, calendarStart) {
  const start = new Date(`${calendarStart}T00:00:00`);
  if (Number.isNaN(start.getTime())) return null;
  const baseYear = start.getFullYear();
  const startMonth = start.getMonth() + 1;
  const tokens = [...String(source || "").matchAll(/(\d{1,2})[/.](\d{1,2})/g)]
    .map((match) => parseMonthDayToken(match[0]))
    .filter(Boolean);
  if (tokens.length === 0) return null;

  const from = dateFromMonthDay(tokens[0], baseYear, startMonth);
  const to = dateFromMonthDay(tokens[1] || tokens[0], baseYear, startMonth);
  if (to < from) to.setFullYear(to.getFullYear() + 1);
  return { from, to };
}

function holidayRanges(start) {
  return visibleItems()
    .map((item) => {
      let from = new Date(`${item.startDate}T00:00:00`);
      let to = new Date(`${(item.endDate || item.startDate)}T00:00:00`);
      if (Number.isNaN(from.getTime())) {
        const parsed = rangeFromText(`${item.label} ${item.value}`, dateInputValue(start));
        if (!parsed) return null;
        from = parsed.from;
        to = parsed.to;
      }
      if (Number.isNaN(to.getTime())) to = new Date(from);
      if (to < from) to.setFullYear(to.getFullYear() + 1);

      return {
        label: (item.calendarText || item.label || item.value).trim(),
        color: itemLabelColor(item),
        valueColor: itemContentColor(item),
        size: itemCalendarSize(item),
        from,
        to,
      };
    })
    .filter(Boolean);
}

function sameOrBetween(date, from, to) {
  const value = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  return value >= from.getTime() && value <= to.getTime();
}

function renderInfoEditor() {
  infoItemEditor.innerHTML = "";
  state.infoItems.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = state.templateType === "holidayCalendar" ? "item-edit-row calendar-item-row" : "item-edit-row";
    row.innerHTML =
      state.templateType === "holidayCalendar"
        ? `
          <div class="calendar-item-head">
            <input type="text" placeholder="항목 제목" value="${escapeHtml(item.label)}" data-info-field="label" data-index="${index}" />
            <button type="button" aria-label="삭제" data-remove-index="${index}">×</button>
          </div>
          <div class="calendar-date-grid">
            <label>
              시작일
              <input type="date" value="${escapeHtml(item.startDate || "")}" data-info-field="startDate" data-index="${index}" />
            </label>
            <label>
              종료일
              <input type="date" value="${escapeHtml(item.endDate || item.startDate || "")}" data-info-field="endDate" data-index="${index}" />
            </label>
          </div>
          <input type="text" placeholder="날짜칸 문구" value="${escapeHtml(item.calendarText || item.label)}" data-info-field="calendarText" data-index="${index}" />
          <div class="date-range-preview">하단 표시: ${escapeHtml(formatDateRange(item.startDate, item.endDate))}</div>
        `
        : `
          <input type="text" placeholder="항목 제목" value="${escapeHtml(item.label)}" data-info-field="label" data-index="${index}" />
          <input type="text" placeholder="항목 내용" value="${escapeHtml(item.value)}" data-info-field="value" data-index="${index}" />
          <button type="button" aria-label="삭제" data-remove-index="${index}">×</button>
        `;
    infoItemEditor.append(row);
  });
}

function renderItemColorEditor() {
  if (!itemColorEditor) return;
  itemColorEditor.innerHTML = "";
  if (state.infoItems.length === 0) {
    itemColorEditor.innerHTML = `<p class="empty-hint">항목을 추가하면 색상을 따로 지정할 수 있습니다.</p>`;
    return;
  }

  state.infoItems.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "item-color-row";
    const name = item.label.trim() || `항목 ${index + 1}`;
    row.innerHTML = `
      <span>${escapeHtml(name)}</span>
      <label>
        항목 색
        <input type="color" value="${itemLabelColor(item)}" data-item-color-field="color" data-index="${index}" />
      </label>
      <label>
        내용 색
        <input type="color" value="${itemContentColor(item)}" data-item-color-field="valueColor" data-index="${index}" />
      </label>
      <label>
        항목 크기
        <input type="number" min="6" max="80" value="${itemLabelSize(item)}" data-item-color-field="labelSize" data-index="${index}" />
      </label>
      <label>
        내용 크기
        <input type="number" min="6" max="80" value="${itemContentSize(item)}" data-item-color-field="valueSize" data-index="${index}" />
      </label>
      ${
        state.templateType === "holidayCalendar"
          ? `<label>
              날짜칸 크기
              <input type="number" min="6" max="32" value="${itemCalendarSize(item)}" data-item-color-field="calendarSize" data-index="${index}" />
            </label>`
          : ""
      }
    `;
    itemColorEditor.append(row);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function textBlock(className, text) {
  if (!text) return "";
  return `<p class="${className}">${escapeHtml(text)}</p>`;
}

function badge() {
  return state.showBadge && state.badgeText ? `<div class="badge">${escapeHtml(state.badgeText)}</div>` : "";
}

function title() {
  return state.titleText ? `<h2 class="template-title">${escapeHtml(state.titleText)}</h2>` : "";
}

function body() {
  return state.showBody ? textBlock("body-copy", state.bodyText) : "";
}

function note() {
  return state.showNote ? textBlock("note", state.noteText) : "";
}

function button() {
  return state.showButton && state.primaryButton ? `<button class="cta" type="button">${escapeHtml(state.primaryButton)}</button>` : "";
}

function infoList(extraClass = "") {
  const items = visibleItems();
  if (!state.showItems || items.length === 0) return "";
  const rows = items
    .map(
      (item) => `
        <div class="info-row">
          <strong style="color:${itemLabelColor(item)};font-size:${itemLabelSize(item)}px">${escapeHtml(item.label)}</strong>
          <span class="divider"></span>
          <b style="color:${itemContentColor(item)};font-size:${itemContentSize(item)}px">${escapeHtml(item.value)}</b>
        </div>
      `
    )
    .join("");
  return `<div class="info-list ${state.itemAlign === "center" ? "item-center" : ""} ${extraClass}">${rows}</div>`;
}

function calendar() {
  const start = new Date(`${state.calendarStart}T00:00:00`);
  const weeks = Number(state.calendarWeeks);
  const dayNames = ["월", "화", "수", "목", "금", "토", "일"];
  const ranges = holidayRanges(start);
  const cells = Array.from({ length: weeks * 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const events = ranges.filter((range) => sameOrBetween(date, range.from, range.to));
    const eventHtml = events.length
      ? `<div class="day-events">${events.map((event) => `<span style="background:${event.color};color:${event.valueColor};font-size:${event.size}px">${escapeHtml(event.label)}</span>`).join("")}</div>`
      : "";
    return `<div class="day-cell ${events.length ? "marked" : ""}"><strong>${date.getDate()}</strong>${eventHtml}</div>`;
  }).join("");
  return `
    <div class="calendar">
      <div class="calendar-head">${dayNames.map((day) => `<span>${day}</span>`).join("")}</div>
      <div class="calendar-grid">${cells}</div>
    </div>
  `;
}

function legendList() {
  if (!state.showItems) return "";
  return `<div class="legend-list">${visibleItems()
    .map((item) => `<div class="legend-row"><strong style="background:${itemLabelColor(item)};font-size:${itemLabelSize(item)}px">${escapeHtml(item.label)}</strong><b style="color:${itemContentColor(item)};font-size:${itemContentSize(item)}px">${escapeHtml(item.value || formatDateRange(item.startDate, item.endDate))}</b></div>`)
    .join("")}</div>`;
}

function productImage() {
  if (!state.showImage) return "";
  if (state.productImage) {
    return `
      <div class="product-image-frame">
        <img class="product-image" src="${state.productImage}" alt="상품 이미지" />
      </div>
    `;
  }
  return `<div class="image-placeholder">이미지</div>`;
}

function renderCard() {
  applyVariables();
  card.className = `popup-card ${state.contentAlign === "left" ? "align-left" : ""}`;

  if (state.templateType === "holidayCalendar") {
    card.classList.add("holiday-card");
    card.innerHTML = `${badge()}${title()}${calendar()}${legendList()}${note()}`;
    return;
  }

  if (state.templateType === "detailChange") {
    card.classList.add("detail-card");
    card.innerHTML = `${badge()}${body()}${title()}${button()}${note()}`;
    return;
  }

  if (state.templateType === "productStop") {
    card.classList.add("product-stop-card");
    card.innerHTML = `${badge()}${title()}${productImage()}${body()}${note()}${button()}`;
    return;
  }

  if (state.templateType === "holidayList") {
    card.classList.add("holiday-list-card");
    card.innerHTML = `${badge()}${title()}${body()}<div class="holiday-list-box">${infoList()}</div>${note()}${button()}`;
    return;
  }

  card.innerHTML = `${badge()}${title()}<div class="rule"></div>${body()}${infoList()}${note()}${button()}`;
}

function renderControls() {
  fields.forEach((id) => setInputValue($(id), state[id]));
  document.querySelectorAll("[data-template-tools]").forEach((node) => {
    node.classList.toggle("hidden", node.dataset.templateTools !== state.templateType);
  });
  renderInfoEditor();
  renderItemColorEditor();
  renderCard();
}

function switchTemplate(templateType) {
  state = { templateType, ...clone(templates[templateType]) };
  saveState();
  renderControls();
}

function fitCanvasToSize(sourceCanvas, targetWidth = 350, targetHeight = 350) {
  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext("2d");
  const ratio = Math.min(targetWidth / sourceCanvas.width, targetHeight / sourceCanvas.height);
  const width = Math.round(sourceCanvas.width * ratio);
  const height = Math.round(sourceCanvas.height * ratio);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(sourceCanvas, Math.round((targetWidth - width) / 2), Math.round((targetHeight - height) / 2), width, height);
  return canvas;
}

function downloadCanvas(canvas, filename) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  document.body.append(link);
  link.click();
  link.remove();
}

async function downloadPng() {
  if (!window.html2canvas) {
    alert("PNG 저장 모듈을 불러오지 못했습니다. 새로고침 후 다시 시도해주세요.");
    return;
  }

  try {
    document.body.classList.add("exporting-png");
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const canvas = await html2canvas(card, {
      backgroundColor: null,
      scale: 2,
      logging: false,
      useCORS: true,
    });
    const exportWidth = Math.max(100, Math.min(3000, Number(state.exportWidth) || 350));
    const exportHeight = Math.max(100, Math.min(3000, Number(state.exportHeight) || 350));
    downloadCanvas(fitCanvasToSize(canvas, exportWidth, exportHeight), `popup-${Date.now()}.png`);
  } catch (error) {
    alert(`PNG 저장에 실패했습니다: ${error && error.message ? error.message : error}`);
  } finally {
    document.body.classList.remove("exporting-png");
  }
}

fields.forEach((id) => {
  $(id).addEventListener("input", (event) => {
    if (id === "templateType") {
      switchTemplate(event.target.value);
      return;
    }
    state[id] = inputValue(event.target);
    saveState();
    renderCard();
  });
});

infoItemEditor.addEventListener("input", (event) => {
  const index = Number(event.target.dataset.index);
  const field = event.target.dataset.infoField;
  if (!Number.isNaN(index) && field) {
    state.infoItems[index][field] = event.target.value;
    if (state.templateType === "holidayCalendar") {
      const item = state.infoItems[index];
      if (field === "label" && !item.calendarText) item.calendarText = event.target.value;
      item.value = formatDateRange(item.startDate, item.endDate);
    }
    saveState();
    if (state.templateType === "holidayCalendar" && ["startDate", "endDate"].includes(field)) renderInfoEditor();
    renderItemColorEditor();
    renderCard();
  }
});

itemColorEditor.addEventListener("input", (event) => {
  const index = Number(event.target.dataset.index);
  const field = event.target.dataset.itemColorField;
  if (!Number.isNaN(index) && field) {
    state.infoItems[index][field] = event.target.value;
    saveState();
    renderCard();
  }
});

infoItemEditor.addEventListener("click", (event) => {
  const index = Number(event.target.dataset.removeIndex);
  if (!Number.isNaN(index)) {
    state.infoItems.splice(index, 1);
    renderInfoEditor();
    renderItemColorEditor();
    saveState();
    renderCard();
  }
});

$("addInfoItemButton").addEventListener("click", () => {
  const nextItem =
    state.templateType === "holidayCalendar"
      ? { label: "", value: "", startDate: state.calendarStart, endDate: state.calendarStart, calendarText: "", color: "", valueColor: "" }
      : { label: "", value: "", color: "", valueColor: "" };
  state.infoItems.push(nextItem);
  renderInfoEditor();
  renderItemColorEditor();
  saveState();
});

$("productImageInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.productImage = reader.result;
    saveState();
    renderCard();
  };
  reader.readAsDataURL(file);
});

$("clearImageButton").addEventListener("click", () => {
  state.productImage = "";
  $("productImageInput").value = "";
  saveState();
  renderCard();
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`[data-panel='${button.dataset.tab}']`).classList.add("active");
  });
});

document.querySelectorAll("[data-toggle-section]").forEach((button) => {
  button.addEventListener("click", () => {
    const section = document.querySelector(`[data-editor-section='${button.dataset.toggleSection}']`);
    if (!section) return;
    const columns = section.closest(".editor-columns");
    const collapsed = section.classList.toggle("collapsed");
    if (columns) columns.classList.toggle(`${button.dataset.toggleSection}-collapsed`, collapsed);
    button.textContent = collapsed ? "펼치기 >>" : "<< 접기";
  });
});

$("resetButton").addEventListener("click", () => switchTemplate(state.templateType));
$("downloadButton").addEventListener("click", downloadPng);
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("copy", (event) => event.preventDefault());

const saved = localStorage.getItem(storageKey);
if (saved) state = withTemplateDefaults({ ...state, ...JSON.parse(saved) });
renderControls();
