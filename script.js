/* =====================================================
   MyKultum – script.js
   BAGIAN 1: DATA (edit di sini) | BAGIAN 2: LOGIKA DATA | BAGIAN 3: TAMPILAN
   ===================================================== */

/* ---------- BAGIAN 1A: JADWAL & TEMA HARIAN ---------- */
const JADWAL = {
  Senin:  { judul:"Disiplin dan Tanggung Jawab", ikon:"⏰", fokus:"Membentuk siswa yang disiplin, tertib, amanah, dan bertanggung jawab.",
    tema:["Disiplin sebagai Cerminan Keimanan","Pentingnya Menaati Peraturan Sekolah","Tanggung Jawab Seorang Pelajar Muslim","Menghargai Waktu sebagai Amanah","Jangan Membiasakan Menunda Salat","Menjadi Siswa yang Tertib Tanpa Diawasi","Kejujuran dalam Mengerjakan Tugas","Amanah dalam Kehidupan Sehari-hari","Menjaga Komitmen dan Janji","Menghargai Kesempatan Menuntut Ilmu","Disiplin dalam Beribadah","Menjadi Pribadi yang Dapat Dipercaya","Belajar Bertanggung Jawab atas Kesalahan","Memanfaatkan Waktu Muda dengan Baik","Kebiasaan Kecil yang Membentuk Karakter Besar"] },
  Selasa: { judul:"Akhlak dan Adab", ikon:"🤝", fokus:"Membentuk siswa yang santun, menghormati orang lain, dan menjaga perilaku.",
    tema:["Adab kepada Guru dan Orang Tua","Menjaga Lisan dari Perkataan Buruk","Bahaya Ghibah dan Fitnah","Menghargai Teman yang Berbeda Pendapat","Senyum sebagai Bentuk Sedekah","Pentingnya Sopan Santun","Jangan Sombong dengan Kepintaran","Belajar Menjadi Pribadi yang Rendah Hati","Keutamaan Berkata Jujur","Menjaga Sikap di Lingkungan Sekolah","Adab Berteman dalam Islam","Menghindari Perkataan Kasar","Membiasakan Mengucapkan Terima Kasih","Indahnya Saling Memaafkan","Akhlak Mulia sebagai Cerminan Seorang Muslim"] },
  Rabu:   { judul:"Kepedulian dan Persaudaraan", ikon:"💚", fokus:"Membangun kepedulian sosial, persahabatan, dan lingkungan sekolah yang aman.",
    tema:["Jangan Melakukan Perundungan atau Bullying","Menolong Teman yang Sedang Kesulitan","Saling Memaafkan Menguatkan Persahabatan","Menjaga Persaudaraan Sesama Muslim","Bahaya Iri, Dengki, dan Permusuhan","Menghargai Perbedaan","Jangan Mengucilkan Teman","Menjadi Teman yang Membawa Kebaikan","Keutamaan Bersedekah untuk Sesama","Peduli kepada Sesama","Menjaga Kebersihan sebagai Bagian dari Iman","Tidak Menyakiti Orang Lain","Menjenguk dan Mendoakan Orang Sakit","Menghormati Hak Orang Lain","Membangun Lingkungan Sekolah yang Damai"] },
  Kamis:  { judul:"Keimanan dan Ibadah", ikon:"🕌", fokus:"Memperkuat hubungan siswa dengan Allah SWT dan membiasakan ibadah.",
    tema:["Keutamaan Salat Lima Waktu","Mengapa Kita Harus Bersyukur?","Pentingnya Membaca dan Mengamalkan Al-Qur'an","Sedekah Menjaga Harta dan Hati","Memperbanyak Istigfar dan Bertobat","Mengingat Kematian dan Mempersiapkan Amal","Menjaga Niat dalam Menuntut Ilmu","Keutamaan Puasa Senin dan Kamis","Memperbanyak Selawat kepada Nabi Muhammad SAW","Pentingnya Berdoa kepada Allah","Belajar Ikhlas dalam Beramal","Keutamaan Berbakti kepada Orang Tua","Menjaga Salat sebagai Kebutuhan Hidup","Keutamaan Membaca Zikir","Menjadi Remaja yang Dekat dengan Allah"] }
};
const HARI_KULTUM = Object.keys(JADWAL);

