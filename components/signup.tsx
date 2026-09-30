import { NotifyForm } from "@/components/notify-form";

export function Signup() {
  return (
    <section className="signup" id="notify">
      <div className="reveal">
        <div className="eyebrow">Be the first to know</div>
        <h2>
          The hour
          <br />
          is coming.
        </h2>
        <p>OROA의 첫 황금빛 시간이 시작되면 가장 먼저 알려드릴게요.</p>
      </div>
      <NotifyForm />
    </section>
  );
}
