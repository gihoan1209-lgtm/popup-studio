const defaults = {
  badgeText: "NEW SITE OPEN",
  titleText: "사이트 이전 안내",
  bodyText: "더 나은 서비스 제공을 위해\n새로운 사이트로 이전합니다.\n자세한 사항은 공지사항으로\n확인 부탁드리겠습니다.",
  infoItems: [
    { label: "🚨 이전일정", value: "2026.05.26" },
    { label: "🔚 기존 사이트 종료", value: "2026.05.22" },
    { label: "", value: "" },
  ],
  noteText: "※ 자세한 내용은 공지사항 및 고객센터를 확인해주세요.",
  primaryButton: "새 사이트 바로가기",
  themeStyle: "neon",
  accentColor: "#8f49ff",
  blueColor: "#2367ff",
  titleColor: "#d9ccff",
  bodyColor: "#ffffff",
  infoLabelColor: "#c9c4d6",
  infoValueColor: "#ffffff",
  noteColor: "#c5c0cc",
  buttonTextColor: "#ffffff",
  badgeColor: "#d9ccff",
  popupWidth: "73",
  popupRadius: "22",
  popupPadding: "58",
  backdropRange: "42",
  cardOpacity: "88",
  titleSize: "76",
  bodySize: "25",
  infoSize: "23",
  buttonRadius: "10",
  contentAlign: "center",
  bodyAlign: "center",
  infoAlign: "left",
  showIcon: true,
  showInfo: true,
};

const storageKey = "popup-studio-state-v4";
const fields = [
  "badgeText",
  "titleText",
  "bodyText",
  "noteText",
  "primaryButton",
  "themeStyle",
  "accentColor",
  "blueColor",
  "titleColor",
  "bodyColor",
  "infoLabelColor",
  "infoValueColor",
  "noteColor",
  "buttonTextColor",
  "badgeColor",
  "popupWidth",
  "popupRadius",
  "popupPadding",
  "backdropRange",
  "cardOpacity",
  "titleSize",
  "bodySize",
  "infoSize",
  "buttonRadius",
  "contentAlign",
  "bodyAlign",
  "infoAlign",
  "showIcon",
  "showInfo",
];
const textFields = ["badgeText", "titleText", "bodyText", "noteText", "primaryButton"];
const root = document.documentElement;
const stage = document.getElementById("exportStage");
const infoItemEditor = document.getElementById("infoItemEditor");
const infoBox = document.getElementById("infoBox");
let infoItems = defaults.infoItems.map((item) => ({ ...item }));

const themeColors = {
  neon: ["#8f49ff", "#2367ff"],
  gold: ["#d89c3f", "#ffcf69"],
  clean: ["#2563eb", "#0f9f8f"],
  midnight: ["#34d399", "#60a5fa"],
};

const cssVariableFields = {
  accentColor: ["--accent", (value) => value],
  blueColor: ["--blue", (value) => value],
  titleColor: ["--title-color", (value) => value],
  bodyColor: ["--body-color", (value) => value],
  infoLabelColor: ["--info-label-color", (value) => value],
  infoValueColor: ["--info-value-color", (value) => value],
  noteColor: ["--note-color", (value) => value],
  buttonTextColor: ["--button-text-color", (value) => value],
  badgeColor: ["--badge-color", (value) => value],
  popupWidth: ["--card-width", (value) => `${value}%`],
  popupRadius: ["--card-radius", (value) => `${value}px`],
  popupPadding: ["--card-padding", (value) => `${value}px`],
  backdropRange: ["--backdrop", (value) => `${value}%`],
  cardOpacity: ["--card-opacity", (value) => value / 100],
  titleSize: ["--title-size", (value) => `${value}px`],
  bodySize: ["--body-size", (value) => `${value}px`],
  infoSize: ["--info-size", (value) => `${value}px`],
  buttonRadius: ["--button-radius", (value) => `${value}px`],
};

function inputValue(input) {
  return input.type === "checkbox" ? input.checked : input.value;
}

function setInputValue(input, value) {
  if (!input) return;
  if (input.type === "checkbox") {
    input.checked = Boolean(value);
    return;
  }
  input.value = value;
}

function visibleInfoItems() {
  return infoItems.filter((item) => item.label.trim() || item.value.trim());
}