/* ---------- BAGIAN 1B: KATEGORI ---------- */
const KATEGORI = ["Akidah dan Keimanan","Al-Qur'an dan Hadis","Ibadah dan Amalan","Akhlak dan Adab","Kisah Nabi dan Sahabat","Remaja Muslim","Pendidikan dan Menuntut Ilmu","Kepedulian Sosial","Kebersihan dan Lingkungan","Motivasi dan Pengembangan Diri"];

/* ---------- BAGIAN 1C: PEMBUKAAN & PENUTUP STANDAR ----------
   Dipakai otomatis jika sebuah naskah tidak punya "pembukaan"/"penutup" sendiri. */
const BUKA = judul => "Assalamu'alaikum warahmatullahi wabarakatuh.\n\nAlhamdulillahi rabbil 'alamin, segala puji bagi Allah SWT yang telah memberikan kita nikmat iman, Islam, kesehatan, dan kesempatan sehingga kita masih dapat melaksanakan salat Zuhur berjamaah serta berkumpul untuk mendengarkan kultum.\n\nSelawat serta salam semoga senantiasa tercurah kepada Nabi Muhammad SAW, keluarga, sahabat, dan seluruh umatnya hingga akhir zaman.\n\nYang saya hormati Bapak/Ibu Guru dan teman-teman yang saya sayangi. Pada kesempatan kali ini, izinkan saya menyampaikan kultum singkat dengan tema: \"" + judul + "\".";
const TUTUP = "Demikian kultum singkat yang dapat saya sampaikan. Semoga apa yang kita dengarkan hari ini menjadi pengingat dan motivasi bagi kita semua untuk menjadi pribadi yang lebih baik.\n\nMohon maaf apabila terdapat kesalahan dalam perkataan maupun penyampaian.\n\nWassalamu'alaikum warahmatullahi wabarakatuh.";

/* BAGIAN 1D: data naskah ada di data.js */
/* Sisipkan paragraf tambahan (tambahan-*.js) setelah paragraf dalil */
if (typeof TAMBAHAN !== "undefined") kultumData.forEach(k => {
  const t = TAMBAHAN[k.id];
  if (t && !k.sudahDitambah) { const p = k.isi.split("\n\n"); p.splice(2, 0, t); k.isi = p.join("\n\n"); k.sudahDitambah = true; }
});
kultumData.forEach(k => { k.durasi = k.durasi || Math.max(2, Math.ceil((BUKA(k.judul) + " " + k.isi + " " + TUTUP).split(/\s+/).length / 130)); });

/* =====================================================
   BAGIAN 2: LOGIKA DATA (tanpa menyentuh tampilan)
   ===================================================== */
const getById = id => kultumData.find(k => k.id === Number(id));
const byHari = h => kultumData.filter(k => k.hari === h);
const byKategori = c => kultumData.filter(k => k.kategori === c);
const naskahUntukTema = (hari, tema) => kultumData.find(k => k.hari === hari && k.judul === tema);
const unggulan = () => kultumData.filter(k => k.unggulan);
const acak = (exceptId) => {
  const pool = kultumData.length > 1 ? kultumData.filter(k => k.id !== exceptId) : kultumData;
  return pool[Math.floor(Math.random() * pool.length)];
};
const wajarDurasi = (k, f) => f === "le3" ? k.durasi <= 3 : f === "4" ? k.durasi === 4 : f === "ge5" ? k.durasi >= 5 : true;

function cari({ q = "", hari = "", kat = "", dur = "", sort = "terbaru" }) {
  const kata = q.trim().toLowerCase();
  const hasil = kultumData.filter(k => {
    const teks = [k.judul, k.ringkasan, k.isi].join(" ").toLowerCase();
    return (!kata || teks.includes(kata)) && (!hari || k.hari === hari) && (!kat || k.kategori === kat) && wajarDurasi(k, dur);
  });
  return sort === "abjad" ? hasil.sort((a, b) => a.judul.localeCompare(b.judul, "id")) : hasil.sort((a, b) => b.id - a.id);
}

/** Susun seluruh naskah menjadi satu teks (untuk salin/bagikan). */
function teksLengkap(k) {
  return [k.judul, "", k.pembukaan || BUKA(k.judul), "", k.isi, "", k.penutup || TUTUP].join("\n");
}

/* =====================================================
   BAGIAN 3: TAMPILAN
   ===================================================== */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const paras = t => t.split("\n\n").map(p => "<p>" + esc(p).replace(/\n/g, "<br>") + "</p>").join("");
