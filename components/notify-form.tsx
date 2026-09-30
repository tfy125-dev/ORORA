"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "ok" | "error";

export function NotifyForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.namedItem("email");

    if (!(email instanceof HTMLInputElement)) {
      return;
    }

    setStatus("idle");

    if (!email.value.trim()) {
      setMessage("이메일 주소를 입력해 주세요.");
      setStatus("error");
      email.focus();
      return;
    }

    if (!email.validity.valid) {
      setMessage("이메일 주소를 다시 확인해 주세요.");
      setStatus("error");
      email.focus();
      return;
    }

    setMessage(
      "신청이 완료됐어요. 오로아의 첫 황금빛 시간이 시작되면 알려드릴게요.",
    );
    setStatus("ok");
    form.reset();
  }

  return (
    <form className="form reveal" id="notify-form" noValidate onSubmit={onSubmit}>
      <div className="input-wrap">
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="hello@example.com"
          autoComplete="email"
          required
          aria-describedby="form-message"
        />
      </div>
      <button className="submit" type="submit">
        출시 소식 받기
      </button>
      <div
        className={status === "idle" ? "message" : `message ${status}`}
        id="form-message"
        aria-live="polite"
      >
        {message}
      </div>
      <p className="form-note">신제품과 출시 소식만 이메일로 보내드려요.</p>
    </form>
  );
}