function renderInfoEditor() {
  infoItemEditor.innerHTML = "";
  infoItems.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "info-edit-row";
    row.innerHTML = `
      <input type="text" aria-label="항목 제목" placeholder="항목 제목" value="${escapeHtml(item.label)}" data-info-field="label" data-index="${index}" />
      <input type="text" aria-label="항목 내용" placeholder="항목 내용" value="${escapeHtml(item.value)}" data-info-field="value" data-index="${index}" />
      <button type="button" aria-label="항목 삭제" data-remove-index="${index}">×</button>
    `;
    infoItemEditor.append(row);
  });
}

function renderInfoPreview() {
  const rows = visibleInfoItems();
  infoBox.innerHTML = "";
  infoBox.classList.toggle("empty", rows.length === 0);

  rows.forEach((item) => {
    const row = document.createElement("div");
    row.className = "info-row";
    row.innerHTML = `
      <strong></strong>
      <span class="divider"></span>
      <b></b>
    `;
    row.querySelector("strong").textContent = item.label;
    row.querySelector("b").textContent = item.value;
    infoBox.append(row);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function fitTitle() {
  const title = document.querySelector("[data-bind='titleText']");
  title.style.fontSize = "";
  const maxWidth = title.parentElement.clientWidth;
  let size = parseFloat(getComputedStyle(title).fontSize);

  while (title.scrollWidth > maxWidth && size > 38) {
    size -= 2;
    title.style.fontSize = `${size}px`;
  }
}

function applyValue(id, value) {
  if (textFields.includes(id)) {
    document.querySelectorAll(`[data-bind='${id}']`).forEach((node) => {
      node.textContent = value;
    });
  }

  if (cssVariableFields[id]) {
    root.style.setProperty(cssVariableFields[id][0], cssVariableFields[id][1](value));
  }

  if (id === "themeStyle") {
    stage.classList.remove("theme-neon", "theme-gold", "theme-clean", "theme-midnight");
    stage.classList.add(`theme-${value}`);
  }

  if (id === "contentAlign") {
    stage.classList.toggle("align-left", value === "left");
  }

  if (id === "bodyAlign") {
    stage.classList.toggle("body-center", value === "center");
  }

  if (id === "infoAlign") {
    stage.classList.toggle("info-center", value === "center");
  }

  if (id === "showIcon") {
    stage.classList.toggle("hide-icon", !value);
  }

  if (id === "showInfo") {
    stage.classList.toggle("hide-info", !value);
  }

  if (["titleText", "titleSize", "popupWidth", "popupPadding"].includes(id)) {
    requestAnimationFrame(fitTitle);
  }
}

function getState() {
  return {
    ...Object.fromEntries(fields.map((id) => [id, inputValue(document.getElementById(id))])),
    infoItems: infoItems.map((item) => ({ ...item })),
  };
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(getState()));
}

function migrateState(state) {
  if (Array.isArray(state.infoItems)) return state;
  return {
    ...state,
    infoItems: [
      { label: state.infoLabelOne || "이전 일정", value: state.dateOne || "" },
      { label: state.infoLabelTwo || "기존 사이트 종료", value: state.dateTwo || "" },
      { label: state.infoLabelThree || "회원 혜택", value: state.benefitText || "" },
    ],
  };
}

function loadState() {
  const saved = localStorage.getItem(storageKey) || localStorage.getItem("popup-studio-state-v2");
  return saved ? { ...defaults, ...migrateState(JSON.parse(saved)) } : defaults;
}

function render(state) {
  infoItems = (state.infoItems || defaults.infoItems).map((item) => ({
    label: item.label || "",
    value: item.value || "",
  }));
  fields.forEach((id) => {
    setInputValue(document.getElementById(id), state[id]);
    applyValue(id, state[id]);
  });
  renderInfoEditor();
  renderInfoPreview();
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const normalized = value.length === 3 ? value.split("").map((item) => item + item).join("") : value;
  const number = parseInt(normalized, 16);
  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255,
  };
}

function rgba(hex, alpha) {
  const color = hexToRgb(hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

function roundedRect(ctx, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + safeRadius, y);
  ctx.lineTo(x + width - safeRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  ctx.lineTo(x + width, y + height - safeRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  ctx.lineTo(x + safeRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  ctx.lineTo(x, y + safeRadius);
  ctx.quadraticCurveTo(x, y, x + safeRadius, y);
  ctx.closePath();
}

function wrapText(ctx, text, maxWidth) {
  const lines = [];
  String(text)
    .split("\n")
    .forEach((sourceLine) => {
      let line = "";
      Array.from(sourceLine).forEach((char) => {
        const next = line + char;
        if (line && ctx.measureText(next).width > maxWidth) {
          lines.push(line);
          line = char.trimStart();
        } else {
          line = next;
        }
      });
      lines.push(line);
    });
  return lines;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, align = "left") {
  const lines = wrapText(ctx, text, maxWidth);
  ctx.textAlign = align;
  const drawX = align === "center" ? x + maxWidth / 2 : x;
  lines.forEach((line, index) => {
    ctx.fillText(line, drawX, y + index * lineHeight);
  });
  return lines.length * lineHeight;
}

function downloadCanvas(canvas, filename) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  document.body.append(link);
  link.click();
  link.remove();
}

function fitCanvasToSquare(sourceCanvas, size = 350) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const ratio = Math.min(size / sourceCanvas.width, size / sourceCanvas.height);
  const width = Math.round(sourceCanvas.width * ratio);
  const height = Math.round(sourceCanvas.height * ratio);
  const x = Math.round((size - width) / 2);
  const y = Math.round((size - height) / 2);

  ctx.clearRect(0, 0, size, size);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(sourceCanvas, x, y, width, height);
  return canvas;
}

function downloadPng() {
  const state = getState();
  const rows = visibleInfoItems();
  const canvas = document.createElement("canvas");
  const exportWidth = 1080;
  const exportMargin = 56;
  canvas.width = exportWidth;
  const ctx = canvas.getContext("2d");
  const accent = state.accentColor;
  const blue = state.blueColor;
  const fontFamily =
    '"Pretendard", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "Segoe UI Emoji", "Apple Color Emoji", sans-serif';

  const cardWidth = Math.round((exportWidth - exportMargin * 2) * (Number(state.popupWidth) / 86));
  const cardX = Math.round((exportWidth - cardWidth) / 2);
  const cardY = exportMargin;
  const padding = Number(state.popupPadding);
  const radius = Number(state.popupRadius);
  const cardAlpha = Number(state.cardOpacity) / 100;
  const innerX = cardX + padding;
  const innerWidth = cardWidth - padding * 2;
  const centerX = cardX + cardWidth / 2;
  const showIcon = Boolean(state.showIcon);
  const bodyWidth = showIcon ? innerWidth * 0.62 : innerWidth;
  const rowHeight = 74;

  ctx.font = `800 ${state.bodySize}px ${fontFamily}`;
  const bodyLineHeight = Number(state.bodySize) * 1.65;
  const bodyHeightEstimate = wrapText(ctx, state.bodyText, bodyWidth).length * bodyLineHeight;
  ctx.font = `700 23px ${fontFamily}`;
  const noteHeightEstimate = wrapText(ctx, state.noteText, innerWidth).length * 32;
  const infoHeight = Boolean(state.showInfo) && rows.length > 0 ? rowHeight * rows.length + 64 : 0;
  const estimatedContentHeight =
    padding +
    48 +
    80 +
    Number(state.titleSize) +
    88 +
    Math.max(bodyHeightEstimate, showIcon ? 180 : bodyHeightEstimate) +
    24 +
    infoHeight +
    noteHeightEstimate +
    54 +
    78 +
    padding;
  const cardHeight = Math.min(1180, Math.max(720, Math.round(estimatedContentHeight)));
  canvas.height = cardHeight + exportMargin * 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.62)";
  ctx.shadowBlur = 48;
  ctx.shadowOffsetY = 30;
  roundedRect(ctx, cardX, cardY, cardWidth, cardHeight, radius);
  ctx.fillStyle = `rgba(10, 12, 20, ${cardAlpha})`;
  ctx.fill();
  ctx.restore();

  roundedRect(ctx, cardX, cardY, cardWidth, cardHeight, radius);
  ctx.strokeStyle = rgba(accent, 0.5);
  ctx.lineWidth = 2;
  ctx.stroke();

  let y = cardY + padding;

  ctx.font = `900 22px ${fontFamily}`;
  const badgeWidth = Math.min(Math.max(ctx.measureText(state.badgeText).width + 70, 220), innerWidth);
  roundedRect(ctx, centerX - badgeWidth / 2, y, badgeWidth, 48, 24);
  ctx.fillStyle = rgba(accent, 0.16);
  ctx.fill();
  ctx.strokeStyle = rgba(accent, 0.85);
  ctx.stroke();
  ctx.fillStyle = state.badgeColor;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(state.badgeText, centerX, y + 25);
  y += 128;

  let titleSize = Number(state.titleSize);
  ctx.font = `950 ${titleSize}px ${fontFamily}`;
  while (ctx.measureText(state.titleText).width > innerWidth && titleSize > 38) {
    titleSize -= 2;
    ctx.font = `950 ${titleSize}px ${fontFamily}`;
  }
  ctx.fillStyle = state.titleColor;
  ctx.textAlign = state.contentAlign === "left" ? "left" : "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(state.titleText, state.contentAlign === "left" ? innerX : centerX, y);
  y += 76;

  ctx.strokeStyle = "rgba(255,255,255,0.28)";
  ctx.beginPath();
  ctx.moveTo(innerX, y);
  ctx.lineTo(innerX + innerWidth, y);
  ctx.stroke();
  y += 64;

  ctx.font = `800 ${state.bodySize}px ${fontFamily}`;
  ctx.fillStyle = state.bodyColor;
  const bodyHeight = drawWrappedText(
    ctx,
    state.bodyText,
    innerX,
    y,
    bodyWidth,
    Number(state.bodySize) * 1.65,
    state.bodyAlign
  );

  if (showIcon) {
    const iconX = innerX + bodyWidth + 44;
    const iconY = y + 12;
    const iconGradient = ctx.createLinearGradient(iconX, iconY, iconX + 170, iconY + 150);
    iconGradient.addColorStop(0, accent);
    iconGradient.addColorStop(1, blue);
    ctx.save();
    ctx.translate(iconX + 84, iconY + 62);
    ctx.rotate(0.12);
    roundedRect(ctx, -78, -52, 156, 126, 18);
    ctx.fillStyle = iconGradient;
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.7)";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  }

  y += Math.max(bodyHeight, showIcon ? 180 : bodyHeight) + 24;

  if (Boolean(state.showInfo) && rows.length > 0) {
    const boxY = y;
    roundedRect(ctx, innerX, boxY, innerWidth, rowHeight * rows.length + 34, 12);
    ctx.fillStyle = "rgba(143,73,255,0.08)";
    ctx.fill();
    ctx.strokeStyle = rgba(accent, 0.42);
    ctx.lineWidth = 2;
    ctx.stroke();

    const labelWidth = innerWidth * 0.42;
    const valueWidth = innerWidth - labelWidth - 46;
    rows.forEach((item, index) => {
      const rowY = boxY + 28 + index * rowHeight;
      if (index > 0) {
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.beginPath();
        ctx.moveTo(innerX + 24, rowY - 15);
        ctx.lineTo(innerX + innerWidth - 24, rowY - 15);
        ctx.stroke();
      }
      ctx.font = `900 ${state.infoSize}px ${fontFamily}`;
      ctx.fillStyle = state.infoLabelColor;
      drawWrappedText(
        ctx,
        item.label,
        innerX + 32,
        rowY + 20,
        labelWidth - 32,
        Number(state.infoSize) * 1.15,
        state.infoAlign
      );
      ctx.fillStyle = "rgba(255,255,255,0.38)";
      ctx.fillRect(innerX + labelWidth + 12, rowY + 1, 2, 28);
      ctx.font = `900 ${Number(state.infoSize) + 4}px ${fontFamily}`;
      ctx.fillStyle = state.infoValueColor;
      drawWrappedText(
        ctx,
        item.value,
        innerX + labelWidth + 46,
        rowY + 20,
        valueWidth - 24,
        (Number(state.infoSize) + 4) * 1.15,
        state.infoAlign
      );
    });

    y += rowHeight * rows.length + 64;
  }

  ctx.font = `700 23px ${fontFamily}`;
  ctx.fillStyle = state.noteColor;
  drawWrappedText(ctx, state.noteText, innerX, y, innerWidth, 32, state.contentAlign === "left" ? "left" : "center");
  y += 76;

  const buttonWidth = Math.min(430, innerWidth);
  const buttonX = state.contentAlign === "left" ? innerX : centerX - buttonWidth / 2;
  const buttonGradient = ctx.createLinearGradient(buttonX, y, buttonX + buttonWidth, y + 78);
  buttonGradient.addColorStop(0, accent);
  buttonGradient.addColorStop(1, blue);
  roundedRect(ctx, buttonX, y, buttonWidth, 78, Number(state.buttonRadius));
  ctx.fillStyle = buttonGradient;
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.24)";
  ctx.stroke();
  ctx.font = `900 28px ${fontFamily}`;
  ctx.fillStyle = state.buttonTextColor;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(state.primaryButton, buttonX + buttonWidth / 2, y + 39);

  downloadCanvas(canvas, `popup-${Date.now()}.png`);
}

function collectStyles() {
  return Array.from(document.styleSheets)
    .flatMap((sheet) => {
      try {
        return Array.from(sheet.cssRules).map((rule) => rule.cssText);
      } catch {
        return [];
      }
    })
    .join("\n");
}

function copyExportVariables(target) {
  Object.entries(cssVariableFields).forEach(([id, [name, format]]) => {
    target.style.setProperty(name, format(inputValue(document.getElementById(id))));
  });
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Canvas export failed"));
    }, "image/png");
  });
}

