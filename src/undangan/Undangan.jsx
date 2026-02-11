import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../main.css";

export default function Invitation() {
  const [open, setOpen] = useState(false);

  const guestName = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("to") || "Tamu Undangan";
  }, []);


  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[url('/assets/bg-undangan.png')] bg-fixed bg-cover bg-center text-[#4a2d14] font-[Playfair_Display]">
      {/* ===== GERBANG PEMBUKA ===== */}
      <AnimatePresence>
        {!open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
            {/* Pintu kiri */}
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "-105%" }}
              transition={{ duration: 1.6, ease: [0.77, 0, 0.18, 1] }}
              className="absolute left-0 w-1/2 h-full bg-linear-to-b from-[#6b3a1e] to-[#3f1f0f] border-r-10 border-[#d6b36a]"
            />

            {/* Pintu kanan */}
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "105%" }}
              transition={{ duration: 1.6, ease: [0.77, 0, 0.18, 1] }}
              className="absolute right-0 w-1/2 h-full bg-linear-to-b from-[#6b3a1e] to-[#3f1f0f] border-l-10 border-[#d6b36a]"
            />

            {/* Logo / kunci */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.08, 1] }}
              exit={{ x: -260, opacity: 0, rotate: -15 }}
              transition={{ duration: 1.4 }}
              onClick={() => setOpen(true)}
              className="relative z-50 cursor-pointer"
            >
              <img src="/assets/MFNlogo.png" className="h-38" alt="" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ===== ISI UNDANGAN ===== */}
      <main className="max-w-4xl mx-auto px-6 py-24 ">
        <motion.div
          initial={{ opacity: 0, y: "-30" }}
          animate={open ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="bg-[#fbf3e6] rounded-[36px] border border-[#e2c98b] shadow-[0_40px_90px_rgba(0,0,0,0.25)] px-10 py-16 md:px-20"
        >
          {/* PEMBUKA */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <p className="text-xl text-[#c59a3d] mb-6 font-[Lora]">
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
            <p className="font-[Lora] mb-10">
              Assalamu’alaikum Warahmatullahi Wabarakatuh
            </p>

            <h1 className="text-4xl/[170%] text-center font-dbacks mb-4">MUNFEST 2.0</h1>
            <p className="font-[Lora] text-lg text-[#7a4a25]">
              Pondok Tahfizh Plus IT Abudzar
            </p>

            <div className="w-32 h-0.5 bg-linear-to-r from-transparent via-[#c59a3d] to-transparent mx-auto my-10" />

            <p className="font-[Lora] leading-relaxed max-w-2xl mx-auto">
              Dengan penuh rasa hormat dan ta’zhim, kami segenap panitia
              penyelenggara mengundang <span className="font-semibold text-[#6b3a1e]">
              {guestName}
              </span> untuk berkenan hadir dalam acara tahunan kami yaitu Munfest 2.0.
            </p>
          </motion.section>

          {/* DETAIL ACARA */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl text-center mb-10">Detail Acara</h2>

            <div className="grid gap-6">
              <DetailCard icon="⏰" title="Waktu" value="08.00 WIB – Selesai" />
              <DetailCard icon="📅" title="Tanggal" value="14 (Februari & 2026)" />
              <DetailCard
                icon="📍"
                title="Lokasi"
                value="Pondok Tahfizh Plus IT Abudzar"
              />
            </div>
          </motion.section>

          {/* PERMOHONAN KEHADIRAN */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="text-3xl mb-8">Permohonan Kehadiran</h2>
            <p className="font-[Lora] leading-relaxed max-w-2xl mx-auto">
              Dengan penuh rasa hormat dan ta’zhim, kami segenap panitia
              penyelenggara mengundang <span className="font-semibold text-[#6b3a1e]">
              {guestName}
              </span> untuk berkenan hadir dalam acara tahunan kami yaitu Munfest 2.0.
            </p>

          </motion.section>

          {/* PENUTUP */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-[Lora] mb-10">
              Wassalamu’alaikum Warahmatullahi Wabarakatuh
            </p>
            <p className="font-semibold">Hormat kami,</p>
            <p className="font-semibold mt-1">Panitia MUNFEST 2.0</p>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}

/* ===== COMPONENT CARD DETAIL ===== */
function DetailCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-5 bg-[#f1e3c6] rounded-2xl px-6 py-5 shadow-sm">
      <div className="w-12 h-12 rounded-full bg-[#6b3a1e] text-white flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm font-[Lora] uppercase">{title}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
