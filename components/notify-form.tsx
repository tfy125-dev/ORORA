"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.oroa.store"
).replace(/\/$/, "");

export function NotifyForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.namedItem("name");
    const email = form.elements.namedItem("email");
    const content = form.elements.namedItem("content");

    if (
      !(name instanceof HTMLInputElement) ||
      !(email instanceof HTMLInputElement) ||
      !(content instanceof HTMLTextAreaElement)
    ) {
      return;
    }

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const contentValue = content.value.trim();

    if (!nameValue) {
      setMessage("이름을 입력해 주세요.");
      setStatus("error");
      name.focus();
      return;
    }

    if (nameValue.length > 80) {
      setMessage("이름은 80자 이하로 입력해 주세요.");
      setStatus("error");
      name.focus();
      return;
    }

    if (!emailValue) {
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

    if (!contentValue) {
      setMessage("요청사항을 입력해 주세요.");
      setStatus("error");
      content.focus();
      return;
    }

    if (contentValue.length > 2000) {
      setMessage("요청사항은 2000자 이하로 입력해 주세요.");
      setStatus("error");
      content.focus();
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/preorders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          content: contentValue,
        }),
      });

      if (!response.ok) {
        setMessage("예약 접수에 실패했어요. 잠시 후 다시 시도해 주세요.");
        setStatus("error");
        return;
      }

      setMessage(
        "사전 예약이 접수됐어요. 오로아의 첫 황금빛 시간에 연락드릴게요.",
      );
      setStatus("ok");
      form.reset();
    } catch {
      setMessage("예약 접수에 실패했어요. 잠시 후 다시 시도해 주세요.");
      setStatus("error");
    }
  }

  const busy = status === "submitting";

  return (
    <form
      className="form reveal"
      id="reserve-form"
      noValidate
      onSubmit={onSubmit}
    >
      <div className="input-wrap">
        <label htmlFor="name">이름</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="김오로아"
          autoComplete="name"
          required
          maxLength={80}
          aria-describedby="form-message"
        />
      </div>
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
      <div className="input-wrap">
        <label htmlFor="content">요청사항</label>
        <textarea
          id="content"
          name="content"
          placeholder="받고 싶은 구성이나 문의할 내용을 적어 주세요."
          required
          maxLength={2000}
          rows={3}
          aria-describedby="form-message"
        />
      </div>
      <button className="submit" type="submit" disabled={busy}>
        {busy ? "접수 중" : "사전 예약하기"}
      </button>
      <div
        className={
          status === "idle" || status === "submitting"
            ? "message"
            : `message ${status}`
        }
        id="form-message"
        aria-live="polite"
      >
        {message}
      </div>
      <p className="form-note">이름, 이메일, 요청사항은 사전 예약 안내에만 사용해요.</p>
    </form>
  );
}
