import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Scene3D({ theme = 'dark' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const isMobile = window.innerWidth < 768
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ── SCENE & CAMERA ──
    const scene = new THREE.Scene()
    const isDark = theme === 'dark'
    
    // Background fog for infinite soft depth
    const fogColor = isDark ? 0x10161a : 0xf2eee3
    scene.fog = new THREE.FogExp2(fogColor, 0.035)

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    camera.position.set(0, 0, 12)

    // ── RENDERER ──
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.8))
    renderer.setClearColor(0x000000, 0)

    // ── PALETTE ──
    const colors = {
      copper: 0xd98b4a,
      slate: 0x5c84a6,
      moss: 0x6b8f71,
      bone: 0xece7da,
      graphite: 0x222a30,
    }

    // ── LIGHTS ──
    const ambientLight = new THREE.AmbientLight(isDark ? 0xffffff : 0x333333, isDark ? 0.9 : 1.2)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(colors.copper, isDark ? 2.5 : 1.5, 25)
    pointLight1.position.set(5, 5, 5)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(colors.slate, isDark ? 2.0 : 1.2, 25)
    pointLight2.position.set(-5, -5, 3)
    scene.add(pointLight2)

    // ── 1. PARTICLE STAR / DATA CLOUD ──
    const particleCount = isMobile ? 180 : 380
    const particlePositions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)
    const paletteArray = [
      new THREE.Color(colors.copper),
      new THREE.Color(colors.slate),
      new THREE.Color(colors.moss),
      new THREE.Color(colors.bone),
    ]

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      particlePositions[i3] = (Math.random() - 0.5) * 36
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 65 - 12
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 26 - 4

      const color = paletteArray[Math.floor(Math.random() * paletteArray.length)]
      particleColors[i3] = color.r
      particleColors[i3 + 1] = color.g
      particleColors[i3 + 2] = color.b
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.08 : 0.12,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.65 : 0.45,
      sizeAttenuation: true,
    })

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particleSystem)

    // ── 2. CENTRAL FULL-STACK CORE GEOMETRIES (Hero & Background) ──
    const coreGroup = new THREE.Group()
    scene.add(coreGroup)

    // A. Main Icosahedron Wireframe (Unified Architecture)
    const icoGeo = new THREE.IcosahedronGeometry(2.2, 1)
    const icoMat = new THREE.MeshStandardMaterial({
      color: colors.copper,
      wireframe: true,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: isDark ? 0.4 : 0.25,
    })
    const icoMesh = new THREE.Mesh(icoGeo, icoMat)
    coreGroup.add(icoMesh)

    // B. Inner Core Octahedron (Solid Glow)
    const octGeo = new THREE.OctahedronGeometry(1.1, 0)
    const octMat = new THREE.MeshStandardMaterial({
      color: colors.slate,
      wireframe: false,
      roughness: 0.2,
      metalness: 0.9,
      transparent: true,
      opacity: isDark ? 0.55 : 0.35,
    })
    const octMesh = new THREE.Mesh(octGeo, octMat)
    coreGroup.add(octMesh)

    // C. Orbital Torus Ring 1 (Frontend / React Loop)
    const torusGeo1 = new THREE.TorusGeometry(3.2, 0.025, 12, 64)
    const torusMat1 = new THREE.MeshBasicMaterial({
      color: colors.copper,
      transparent: true,
      opacity: isDark ? 0.4 : 0.2,
    })
    const torus1 = new THREE.Mesh(torusGeo1, torusMat1)
    torus1.rotation.x = Math.PI / 3
    coreGroup.add(torus1)

    // D. Orbital Torus Ring 2 (Backend / Async Loop)
    const torusGeo2 = new THREE.TorusGeometry(3.6, 0.02, 12, 64)
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: colors.slate,
      transparent: true,
      opacity: isDark ? 0.35 : 0.18,
    })
    const torus2 = new THREE.Mesh(torusGeo2, torusMat2)
    torus2.rotation.y = Math.PI / 4
    torus2.rotation.x = -Math.PI / 6
    coreGroup.add(torus2)

    // ── 3. FLOATING SECTION ARTIFACTS ──
    const artifactsGroup = new THREE.Group()
    scene.add(artifactsGroup)

    // Section 1: About / Philosophy Floating Prisms
    const prismGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2)
    const prismEdges = new THREE.EdgesGeometry(prismGeo)
    const prismLineMat = new THREE.LineBasicMaterial({
      color: colors.moss,
      transparent: true,
      opacity: isDark ? 0.45 : 0.25,
    })
    const prismMesh1 = new THREE.LineSegments(prismEdges, prismLineMat)
    prismMesh1.position.set(4.5, -6, -2)
    artifactsGroup.add(prismMesh1)

    // Section 2: Skills Floating Tech Matrix Nodes
    const skillsGroup = new THREE.Group()
    skillsGroup.position.set(-4, -13, -1)
    const tetraGeo = new THREE.TetrahedronGeometry(1.4, 0)
    const tetraMat = new THREE.MeshStandardMaterial({
      color: colors.slate,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.4 : 0.2,
    })
    const tetraMesh = new THREE.Mesh(tetraGeo, tetraMat)
    skillsGroup.add(tetraMesh)
    artifactsGroup.add(skillsGroup)

    // Section 3: Projects Depth Wireframe Grid Planes
    const projectGridGroup = new THREE.Group()
    projectGridGroup.position.set(0, -20, -3)
    const gridPlaneGeo = new THREE.PlaneGeometry(8, 5, 8, 5)
    const gridPlaneMat = new THREE.MeshBasicMaterial({
      color: colors.copper,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.18 : 0.1,
    })
    const gridPlane = new THREE.Mesh(gridPlaneGeo, gridPlaneMat)
    gridPlane.rotation.x = -Math.PI / 5
    projectGridGroup.add(gridPlane)
    artifactsGroup.add(projectGridGroup)

    // Section 4: Experience Timeline Lattice
    const latticeGroup = new THREE.Group()
    latticeGroup.position.set(3.5, -27, -1)
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.2, 0.18, 48, 8)
    const torusKnotMat = new THREE.MeshStandardMaterial({
      color: colors.moss,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.35 : 0.18,
    })
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat)
    latticeGroup.add(torusKnot)
    artifactsGroup.add(latticeGroup)

    // Section 5: Contact Signal Concentric Rings
    const contactGroup = new THREE.Group()
    contactGroup.position.set(0, -36, 0)
    const ringGeo1 = new THREE.RingGeometry(1.8, 1.85, 32)
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: colors.copper,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isDark ? 0.4 : 0.2,
    })
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1)
    const ringGeo2 = new THREE.RingGeometry(2.8, 2.85, 32)
    const ring2 = new THREE.Mesh(ringGeo2, ringMat1)
    contactGroup.add(ring1, ring2)
    artifactsGroup.add(contactGroup)

    // ── MOUSE PARALLAX TRACKING ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 1.5
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 1.5
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // ── SCROLL DAMPENING & INTERPOLATION ──
    let scrollProgress = 0
    let targetScrollProgress = 0

    const updateScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        targetScrollProgress = Math.min(1, Math.max(0, window.scrollY / totalScroll))
      }
    }
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()

    // ── RESIZE HANDLER ──
    const onResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 768 ? 1.2 : 1.8))
    }
    window.addEventListener('resize', onResize)

    // ── ANIMATION LOOP ──
    let animationFrameId
    let clock = new THREE.Clock()

    const render = () => {
      animationFrameId = requestAnimationFrame(render)

      // Skip rendering if document is hidden to conserve power
      if (document.hidden) return

      const time = clock.getElapsedTime()

      // Smooth scroll lerping
      const scrollLerpSpeed = prefersReducedMotion ? 1 : 0.08
      scrollProgress += (targetScrollProgress - scrollProgress) * scrollLerpSpeed

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      // ── CAMERA DYNAMICS THROUGH SCROLL DEPTH ──
      // Total scroll range traverses Y from 0 down to -36
      const targetCamY = -scrollProgress * 36
      const targetCamX = Math.sin(scrollProgress * Math.PI * 2) * 2.2 + mouse.x * 0.6
      const targetCamZ = 12 - Math.sin(scrollProgress * Math.PI) * 3.5 + mouse.y * 0.4

      camera.position.y += (targetCamY - camera.position.y) * 0.08
      camera.position.x += (targetCamX - camera.position.x) * 0.08
      camera.position.z += (targetCamZ - camera.position.z) * 0.08

      // Camera look direction smoothly tilts with scroll
      camera.rotation.x = -scrollProgress * 0.15 + mouse.y * 0.05
      camera.rotation.y = Math.sin(scrollProgress * Math.PI) * 0.12 + mouse.x * 0.05
      camera.rotation.z = Math.sin(scrollProgress * Math.PI * 2) * 0.04

      // ── OBJECT ROTATIONS & HOVER ANIMATION ──
      if (!prefersReducedMotion) {
        // Core group organic rotations
        coreGroup.rotation.y = time * 0.25 + scrollProgress * 4
        coreGroup.rotation.x = time * 0.15 + scrollProgress * 2
        coreGroup.position.y = Math.sin(time * 0.8) * 0.35

        torus1.rotation.z = time * 0.4
        torus2.rotation.z = -time * 0.35
        octMesh.rotation.y = -time * 0.5
        octMesh.rotation.z = time * 0.3

        // Artifact rotations
        prismMesh1.rotation.x = time * 0.3
        prismMesh1.rotation.y = time * 0.4
        prismMesh1.position.y = -6 + Math.sin(time + 1) * 0.4

        skillsGroup.rotation.y = time * 0.4
        skillsGroup.rotation.z = time * 0.2
        skillsGroup.position.y = -13 + Math.cos(time) * 0.35

        gridPlane.rotation.z = Math.sin(time * 0.3) * 0.1

        torusKnot.rotation.x = time * 0.3
        torusKnot.rotation.y = time * 0.25

        contactGroup.rotation.z = time * 0.15
        ring1.scale.setScalar(1 + Math.sin(time * 1.5) * 0.06)
        ring2.scale.setScalar(1 + Math.cos(time * 1.5) * 0.06)

        // Particle subtle drift
        particleSystem.rotation.y = time * 0.02 + scrollProgress * 0.5
      }

      renderer.render(scene, camera)
    }

    render()

    // ── CLEANUP & DISPOSAL ──
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', onResize)

      // Dispose geometries
      particleGeometry.dispose()
      icoGeo.dispose()
      octGeo.dispose()
      torusGeo1.dispose()
      torusGeo2.dispose()
      prismGeo.dispose()
      prismEdges.dispose()
      tetraGeo.dispose()
      gridPlaneGeo.dispose()
      torusKnotGeo.dispose()
      ringGeo1.dispose()
      ringGeo2.dispose()

      // Dispose materials
      particleMaterial.dispose()
      icoMat.dispose()
      octMat.dispose()
      torusMat1.dispose()
      torusMat2.dispose()
      prismLineMat.dispose()
      tetraMat.dispose()
      gridPlaneMat.dispose()
      torusKnotMat.dispose()
      ringMat1.dispose()

      renderer.dispose()
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  )
}
