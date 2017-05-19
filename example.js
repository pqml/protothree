// Write your example. It will be compiled to example.bundle.js
import raf from 'raf'
import Stats from 'stats.js'
import ControlKit from 'controlkit'
import createApp from '../src/app'
import * as THREE from 'three'
import createOrbitControls from 'three-orbit-controls'

// setup fps debugger and controlkit
const stats = new Stats()
document.body.appendChild(stats.dom)
const controlkit = new ControlKit()
const controller = controlkit
  .addPanel({ label: 'protothree', width: 300 })

// setup three.js instance
const renderer = new THREE.WebGLRenderer()
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.lookAt(new THREE.Vector3())
const OrbitControls = createOrbitControls(THREE)
const controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false
document.body.appendChild(renderer.domElement)
window.addEventListener('resize', resize)

// instanciate app and add debug controls
const app = createApp({ three: THREE })
controller
  .addNumberInput(app.params, 'speed', { step: 0.05 })

// preload assets and start app
app.preload({
  matcap: 'matcap.jpg',
  onComplete: setup
})

// setup scene (add props, move camera, call setup and raf)
function setup () {
  app.setup()
  camera.position.z = 50
  scene.add(app.group)
  raf.add(update)
  resize()
}

function update (dt) {
  stats.begin()
  app && app.update && app.update(dt)
  renderer.render(scene, camera)
  stats.end()
}

function resize () {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  app && app.resize && app.resize(window.innerWidth, window.innerHeight)
}
