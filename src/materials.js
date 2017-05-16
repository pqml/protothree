// Add here all your material when you want hot module reloading on it
// All hmr statements will be removed when bundling in production

function sem (THREE, opts) {
  opts.vertexShader = require('shaders/sem.vert')
  opts.fragmentShader = require('shaders/sem.frag')
  const m = new THREE.ShaderMaterial(opts)
  if (module.hot) {
    module.hot.accept('shaders/sem.vert', () => vert(m, require('shaders/sem.vert')))
    module.hot.accept('shaders/sem.frag', () => frag(m, require('shaders/sem.frag')))
  }
  return m
}

export { sem }

// reload material function (removed in production)
function vert (m, s) { m['vertexShader'] = s; m.needsUpdate = true }
function frag (m, s) { m['fragmentShader'] = s; m.needsUpdate = true }
