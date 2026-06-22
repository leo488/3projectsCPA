import { useState, useEffect, useRef } from 'react'
import './App.css'
import imageHero from './assets/imageHero.png'
import footerWoman from './assets/footer_womanImage.svg'

const BOOKING_LINK = 'https://calendly.com/victory-ihongbe-3projects/30min'

function Logo({ textFill = 'white' }) {
  return (
    <svg width="140" height="29" viewBox="0 0 1089 226" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="3PROJECTS">
      <path d="M212.788 181.6L213.699 131.213L0.0643686 143.396L0 183.025L212.788 181.6Z" fill="url(#logo-g0)"/>
      <path d="M211.475 93.1085L207.593 35.6135L1.13064 114.313L0.743369 138.169L211.475 93.1085Z" fill="url(#logo-g1)"/>
      <path d="M204.803 24.7866L184.41 0L4.07321 82.5199L1.42513 105.09L204.803 24.7866Z" fill="url(#logo-g2)"/>
      <path d="M322.449 183.024C314.718 183.024 307.781 181.7 301.638 179.052C295.601 176.405 290.995 172.433 287.817 167.138C284.64 161.737 283.581 154.906 284.64 146.645H304.339C303.915 150.14 304.392 153.37 305.769 156.335C307.251 159.195 309.581 161.472 312.758 163.166C316.042 164.861 320.119 165.708 324.991 165.708C331.875 165.708 337.382 164.067 341.512 160.783C345.643 157.5 348.026 153.423 348.661 148.551C349.296 144.633 348.661 141.402 346.755 138.861C344.954 136.213 342.201 134.254 338.494 132.983C334.893 131.606 330.604 130.918 325.626 130.918H316.889L319.113 113.92H328.009C334.469 113.92 339.977 112.702 344.531 110.266C349.19 107.83 351.838 104.123 352.474 99.1455C353.003 94.9092 351.785 91.5731 348.82 89.1373C345.96 86.7014 341.671 85.4835 335.952 85.4835C329.809 85.4835 324.779 87.0191 320.86 90.0904C317.048 93.1617 314.665 96.9214 313.712 101.37H294.013C295.39 94.3797 298.09 88.4489 302.115 83.5771C306.139 78.5995 311.276 74.7868 317.524 72.1392C323.773 69.3856 330.71 68.0088 338.335 68.0088C346.702 68.0088 353.48 69.3326 358.669 71.9803C363.965 74.628 367.724 78.2288 369.948 82.7828C372.278 87.2309 373.073 92.1556 372.331 97.5569C371.378 103.805 368.73 109.101 364.388 113.443C360.152 117.785 355.227 120.698 349.614 122.18C356.18 123.345 361.211 126.364 364.706 131.235C368.201 136.001 369.419 142.038 368.36 149.345C367.512 155.488 365.13 161.101 361.211 166.185C357.398 171.268 352.209 175.346 345.643 178.417C339.076 181.488 331.345 183.024 322.449 183.024Z" fill={textFill}/>
      <path d="M382.171 181.118V69.915H422.521C431.417 69.915 438.725 71.3977 444.444 74.3631C450.269 77.3285 454.558 81.353 457.312 86.4366C460.171 91.5201 461.601 97.292 461.601 103.752C461.601 109.789 460.224 115.402 457.471 120.592C454.717 125.675 450.428 129.753 444.603 132.824C438.884 135.895 431.523 137.431 422.521 137.431H401.234V181.118H382.171ZM401.234 121.863H421.409C428.823 121.863 434.118 120.274 437.295 117.097C440.578 113.814 442.22 109.365 442.22 103.752C442.22 98.0334 440.578 93.5853 437.295 90.4081C434.118 87.1249 428.823 85.4834 421.409 85.4834H401.234V121.863Z" fill={textFill}/>
      <path d="M467.972 181.118V69.915H513.883C522.673 69.915 529.928 71.3977 535.647 74.3631C541.472 77.3285 545.761 81.406 548.514 86.5954C551.374 91.679 552.804 97.4509 552.804 103.911C552.804 109.207 551.639 114.078 549.309 118.526C546.979 122.975 543.749 126.681 539.618 129.647C544.066 132.294 547.402 135.895 549.626 140.449C551.851 144.897 553.068 150.087 553.28 156.018L554.551 181.118H535.964L534.376 156.494C534.164 152.152 533.37 148.604 531.993 145.85C530.616 143.097 528.445 141.085 525.48 139.814C522.62 138.437 518.702 137.749 513.724 137.749H487.035V181.118H467.972ZM487.035 122.339H512.612C519.92 122.339 525.215 120.645 528.498 117.256C531.781 113.867 533.423 109.418 533.423 103.911C533.423 98.1923 531.781 93.6912 528.498 90.4081C525.215 87.1249 519.867 85.4834 512.453 85.4834H487.035V122.339Z" fill={textFill}/>
      <path d="M615.891 183.024C604.877 183.024 595.186 180.588 586.82 175.716C578.559 170.845 572.099 164.12 567.439 155.541C562.779 146.963 560.449 136.954 560.449 125.516C560.449 114.184 562.779 104.229 567.439 95.6506C572.099 86.9662 578.559 80.1881 586.82 75.3164C595.186 70.4447 604.877 68.0088 615.891 68.0088C627.011 68.0088 636.702 70.4447 644.963 75.3164C653.329 80.1881 659.79 86.9662 664.344 95.6506C669.004 104.229 671.334 114.184 671.334 125.516C671.334 136.954 669.004 146.963 664.344 155.541C659.79 164.12 653.329 170.845 644.963 175.716C636.702 180.588 627.011 183.024 615.891 183.024ZM615.891 166.026C623.305 166.026 629.659 164.437 634.954 161.26C640.356 157.977 644.539 153.317 647.504 147.28C650.47 141.138 651.953 133.883 651.953 125.516C651.953 117.15 650.47 109.948 647.504 103.911C644.539 97.8746 640.356 93.2676 634.954 90.0904C629.659 86.8073 623.305 85.1657 615.891 85.1657C608.689 85.1657 602.388 86.8073 596.987 90.0904C591.585 93.2676 587.349 97.8746 584.278 103.911C581.312 109.948 579.83 117.15 579.83 125.516C579.83 133.883 581.312 141.138 584.278 147.28C587.349 153.317 591.585 157.977 596.987 161.26C602.388 164.437 608.689 166.026 615.891 166.026Z" fill={textFill}/>
      <path d="M669.671 181.118V164.119H690.164C695.459 164.119 699.166 162.584 701.284 159.512C703.402 156.441 704.461 152.47 704.461 147.598V69.915H723.524V147.598C723.524 158.295 720.559 166.555 714.628 172.38C708.697 178.205 700.543 181.118 690.164 181.118H669.671Z" fill={textFill}/>
      <path d="M735.414 181.118V69.915H807.219V85.3245H754.478V117.256H802.454V132.347H754.478V165.708H807.219V181.118H735.414Z" fill={textFill}/>
      <path d="M867.286 183.024C856.166 183.024 846.582 180.641 838.533 175.875C830.484 171.003 824.288 164.278 819.946 155.7C815.71 147.016 813.591 137.007 813.591 125.675C813.591 114.237 815.71 104.229 819.946 95.6506C824.288 86.9662 830.484 80.1881 838.533 75.3164C846.582 70.4447 856.166 68.0088 867.286 68.0088C880.525 68.0088 891.327 71.2919 899.694 77.8582C908.167 84.3185 913.462 93.4795 915.58 105.341H894.61C893.234 98.9866 890.215 94.0619 885.555 90.567C880.895 86.9662 874.753 85.1657 867.128 85.1657C860.032 85.1657 853.942 86.8073 848.859 90.0904C843.775 93.2676 839.856 97.9276 837.103 104.07C834.349 110.107 832.972 117.309 832.972 125.675C832.972 134.042 834.349 141.244 837.103 147.28C839.856 153.211 843.775 157.818 848.859 161.101C853.942 164.384 860.032 166.026 867.128 166.026C874.753 166.026 880.842 164.331 885.396 160.942C890.056 157.447 893.128 152.576 894.61 146.327H915.739C913.515 157.871 908.167 166.873 899.694 173.333C891.327 179.794 880.525 183.024 867.286 183.024Z" fill={textFill}/>
      <path d="M1048.01 183.024C1042.71 183.024 1037.52 182.336 1032.44 180.959C1027.35 179.476 1022.69 177.199 1018.46 174.128C1014.33 171.056 1010.89 167.085 1008.13 162.213C1005.48 157.341 1003.84 151.517 1003.21 144.739H1021C1021.85 150.246 1023.65 154.588 1026.4 157.765C1029.15 160.942 1032.44 163.219 1036.25 164.596C1040.17 165.973 1044.19 166.661 1048.32 166.661C1052.56 166.661 1056.37 166.026 1059.76 164.755C1063.15 163.378 1065.85 161.419 1067.86 158.877C1069.88 156.335 1070.88 153.264 1070.88 149.663C1070.88 146.168 1069.88 143.097 1067.86 140.449C1065.96 137.696 1061.99 135.789 1055.95 134.73L1036.25 131.076C1027.46 129.382 1020.47 125.781 1015.28 120.274C1010.2 114.767 1007.66 108.254 1007.66 100.734C1007.66 93.8501 1009.4 87.9723 1012.9 83.1006C1016.5 78.2288 1021.21 74.5221 1027.04 71.9803C1032.97 69.3326 1039.48 68.0088 1046.58 68.0088C1053.99 68.0088 1060.61 69.2797 1066.43 71.8214C1072.26 74.3632 1077.02 78.2288 1080.73 83.4183C1084.44 88.5018 1086.66 95.0681 1087.4 103.117H1069.29C1068.55 98.3512 1067.07 94.5915 1064.85 91.8379C1062.73 89.0843 1060.08 87.125 1056.9 85.96C1053.83 84.7951 1050.49 84.2126 1046.89 84.2126C1043.61 84.2126 1040.27 84.7421 1036.89 85.8012C1033.6 86.8603 1030.9 88.5548 1028.78 90.8847C1026.67 93.2147 1025.61 96.339 1025.61 100.258C1025.61 103.752 1026.88 106.771 1029.42 109.313C1031.96 111.854 1035.88 113.602 1041.17 114.555L1059.44 118.05C1068.76 119.744 1076.02 123.081 1081.21 128.058C1086.4 133.036 1088.99 140.079 1088.99 149.187C1088.99 154.694 1087.83 159.566 1085.5 163.802C1083.17 168.038 1079.99 171.586 1075.97 174.445C1072.05 177.199 1067.65 179.317 1062.78 180.8C1058.01 182.283 1053.09 183.024 1048.01 183.024Z" fill={textFill}/>
      <path d="M951.166 181.341V85.5477H918.441V70.1382H1002.8V85.5477H970.229V181.341H951.166Z" fill={textFill}/>
      <path d="M235.288 225.652L228.609 210.574H231.314L235.985 221.637L240.655 210.574H243.36L236.681 225.652H235.288ZM228.118 225.652V210.574H230.74V225.652H228.118ZM241.229 225.652V210.574H243.851V225.652H241.229ZM218.284 225.652V211.885H220.907V225.652H218.284ZM213.696 212.869V210.574H225.496V212.869H213.696Z" fill={textFill}/>
      <defs>
        <linearGradient id="logo-g0" x1="15.2871" y1="209.142" x2="187.715" y2="8.37583" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E1FF"/><stop offset="0.514423" stopColor="#FF0069"/><stop offset="1" stopColor="#FFF9CC"/>
        </linearGradient>
        <linearGradient id="logo-g1" x1="15.2871" y1="209.142" x2="187.715" y2="8.37583" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E1FF"/><stop offset="0.514423" stopColor="#FF0069"/><stop offset="1" stopColor="#FFF9CC"/>
        </linearGradient>
        <linearGradient id="logo-g2" x1="15.2871" y1="209.142" x2="187.715" y2="8.37583" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E1FF"/><stop offset="0.514423" stopColor="#FF0069"/><stop offset="1" stopColor="#FFF9CC"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`}>
      <div className="nav-container">
        <a href="/" className="nav-logo" onClick={closeMenu}>
          <Logo textFill="white" />
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="nav-menu">
          <ul className="nav-links">
            <li><a href="#what-we-do" onClick={closeMenu}>What we do</a></li>
            <li><a href="#how-it-works" onClick={closeMenu}>How it works</a></li>
            <li><a href="#who-we-serve" onClick={closeMenu}>Who we serve</a></li>
            <li><a href="#vision" onClick={closeMenu}>Vision</a></li>
          </ul>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="nav-cta" onClick={closeMenu}>Book a call</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your clients need transformation. You bring 3PROJECTS.</h1>
        <p className="hero-sub">
          We architect enterprise transformation for the firms you advise. You make the introduction and stay the trusted advisor. The recurring upside is yours.
        </p>
        <div className="hero-actions">
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a 10-minute call</a>
          <a href="#how-it-works" className="btn-secondary">See how it works</a>
        </div>
      </div>
    </section>
  )
}

