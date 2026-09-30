export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow">Mediterranean-inspired skincare</div>
        <h1 id="hero-title">
          Golden
          <span className="time">4PM Hour</span>
        </h1>
        <p>
          지중해의 딥블루 위로 코랄빛 햇살이 기울어지는 순간. OROA는 오후 4시의
          맑은 생기를 투명한 세럼 한 병에 담았습니다.
        </p>
        <div className="actions">
          <a className="btn" href="#serum">
            4PM 세럼 만나기 <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#story">
            오로아 이야기
          </a>
        </div>
      </div>
      <div
        className="product-stage"
        aria-label="코랄 오렌지 세럼이 담긴 OROA 4PM 세럼 병"
      >
        <div className="stone" />
        <div className="reflection" />
        <div className="bottle">
          <div className="cap" />
          <div className="neck" />
          <div className="glass">
            <div className="serum" />
          </div>
          <div className="label">
            <strong>OROA</strong>
            <span>4PM CORAL SERUM</span>
            <small>30 mL</small>
          </div>
        </div>
      </div>
      <div className="scroll-note">SCROLL TO THE HOUR</div>
    </section>
  );
}
