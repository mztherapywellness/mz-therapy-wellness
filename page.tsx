"use client";

import { useEffect, useState } from "react";

const wa = "60133599766";
const waLink = (text: string) =>
  `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;

const packages = [
  { no: "01", name: "Urutan Relax", desc: "Urutan 1 jam seluruh badan", price: "RM70" },
  { no: "02", name: "Bekam Lega", desc: "Bekam 10 cup", price: "RM80" },
  { no: "03", name: "Terapi Lengkap", desc: "Bekam 10 cup + urutan", price: "RM139", old: "RM150", promo: true },
  { no: "04", name: "Terapi Lengkap II", desc: "Bekam 15 cup + urutan", price: "RM177", old: "RM190", promo: true },
  { no: "05", name: "Kesihatan Premium", desc: "Bekam 23 cup + urutan 1 badan + urutan kaki", price: "RM229", old: "RM254", promo: true },
];

const faqs = [
  ["Adakah MZ Therapy & Wellness mempunyai kedai?", "Buat masa ini, perkhidmatan dijalankan secara bergerak rumah ke rumah."],
  ["Kawasan mana yang diliputi?", "Cover seluruh Kota Bharu & sekitar."],
  ["Bagaimana cara booking?", "Tekan butang WhatsApp dan hubungi MZ Therapy & Wellness untuk semakan slot."],
  ["Berapa harga bekam?", "Bekam Lega ialah RM80 untuk 10 cup. Pakej lain turut tersedia."],
  ["Boleh pilih pakej melalui WhatsApp?", "Ya. Pelanggan boleh bertanya dan memilih pakej melalui WhatsApp."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            name: "MZ Therapy & Wellness",
            telephone: "+60133599766",
            description: "Perkhidmatan bekam dan urutan bergerak rumah ke rumah.",
            areaServed: "Kota Bharu & sekitar",
            priceRange: "RM70-RM229",
          }),
        }}
      />
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f1e5]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#home" aria-label="MZ Therapy & Wellness">
            <img src="/logo.png" alt="MZ Therapy & Wellness" className="h-14 w-14 rounded-full object-cover" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
            <a href="#servis" className="transition hover:text-[#b88a2b]">Servis</a>
            <a href="#pakej" className="transition hover:text-[#b88a2b]">Pakej</a>
            <a href="#cara-booking" className="transition hover:text-[#b88a2b]">Cara Booking</a>
            <a href="#faq" className="transition hover:text-[#b88a2b]">FAQ</a>
          </nav>
          <a href={waLink("Assalamualaikum, saya berminat untuk booking MZ Therapy & Wellness.")}
             target="_blank"
             className="rounded-full bg-[#0c3b2e] px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#14553f]">
            📲 WhatsApp
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-[#0c3b2e] text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#b88a2b]/40" />
        <div className="pointer-events-none absolute -bottom-48 -left-32 h-[32rem] w-[32rem] rounded-full border border-[#b88a2b]/20" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-[#b88a2b]/60 px-4 py-2 text-xs font-black tracking-[.18em] text-[#e4c77a]">
              HOME SERVICE • KOTA BHARU & SEKITAR
            </p>
            <h1 className="text-4xl font-black leading-[1.08] md:text-6xl">
              Bekam & urutan,
              <span className="block text-[#e4c77a]">terus ke rumah anda.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              MZ Therapy & Wellness menyediakan perkhidmatan bekam dan urutan bergerak rumah ke rumah.
              Anda pilih pakej, hubungi kami melalui WhatsApp, dan semak slot yang tersedia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={waLink("Assalamualaikum, saya nak booking MZ Therapy & Wellness. Boleh semak slot yang tersedia?")}
                 target="_blank"
                 className="rounded-full bg-[#b88a2b] px-7 py-4 text-center font-black shadow-xl transition hover:-translate-y-1 hover:bg-[#a97c22]">
                📲 BOOKING SEKARANG
              </a>
              <a href="#pakej" className="rounded-full border border-white/25 px-7 py-4 text-center font-bold transition hover:bg-white/10">
                Lihat Pakej
              </a>
            </div>
          </div>

          <div className="animate-fade-up-delay">
            <div className="rounded-[2rem] border border-[#b88a2b]/30 bg-white/5 p-5 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[1.5rem] bg-[#f7f1e5] p-7 text-center text-[#0c3b2e]">
                <img src="/logo.png" alt="" className="animate-float-soft mx-auto h-52 w-52 rounded-3xl object-cover shadow-xl" />
                <p className="mt-6 text-sm font-black tracking-[.25em] text-[#b88a2b]">SIHAT ITU ANUGERAH</p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-2xl">🏠</div>
                    <p className="mt-2 text-sm font-black">Rumah ke rumah</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-2xl">📍</div>
                    <p className="mt-2 text-sm font-black">Kota Bharu & sekitar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal border-b border-black/5 bg-white">
        <div className="mx-auto grid max-w-6xl divide-y px-5 py-2 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ["🏠", "HOME SERVICE", "Datang terus ke rumah"],
            ["📍", "KOTA BHARU", "& kawasan sekitar"],
            ["📲", "MUDAH BOOKING", "Terus melalui WhatsApp"],
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex items-center gap-4 px-4 py-5 md:justify-center">
              <span className="text-2xl">{icon}</span>
              <div><p className="text-xs font-black tracking-widest text-[#b88a2b]">{title}</p><p className="mt-1 text-sm text-black/55">{desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="servis" className="reveal mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black tracking-[.2em] text-[#b88a2b]">TENTANG MZ THERAPY & WELLNESS</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Rawatan lebih mudah, terus di rumah.</h2>
            <p className="mt-5 leading-8 text-black/60">
              MZ Therapy & Wellness menyediakan perkhidmatan bekam dan urutan secara bergerak rumah ke rumah.
              Anda tidak perlu keluar mencari premis — pilih pakej yang sesuai dan hubungi kami melalui WhatsApp untuk semakan slot.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {["Bekam", "Urutan", "Home Service"].map((x) => (
                <div key={x} className="rounded-2xl border border-[#0c3b2e]/10 bg-white p-4 text-center text-sm font-black shadow-sm">{x}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#0c3b2e] p-8 text-white shadow-xl">
            <p className="text-sm font-black tracking-widest text-[#e4c77a]">PERKHIDMATAN BERGERAK</p>
            <h3 className="mt-3 text-3xl font-black">Tak perlu keluar rumah.</h3>
            <p className="mt-4 leading-8 text-white/70">Buat masa ini, perkhidmatan dijalankan secara bergerak rumah ke rumah.</p>
            <div className="mt-7 space-y-3">
              {["🏠 Rumah ke rumah", "📍 Kota Bharu & sekitar", "💬 Tempahan melalui WhatsApp"].map((x) =>
                <div key={x} className="rounded-2xl bg-white/10 px-5 py-4 font-bold">{x}</div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="pakej" className="reveal bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-black tracking-[.2em] text-[#b88a2b]">PAKEJ & HARGA</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Pilih pakej anda</h2>
          <p className="mt-4 max-w-2xl leading-7 text-black/60">Pilih pakej yang sesuai dan tekan “Tempah Pakej Ini” untuk terus ke WhatsApp.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <article key={p.no} className={`group relative rounded-3xl border p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${p.promo ? "border-[#b88a2b] bg-[#fffaf0]" : "border-black/10 bg-white"}`}>
                {p.promo && <span className="absolute right-5 top-5 rounded-full bg-[#b88a2b] px-3 py-1 text-xs font-black text-white">PROMO</span>}
                <span className="text-sm font-black text-[#b88a2b]">PAKEJ {p.no}</span>
                <h3 className="mt-3 text-2xl font-black">{p.name}</h3>
                <p className="mt-3 min-h-14 leading-7 text-black/60">{p.desc}</p>
                <div className="mt-6 flex items-end gap-3">
                  <strong className="text-4xl font-black text-[#0c3b2e]">{p.price}</strong>
                  {p.old && <span className="pb-1 text-sm text-black/40 line-through">{p.old}</span>}
                </div>
                <a href={waLink(`Assalamualaikum, saya berminat dengan ${p.name} (${p.price}). Saya nak semak slot booking.`)}
                   target="_blank"
                   className="mt-6 block rounded-2xl bg-[#0c3b2e] px-5 py-3 text-center font-black text-white transition group-hover:bg-[#14553f]">
                  Tempah Pakej Ini
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-booking" className="reveal mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <p className="font-black tracking-[.2em] text-[#b88a2b]">CARA BOOKING</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">3 langkah mudah</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["01", "Pilih pakej", "Pilih rawatan yang anda inginkan."],
            ["02", "WhatsApp kami", "Tekan butang booking dan hantar mesej."],
            ["03", "Tetapkan slot", "Semak masa dan kawasan bersama MZ Therapy & Wellness."],
          ].map(([n,t,d]) => (
            <div key={n} className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1">
              <span className="text-4xl font-black text-[#b88a2b]">{n}</span>
              <h3 className="mt-5 text-xl font-black">{t}</h3>
              <p className="mt-2 leading-7 text-black/60">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal bg-[#0c3b2e] py-20 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["🏠", "Tak perlu keluar", "Rawatan dijalankan di rumah."],
              ["⏱️", "Lebih mudah", "Booking terus melalui WhatsApp."],
              ["📍", "Kawasan Kota Bharu", "Meliputi Kota Bharu & sekitar."],
              ["💬", "Mudah berhubung", "Pertanyaan dan tempahan melalui WhatsApp."],
            ].map(([icon,t,d]) => (
              <div key={t} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-black">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="font-black tracking-[.2em] text-[#b88a2b]">GALERI</p>
            <h2 className="mt-3 text-3xl font-black">Ruang untuk gambar rawatan sebenar</h2>
            <p className="mt-4 leading-7 text-black/60">
              Bahagian ini disediakan untuk gambar rawatan, peralatan atau suasana sesi MZ Therapy & Wellness.
              Buat masa ini kita tidak menggunakan gambar kedai kerana perkhidmatan adalah home service.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Bekam", "Urutan", "Peralatan", "Home Service"].map((x, i) => (
              <div key={x} className={`flex min-h-32 items-end rounded-3xl border border-[#0c3b2e]/10 bg-[#e9e0cf] p-5 ${i === 0 ? "bg-[#dfe8e1]" : ""}`}>
                <span className="rounded-full bg-white/90 px-3 py-2 text-sm font-black">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="font-black tracking-[.2em] text-[#b88a2b]">TESTIMONI</p>
          <h2 className="mt-3 text-3xl font-black">Pengalaman pelanggan</h2>
          <div className="mt-8 rounded-3xl border border-dashed border-[#0c3b2e]/20 bg-[#f7f1e5] p-10">
            <div className="text-2xl">★★★★★</div>
            <p className="mt-4 font-bold text-black/60">Testimoni pelanggan akan dipaparkan di sini.</p>
            <p className="mt-2 text-sm text-black/40">Kita akan masukkan testimoni sebenar apabila anda sudah menyediakannya.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="reveal mx-auto max-w-4xl px-5 py-20">
        <div className="text-center">
          <p className="font-black tracking-[.2em] text-[#b88a2b]">FAQ</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Soalan lazim</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map(([q,a], i) => (
            <div key={q} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-black">
                <span>{q}</span><span className="text-xl text-[#b88a2b]">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <div className="px-6 pb-6 leading-7 text-black/60">{a}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="reveal px-5 pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#0c3b2e] p-8 text-center text-white shadow-2xl md:p-14">
          <p className="font-black tracking-[.2em] text-[#e4c77a]">ANDA DAH PILIH PAKEJ?</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Jom semak slot anda.</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">Hubungi MZ Therapy & Wellness melalui WhatsApp untuk pertanyaan dan tempahan.</p>
          <a href={waLink("Assalamualaikum, saya nak booking MZ Therapy & Wellness.")}
             target="_blank"
             className="mt-8 inline-block rounded-full bg-[#b88a2b] px-8 py-4 font-black shadow-xl transition hover:-translate-y-1">
            📲 BOOKING WHATSAPP
          </a>
          <p className="mt-5 text-sm font-bold text-white/60">013 359 9766</p>
        </div>
      </section>

      <footer className="bg-[#071f18] px-5 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xl font-black">MZ Therapy & Wellness</p>
              <p className="mt-2 text-sm text-white/50">SIHAT ITU ANUGERAH • Home Service</p>
              <p className="mt-1 text-sm text-white/50">Cover seluruh Kota Bharu & sekitar</p>
            </div>
            <a href={waLink("Assalamualaikum, saya nak booking MZ Therapy & Wellness.")}
               target="_blank"
               className="rounded-full bg-[#b88a2b] px-6 py-3 text-center font-black">
              📲 Booking WhatsApp
            </a>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/40">© 2026 MZ Therapy & Wellness</div>
        </div>
      </footer>

      <a href={waLink("Assalamualaikum, saya nak booking MZ Therapy & Wellness.")}
         target="_blank" aria-label="WhatsApp"
         className="fixed bottom-5 right-5 z-50 rounded-full bg-[#0c3b2e] px-5 py-4 font-black text-white shadow-2xl ring-4 ring-white transition hover:-translate-y-1">
        💬 WhatsApp
      </a>
    </main>
  );
}