const app = $("#app");
let fontSize = 18, current = { view: "dashboard", param: null }, acakId = null;

function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2200); }

function kartu(k) {
  return `<article class="card">
    <div><span class="tag">${k.hari}</span><span class="tag">${esc(k.kategori)}</span><span class="tag muted">⏱ ${k.durasi} menit</span></div>
    <h3>${esc(k.judul)}</h3><p>${esc(k.ringkasan)}</p>
    <div><button class="btn" data-go="baca:${k.id}">Baca Kultum</button></div></article>`;
}
const kosong = () => `<div class="empty"><div>🔍</div><p>Materi kultum tidak ditemukan. Coba gunakan kata kunci lain.</p></div>`;
const daftar = arr => arr.length ? `<div class="grid">${arr.map(kartu).join("")}</div>` : kosong();

/* ----- Dashboard ----- */
function vDashboard() {
  const now = new Date();
  const tgl = now.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const h = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][now.getDay()];
  let hariIni;
  if (JADWAL[h]) {
    const rek = byHari(h)[0];
    hariIni = `<div class="today"><strong>Kultum hari ini (${h}): ${JADWAL[h].judul}</strong><p class="sub" style="margin:4px 0 10px">${JADWAL[h].fokus}</p>
      <div class="row"><button class="btn" data-go="hari:${h}">Lihat Tema ${h}</button>${rek ? `<button class="btn ghost" data-go="baca:${rek.id}">Baca: ${esc(rek.judul)}</button>` : ""}</div></div>`;
  } else if (h === "Jumat") {
    hariIni = `<div class="today"><strong>Hari ini Jumat</strong><p class="sub" style="margin:4px 0 0">Jadwal kultum harian sekolah tidak berlangsung pada hari Jumat.</p></div>`;
  } else {
    hariIni = `<div class="today"><strong>Hari ini ${h}</strong><p class="sub" style="margin:4px 0 0">Kegiatan pembiasaan kultum sekolah tidak berlangsung pada akhir pekan.</p></div>`;
  }
  const totalTema = HARI_KULTUM.reduce((n, x) => n + JADWAL[x].tema.length, 0);
  return `<section class="hero"><h1>Selamat Datang di MyKultum</h1><p>Perpustakaan Digital Materi Kultum Islami</p><span class="date">📅 ${tgl}</span></section>
    <div class="stats">
      <div class="stat"><b>${kultumData.length}</b><span>Naskah kultum</span></div>
      <div class="stat"><b>${KATEGORI.length}</b><span>Kategori</span></div>
      <div class="stat"><b>${totalTema}</b><span>Tema (${HARI_KULTUM.map(x => JADWAL[x].tema.length).join(" + ")} per hari)</span></div>
    </div>
    <h2>Kegiatan Hari Ini</h2>${hariIni}
    <h2>Jadwal Tema Harian</h2>
    <div class="grid">${HARI_KULTUM.map(x => `<div class="card"><h3>${JADWAL[x].ikon} ${x}</h3><p>${JADWAL[x].judul}</p></div>`).join("")}
      <div class="card"><h3>🕋 Jumat</h3><p>Tidak ada jadwal kultum sekolah.</p></div></div>
    <h2>Kultum Unggulan</h2>${daftar(unggulan())}`;
}

/* ----- Tema harian ----- */
function vTema() {
  return `<h1>Tema Harian</h1><p class="sub">Pembagian tema ini adalah pembiasaan karakter di sekolah, bukan sunnah khusus pada hari tertentu.</p>
  <div class="grid">${HARI_KULTUM.map(x => `<div class="card"><h3>${JADWAL[x].ikon} ${x.toUpperCase()}</h3><strong>${JADWAL[x].judul}</strong><p>${JADWAL[x].fokus}</p>
    <div><span class="tag">${JADWAL[x].tema.length} tema</span><span class="tag">${byHari(x).length} naskah siap</span></div>
    <div><button class="btn" data-go="hari:${x}">Lihat Tema</button></div></div>`).join("")}</div>`;
}
function vHari(h) {
  const j = JADWAL[h];
  return `<button class="btn ghost" data-go="tema">← Kembali</button><h1 style="margin-top:14px">${j.ikon} ${h}: ${j.judul}</h1><p class="sub">${j.fokus}</p>
  <ul class="theme-list">${j.tema.map(t => { const n = naskahUntukTema(h, t); return `<li><span>${esc(t)}</span>${n ? `<button class="btn" data-go="baca:${n.id}">Baca</button>` : `<span class="tag muted">Belum ada naskah</span>`}</li>`; }).join("")}</ul>`;
}

