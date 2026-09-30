import { NotifyForm } from "@/components/notify-form";

export function Signup() {
  return (
    <section className="signup" id="reserve">
      <div className="reveal">
        <div className="eyebrow">Pre-order</div>
        <h2>
          Reserve
          <br />
          your hour.
        </h2>
        <p>이름과 이메일, 요청사항을 남겨 주시면 OROA 4PM 세럼 사전 예약을 접수할게요.</p>
      </div>
      <NotifyForm />
    </section>
  );
}
