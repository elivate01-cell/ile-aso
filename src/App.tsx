import { useState } from 'react';

const SWATCHES = [
  { name: 'Ètù midnight', pattern: 'dots', cols: '#232360 0 8px,transparent 8px 12px', cross: '#3b4d8f', price: '₦38,000 / 5 yd', w: 'Standard 48"', note: 'The old funeral deep-indigo, dotted like a star field.' },
  { name: 'Alààrà rust', pattern: 'stripes', cols: '#8f3b1e 0 14px,#232360 14px 20px', cross: '#c98a2c', price: '₦42,000 / 5 yd', w: 'Standard 48"', note: 'Rust and indigo bands, the chiefs’ festival cloth.' },
  { name: 'Sanyan cream', pattern: 'hatch', cols: '#efe6d0 0 10px,transparent 10px 16px', cross: '#232360', price: '₦55,000 / 5 yd', w: 'Narrow 30"', note: 'Wild-silk beige, woven with an open hand.' },
  { name: 'Ọ̀ṣun gold', pattern: 'chev', cols: '#c98a2c 0 12px,#232360 12px 24px', cross: '#8f3b1e', price: '₦60,000 / 5 yd', w: 'Wide 60"', note: 'River-gold zigzag for wedding shoulder drapes.' },
  { name: 'Ìdípe green', pattern: 'stripes', cols: '#2d5a3d 0 12px,#efe6d0 12px 18px', cross: '#232360', price: '₦44,000 / 5 yd', w: 'Standard 48"', note: 'Palm-green over cream, calm as a farm path.' },
  { name: 'Àkòkò slate', pattern: 'dots', cols: '#4a5568 0 6px,transparent 6px 11px', cross: '#232360', price: '₦40,000 / 5 yd', w: 'Standard 48"', note: 'City slate, cut for jacket lining and caps.' },
] as const;

const LOOM = [
  { step: 'Card the cotton', body: 'Hand cards open the raw cotton before a single thread is dyed.' },
  { step: 'Dye the bands', body: 'Indigo vats and raffia ties make the stripe plan real.' },
  { step: 'Thread the loom', body: 'Two weavers walk the shed in turns — warp first, weft after.' },
  { step: 'Beat & finish', body: 'The beater packs each pass tight; the cloth is sung over, then folded.' },
] as const;

const WEAVERS = [
  ['Chief Iyanu Olatunji', 'Master weaver · 38 years', 'Alààrà banding; trains six apprentices each dry season.'],
  ['Madam Ronke Adigun', 'Dye mistress · 25 years', 'Keeps the indigo vat fed; mixed the Ọ̀ṣun gold family of dyes.'],
  ['Wasiu Bello', 'Loom builder · 17 years', 'Carves and strings the double-heddle looms the collective runs.'],
  ['Tola Ayinla', 'Weaver · 9 years', 'Sanyan specialist; her wild-silk pieces ship to three museums.'],
] as const;
function patBg(s: (typeof SWATCHES)[number]): string {
  switch (s.pattern) {
    case 'dots': return `repeating-linear-gradient(90deg, ${s.cols}), repeating-linear-gradient(0deg, ${s.cross} 0 3px, transparent 3px 12px)`;
    case 'stripes': return `repeating-linear-gradient(0deg, ${s.cols})`;
    case 'hatch': return `repeating-linear-gradient(45deg, ${s.cols})`;
    case 'chev': return `repeating-linear-gradient(135deg, ${s.cols})`;
  }
}

export default function App() {
  const [sent, setSent] = useState(false);
  return (
    <div className="ia">
      <div className="woven" aria-hidden="true" />
      <div className="top">
        <a className="brand" href="#top">Ìlẹ̀ Aṣọ<small>Aso Oke Weaving Collective · Iseyin</small></a>
        <nav className="tnav">
          <a href="#swatches">Cloth</a><a href="#loom">The loom</a><a href="#weavers">Weavers</a><a href="#commission">Commissions</a>
        </nav>
        <a className="tcta" href="#commission">Commission cloth</a>
      </div>
      <header className="hero" id="top">
        <div>
          <p className="kick">Hand-loomed aso oke · est. 1952</p>
          <h1>Cloth with <em>thread memory</em> from Iseyin.</h1>
          <p className="lede">Fourteen weavers, four double-heddle looms, one indigo courtyard. Every band of colour in our cloth is planned before it is threaded.</p>
          <div className="hstats">
            <div className="hstat"><b>14</b><span>weavers on the floor</span></div>
            <div className="hstat"><b>72</b><span>years on Oja-Oba street</span></div>
            <div className="hstat"><b>6</b><span>apprentices in training</span></div>
          </div>
        </div>
        <div className="bigweave" aria-hidden="true" />
      </header>
      <section className="swatches" id="swatches">
        <div className="shead"><h2>The swatch catalogue</h2><p>Six house cloths, always on the loom or near it. Yardage cut to order; swatch cards posted anywhere in Nigeria.</p></div>
        <div className="swgrid">
          {SWATCHES.map((s) => (
            <article className="swcard" key={s.name}>
              <div className="swpat" style={{ backgroundImage: patBg(s) }} aria-hidden="true" />
              <h3>{s.name}</h3>
              <p className="swnote">{s.note}</p>
              <div className="swmeta"><b>{s.price}</b><span>{s.w}</span></div>
              <a className="swlink" href="#commission">Order a cutting →</a>
            </article>
          ))}
        </div>
      </section>
      <section className="loom" id="loom">
        <div className="loom-in">
          <h2>From cotton card to cloth, four passes</h2>
          <ol className="loomline">
            {LOOM.map((l, i) => (
              <li key={l.step}>
                <span className="lnum" aria-hidden="true">{i + 1}</span>
                <b>{l.step}</b>
                <p>{l.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="weavers" id="weavers">
        <div className="shead"><h2>Hands on the looms</h2></div>
        {WEAVERS.map((w) => (
          <div className="wrow" key={w[0]}>
            <b className="wname">{w[0]}</b>
            <span className="wrole">{w[1]}</span>
            <span className="wnote">{w[2]}</span>
          </div>
        ))}
      </section>
      <section className="commission" id="commission">
        <div className="cm-in">
          <div>
            <h2>Bespoke commissions</h2>
            <p>Wedding aso ebi, chief’s panels, museum yardage. Bring the colours of the occasion; we thread them into a banding plan for your approval before the loom starts.</p>
            <ul className="care" id="care">
              <li><b>Care guide</b> — fold along the weft, never the stripe.</li>
              <li>Dry-clean heavy cloths; airing handles the rest.</li>
              <li>Store rolled in cotton, away from sun and damp.</li>
              <li>Mending is free at the courtyard, for life.</li>
            </ul>
          </div>
          {sent ? (
            <div className="cmsent">Your commission brief is with the dye mistress — expect a banding sketch within five days.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label>Name<input required placeholder="Your name" /></label>
              <label>Occasion<select required defaultValue="">
                <option value="" disabled>Choose</option>
                <option>Wedding / aso ebi</option><option>Chieftaincy panel</option><option>Museum or gallery</option><option>Other occasion</option>
              </select></label>
              <label>Colours &amp; yardage<textarea rows={3} required placeholder="e.g. rust + gold, 24 yards, delivery before December" /></label>
              <button type="submit">Send commission brief</button>
            </form>
          )}
        </div>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Ìlẹ̀ Aṣọ Weaving Collective · 14 Oja-Oba Road, Iseyin, Oyo State.</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}