const loaders = {
  texture (opts) {
    return new Promise((resolve, reject) => {
      const loader = new opts.three.TextureLoader()
      loader.load(
        opts.url,
        (res) => { opts.onComplete(res); resolve(res) },
        () => {},
        () => { reject(new Error('Error loading ' + opts.url)) }
      )
    })
  }
}

function preloader (three, opts = {}) {
  let basePath = opts.basePath || ''
  let assets = {}
  let loading = []
  let promises = []

  const api = { get, load, onComplete }
  return api

  function get (key) {
    if (assets[key]) return assets[key]
  }

  function load (key, url, loader) {
    url = basePath + url
    // already loaded, loading or wrong loader/url, we skip this asset
    if (!assets[key] && !~loading.indexOf(key) && loaders[loader] && url) {
      loading.push(key)
      promises.push(
        loaders[loader]({
          url,
          three,
          onComplete (res) { assets[key] = res }
        })
      )
    }
    return api
  }

  function onComplete (cb) {
    Promise.all(promises)
      .then(() => {
        loading = []
        promises = []
        cb(null)
      })
      .catch(err => {
        loading = []
        promises = []
        cb(err)
      })
    return api
  }
}

export default preloader
