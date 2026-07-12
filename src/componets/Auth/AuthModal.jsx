import React, { useState, useRef } from 'react';
import './AuthModal.css';

/* ─── Design tokens ──────────────────────────────────── */
const T = {
  bg:       "#F7F6F3",
  surface:  "#FFFFFF",
  border:   "#E8E6E1",
  muted:    "#A09D96",
  ink:      "#1A1917",
  ink2:     "#4A4844",
  accent:   "#1045dc",
  accentLt: "#EAF1EC",
  accentHv: "#2F5340",
};

/* ─── Icons ──────────────────────────────────────────── */
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);



/* ─── Shared primitives ──────────────────────────────── */
const Field = ({ label, hint, children }) => (
  <div style={{ marginBottom: 18 }}>
    {label && (
      <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: T.ink2, marginBottom: 7 }}>
        {label}
      </label>
    )}
    {children}
    {hint && <p style={{ fontSize: 12, color: T.muted, marginTop: 5 }}>{hint}</p>}
  </div>
);

const baseInput = {
  width: "100%", padding: "11px 14px",
  background: T.surface, border: `1.5px solid ${T.border}`,
  borderRadius: 9, fontFamily: "'DM Sans', sans-serif",
  fontSize: 14.5, color: T.ink, outline: "none",
  transition: "border-color 0.15s, box-shadow 0.15s",
  boxSizing: "border-box",
};

const Input = ({ style, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{
        ...baseInput,
        ...(focused ? { borderColor: T.accent, boxShadow: `0 0 0 3px ${T.accentLt}` } : {}),
        ...style,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

const TextArea = ({ style, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...props}
      style={{
        ...baseInput, resize: "vertical",
        ...(focused ? { borderColor: T.accent, boxShadow: `0 0 0 3px ${T.accentLt}` } : {}),
        ...style,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

const BtnPrimary = ({ children, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: "100%", padding: 13, marginTop: 6,
        background: hov ? T.accentHv : T.accent,
        color: "#fff", border: "none", borderRadius: 10,
        fontFamily: "'DM Sans', sans-serif", fontSize: 15,
        fontWeight: 600, cursor: "pointer",
        transition: "background 0.18s",
      }}
    >
      {children}
    </button>
  );
};

const BtnSocial = ({ icon, children }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: "100%", padding: 11, marginBottom: 10,
        background: T.surface,
        border: `1.5px solid ${hov ? "#c5c2bb" : T.border}`,
        borderRadius: 10, fontFamily: "'DM Sans', sans-serif",
        fontSize: 14, fontWeight: 500, color: T.ink, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        boxShadow: hov ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
        transition: "border-color 0.15s, box-shadow 0.15s",
      }}
    >
      {icon}{children}
    </button>
  );
};

const Divider = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0", color: T.muted, fontSize: 12 }}>
    <div style={{ flex: 1, height: 1, background: T.border }} />
    {children}
    <div style={{ flex: 1, height: 1, background: T.border }} />
  </div>
);

const NavLink = ({ children, onClick }) => (
  <span onClick={onClick} style={{ color: T.accent, fontWeight: 500, cursor: "pointer" }}>
    {children}
  </span>
);

/* ─── Password strength ──────────────────────────────── */
const SEG_COLORS = { 1: "#e74c3c", 2: "#f39c12", 3: "#27ae60", 4: "#1a7a40" };
const STRENGTH_LABELS = { 0: "", 1: "Weak", 2: "Fair", 3: "Good", 4: "Strong" };

function calcStrength(v) {
  let s = 0;
  if (v.length >= 8)           s++;
  if (/[A-Z]/.test(v))         s++;
  if (/[0-9]/.test(v))         s++;
  if (/[^A-Za-z0-9]/.test(v)) s++;
  return s;
}

const StrengthBar = ({ value }) => {
  const score = value.length ? calcStrength(value) : 0;
  return (
    <div>
      <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{
            height: 3, flex: 1, borderRadius: 3,
            background: value.length && i < score ? SEG_COLORS[score] : T.border,
            transition: "background 0.2s",
          }} />
        ))}
      </div>
      <p style={{ fontSize: 11, color: T.muted, marginTop: 4 }}>
        {value.length ? STRENGTH_LABELS[score] : ""}
      </p>
    </div>
  );
};

/* ─── Interest pills ─────────────────────────────────── */
const INTERESTS = [
  "🌿 Sustainability", "🎨 Design", "🎸 Music", "📸 Photography",
  "🌍 Travel", "📖 Books", "🍳 Food", "💻 Tech",
  "🏃 Fitness", "🎮 Gaming", "✍️ Writing", "🎬 Film",
  "🌱 Gardening", "🎭 Theater",
];

const Pill = ({ label, selected, onToggle }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onToggle}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "6px 14px", borderRadius: 100, cursor: "pointer",
        border: `1.5px solid ${selected || hov ? T.accent : T.border}`,
        background: selected ? T.accent : T.surface,
        fontSize: 13, userSelect: "none",
        color: selected ? "#fff" : hov ? T.accent : T.ink2,
        transition: "all 0.15s",
      }}
    >
      {label}
    </div>
  );
};