function StatsBanner() {
  const canvasRef = useRef(null)
  const bannerRef = useRef(null)
  const animRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) {
          setInView(true)
        } else if (entry.intersectionRatio === 0) {
          setInView(false)
          if (animRef.current) cancelAnimationFrame(animRef.current)
          if (canvasRef.current) {
            const c = canvasRef.current
            c.getContext('2d').clearRect(0, 0, c.width, c.height)
          }
        }
      },
      { threshold: [0, 0.2] }
    )
    if (bannerRef.current) observer.observe(bannerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || !canvasRef.current) return
    const canvas = canvasRef.current
    const dpr = window.devicePixelRatio || 1
    const W = canvas.offsetWidth
    const H = canvas.offsetHeight
    canvas.width = W * dpr
    canvas.height = H * dpr
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)

    document.fonts.load(`700 200px "Pixelify Sans"`).then(() => {
      runAnim(ctx, W, H)
    })

    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [inView])

  function runAnim(ctx, W, H) {
    const SZ = 8

    // Render text to offscreen canvas and sample pixel positions
    const off = document.createElement('canvas')
    off.width = W
    off.height = H
    const oc = off.getContext('2d')
    const fontSize = Math.min(Math.max(W * 0.42, 90), 420)
    oc.fillStyle = '#fff'
    oc.font = `700 ${fontSize}px "Pixelify Sans"`
    oc.textAlign = 'center'
    oc.textBaseline = 'middle'
    oc.fillText('20%', W / 2, H / 2)

    const data = oc.getImageData(0, 0, W, H).data
    const pts = []
    for (let y = 0; y < H; y += SZ) {
      for (let x = 0; x < W; x += SZ) {
        if (data[(y * W + x) * 4 + 3] > 80) pts.push([x, y])
      }
    }

    // Each particle starts scattered, converges to its target pixel
    const particles = pts.map(([tx, ty]) => ({
      tx, ty,
      x: tx + (Math.random() - 0.5) * W,
      y: ty + (Math.random() - 0.5) * H * 2.5,
      delay: Math.random() * 0.6,
    }))

    const DURATION = 1800
    let start = null

    const tick = (ts) => {
      if (!start) start = ts
      const t = Math.min((ts - start) / DURATION, 1)
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#fff'

      for (const p of particles) {
        const local = Math.max(0, (t - p.delay) / (1 - p.delay))
        const e = 1 - Math.pow(1 - Math.min(local, 1), 4) // easeOutQuart
        ctx.globalAlpha = Math.min(local * 3, 1)
        ctx.fillRect(
          p.x + (p.tx - p.x) * e,
          p.y + (p.ty - p.y) * e,
          SZ - 1,
          SZ - 1
        )
      }
      ctx.globalAlpha = 1

      if (t < 1) animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)
  }

  return (
    <section
      ref={bannerRef}
      className={`stats-banner${inView ? ' stats-banner--animate' : ''}`}
    >
      <canvas ref={canvasRef} className="stats-canvas" aria-label="20%" />
      <img src={imageHero} alt="Happy client" className="stats-person" />
    </section>
  )
}

