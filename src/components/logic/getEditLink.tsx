const preFix =
  "https://github.com/react-hook-form/documentation/edit/v6-v5/src/data/"

export const getEditLink = (
  currentVersion: number,
  currentLanguage: string,
  pathname: string
): string => {
  if (!pathname) return ""

  let versionTag = ""
  if (currentVersion === 6) {
    versionTag = "V6/"
  } else if (currentVersion === 5) {
    versionTag = "V5/"
  }

  if (pathname === "/" || pathname === "") {
    return preFix + "home.tsx"
  } else if (pathname.includes("get-started")) {
    return `${preFix}${currentLanguage}/getStarted.tsx`
  } else if (pathname.includes("api")) {
    return `${preFix}${versionTag}${currentLanguage}/api.tsx`
  } else if (pathname.includes("ts")) {
    return `${preFix}ts.tsx`
  } else if (pathname.includes("advanced-usage")) {
    const tag = currentVersion < 7 && currentLanguage === "en" ? "V6/" : ""
    return `${preFix}${tag}${currentLanguage}/advanced.tsx`
  } else if (pathname.includes("faqs")) {
    return `${preFix}${currentLanguage}/faq.tsx`
  } else if (pathname.includes("dev-tools")) {
    return `${preFix}${currentLanguage}/devtools.tsx`
  } else if (pathname.includes("form-builder")) {
    return `${preFix}builder.tsx`
  } else if (pathname.includes("resources")) {
    return `${preFix}resources.tsx`
  }
}
