const millisecond = 1000;

setInterval(() => {
  const blockads = document.getElementsByClassName("ytp-ad-skip-button");
  if (blockads && blockads.length > 0) {
    const check = "skip the ad";
    console.log(check);
    blockads[0].click();
  }
}, millisecond);

////Author: https://github.com/SpantaAlizadeh10