function imageFromUrl(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}

async function downloadPngFromPreview() {
  const filename = `popup-${Date.now()}.png`;
  if (!window.html2canvas) {
    alert("PNG 저장 모듈을 불러오지 못했습니다. 새로고침 후 다시 시도해주세요.");
    return;
  }

  const card = document.getElementById("popupCard");
  const rect = card.getBoundingClientRect();
  const margin = 46;
  const width = Math.ceil(rect.width + margin * 2);
  const height = Math.ceil(rect.height + margin * 2);
  const exportHost = document.createElement("div");
  const clone = card.cloneNode(true);

  exportHost.className = stage.className;
  exportHost.style.position = "fixed";
  exportHost.style.left = "0";
  exportHost.style.top = "0";
  exportHost.style.width = `${width}px`;
  exportHost.style.height = `${height}px`;
  exportHost.style.overflow = "visible";
  exportHost.style.background = "transparent";
  exportHost.style.pointerEvents = "none";
  exportHost.style.zIndex = "-1";
  copyExportVariables(exportHost);

  clone.style.position = "absolute";
  clone.style.left = `${margin}px`;
  clone.style.top = `${margin}px`;
  clone.style.width = `${rect.width}px`;
  clone.style.minWidth = "0";
  clone.style.minHeight = "0";
  clone.style.boxSizing = "border-box";
  exportHost.append(clone);
  document.body.append(exportHost);

  try {
    const canvas = await html2canvas(exportHost, {
      backgroundColor: null,
      scale: 2,
      width,
      height,
      logging: false,
      useCORS: true,
    });
    downloadCanvas(fitCanvasToSquare(canvas, 350), filename);
  } catch (error) {
    console.error(error);
    alert("PNG 저장에 실패했습니다. 새로고침 후 다시 시도해주세요.");
  } finally {
    exportHost.remove();
  }
}

