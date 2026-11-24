import { createPortal } from "react-dom"
import { type ReactNode, useEffect, useState } from "react"
import BookBrewFigma from "./caseStudies/BookBrewFigma"
import MusicFigma from "./caseStudies/MusicFigma"
import WatchPointFigma from "./caseStudies/WatchPointFigma"
import LoopFigma from "./caseStudies/LoopFigma"

type Route = "home" | "watchpoint" | "bookbrew" | "music" | "loop"

const A = {
  portfolio: "/assets/portfolio",
  watchpoint: "/assets/watchpoint",
  bookbrew: "/assets/bookbrew",
  music: "/assets/music",
}

const projects = [
  {
    title: "Sorted",
    subtitle: "Recycling Rewards App",
    tags: ["UX / UI", "App design"],
    image: "/sorted-cover.jpg",
    route: "loop" as Route,
  },
  {
    title: "WatchPoint",
    subtitle: "Padel Scoring Watch App",
    tags: ["UI", "App Design"],
    image: "/wp-cover-logo.jpg",
    route: "watchpoint" as Route,
  },
  {
    title: "Worship",
    subtitle: "Music App UI Design",
    tags: ["Illustration", "UX design"],
    image: `${A.portfolio}/2df89.png`,
    route: "music" as Route,
  },
  {
    title: "Book & Brew",
    subtitle: "Brand Identity & Study Space App",
    tags: ["Brand identity", "UX / App design"],
    image: `${A.portfolio}/9944a.png`,
    route: "bookbrew" as Route,
  },
  {
    title: "Point Blanc",
    subtitle: "Freelance Brand Identity",
    gallery: [
      "/pb-band.jpg",

      "/pb-joel.jpg",
      "/pb-reuben.jpg",
      "/pb-post-dan.jpg",
      "/pb-logo-card.jpg",
    ],
    tags: ["Brand identity", "Logo design"],
    image: `${A.portfolio}/b2a0e.png`,
  },
  {
    title: "Running training dashboard",
    subtitle: "Running Data Dashboard",
    notion:
      "https://whip-saguaro-8cb.notion.site/Data-Dashboard-356342d08ee580ceb22aed3594ceb8db",
    tags: ["Data visualisation", "UX design"],
    image: `${A.portfolio}/feae5.png`,
  },
]

function useRoute() {
  const getRoute = (): Route => {
    const value = window.location.hash.replace("#/", "")
    return ["watchpoint", "bookbrew", "music", "loop"].includes(value)
      ? value as Route
      : "home"
  }
  const [route, setRoute] = useState<Route>(getRoute)

  useEffect(() => {
    const update = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0, behavior: "instant" })
    }
    window.addEventListener("hashchange", update)
    return () => window.removeEventListener("hashchange", update)
  }, [])

  const go = (next: Route) => {
    window.location.hash = next === "home" ? "/" : `/${next}`
  }
  return { route, go }
}