/* ─── Step progress dots ─────────────────────────────── */
const StepDots = ({ step }) => (
  <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 28 }}>
    {[1, 2, 3].map(n => (
      <div key={n} style={{
        height: 6, borderRadius: n < step ? 3 : "50%",
        width: n < step ? 20 : 6,
        background: n <= step ? T.accent : T.border,
        transition: "all 0.22s",
      }} />
    ))}
  </div>
);

/* ─── Left branding panel ────────────────────────────── */
const LeftPanel = () => (
  <div style={{
    position: "relative",
    background: T.accent,
    display: "flex", flexDirection: "column",
    justifyContent: "space-between",
    padding: "48px 52px", overflow: "hidden",
    minHeight: "100%",
  }}>
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      background: `
        radial-gradient(ellipse 60% 60% at 20% 80%, rgba(255,255,255,0.06) 0%, transparent 70%),
        radial-gradient(ellipse 40% 50% at 80% 10%, rgba(255,255,255,0.04) 0%, transparent 70%)
      `,
    }} />

    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#fff" }}>
      FlashWash
    </div>

    <div style={{ position: "relative", zIndex: 1 }}>
      <h1 style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: "clamp(28px, 3vw, 42px)",
        lineHeight: 1.15, color: "#fff",
        letterSpacing: "-0.5px", marginBottom: 24,
      }}>
        Bringing Peace of Mind,<br />
        <em style={{ fontStyle: "italic", opacity: 0.82 }}>with Every Clean Cloth.</em>
      </h1>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.68)", maxWidth: 320 }}>
        Gather connects you with communities around the things that actually matter to you — not the algorithm's idea of what should.
      </p>
      <div style={{ display: "flex", alignItems: "center", marginTop: 48 }}>
        {["🌿", "🎨", "🎸", "📸", "🌍"].map((em, i) => (
          <div key={i} style={{
            width: 40, height: 40, borderRadius: "50%",
            border: "2.5px solid rgba(255,255,255,0.35)",
            marginRight: -10, fontSize: 17,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(255,255,255,0.12)",
          }}>
            {em}
          </div>
        ))}
        <p style={{ marginLeft: 20, fontSize: 13, color: "rgba(255,255,255,0.62)" }}>
          <strong style={{ color: "#fff" }}>12,400+</strong> members and growing
        </p>
      </div>
    </div>

    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.38)" }}>
      © 2026 Gather · Privacy · Terms
    </p>
  </div>
);

/* ─── Login view ─────────────────────────────────────── */
const LoginView = ({ onSwitch }) => (
  <div>
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, color: T.ink, marginBottom: 6 }}>
        Welcome back
      </h2>
      <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.5 }}>Log in to pick up where you left off.</p>
    </div>

    <BtnSocial icon={<GoogleIcon />}>Continue with Google</BtnSocial>

    <Divider>or log in with email</Divider>

    <Field label="Email">
      <Input type="email" placeholder="you@example.com" />
    </Field>
    <Field label="Password">
      <Input type="password" placeholder="••••••••" />
    </Field>

    <div style={{ textAlign: "right", marginTop: -10, marginBottom: 16 }}>
      <span style={{ fontSize: 12.5, color: T.muted, cursor: "pointer" }}>Forgot password?</span>
    </div>

    <BtnPrimary>Log in</BtnPrimary>

    <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: T.muted }}>
      New here? <NavLink onClick={() => onSwitch("signup")}>Create an account</NavLink>
    </p>
  </div>
);

/* ─── Sign up view ───────────────────────────────────── */
const SignUpView = ({ onSwitch, onToProfile }) => {
  const [password, setPassword] = useState("");
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, color: T.ink, marginBottom: 6 }}>
          Create an account
        </h2>
        <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.5 }}>Get started — it only takes a minute.</p>
      </div>

      <BtnSocial icon={<GoogleIcon />}>Sign up with Google</BtnSocial>

      <Divider>or use email</Divider>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }}>
        <Field label="First name"><Input type="text" placeholder="Alex" /></Field>
        <Field label="Last name"><Input type="text" placeholder="Rivera" /></Field>
      </div>

      <Field label="Email">
        <Input type="email" placeholder="you@example.com" />
      </Field>

      <Field label="Password">
        <Input
          type="password" placeholder="••••••••"
          value={password} onChange={e => setPassword(e.target.value)}
        />
        <StrengthBar value={password} />
      </Field>

      <BtnPrimary onClick={onToProfile}>Create account</BtnPrimary>

      <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: T.muted }}>
        Already have an account? <NavLink onClick={() => onSwitch("login")}>Log in</NavLink>
      </p>
    </div>
  );
};