fields.forEach((id) => {
  document.getElementById(id).addEventListener("input", (event) => {
    if (id === "themeStyle" && themeColors[event.target.value]) {
      const [accent, blue] = themeColors[event.target.value];
      document.getElementById("accentColor").value = accent;
      document.getElementById("blueColor").value = blue;
      applyValue("accentColor", accent);
      applyValue("blueColor", blue);
    }

    applyValue(id, inputValue(event.target));
    saveState();
  });
});

infoItemEditor.addEventListener("input", (event) => {
  const index = Number(event.target.dataset.index);
  const field = event.target.dataset.infoField;
  if (!Number.isNaN(index) && field) {
    infoItems[index][field] = event.target.value;
    renderInfoPreview();
    saveState();
  }
});

infoItemEditor.addEventListener("click", (event) => {
  const index = Number(event.target.dataset.removeIndex);
  if (!Number.isNaN(index)) {
    infoItems.splice(index, 1);
    if (infoItems.length === 0) infoItems.push({ label: "", value: "" });
    renderInfoEditor();
    renderInfoPreview();
    saveState();
  }
});

document.getElementById("addInfoItemButton").addEventListener("click", () => {
  infoItems.push({ label: "", value: "" });
  renderInfoEditor();
  renderInfoPreview();
  saveState();
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`[data-panel='${button.dataset.tab}']`).classList.add("active");
  });
});

document.getElementById("resetButton").addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  render(defaults);
});

document.getElementById("copyButton").addEventListener("click", async () => {
  await navigator.clipboard.writeText(JSON.stringify(getState(), null, 2));
});

document.getElementById("downloadButton").addEventListener("click", downloadPngFromPreview);
window.addEventListener("resize", fitTitle);

render(loadState());