/* ----- Bank kultum ----- */
function vBank() {
  const opt = (arr, label) => `<option value="">${label}</option>` + arr.map(x => `<option>${esc(x)}</option>`).join("");
  return `<h1>Bank Kultum</h1><p class="sub">Cari dan saring seluruh naskah kultum.</p>
  <div class="filters">
    <input id="fq" type="search" placeholder="Cari judul atau isi…" aria-label="Cari">
    <select id="fh" aria-label="Hari">${opt(HARI_KULTUM, "Semua hari")}</select>
    <select id="fk" aria-label="Kategori">${opt(KATEGORI, "Semua kategori")}</select>
    <select id="fd" aria-label="Durasi"><option value="">Semua durasi</option><option value="le3">≤ 3 menit</option><option value="4">4 menit</option><option value="ge5">≥ 5 menit</option></select>
    <select id="fs" aria-label="Urutkan"><option value="terbaru">Terbaru</option><option value="abjad">Abjad A–Z</option></select>
    <button class="btn ghost" id="fr">Reset</button>
  </div><div id="hasil"></div>`;
}
function bindBank() {
  const ids = { q: "#fq", hari: "#fh", kat: "#fk", dur: "#fd", sort: "#fs" };
  const update = () => { const f = {}; for (const k in ids) f[k] = $(ids[k]).value; $("#hasil").innerHTML = daftar(cari(f)); };
  Object.values(ids).forEach(s => $(s).addEventListener("input", update));
  $("#fr").addEventListener("click", () => { $("#fq").value = ""; ["#fh", "#fk", "#fd"].forEach(s => $(s).value = ""); $("#fs").value = "terbaru"; update(); });
  update();
}

/* ----- Kategori ----- */
function vKategori(kat) {
  if (kat) return `<button class="btn ghost" data-go="kategori">← Semua kategori</button><h1 style="margin-top:14px">${esc(kat)}</h1><p class="sub">${byKategori(kat).length} materi</p>${daftar(byKategori(kat))}`;
  return `<h1>Kategori</h1><p class="sub">Jelajahi materi berdasarkan topik.</p>
  <div class="grid">${KATEGORI.map(c => `<div class="card"><h3>${esc(c)}</h3><p>${byKategori(c).length} materi</p><div><button class="btn" data-go="kategori:${encodeURIComponent(c)}">Lihat Materi</button></div></div>`).join("")}</div>`;
}

/* ----- Acak ----- */
function vAcak() {
  const k = acak(acakId); acakId = k.id;
  return `<h1>Pilih Kultum Acak</h1><p class="sub">Bingung memilih? Biarkan MyKultum yang memilihkan.</p>
  <div class="card" style="max-width:640px"><div><span class="tag">${k.hari}</span><span class="tag">${esc(k.kategori)}</span><span class="tag muted">⏱ ${k.durasi} menit</span></div>
  <h3 style="font-size:1.3rem">${esc(k.judul)}</h3><p>${esc(k.ringkasan)}</p>
  <div class="row"><button class="btn" data-go="baca:${k.id}">Baca Naskah</button><button class="btn ghost" data-go="acak">🎲 Acak Lagi</button></div></div>`;
}

/* ----- Tentang ----- */
function vTentang() {
  return `<h1>Tentang MyKultum</h1><p class="sub">Media pendukung kegiatan pembiasaan salat Zuhur berjamaah dan kultum siswa.</p>
  <div class="grid">
   <div class="card"><h3>Apa itu MyKultum?</h3><p>Perpustakaan digital naskah kultum (kuliah tujuh menit) yang siap dibacakan siswa, disusun menurut tema harian Senin sampai Kamis.</p></div>
   <div class="card"><h3>Tujuan</h3><p>Memudahkan guru menyiapkan materi, membantu siswa belajar menyampaikan nasihat, dan membentuk karakter religius, disiplin, serta berakhlak baik.</p></div>
   <div class="card"><h3>Manfaat untuk guru</h3><p>Tidak perlu menyusun naskah dari awal. Cukup cari, baca, cetak, atau bagikan.</p></div>
   <div class="card"><h3>Manfaat untuk siswa</h3><p>Naskah berbahasa sederhana, lengkap dengan dalil dan contoh nyata kehidupan pelajar SMP.</p></div>
   <div class="card"><h3>SMP YUPPENTEK 1 Legok</h3><p>Aplikasi ini dikembangkan untuk kegiatan pembiasaan di SMP YUPPENTEK 1 Legok dan dapat terus ditambah isinya.</p></div></div>`;
}

