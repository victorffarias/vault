const themePre = {
  primary: {
    bupaBlue: "#0079c8",
    bupaNavy: "#0d1846",
    bupaWarmGrey: "#f1efeb",
  },
  secondary: {
    bupaBlue: "#0079c8",
    bupaFuchsia: "#d02670",
    bupaOrange: "#db3907",
    bupaGreen: "#1b883c",
    bupaTeal: "#007d79",
    bupaPurple: "#8a3ff5",
  },
  neutral: {
    bupaBlack: "#000000",
    white: "#FFFFFF",
    bupaInk: "#111C24",
    bupaTextGrey: "#21272A",
    bupaGrey1: "#F3F5F8",
    bupaGrey2: "#EBEEF2",
    bupaGrey3: "#DDE1E6",
    bupaGrey4: "#BDC3C9",
    bupaGrey5: "#929BA2",
    bupaWarmBackground1: "#f7f5f2",
    bupaWarmBackground2: "#E5E2D8",
  },
  alert: {
    red: "#d60023",
    orange: "#c85204",
    green: "#017221",
    yellow: "#f1c22d",
    indigo: "#3552b5",
  },
  new: {
    bupaBlue: "#207FEF",
    bupaBlack: "#031C2F",
    bupaGold: "#AE9962",
    bupaGrey1Blue: "#F7FAFF",
    bupaGrey2Blue: "#F0F5FE",
    bupaGrey3Blue: "#EFF3FB",
    bupaGrey4Blue: "#DDE1E6",
    bupaGrey5Blue: "#496F9C",
  },
  other: {
    splashBackground: "#0D1846",
  },
};

const themePost = {
  primary: {
    bupaBlue: "#0079C8",
    bupaNavy: "#0D1846",
    bupaWarmGrey: "#F1EFEB",
  },
  secondary: {
    bupaBlue: "#0079C8",
    bupaFuchsia: "#D02670",
    bupaOrange: "#DB3907",
    bupaGreen: "#1B883C",
    bupaTeal: "#007D79",
    bupaPurple: "#8A3FF5",
  },
  neutral: {
    bupaBlack: "#100F0F",
    white: "#FFFFFF",
    bupaInk: "#111C24",
    bupaTextGrey: "#21272A",
    bupaGrey1: "#F3F5F8",
    bupaGrey2: "#EBEEF2",
    bupaGrey3: "#DDE1E6",
    bupaGrey4: "#BDC3C9",
    bupaGrey5: "#566572",
    bupaWarmBackground1: "#F7F5F2",
    bupaWarmBackground2: "#E5E2D8",
  },
  alert: {
    red: "#D60023",
    orange: "#C85204",
    green: "#017221",
    yellow: "#F1C22D",
    indigo: "#3552B5",
  },
  new: {
    bupaBlue: "#207FEF",
    bupaBlack: "#031C2F",
    bupaGold: "#AE9962",
    bupaGrey1Blue: "#F7FAFF",
    bupaGrey2Blue: "#F0F5FE",
    bupaGrey3Blue: "#EFF3FB",
    bupaGrey4Blue: "#D7DDE4",
    bupaGrey5Blue: "#6F7DA0",
  },
  other: {
    splashBackground: "#0D1846",
  },
};

function generateColorComparison() {
  const container = document.createElement("div");
  container.style.display = "grid";
  container.style.gridTemplateColumns = "1fr 1fr 2fr";
  container.style.gap = "10px";
  container.style.fontFamily = "Arial, sans-serif";

  for (const category in themePre) {
    for (const color in themePre[category]) {
      const preColor = themePre[category][color];
      const postColor = themePost[category]?.[color] || "#FFFFFF";
      const colorChanged = preColor.toLowerCase() !== postColor.toLowerCase();

      const colorRow = document.createElement("div");
      colorRow.style.display = "flex";
      colorRow.style.alignItems = "center";
      colorRow.style.gap = "10px";

      const preDiv = createColorBlock(preColor);
      const postDiv = createColorBlock(postColor);

      const label = document.createElement("span");
      label.textContent = `${color} (${preColor.toUpperCase()} → ${postColor.toUpperCase()})`;
      label.style.flex = "1";
      if (colorChanged) {
        label.style.color = "red";
        label.style.fontWeight = "bold";
      }

      colorRow.appendChild(preDiv);
      colorRow.appendChild(postDiv);
      colorRow.appendChild(label);

      container.appendChild(colorRow);
    }
  }

  document.body.appendChild(container);
}

function createColorBlock(color) {
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundColor = color;
  div.style.border = "1px solid #000";
  return div;
}

document.addEventListener("DOMContentLoaded", generateColorComparison);
