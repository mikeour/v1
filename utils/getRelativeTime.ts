const units: any = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  week: 24 * 60 * 60 * 1000 * 7,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

const rtf = new Intl.RelativeTimeFormat("en", {
  numeric: "auto",
  style: "short",
});

const getRelativeTime = (d1: Date, d2: Date = new Date()) => {
  // @ts-ignore
  const elapsed = d1 - d2;

  // "Math.abs" accounts for both "past" & "future" scenarios
  for (const unit in units) {
    if (Math.abs(elapsed) > units[unit as any] || unit == "second")
      return rtf.format(Math.round(elapsed / units[unit]), unit as any);
  }
};

export default getRelativeTime;
