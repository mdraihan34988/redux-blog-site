import React from 'react'

function Footer() {
  return (
    <section className="pt-6">
        <div
            className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400"
        >
            <div>Copyright 2022.</div>
            <div>
                <a
                    href="https://mdraihan.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                >
                    Md. Raihanul Islam
                </a>
            </div>
        </div>
    </section>
  )
}

export default Footer