/* ----- Mode baca ----- */
function vBaca(id) {
  const k = getById(id); if (!k) return kosong();
  const urut = [...kultumData].sort((a, b) => a.id - b.id), i = urut.indexOf(k);
  const prev = urut[i - 1], next = urut[i + 1];
  const lain = kultumData.filter(x => x.id !== k.id && (x.hari === k.hari || x.kategori === k.kategori)).slice(0, 3);
  return `<button class="btn ghost no-print" data-go="bank">← Kembali ke daftar</button>
  <article class="reader" style="margin-top:14px">
    <div><span class="tag">${k.hari}</span><span class="tag">${esc(k.kategori)}</span><span class="tag muted">⏱ ${k.durasi} menit</span></div>
    <h1 style="margin-top:8px">${esc(k.judul)}</h1><p class="sub">${esc(k.ringkasan)}</p>
    <div class="tools">
      <button class="btn" data-act="copy">📋 Salin</button><button class="btn" data-act="print">🖨️ Cetak</button><button class="btn" data-act="share">🔗 Bagikan</button>
      <button class="btn ghost" data-act="minus" aria-label="Perkecil teks">A−</button><button class="btn ghost" data-act="plus" aria-label="Perbesar teks">A+</button>
    </div>
    <div class="naskah" id="naskah" style="font-size:${fontSize}px">
      ${paras(k.pembukaan || BUKA(k.judul))}${paras(k.isi)}${paras(k.penutup || TUTUP)}
      <p class="sumber">Rujukan: ${esc(k.sumber)}</p>
    </div>
    <div class="pager no-print">
      ${prev ? `<button class="btn ghost" data-go="baca:${prev.id}">← ${esc(prev.judul)}</button>` : "<span></span>"}
      ${next ? `<button class="btn ghost" data-go="baca:${next.id}">${esc(next.judul)} →</button>` : ""}
    </div>
  </article>
  ${lain.length ? `<div class="no-print"><h2>Materi lainnya</h2>${daftar(lain)}</div>` : ""}`;
}

/* ----- Router ----- */
function render(view, param) {
  current = { view, param };
  const views = { dashboard: vDashboard, tema: vTema, hari: () => vHari(param), bank: vBank, kategori: () => vKategori(param && decodeURIComponent(param)), acak: vAcak, tentang: vTentang, baca: () => vBaca(param) };
  app.innerHTML = (views[view] || vDashboard)();
  if (view === "bank") bindBank();
  const nav = { hari: "tema", baca: "bank" }[view] || view;
  document.querySelectorAll(".sidebar nav button").forEach(b => b.classList.toggle("active", b.dataset.go === nav));
  $("#sidebar").classList.remove("open");
  window.scrollTo(0, 0);
}

async function salin(teks) {
  try { await navigator.clipboard.writeText(teks); }
  catch (e) { const t = document.createElement("textarea"); t.value = teks; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); }
  toast("Naskah berhasil disalin");
}

document.addEventListener("click", async e => {
  const g = e.target.closest("[data-go]");
  if (g) { const [v, ...p] = g.dataset.go.split(":"); return render(v, p.join(":") || null); }
  const a = e.target.closest("[data-act]"); if (!a) return;
  const k = getById(current.param), act = a.dataset.act;
  if (act === "copy") salin(teksLengkap(k));
  if (act === "print") window.print();
  if (act === "plus" || act === "minus") { fontSize = Math.min(28, Math.max(14, fontSize + (act === "plus" ? 2 : -2))); $("#naskah").style.fontSize = fontSize + "px"; }
  if (act === "share") {
    if (navigator.share) { try { await navigator.share({ title: k.judul, text: teksLengkap(k) }); } catch (_) {} }
    else salin(teksLengkap(k));
  }
});
document.addEventListener("click", e => { if (!e.target.closest("#sidebar,#menuBtn")) $("#sidebar").classList.remove("open"); });
$("#menuBtn").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
render("dashboard");
