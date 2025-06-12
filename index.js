var newlocation = window.location.href
if (newlocation === "https://robloxredirect.github.io/") {
  window.location.href = "roblox://"
  throw ''
}
window.location.href = newlocation.replace("https://robloxredirect.github.io/?", "roblox://")
setTimeout(() => {
  window.close()
}, "500");