/* ─── Profile step 1: basic info ────────────────────── */
const ProfileStep1 = ({ onNext }) => {
  const [avatar, setAvatar] = useState(null);
  const fileRef = useRef();

  const handleFile = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setAvatar(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, color: T.ink, marginBottom: 6 }}>
          Set up your profile
        </h2>
        <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.5 }}>Tell the community a little about yourself.</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
        <div
          onClick={() => fileRef.current.click()}
          style={{
            width: 64, height: 64, borderRadius: "50%",
            background: T.accentLt, border: `2px dashed ${T.accent}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, color: T.accent, cursor: "pointer",
            overflow: "hidden", flexShrink: 0,
          }}
        >
          {avatar
            ? <img src={avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : "＋"}
        </div>
        <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleFile} />
        <div>
          <p style={{ fontSize: 13, color: T.ink2, fontWeight: 500, marginBottom: 3 }}>Upload a photo</p>
          <span style={{ fontSize: 12, color: T.muted }}>JPG, PNG or GIF · max 5 MB</span>
        </div>
      </div>

      <Field label="Username" hint="gather.community/@yourhandle">
        <Input type="text" placeholder="@yourhandle" />
      </Field>

      <Field label="Bio" hint="Keep it short — you can always add more later.">
        <TextArea rows={3} placeholder="What are you into? What are you building?" />
      </Field>

      <BtnPrimary onClick={onNext}>Continue →</BtnPrimary>
    </div>
  );
};

/* ─── Profile step 2: interests ─────────────────────── */
const ProfileStep2 = ({ onNext, onBack }) => {
  const [selected, setSelected] = useState(new Set());

  const toggle = label => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, color: T.ink, marginBottom: 6 }}>
          What are you into?
        </h2>
        <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.5 }}>
          Pick a few topics — we'll match you with the right communities.
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
        {INTERESTS.map(label => (
          <Pill key={label} label={label} selected={selected.has(label)} onToggle={() => toggle(label)} />
        ))}
      </div>

      <BtnPrimary onClick={onNext}>Finish profile →</BtnPrimary>
      <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: T.muted }}>
        <NavLink onClick={onBack}>← Back</NavLink>
      </p>
    </div>
  );
};

/* ─── Profile step 3: success ────────────────────────── */
const ProfileStep3 = ({ onClose }) => (
  <div style={{ textAlign: "center", padding: "24px 0" }}>
    <div style={{
      width: 60, height: 60, borderRadius: "50%",
      background: T.accentLt, margin: "0 auto 20px",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 26,
    }}>
      🎉
    </div>
    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, color: T.ink, marginBottom: 8 }}>
      You're all set!
    </h2>
    <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.6, marginBottom: 28 }}>
      Your profile is live. Time to find your people and start exploring communities.
    </p>
    <BtnPrimary onClick={onClose}>Explore Gather →</BtnPrimary>
  </div>
);

/* ─── Profile view (multi-step) ──────────────────────── */
const ProfileView = ({ onClose }) => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <StepDots step={step} />
      {step === 1 && <ProfileStep1 onNext={() => setStep(2)} />}
      {step === 2 && <ProfileStep2 onNext={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && <ProfileStep3 onClose={onClose} />}
    </div>
  );
};

/* ─── Tab bar ────────────────────────────────────────── */
const TABS = [
  { id: "login",   label: "Log in" },
  { id: "signup",  label: "Sign up" },
  { id: "profile", label: "Create profile" },
];

const TabBar = ({ active, onChange }) => (
  <div style={{
    display: "flex", background: T.border,
    borderRadius: 10, padding: 4, marginBottom: 36, gap: 2,
  }}>
    {TABS.map(t => (
      <button
        key={t.id}
        onClick={() => onChange(t.id)}
        style={{
          flex: 1, padding: "9px 0", border: "none",
          background: active === t.id ? T.surface : "transparent",
          borderRadius: 7, fontFamily: "'DM Sans', sans-serif",
          fontSize: 13.5, fontWeight: 500,
          color: active === t.id ? T.ink : T.muted,
          cursor: "pointer",
          boxShadow: active === t.id ? "0 1px 6px rgba(0,0,0,0.08)" : "none",
          transition: "all 0.18s",
        }}
      >
        {t.label}
      </button>
    ))}
  </div>
);

/* ─── AuthModal (main export) ────────────────────────── */
const AuthModal = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState("login");

  // Lock body scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="auth-overlay">

      {/* Close button */}
      <button className="auth-close-btn" onClick={onClose} aria-label="Close">
        ✕
      </button>

      {/* Full-screen split layout */}
      <div className="auth-grid">

        {/* Left branding panel */}
        <div className="auth-left-panel">
          <LeftPanel />
        </div>

        {/* Right form panel */}
        <div className="auth-right-panel">
          <div className="auth-card">
            <TabBar active={tab} onChange={setTab} />

            <div key={tab} className="auth-view-enter">
              {tab === "login"   && <LoginView onSwitch={setTab} />}
              {tab === "signup"  && <SignUpView onSwitch={setTab} onToProfile={() => setTab("profile")} />}
              {tab === "profile" && <ProfileView onClose={onClose} />}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthModal;
