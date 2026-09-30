const steps = [
  {
    num: "01",
    title: "세안 후 피부를 정돈합니다.",
    body: "토너 다음 단계에서 얼굴과 목에 사용할 준비를 합니다.",
  },
  {
    num: "02",
    title: "세럼을 2~3방울 덜어냅니다.",
    body: "손끝으로 피부 안쪽에서 바깥쪽으로 부드럽게 펴 바릅니다.",
  },
  {
    num: "03",
    title: "천천히 눌러 마무리합니다.",
    body: "아침과 저녁, 다음 보습 단계 전에 충분히 흡수시킵니다.",
  },
];

export function Ritual() {
  return (
    <section className="ritual" id="ritual">
      <div className="ritual-art reveal" aria-hidden="true">
        <div className="drop" />
      </div>
      <div className="ritual-copy reveal">
        <div className="eyebrow" style={{ color: "#5a6262" }}>
          Your daily ritual
        </div>
        <h2>한 방울에 머무는 시간</h2>
        <div className="ritual-steps">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <b>{step.num}</b>
              <div>
                <strong>{step.title}</strong>
                <span>{step.body}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="clarify">
          4PM은 제품이 영감받은 오후의 빛을 의미합니다. 실제 사용 시간은 처방과
          제품 시험 후 최종 안내됩니다.
        </p>
      </div>
    </section>
  );
}