function PartnerModel() {
  return (
    <section className="partner-model" id="how-it-works">
      <div className="pm-container">
        <div className="pm-header">
          <span className="pm-label">The Partner Model</span>
          <h2 className="pm-headline">
            Every engagement you introduce<br />
            pays you — for as long as it runs.
          </h2>
        </div>
        <hr className="pm-divider" />
        <div className="pm-stats">
          <div className="pm-stat">
            <span className="pm-stat-value">$900-3K</span>
            <span className="pm-stat-label">Recurring / Mo per client</span>
          </div>
          <div className="pm-stat">
            <span className="pm-stat-value">120+</span>
            <span className="pm-stat-label">Enterprises Architected</span>
          </div>
          <div className="pm-stat pm-stat--blue">
            <span className="pm-stat-value">10 min</span>
            <span className="pm-stat-label">To your first call</span>
          </div>
          <div className="pm-stat">
            <span className="pm-stat-value">98%</span>
            <span className="pm-stat-label">Partner Retention</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-left">
          <h2 className="intro-headline">
            One introduction<br />
            is all it takes.
          </h2>
          <p className="intro-sub">
            No pitch, no pressure. Ten minutes to see exactly how the
            partner revenue model works for your firm.
          </p>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="intro-btn">Book a call →</a>
        </div>
        <div className="intro-right">
          <div className="intro-timer">
            <span className="intro-timer-num">10</span>
            <span className="intro-timer-unit">MIN</span>
          </div>
          <p className="intro-timer-label">From Hello to Handshake</p>
        </div>
      </div>
    </section>
  )
}

