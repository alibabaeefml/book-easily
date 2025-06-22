export function useNavigator() {
  function isIOS() {
    return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())
  }

  function isInStandaloneMode() {
    return 'standalone' in window.navigator && window.navigator.standalone
  }
  return {
    isIOS,
    isInStandaloneMode
  }
}
