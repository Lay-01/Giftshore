import { useState } from 'react'
import './admin-login.css'

function AuthIcon({ name }) {
  const paths = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    eye: <><path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5Z" /><circle cx="12" cy="12" r="2" /></>,
    arrow: <><path d="M4 12h15M13 6l6 6-6 6" /></>,
  }
  return <svg className="auth-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Artwork() {
  return <div className="login-art" aria-hidden="true">
    <span className="art-blob art-blob--top" /><span className="art-blob art-blob--bottom" />
    <svg className="art-illustration" viewBox="0 0 620 760" fill="none">
      <path d="M82 650c12-137 16-236 4-329M86 487c-32-45-48-75-46-119M88 421c31-32 48-64 49-99M87 541c-25-24-42-52-49-83M87 581c29-25 44-49 53-77" stroke="#b79a72" strokeWidth="2" opacity=".45" />
      <g fill="#c4a67a" opacity=".5"><circle cx="40" cy="366" r="7"/><circle cx="47" cy="381" r="5"/><circle cx="134" cy="318" r="6"/><circle cx="129" cy="335" r="4"/><circle cx="38" cy="449" r="6"/><circle cx="51" cy="458" r="4"/><circle cx="135" cy="464" r="6"/><circle cx="128" cy="477" r="4"/><circle cx="52" cy="531" r="6"/><circle cx="64" cy="541" r="4"/></g>
      <path d="M352 584h142l-10 105H365l-13-105Z" fill="#ded0bb" opacity=".7"/><path d="M352 584h142l-71 38-71-38Z" fill="#eee5d8" opacity=".8"/><path d="M423 620v69M402 612c10 14 16 20 21 20s11-6 21-20" stroke="#b4966d" strokeWidth="3" opacity=".65"/>
      <path d="M287 645h85l-8 63h-70l-7-63Z" fill="#cdbba3" opacity=".72"/><path d="m287 645 42 24 43-24" stroke="#b4966d" strokeWidth="2" opacity=".65"/><path d="M329 669v39M316 660c7 9 10 13 13 13s7-4 13-13" stroke="#b4966d" strokeWidth="2" opacity=".65"/>
      <path d="M505 530c-4-34 0-69 21-99M525 431c24-18 37-36 40-58M525 464c-22-14-36-29-41-49" stroke="#b79a72" strokeWidth="2" opacity=".28"/><path d="M475 530h95l-12 116c-2 17-70 17-72 0l-11-116Z" fill="#c9b69e" opacity=".42"/><path d="M475 530c18 13 77 13 95 0" stroke="#b1936b" strokeWidth="2" opacity=".45"/>
    </svg>
    <div className="login-brand"><span className="brand-flourish">✦</span><strong>GIFTSHORE</strong><small>MADE TO DELIGHT</small><span className="brand-rule"><i />◆<i /></span><h1>Welcome to Admin Portal</h1><p>Sign in to manage your website content</p></div>
  </div>
}

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)

  function handleSubmit(event) {
    event.preventDefault()
    window.location.assign('/dashboard')
  }

  return (
    <main className="admin-login-page">
      <a href="/" className="back-to-site-button">
        ← Back to Main Site
      </a>
      <section className="login-card">
        <Artwork />
        <div className="login-form-panel">
          <div className="login-form-content">
            <div className="login-mobile-brand"><span>✦</span> GIFTSHORE</div>
            <div className="login-heading">
              <p className="login-eyebrow">ADMINISTRATION</p>
              <h2>Sign in to your account</h2>
              <p>Enter your credentials to continue</p>
            </div>
            <form className="auth-form" onSubmit={handleSubmit}>
              <label>
                Email address
                <div className="field-wrap">
                  <AuthIcon name="mail" />
                  <input type="email" placeholder="you@giftshore.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
              </label>
              <label>
                Password
                <div className="field-wrap">
                  <AuthIcon name="lock" />
                  <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                  <button className="field-action" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}>
                    <AuthIcon name="eye" />
                  </button>
                </div>
              </label>
              <div className="form-options">
                <label className="remember-option">
                  <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} />
                  <span />
                  Remember me
                </label>
                <a href="#forgot">Forgot Password?</a>
              </div>
              <button className="signin-button" type="submit">
                Sign In <AuthIcon name="arrow" />
              </button>
            </form>
            <div className="back-site-wrap">
              <a href="/" className="back-site-link">← Return to Public Website</a>
            </div>
            <div className="or-divider"><span>or</span></div>
            <p className="copyright">© GIFTSHORE {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </section>
    </main>
  )
}