function WhatWeDo() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      setProgress(Math.max(0, Math.min(-rect.top / total, 1)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const margin = (1 - progress) * 80
  const radius = (1 - progress) * 24
  const textOpacity = Math.max(0, 1 - progress * 3.5)
  const videoOpacity = Math.max(0, (progress - 0.4) / 0.6)

  return (
    <div ref={sectionRef} className="wwd-scroll" id="what-we-do">
      <div className="wwd-sticky">
        <div
          className="wwd-card"
          style={{ margin: `0 ${margin}px`, borderRadius: `${radius}px` }}
        >
          {/* Layer 1: initial card content */}
          <div className="wwd-content" style={{ opacity: textOpacity }}>
            <span className="wwd-label">01 / What We Do</span>
            <h2 className="wwd-headline">
              What we do, in<br />practice.
            </h2>
            <p className="wwd-sub">
              We don't sell software. We architect the transformation
              an enterprise needs to grow revenue and compress
              cost — end to end.
            </p>
          </div>

          {/* Layer 2: photo + frosted panel */}
          <div className="wwd-video-layer" style={{ opacity: videoOpacity }}>
            <img src="/video/business.jpg" alt="" className="wwd-video" />
            <div className="wwd-video-panel">
              <div className="wwd-panel-grid">
                <div className="wwd-panel-main">
                  <span className="wwd-panel-label">Partner Playbook</span>
                  <h2 className="wwd-video-headline">
                    Turn client relationships<br />into year-round revenue.
                  </h2>
                  <p className="wwd-video-sub">
                    The firms you advise pay for outcomes. We build the systems
                    that deliver them — and you earn on every engagement, for as
                    long as it runs.
                  </p>
                </div>

                <div className="wwd-panel-card">
                  <span className="wwd-card-tag">Capability / Architecture</span>
                  <h3 className="wwd-card-title">Map the systems behind the business.</h3>
                  <p className="wwd-card-body">Data, workflows and tooling — charted, then re-architected toward a target state worth building.</p>
                </div>

                <div className="wwd-panel-card">
                  <span className="wwd-card-tag">Capability / Automation</span>
                  <h3 className="wwd-card-title">Automate the work that drains margin.</h3>
                  <p className="wwd-card-body">Intelligent workflows take the repetitive load, so teams compound output without compounding headcount.</p>
                </div>

                <div className="wwd-panel-card">
                  <span className="wwd-card-tag">Field Note</span>
                  <h3 className="wwd-card-title">What a transformation audit finds.</h3>
                  <p className="wwd-card-body">Where revenue leaks, where cost hides, and where one system unlocks both. We map it before a dollar is committed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SECTORS = [
  { num: '01', name: 'Financial Services' },
  { num: '02', name: 'Healthcare' },
  { num: '03', name: 'Logistics & Supply' },
  { num: '04', name: 'Retail & Commerce' },
  { num: '05', name: 'Manufacturing' },
  { num: '06', name: 'Professional Services' },
  { num: '07', name: 'Public Sector' },
  { num: '08', name: 'Energy & Utilities' },
]

function WhoWeServe() {
  return (
    <section className="wws-section" id="who-we-serve">
      <div className="wws-container">
        <div className="wws-header">
          <span className="wws-label">03 / Who We Serve</span>
          <div className="wws-header-row">
            <h2 className="wws-headline">Wherever your clients operate.</h2>
            <p className="wws-sub">
              Eight sectors, one approach: understand the system, then engineer the growth and the savings.
            </p>
          </div>
        </div>
        <div className="wws-grid">
          {SECTORS.map(({ num, name }) => (
            <div key={num} className="wws-cell">
              <span className="wws-num">/ {num}</span>
              <h3 className="wws-name">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoMark({ size = 100 }) {
  const w = (size * 215) / 183
  return (
    <svg width={w} height={size} viewBox="0 0 215 183" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M212.788 181.6L213.699 131.213L0.0643686 143.396L0 183.025L212.788 181.6Z" fill="url(#mark-g0)"/>
      <path d="M211.475 93.1085L207.593 35.6135L1.13064 114.313L0.743369 138.169L211.475 93.1085Z" fill="url(#mark-g1)"/>
      <path d="M204.803 24.7866L184.41 0L4.07321 82.5199L1.42513 105.09L204.803 24.7866Z" fill="url(#mark-g2)"/>
      <defs>
        <linearGradient id="mark-g0" x1="15.2871" y1="209.142" x2="187.715" y2="8.37583" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E1FF"/><stop offset="0.514423" stopColor="#FF0069"/><stop offset="1" stopColor="#FFF9CC"/>
        </linearGradient>
        <linearGradient id="mark-g1" x1="15.2871" y1="209.142" x2="187.715" y2="8.37583" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E1FF"/><stop offset="0.514423" stopColor="#FF0069"/><stop offset="1" stopColor="#FFF9CC"/>
        </linearGradient>
        <linearGradient id="mark-g2" x1="15.2871" y1="209.142" x2="187.715" y2="8.37583" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E1FF"/><stop offset="0.514423" stopColor="#FF0069"/><stop offset="1" stopColor="#FFF9CC"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function CtaSection() {
  return (
    <section className="cta-final" id="vision">
      <div className="cta-final-container">
        <div className="cta-final-left">
          <span className="cta-final-label">Partner Program</span>
          <h2 className="cta-final-headline">
            Become a<br />3PROJECTS partner.
          </h2>
          <p className="cta-final-sub">
            Bring enterprise-grade transformation to the clients who already trust you. Keep the relationship. Earn the upside.
          </p>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a 10-minute call</a>
        </div>
        <div className="cta-final-right">
          <img src={footerWoman} alt="" className="cta-final-image" />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <Logo textFill="white" />
          </a>
          <p className="footer-tagline">
            The trusted transformation partner for the firms you advise. We architect the outcome — you bring the introduction.
          </p>
        </div>
        <nav className="footer-nav">
          <div className="footer-col">
            <span className="footer-col-title">Partnership</span>
            <a href="#how-it-works">How it works</a>
            <a href="#what-we-do">What we deliver</a>
            <a href="#vision">Our vision</a>
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Company</span>
            <a href="#who-we-serve">Who we serve</a>
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">Contact</a>
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">Careers</a>
          </div>
          <div className="footer-col footer-col--cta">
            <span className="footer-col-title">Get Started</span>
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="footer-book-btn">Book a call</a>
          </div>
        </nav>
      </div>
      <div className="footer-divider" />
      <div className="footer-brand-bar">
        <div className="footer-brand-bar-inner">
          <div className="footer-logomark">
            <LogoMark size={148} />
          </div>
          <div className="footer-wordmark-wrap">
            <span className="footer-wordmark">3PROJECTS</span>
            <sup className="footer-tm">TM</sup>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBanner />
      <PartnerModel />
      <IntroSection />
      <WhatWeDo />
      <WhoWeServe />
      <CtaSection />
      <Footer />
    </>
  )
}

export default App
