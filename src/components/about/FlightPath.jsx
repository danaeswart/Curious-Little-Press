import Reveal from '../Reveal'
import featherImg from '../../assets/about/feather.png'
import { FLIGHT_PATH } from '../../data/flightPath'
import './FlightPath.css'

const BASE_DELAY = 120

// Temporary A/B preview: the first 5 rows each get a different cursive
// font so they can be compared side by side. Remove this once a font is
// picked and set it as --font-script in index.css instead.
const FONT_PREVIEWS = [
  { name: 'Dancing Script', family: "'Dancing Script', cursive" },
  { name: 'Parisienne', family: "'Parisienne', cursive" },
  { name: 'Sacramento', family: "'Sacramento', cursive" },
  { name: 'Alex Brush', family: "'Alex Brush', cursive" },
  { name: 'Pinyon Script', family: "'Pinyon Script', cursive" },
]

// Nudges each row left/right along a smooth curve so the list reads as
// hugging the feather's taper — narrow near the tip (first/last rows),
// widest around the middle — instead of a repeating zig-zag.
function rowIndent(i, total) {
  const t = i / (total - 1)
  return Math.sin(Math.PI * t).toFixed(3)
}

export default function FlightPath() {
  return (
    <section className="flight-path">
      <div className="container">
        <Reveal as="div">
          <h2 className="flight-path__title">Our Flight Path</h2>
        </Reveal>

        <div className="flight-path__body">
          <div className="flight-path__feather-wrap">
            <img className="flight-path__feather" src={featherImg} alt="" aria-hidden="true" />
          </div>

          <ul className="flight-path__list">
            {FLIGHT_PATH.map((item, i) => {
              const preview = FONT_PREVIEWS[i]
              return (
                <Reveal as="li" key={item.title} variant="left" delay={BASE_DELAY + i * 90} className="flight-path__list-item">
                  <div
                    className="flight-path__row"
                    style={{ marginLeft: `calc(${rowIndent(i, FLIGHT_PATH.length)} * min(2.25rem, 5vw))` }}
                  >
                    <span className="flight-path__rule" aria-hidden="true" />
                    <div className="flight-path__item">
                      <span
                        className="flight-path__item-title"
                        style={preview ? { fontFamily: preview.family } : undefined}
                      >
                        {item.title}
                      </span>
                      <span className="flight-path__item-date">{item.date}</span>
                      {preview && <span className="flight-path__font-label">Font: {preview.name}</span>}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
