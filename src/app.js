import timeAdjust from 'utils/timeAdjust'
import preloader from 'utils/preloader'
import { sem } from './materials'

function app (opts) {
  opts = opts || {}
  const THREE = opts.three
  const group = new THREE.Group()

  let loader = preloader(THREE)
  let textures = {}
  let materials = {}
  let geometries = {}
  let meshes = {}

  let isLoaded = false
  let isSetup = false
  let life = 0
  let params = {
    speed: 1
  }

  return {
    params,
    group,
    preload,
    setup,
    update,
    resize,
    dispose
  }

  function preload (opts) {
    if (isLoaded) return opts.onComplete && opts.onComplete()
    loader
      .load('matcap', opts.matcap, 'texture')
      .onComplete((err) => {
        if (err) return opts.onError && opts.onError(err)
        isLoaded = true
        opts.onComplete && opts.onComplete()
      })
  }

  function setup () {
    if (!isLoaded) return
    textures.matcap = loader.get('matcap')
    geometries.cube = new THREE.TorusKnotGeometry(13, 4, 64, 32)

    materials.matcap = sem(THREE, {
      uniforms: {
        tMatCap: { type: 't', value: textures.matcap }
      },
      shading: THREE.SmoothShading
    })

    meshes.cube = new THREE.Mesh(geometries.cube, materials.matcap)
    group.add(meshes.cube)
    isSetup = true
  }

  function update (dt) {
    if (!isLoaded || !isSetup) return
    const timeMult = timeAdjust(dt)
    life += dt
    meshes.cube.rotation.x += (0.02 * params.speed) * timeMult
  }

  function resize (w, h) {
  }

  function dispose () {
    life = 0
    isSetup = false
    isLoaded = false
    loader = preloader()
    for (let k in materials) materials[k].dispose()
    for (let k in geometries) geometries[k].dispose()
    for (let k in textures) textures[k].dispose()
    group.traverse(child => child instanceof THREE.Mesh && group.remove(child))
  }
}

export default app
