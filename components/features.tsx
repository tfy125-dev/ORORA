const features = [
  {
    num: "01",
    title: "Clear Coral",
    body: "빛이 통과하는 맑은 코랄 컬러로 OROA의 황금빛 시간을 시각화합니다.",
  },
  {
    num: "02",
    title: "Daily Hydration",
    body: "아침과 저녁, 세안 후 일상적인 스킨케어 단계에 자연스럽게 더하는 수분 리추얼입니다.",
  },
  {
    num: "03",
    title: "Quiet Radiance",
    body: "번들거리는 광택보다 피부에 차분하게 머무는 맑은 윤기와 생기를 지향합니다.",
  },
];

export function Features() {
  return (
    <section className="features" id="serum">
      <div className="section-head reveal">
        <h2>
          Coral light,
          <br />
          clear ritual.
        </h2>
        <p>
          투명한 코랄 오렌지 제형과 가볍게 스며드는 사용감. 매일의 루틴에 부담
          없이 더하는 OROA의 첫 번째 세럼입니다.
        </p>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature reveal" key={feature.num}>
            <span className="num">{feature.num}</span>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
