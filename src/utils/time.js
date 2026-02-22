/**
 * Time Utility for Paris Timezone
 */

export const getParisTime = () => {
  const now = new Date();
  const parisString = now.toLocaleString("en-US", {
    timeZone: "Europe/Paris",
  });
  return new Date(parisString);
};

export const isBirthdayEve = () => {
  const t = getParisTime();
  return t.getMonth() === 1 && t.getDate() === 22;
};

export const isBirthday = () => {
  const t = getParisTime();
  return t.getMonth() === 1 && t.getDate() === 23;
};

export const isBirthdaySpecialDay = () => isBirthdayEve() || isBirthday();

export const getSecondsUntilMidnightInParis = () => {
  const parisTime = getParisTime();
  const midnight = new Date(parisTime);
  midnight.setHours(24, 0, 0, 0);
  return Math.max(0, Math.floor((midnight.getTime() - parisTime.getTime()) / 1000));
};

export const formatTime = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return {
    hours: h.toString().padStart(2, '0'),
    minutes: m.toString().padStart(2, '0'),
    seconds: s.toString().padStart(2, '0'),
  };
};
