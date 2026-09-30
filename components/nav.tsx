import { SiteEffects } from "@/components/site-effects";

export function Nav() {
  return (
    <header className="nav" id="nav">
      <SiteEffects />
      <a className="brand" href="#top" aria-label="OROA 홈">
        OROA
      </a>
      <nav className="nav-links" aria-label="주요 메뉴">
        <a href="#story">Our Hour</a>
        <a href="#serum">Serum</a>
        <a href="#ritual">Ritual</a>
        <a className="nav-cta" href="#reserve">
          사전 예약
        </a>
      </nav>
    </header>
  );
}