function FigmaPrototype({
  children,
  go,
}: {
  children: ReactNode
  go: (route: Route) => void
}) {
  return (
    <div
      className="figma-prototype"
      onClick={(event) => {
        const target = event.target as HTMLElement
        if (
          target.closest(
            "[data-node-id='2:369'], [data-node-id='2:371'], [data-node-id='2:585'], [data-node-id='2:587'], [data-node-id='2:925'], [data-node-id='2:927'], [data-node-id='9:1334'], [data-node-id='9:1336'], [data-node-id='12:37'], [data-node-id='12:39']",
          )
        ) {
          go("home")
        }
      }}
    >
      {children}
      <WidthVar />
      <BackToTop />
    </div>
  )
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <button
      className={`brand ${light ? "brand--light" : ""}`}
      onClick={() => {
        window.location.hash = "/"
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
    >
      jill macc<span>.</span>
    </button>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <a className="footer__script" href="mailto:maccorkell-j@ulster.ac.uk">
        let&apos;s talk
      </a>
      <nav className="footer__links" aria-label="Contact links">
        <a href="mailto:maccorkell-j@ulster.ac.uk">Email</a>
        <a
          href="https://www.linkedin.com/in/jill-maccorkell-050357325/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/jillmacc06"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </nav>
      <small>© 2026 Jill MacCorkell</small>
    </footer>
  )
}

function Portfolio({ go }: { go: (route: Route) => void }) {
  const phrases = [
    "with structure.",
    "with care.",
    "with people in mind.",
    "with a little chaos.",
  ]
  const [phraseIndex, setPhraseIndex] = useState(0)

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhraseIndex((current) => (current + 1) % phrases.length)
    }, 2400)
    return () => window.clearInterval(timer)
  }, [phrases.length])

  return (
    <main>
      <section className="home-hero">
        <header className="home-nav">
          <Brand />
          <nav>
            <button onClick={() => scrollToSection("work")}>design work</button>
            <button onClick={() => scrollToSection("about")}>about</button>
            <button onClick={() => scrollToSection("contact")}>contact</button>
          </nav>
        </header>
        <div className="blob" id="blob1" />
        <div className="blob" id="blob2" />
        <div className="blob" id="blob3" />
        <div className="blob" id="blob4" />
        <div className="blob" id="blob5" />
        <div className="blob" id="blob6" />
        <div className="blob" id="blob7" />
        <div className="home-hero__copy">
          <p className="eyebrow eyebrow--blue">
            <i /> digital design · second year, Ulster University
          </p>
          <h1>Hi, I&apos;m Jill MacCorkell</h1>
          <p className="hero-kicker">
            I design{" "}
            <strong
              className="phrase-swap"
              key={phrases[phraseIndex]}
              aria-live="polite"
            >
              {phrases[phraseIndex]}
            </strong>
          </p>
          <p className="hero-intro">
            I’m a UX designer who loves making the mundane exciting and
            creative. I design with people in mind, focusing on work that helps
            users, makes life easier, or adds beauty to what becomes second
            nature.
          </p>
          <div className="button-row">
            <button
              className="button button--dark"
              onClick={() => scrollToSection("work")}
            >
              see the work
            </button>
            <button
              className="button button--outline"
              onClick={() => scrollToSection("about")}
            >
              about me
            </button>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => scrollToSection("work")}>
          <span /> scroll
        </button>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Design work</p>
          <h2>Projects</h2>
          <p>
            UX, branding, and interface design. Click into any project to see
            the full process.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.route ? "project-card--linked" : ""
              }`}
              key={project.title}
              onClick={() => project.route && go(project.route)}
              onKeyDown={(event) =>
                event.key === "Enter" && project.route && go(project.route)
              }
              role={project.route ? "button" : undefined}
              tabIndex={project.route ? 0 : undefined}
            >
              <div className="project-card__image">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                />
                {!project.route && (
                  <span className="coming-soon">Case study coming soon</span>
                )}
              </div>
              <div className="project-card__body">
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <strong>
                  {project.route ? (
                    <button
                      type="button"
                      className="case-study-button"
                      onClick={(event) => {
                        event.stopPropagation()
                        go(project.route as Route)
                      }}
                    >
                      View case study <span aria-hidden="true">→</span>
                    </button>
                  ) : project.gallery ? (
                    <FreelancePanelButton
                      images={project.gallery}
                      title={project.title}
                    />
                  ) : project.notion ? (
                    <a
                      className="case-study-button"
                      href={project.notion}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      View on Notion <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    "preview only"
                  )}
                </strong>
              </div>
            </article>
          ))}
        </div>
        <div className="hidden freelance-highlight mt-[28px] rounded-[16px] bg-[#2b2a3d] px-[48px] py-[44px] flex flex-wrap items-center gap-[40px]">
          <div className="flex-[1_1_420px] flex flex-col gap-[14px]">
            <p className="font-bold text-[13px] tracking-[1.04px] uppercase text-[#f4d892] m-0">
              Freelance · Real client
            </p>
            <h3
              className="m-0 text-[clamp(26px,3vw,34px)] leading-[1.15] text-[#faf7f2]"
              style={{
                fontFamily: "'Unbounded:Bold', sans-serif",
                fontWeight: 700,
              }}
            >
              Designing for a real band
            </h3>
            <p className="m-0 text-[17px] leading-[1.55] text-[#d9d6e5]">
              Point Blanc was my first freelance client. I created their brand
              and a series of posters, working from their brief, presenting
              ideas and making changes based on their feedback. It taught me how
              to design for someone else’s vision and a real audience, not just
              a university brief.
            </p>
          </div>
          <div className="flex-[0_1_340px] flex flex-col items-start gap-[12px] [&_.case-study-button]:text-[#f4d892]">
            {[
              "Worked to a real brief",
              "Presented ideas to a client",
              "Took on feedback and revised",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/[0.08] px-[20px] py-[12px] text-[15px] font-bold text-[#faf7f2]"
              >
                ✓&nbsp; {item}
              </span>
            ))}
            <PosterGalleryButton
              images={[
                "/pb-band.jpg",

                "/pb-joel.jpg",
                "/pb-reuben.jpg",
              ]}
              title="Point Blanc"
            />
          </div>
        </div>
        <div className="skills-strip">
          <div>
            <h3>What I work with</h3>
            <p>
              Figma is where most of my work happens, with Photoshop and
              Procreate alongside it, and pen and paper whenever an idea needs
              to get out quickly. I’d rather be someone who picks up new tools
              quickly than someone attached to one program.
            </p>
          </div>
          <div className="tool-cloud">
            {[
              ["Figma", "Where most of the magic happens"],
              ["Photoshop", "For image making and editing"],
              ["Procreate", "Sketching ideas by hand"],
              ["Claude AI", "A useful part of my process"],
              ["pen & paper", "Still the fastest way to think"],
              ["+ learning fast", "Always picking up something new"],
            ].map(([tool, description], index) => (
              <span
                className={`tool-chip ${index > 3 ? "dim" : ""}`}
                tabIndex={0}
                key={tool}
              >
                {tool}
                <span className="pop">{description}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="about section section--dark" id="about">
        <div className="section-heading">
          <p className="eyebrow eyebrow--yellow">A little about me</p>
          <h2>About</h2>
        </div>
        <div className="about__grid">
          <div className="about__bio">
            <p>
              I’m a second-year Digital Design student at Ulster University in
              Belfast, with a focus on UX. I studied Art & Design, Media Studies
              and Maths at A Level, so I like mixing the creative side with the
              analytical side. Usually that means starting on paper and ending
              up in Figma.
            </p>
            <p>
              I’ve always been the person who ends up making the poster or the
              birthday card, and design is the version of that I get to take
              seriously. I like my work to have a personal side. WatchPoint came
              from playing padel with my friends, Point Blanc was a band I
              already knew, and Sorted came from a problem I saw in my own
              student life. Starting from something real helps me understand the
              people I’m designing for, and then I test it with them.
              <CvRequestModal />
            </p>
            <a
              className="request-cv"
              href="mailto:maccorkell-j@ulster.ac.uk?subject=CV%20request&body=Hi%20Jill%2C%20I%27d%20love%20to%20see%20your%20CV."
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                width: "fit-content",
                maxWidth: "max-content",
                alignItems: "center",
                gap: 8,
                marginTop: 12,
                padding: "14px 26px",
                borderRadius: 999,
                border: "2px solid #f4d892",
                color: "#f4d892",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Request my CV <span aria-hidden="true">→</span>
            </a>
            <p className="hidden"></p>
          </div>
          <dl className="facts">
            <div>
              <dt>studying</dt>
              <dd>Digital Design, Ulster University Belfast</dd>
            </div>
            <div>
              <dt>looking for</dt>
              <dd>
                A design placement, open to UX, digital and visual design
              </dd>
            </div>
            <div>
              <dt>based in</dt>
              <dd>Belfast, Northern Ireland</dd>
            </div>
            <div>
              <dt>find me</dt>
              <dd>
                <a
                  className="facts__link"
                  href="https://www.instagram.com/jillmacc06"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @jillmacc06 on Instagram
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="polaroids" aria-label="Photos of Jill">
          {["94049.png", "dd5b4.png", "a5982.png", "dd322.png"].map(
            (image, index) => (
              <figure key={image}>
                <img
                  src={`${A.portfolio}/${image}`}
                  alt={`Jill personal photo ${index + 1}`}
                />
              </figure>
            ),
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}

function CaseNav({ go }: { go: (route: Route) => void }) {
  return (
    <header className="case-nav">
      <button onClick={() => go("home")}>← back to portfolio</button>
      <Brand />
    </header>
  )
}

function CaseFooter() {
  return <Footer />
}

interface ReflectionItem {
  title: string
  body: string
}

function Reflection({
  accent,
  items,
  summary,
}: {
  accent: string
  items: ReflectionItem[]
  summary: string
}) {
  return (
    <section className="case-section reflections">
      <div className="center-heading">
        <p className="eyebrow">Reflections</p>
        <h2>What I learnt</h2>
      </div>
      <div className="reflection-list">
        {items.map((item, index) => (
          <article key={item.title} style={{ borderColor: accent }}>
            <span style={{ background: accent }}>{index + 1}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="reflection-summary">{summary}</p>
    </section>
  )
}

const watchReflections = [
  {
    title: "Keep the score visible, but keep the interface quiet.",
    body: "WatchPoint works best when the score is the main event and the rest of the UI stays calm and easy to read at a glance.",
  },
  {
    title: "Yellow-green is a strong signal, so use it sparingly.",
    body: "The bright accent works well for alerts, highlights, and brand moments. The navy background keeps the rest of the interface calm by contrast.",
  },
  {
    title: "Watch-first means big numbers, simple actions, minimal load.",
    body: "Every screen should answer the same question quickly: what is the score, what just happened, and what next?",
  },
]

function WatchPoint({ go }: { go: (route: Route) => void }) {
  const watchFrames = [
    { label: "Start Match", accent: true },
    { label: "15 / 30" },
    { label: "Point!", accent: true },
    { label: "7  5 / 6  6" },
  ]
  return (
    <main className="case case--watch">
      <CaseNav go={go} />
      <section className="watch-cover">
        <img src={`${A.watchpoint}/9da5d.png`} alt="WatchPoint logo" />
      </section>
      <section className="case-hero case-hero--watch">
        <div>
          <p className="eyebrow eyebrow--lime">WatchPoint</p>
          <h1>WatchPoint</h1>
          <h2>The court watches. You play.</h2>
          <p>
            A smart padel scoring app designed to let players focus on the game,
            rather than keeping track of the score. Using cameras positioned
            around the court, WatchPoint automatically detects each point and
            updates the score in real time.
          </p>
          <div className="case-tags">
            <span>Smart padel scoring</span>
            <span>Apple Watch app</span>
            <span>Automated scoring</span>
          </div>
          <div className="notice">
            <img src={`${A.watchpoint}/50460.svg`} alt="" />
            <div>
              <strong>Notion case study</strong>
              <p>
                Link coming soon. Full process notes will be published here.
              </p>
            </div>
          </div>
        </div>
        <div className="watch-pair">
          <WatchMock label="15 / 30" />
          <WatchMock label="Point!" accent />
        </div>
      </section>
      <section className="case-section case-section--navy overview-grid">
        <div>
          <p className="eyebrow eyebrow--lime">Overview</p>
          <h2>A scoring system designed to stay out of the way.</h2>
          <p>
            WatchPoint is built around a simple promise: the court watches, so
            the players can focus on the game. The interface is compact,
            high-contrast, and easy to read at a glance, even during a
            fast-moving match.
          </p>
        </div>
        <div className="insight-grid">
          {[
            [
              "Core idea",
              "Keep the score visible, but keep the interface quiet.",
            ],
            [
              "Visual system",
              "Navy, yellow-green, and high-contrast watch UI.",
            ],
            [
              "Watch-first thinking",
              "Big numbers, simple actions, and minimal cognitive load.",
            ],
            [
              "Next step",
              "Expand the concept into a full match flow and companion app.",
            ],
          ].map(([title, copy]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="case-section case-section--navy">
        <div className="case-heading">
          <p className="eyebrow eyebrow--lime">Screens</p>
          <h2>Watch-first moments from the concept.</h2>
          <p>
            Clear score states, a visible point signal, and one focused next
            action.
          </p>
        </div>
        <div className="watch-grid">
          {watchFrames.map((frame) => (
            <WatchMock key={frame.label} {...frame} />
          ))}
        </div>
      </section>
      <Reflection
        accent="#e6ff55"
        items={watchReflections}
        summary="The strongest part of the concept is its clarity. The score is always the main event, and the watch-first layout stays simple enough to read during a fast-moving match."
      />
      <CaseFooter />
    </main>
  )
}

function WatchMock({
  label,
  accent = false,
}: {
  label: string
  accent?: boolean
}) {
  return (
    <div className="watch-mock">
      <img src={`${A.watchpoint}/a45d5.png`} alt="" />
      <span className={accent ? "accent" : ""}>{label}</span>
    </div>
  )
}

const bookReflections = [
  {
    title: "Keep the interface calm and easy to read at a glance.",
    body: "The app screens work best when the main action is clear and the supporting UI stays quiet.",
  },
  {
    title: "Warm cream and navy make a strong, readable foundation.",
    body: "The palette feels premium, calm, and easy to scan, especially for a study-space app.",
  },
  {
    title: "The ampersand pattern adds personality without overwhelming.",
    body: "It supports the brand identity without competing with the app’s functional content.",
  },
]

function BookBrew({ go }: { go: (route: Route) => void }) {
  const mood = [
    "506aa.png",
    "38cde.png",
    "5bd1d.png",
    "e78b8.png",
    "a91e7.png",
    "5b52e.png",
    "a2944.png",
    "5e1d6.png",
    "58ffd.png",
  ]
  return (
    <main className="case case--book">
      <CaseNav go={go} />
      <div className="book-pattern">
        <img
          src={`${A.bookbrew}/43daa.svg`}
          alt="Book and Brew ampersand pattern"
        />
      </div>
      <section className="case-section book-intro">
        <div>
          <p className="eyebrow eyebrow--burgundy">Design work</p>
          <h1>Book&amp;Brew</h1>
          <p>
            Book & Brew is a sub-brand of Libraries NI, designed to reimagine
            traditional library spaces for modern students. Combining quiet
            study areas with café-style comfort, it creates environments that
            are both focused and welcoming.
          </p>
          <a
            className="notice notice--book"
            href="https://whip-saguaro-8cb.notion.site/Book-Brew-Research-40c342d08ee580c8b85fd56c2784c9af?source=copy_link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={`${A.bookbrew}/50460.svg`} alt="" />
            <span>
              <strong>Notion case study</strong>
              <u>See all my Book &amp; Brew research</u>
            </span>
          </a>
        </div>
        <p>
          Brand identity and app design: a closer look at the original work.
        </p>
      </section>
      <section className="case-section showcase">
        <img
          className="hero-art"
          src={`${A.bookbrew}/7fefe.png`}
          alt="Book and Brew phone mockups"
        />
        <div className="showcase-split">
          <img
            src={`${A.bookbrew}/d5fbe.png`}
            alt="Book and Brew app icon in an iOS dock"
          />
          <img
            src={`${A.bookbrew}/cece0.png`}
            alt="Book and Brew logo presentation"
          />
        </div>
      </section>
      <section className="case-section">
        <div className="case-heading">
          <p className="eyebrow eyebrow--burgundy">Moodboard</p>
          <h2>The original brand collage.</h2>
        </div>
        <div className="mood-grid">
          {mood.map((item, index) => (
            <img
              key={item}
              src={`${A.bookbrew}/${item}`}
              alt={`Book and Brew brand study ${index + 1}`}
            />
          ))}
          <div className="mood-logo">
            {[
              "c1fe6.svg",
              "69558.svg",
              "8c758.svg",
              "e20d4.svg",
              "b9232.svg",
            ].map((item) => (
              <img key={item} src={`${A.bookbrew}/${item}`} alt="" />
            ))}
          </div>
        </div>
      </section>
      <section className="case-section landing-preview">
        <div className="case-heading">
          <p className="eyebrow eyebrow--burgundy">Landing page</p>
          <h2>The Book&amp;Brew landing page.</h2>
        </div>
        <img
          src={`${A.bookbrew}/4e47d.png`}
          alt="Book and Brew landing page design"
        />
      </section>
      <Reflection
        accent="#fac5bb"
        items={bookReflections}
        summary="The next step would be to develop the journeys beyond these concept screens: finding a suitable study space, checking live availability, booking a room and managing saved locations."
      />
      <CaseFooter />
    </main>
  )
}

const musicReflections = [
  {
    title: "Design with purpose, not just aesthetics.",
    body: "The clearest moments came when every design decision connected directly back to the app’s purpose: worship through calm, immersive design.",
  },
  {
    title: "The social layer is what makes it different.",
    body: "A friends feed brought a community dimension that felt genuinely unique to the Christian music space.",
  },
  {
    title: "Background imagery can carry the whole feeling.",
    body: "Nature photography, soft light, and restrained UI create a reflective atmosphere without adding clutter.",
  },
]

function Music({ go }: { go: (route: Route) => void }) {
  const screens = [
    "733d1.png",
    "699bc.png",
    "ab1b8.png",
    "6c82b.png",
    "bc839.png",
    "b1bb3.png",
    "8e650.png",
    "f7b5c.png",
  ]
  return (
    <main className="case case--music">
      <CaseNav go={go} />
      <section className="music-hero">
        <div>
          <p className="eyebrow eyebrow--peach">Worship Music App</p>
          <h1>Worship</h1>
          <h2>Music that moves with your faith.</h2>
          <div className="case-tags">
            <span>Christian music streaming</span>
            <span>Social listening</span>
            <span>iOS mobile app</span>
            <span>Illustration + UX</span>
          </div>
          <div className="notice notice--music">
            <img src={`${A.music}/d16ab.svg`} alt="" />
            <div>
              <strong>Notion case study</strong>
              <p>
                Link coming soon. Full process notes will be published here.
              </p>
            </div>
          </div>
        </div>
        <img src={`${A.music}/ecd2c.png`} alt="Worship app phone mockups" />
      </section>
      <section className="case-section overview-grid">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>A streaming app built around faith.</h2>
          <p>
            Worship combines the social connection of sharing music with the
            intimacy of personal faith. Users can stream worship music, build
            playlists, discover what friends are listening to, and engage with
            the meaning behind the songs.
          </p>
        </div>
        <div className="insight-grid">
          {[
            [
              "Core idea",
              "Stream worship music and share it with your faith community.",
            ],
            [
              "Visual system",
              "Deep green, peach, and coral on a blurred nature backdrop.",
            ],
            [
              "Social layer",
              "Friends feed, shared listening posts, and community playlists.",
            ],
            [
              "Next step",
              "Expand into devotionals, scripture links, and daily playlists.",
            ],
          ].map(([title, body]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="case-section">
        <div className="case-heading">
          <p className="eyebrow">Screens</p>
          <h2>Key screens from the concept.</h2>
          <p>Landing, home, library, friends, search, player, and profile.</p>
        </div>
        <div className="phone-grid">
          {screens.map((screen, index) => (
            <button
              key={screen}
              onClick={() =>
                document
                  .getElementById(`music-screen-${index}`)
                  ?.requestFullscreen?.()
              }
              title="Open fullscreen"
            >
              <img
                id={`music-screen-${index}`}
                src={`${A.music}/${screen}`}
                alt={`Worship app screen ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </section>
      <section className="case-section brand-section">
        <div className="case-heading">
          <p className="eyebrow">Visual identity</p>
          <h2>Nature, warmth, and faith.</h2>
          <p>
            The palette is rooted in nature to feel calm, personal, and alive.
          </p>
        </div>
        <div className="palette">
          {[
            ["#546B47", "Deep green"],
            ["#DFE9F1", "Light blue-grey"],
            ["#FFAD72", "Peach"],
            ["#FF6464", "Coral"],
            ["#505050", "Secondary text"],
          ].map(([color, label]) => (
            <div key={color}>
              <i style={{ background: color }} />
              <strong>{color}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="case-section research">
        <article>
          <p className="eyebrow">Initial research</p>
          <h2>Why a Christian music app?</h2>
          <p>
            Music has always been a big part of my life, but so has my faith,
            so creating a Christian music app came naturally. I explored
            specialist platforms alongside Spotify and Apple Music to understand
            both spiritual purpose and expected music-app patterns.
          </p>
        </article>
        <article>
          <p className="eyebrow">Initial research</p>
          <h2>What I want in my app</h2>
          <p>
            The concept treats music as art rather than just content. Natural
            elements such as waterfalls, light, and sunsets create a calm and
            reflective atmosphere that encourages users to slow down and connect
            more deeply with the music.
          </p>
        </article>
      </section>
      <Reflection
        accent="#ffad72"
        items={musicReflections}
        summary="The project works best where art, nature, community, and faith meet a familiar, accessible music-streaming experience."
      />
      <CaseFooter />
    </main>
  )
}

export default function App() {
  const { route, go } = useRoute()
  if (route === "watchpoint")
    return (
      <FigmaPrototype go={go}>
        <WatchPointFigma />
      </FigmaPrototype>
    )
  if (route === "bookbrew")
    return (
      <FigmaPrototype go={go}>
        <BookBrewFigma />
      </FigmaPrototype>
    )
  if (route === "loop")
    return (
      <FigmaPrototype go={go}>
        <LoopFigma />
      </FigmaPrototype>
    )
  if (route === "music")
    return (
      <FigmaPrototype go={go}>
        <MusicFigma />
      </FigmaPrototype>
    )
  return <Portfolio go={go} />
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  const page = window.location.hash.replace("#/", "")
  const colours: Record<string, [string, string]> = {
    watchpoint: ["#e6ff55", "#192c4f"],
    loop: ["#d8f86f", "#1d4739"],
    bookbrew: ["#7e000c", "#ffffff"],
    music: ["#ffad72", "#3b4e38"],
  }
  const [background, color] = colours[page] ?? ["#2b2a3d", "#ffffff"]
  return createPortal(
    <button
      type="button"
      className={`back-to-top ${show ? "is-visible" : ""}`}
      style={{ background, color }}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>,
    document.body,
  )
}

function PosterGalleryButton({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [index, setIndex] = useState<number | null>(null)
  const next = () => setIndex((i) => (i === null ? i : (i + 1) % images.length))
  const prev = () =>
    setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))

  useEffect(() => {
    if (index === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null)
      if (event.key === "ArrowRight") next()
      if (event.key === "ArrowLeft") prev()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [index === null])

  return (
    <>
      <button
        type="button"
        className="case-study-button"
        onClick={(event) => {
          event.stopPropagation()
          setIndex(0)
        }}
      >
        See the gallery <span aria-hidden="true">→</span>
      </button>
      {index !== null &&
        createPortal(
          <div
            className="poster-gallery"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} posters`}
            onClick={() => setIndex(null)}
          >
            <button
              type="button"
              className="poster-gallery__close"
              aria-label="Close gallery"
              onClick={() => setIndex(null)}
            >
              ×
            </button>
            <div
              className="poster-gallery__stage"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="poster-gallery__arrow"
                aria-label="Previous poster"
                onClick={prev}
              >
                ←
              </button>
              <img
                key={images[index]}
                src={images[index]}
                alt={`${title} poster ${index + 1} of ${images.length}`}
              />
              <button
                type="button"
                className="poster-gallery__arrow"
                aria-label="Next poster"
                onClick={next}
              >
                →
              </button>
            </div>
            <div
              className="poster-gallery__thumbs"
              onClick={(event) => event.stopPropagation()}
            >
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={i === index ? "is-active" : ""}
                  aria-label={`Show poster ${i + 1}`}
                  onClick={() => setIndex(i)}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}

function FreelancePanelButton({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])
  return (
    <>
      <button
        type="button"
        className="case-study-button"
        onClick={(event) => {
          event.stopPropagation()
          setOpen(true)
        }}
      >
        View project <span aria-hidden="true">→</span>
      </button>
      {createPortal(
        <div
          className={`fixed inset-0 z-[200] transition-opacity duration-300 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden={!open}
        >
          <div className="absolute inset-0 bg-[rgba(20,19,32,0.45)]" />
          <aside
            role="dialog"
            aria-label={`${title} freelance project`}
            onClick={(event) => event.stopPropagation()}
            className={`absolute right-0 top-0 h-full w-[min(480px,100vw)] overflow-y-auto bg-[#2b2a3d] text-[#faf7f2] px-[40px] py-[40px] flex flex-col gap-[20px] shadow-[-24px_0_60px_rgba(0,0,0,0.25)] transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="self-end text-[30px] leading-none text-[#faf7f2] opacity-70 hover:opacity-100"
            >
              ×
            </button>
            <p className="m-0 text-[13px] font-bold uppercase tracking-[1.04px] text-[#f4d892]">
              Freelance · Real client
            </p>
            <h3
              className="m-0 text-[30px] leading-[1.15] text-[#faf7f2]"
              style={{
                fontFamily: "'Unbounded:Bold', sans-serif",
                fontWeight: 700,
              }}
            >
              Designing for a real band
            </h3>
            <img
              src="/pb-logo-mark.png"
              alt="Point Blanc logo"
              className="h-[64px] w-auto self-start my-[4px]"
            />
            <img
              src={images[0]}
              alt={`${title} poster`}
              className="w-full rounded-[12px]"
            />
            <p className="m-0 text-[16px] leading-[1.6] text-[#d9d6e5]">
              Point Blanc was my first freelance client. I created their brand
              and a series of posters, working from their brief, presenting
              ideas and making changes based on their feedback. It taught me how
              to design for someone else’s vision and a real audience, not just
              a university brief.
            </p>
            <div className="flex flex-col items-start gap-[10px]">
              {[
                "Worked to a real brief",
                "Presented ideas to a client",
                "Took on feedback and revised",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.08] px-[18px] py-[10px] text-[14px] font-bold text-[#faf7f2]"
                >
                  ✓&nbsp; {item}
                </span>
              ))}
            </div>
            <div className="mt-[4px] [&_.case-study-button]:text-[#f4d892]">
              <PosterGalleryButton images={images} title={title} />
            </div>
          </aside>
        </div>,
        document.body,
      )}
    </>
  )
}

// CV on request. If CV_FORM_KEY is set (free Web3Forms access key), requests are emailed to Jill automatically.
// If it's empty, the form opens the visitor's email app with the request already written.
const CV_FORM_KEY = ""

function CvRequestModal() {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<"" | "sending" | "done" | "mail">("")
  const [f, setF] = useState({ name: "", email: "", company: "", note: "" })

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (t && t.closest && t.closest(".request-cv")) {
        e.preventDefault()
        setState("")
        setOpen(true)
      }
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const submit = async (e: any) => {
    e.preventDefault()
    if (CV_FORM_KEY) {
      setState("sending")
      try {
        const r = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: CV_FORM_KEY,
            subject: `CV request from ${f.name}`,
            from_name: "Portfolio CV request",
            replyto: f.email,
            ...f,
          }),
        })
        if (r.ok) {
          setState("done")
          return
        }
      } catch (err) {}
    }
    const subject = `CV request from ${f.name}${
      f.company ? ` (${f.company})` : ""
    }`
    const body = `Hi Jill,\n\nI came across your portfolio and would love to see your CV.\n\nName: ${f.name}\nEmail: ${f.email}\nCompany: ${f.company || "-"}\n\n${f.note}`
    window.location.href = `mailto:maccorkell-j@ulster.ac.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setState("mail")
  }

  if (!open) return null
  const field =
    "w-full rounded-[12px] border-2 border-[#f4d892]/30 bg-white/5 px-[14px] py-[12px] text-[15px] text-[#fdf6e3] placeholder:text-[#fdf6e3]/45 outline-none transition-colors focus:border-[#f4d892]"
  const heading = {
    fontFamily: "'Unbounded:Bold', sans-serif",
    fontWeight: 700,
    fontSize: 26,
    lineHeight: 1.2,
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 p-[20px] backdrop-blur-[3px]"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Request my CV"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[460px] rounded-[24px] bg-[#2b2a3d] p-[32px] text-[#fdf6e3] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-[18px] top-[12px] text-[30px] leading-none text-[#fdf6e3]/60 hover:text-[#f4d892]"
        >
          ×
        </button>
        {state === "done" || state === "mail" ? (
          <div className="flex flex-col gap-[14px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#f4d892]">
              {state === "done" ? "Request sent" : "Nearly there"}
            </p>
            <h3 style={heading}>
              {state === "done" ? "Thanks, it's on its way!" : "Just hit send"}
            </h3>
            <p className="text-[15px] leading-[1.6] opacity-85">
              {state === "done"
                ? `I'll send my CV to ${f.email} as soon as I can.`
                : "Your email app should have opened with the request already written. If nothing opened, you can email me at maccorkell-j@ulster.ac.uk."}
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-[6px] self-start rounded-full bg-[#f4d892] px-[26px] py-[12px] text-[15px] font-bold text-[#2b2a3d]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-[12px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#f4d892]">
              CV on request
            </p>
            <h3 style={heading}>Want to see my CV?</h3>
            <p className="mb-[4px] text-[15px] leading-[1.6] opacity-85">
              Leave your details and I'll send it straight to your inbox.
            </p>
            <input
              required
              aria-label="Your name"
              placeholder="Your name"
              className={field}
              value={f.name}
              onChange={(e) => setF({ ...f, name: e.target.value })}
            />
            <input
              required
              type="email"
              aria-label="Your email"
              placeholder="Your email"
              className={field}
              value={f.email}
              onChange={(e) => setF({ ...f, email: e.target.value })}
            />
            <input
              aria-label="Company"
              placeholder="Company (optional)"
              className={field}
              value={f.company}
              onChange={(e) => setF({ ...f, company: e.target.value })}
            />
            <textarea
              rows={3}
              aria-label="Message"
              placeholder="Anything else? (optional)"
              className={field + " resize-none"}
              value={f.note}
              onChange={(e) => setF({ ...f, note: e.target.value })}
            />
            <button
              type="submit"
              disabled={state === "sending"}
              className="mt-[6px] rounded-full bg-[#f4d892] px-[26px] py-[14px] text-[15px] font-bold text-[#2b2a3d] transition-transform hover:-translate-y-[1px] disabled:opacity-60"
            >
              {state === "sending" ? "Sending…" : "Send request →"}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body,
  )
}

// Case study extras: shares the screen width with the CSS, reading progress bar,
// section jump links, working footer links and tap-to-flick notebook on touch screens
const CASE_SECTIONS: Record<string, [string, string][]> = {
  loop: [
    ["Overview", "[data-name='Project at a glance']"],
    ["Problem", "[data-name='Loop problem']"],
    ["Process", "[data-name='Process']"],
    ["Key decision", "[data-name='Loop decision']"],
    ["Screens", "[data-name='Loop screens']"],
    ["Prototype", "[data-name='Prototype']"],
    ["Reflections", "[data-name='Reflections']"],
  ],
  watchpoint: [
    ["Overview", "[data-name='Project at a glance']"],
    ["The idea", "[data-node-id='12:45']"],
    ["Process", "[data-name='Process']"],
    ["Screens", "[data-node-id='12:93']"],
    ["iPhone app", "[data-name='Phone app']"],
    ["Prototype", "[data-name='Prototype']"],
    ["Reflections", "[data-node-id='12:103']"],
  ],
  bookbrew: [
    ["Overview", "[data-name='Project at a glance']"],
    ["Process", "[data-name='Process']"],
    ["Design work", "[data-node-id='9:1528']"],
    ["Landing page", "[data-node-id='9:1582']"],
    ["Reflections", "[data-node-id='9:1586']"],
  ],
  music: [
    ["Overview", "[data-name='Project at a glance']"],
    ["Process", "[data-name='Process']"],
    ["Screens", "[data-node-id='2:973']"],
    ["Prototype", "[data-name='Prototype']"],
    ["Identity", "[data-node-id='2:1056']"],
    ["Research", "[data-node-id='2:1099']"],
    ["Reflections", "[data-node-id='2:1109']"],
  ],
}
const CASE_COLOURS: Record<string, [string, string]> = {
  watchpoint: ["#192c4f", "#e6ff55"],
  loop: ["#1d4739", "#d8f86f"],
  bookbrew: ["#7e000c", "#f4d892"],
  music: ["#3b4e38", "#ffad72"],
}
const EMAIL = "mailto:maccorkell-j@ulster.ac.uk"
const LINKEDIN = "https://www.linkedin.com/in/jill-maccorkell-050357325/"
const INSTAGRAM = "https://www.instagram.com/jillmacc06"
// Screen reader descriptions for the case study images (decorative shapes stay silent)
const IMAGE_ALT: Record<string, string> = {
  "9da5d.png": "WatchPoint logo",
  "4cb2a.png": "WatchPoint on an Apple Watch showing a live 15-30 score",
  "a0e6d.png":
    "WatchPoint on an Apple Watch flashing Point! after a point is won",
  "e44f9.png": "WatchPoint start screen with a Start Match button",
  "aae95.png": "WatchPoint match summary screen showing the set scores",
  "2fb2b.svg": "Book & Brew ampersand pattern banner",
  "7fefe.png": "Book & Brew app screens on three phones",
  "cece0.png": "Book & Brew logo",
  "07603.png": "Book & Brew app icon in an iPhone dock",
  "506aa.png":
    "Book & Brew colour palette: burgundy, navy, cream, pink and brown",
  "38cde.png": "Book & Brew colour palette swatches",
  "5bd1d.png": "Ulster University logo",
  "e78b8.png": "Queen's University Belfast logo",
  "a91e7.png": "Libraries NI logo",
  "5b52e.png": "Notebooks, an open book and iced coffee on a study table",
  "a2944.png": "A student studying in a grand library reading room",
  "5e1d6.png": "Laptop, books and a tablet set up in a café",
  "58ffd.png": "People studying in a bright, plant-filled café",
  "c1fe6.svg": "Book & Brew wordmark",
  "69558.svg": "Book & Brew ampersand mark",
  "8c758.svg": "Book & Brew wordmark on burgundy",
  "e20d4.svg": "Book & Brew wordmark on cream",
  "ecd2c.png": "Worship app screens shown on three phones",
  "733d1.png": "Worship welcome screen with a cross over a mountain lake",
  "699bc.png": "Worship home screen with top picks and new releases",
  "ab1b8.png": "Worship library screen with playlists and saved songs",
  "6c82b.png": "Worship friends screen showing what friends are listening to",
  "bc839.png": "Worship search screen with genre tiles",
  "b1bb3.png": "Worship search results screen",
  "8e650.png": "Worship music player screen",
  "f7b5c.png": "Worship profile screen",
}
function addAltText() {
  document
    .querySelectorAll<HTMLImageElement>(".figma-prototype img")
    .forEach((img) => {
      if (img.getAttribute("alt")) return
      const file = (img.getAttribute("src") ?? "").split("/").pop() ?? ""
      if (IMAGE_ALT[file]) img.setAttribute("alt", IMAGE_ALT[file])
    })
}
const FOOTER_LINKS: Record<string, string> = {
  "12:130": EMAIL,
  "12:132": EMAIL,
  "12:134": LINKEDIN,
  "12:136": INSTAGRAM,
  "9:1612": EMAIL,
  "9:1614": EMAIL,
  "9:1616": LINKEDIN,
  "9:1618": INSTAGRAM,
  "2:1136": EMAIL,
  "2:1138": EMAIL,
  "2:1140": LINKEDIN,
  "2:1142": INSTAGRAM,
}

function WidthVar() {
  const page = window.location.hash.replace("#/", "")
  const sections = CASE_SECTIONS[page] ?? []
  const [ink, accent] = CASE_COLOURS[page] ?? ["#2b2a3d", "#f4d892"]
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(-1)

  useEffect(() => {
    const setWidth = () =>
      document.documentElement.style.setProperty(
        "--cw",
        String(document.documentElement.clientWidth),
      )
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      let current = -1
      sections.forEach(([, selector], index) => {
        const el = document.querySelector(`.figma-prototype ${selector}`)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4)
          current = index
      })
      setActive(current)
    }
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target || !target.closest) return
      let node: Element | null = target.closest("[data-node-id]")
      while (node) {
        const url = FOOTER_LINKS[node.getAttribute("data-node-id") ?? ""]
        if (url) {
          if (url.startsWith("mailto:")) window.location.href = url
          else window.open(url, "_blank", "noopener")
          return
        }
        node = node.parentElement?.closest("[data-node-id]") ?? null
      }
      const notebook = target.closest(".nb")
      if (
        notebook &&
        window.matchMedia("(hover: none)").matches &&
        !notebook.classList.contains("is-open")
      ) {
        event.preventDefault()
        document
          .querySelectorAll(".nb.is-open")
          .forEach((el) => el.classList.remove("is-open"))
        notebook.classList.add("is-open")
      }
    }
    setWidth()
    onScroll()
    window.addEventListener("resize", setWidth)
    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("click", onClick)
    return () => {
      window.removeEventListener("resize", setWidth)
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("click", onClick)
    }
  }, [page])

  useEffect(() => {
    addAltText()
  }, [page])

  const jump = (selector: string) => {
    const el = document.querySelector(`.figma-prototype ${selector}`)
    if (!el) return
    const nav = document.querySelector(".figma-prototype [data-name='Nav']")
    const offset = (nav ? nav.getBoundingClientRect().height : 64) + 12
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    })
  }

  if (!sections.length) return null
  return createPortal(
    <>
      <div
        className="case-progress"
        style={{ transform: `scaleX(${progress})`, background: ink }}
      />
      <nav
        className={`case-jump ${progress > 0.03 ? "" : "is-hidden"}`}
        aria-label="Jump to a section"
        style={{ "--cj-ink": ink, "--cj-accent": accent } as any}
      >
        {sections.map(([label, selector], index) => (
          <button
            key={label}
            type="button"
            className={index === active ? "is-active" : ""}
            aria-label={`Jump to ${label}`}
            onClick={() => jump(selector)}
          >
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </>,
    document.body,
  )
}
